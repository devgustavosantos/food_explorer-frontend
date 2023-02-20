import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Carousel } from '../../components/Carousel';
import { SectionMeals } from '../../components/SectionMeals';
import { useAuth } from '../../hooks/auth';
import { useMeals } from '../../hooks/meals';
import { useRequest } from '../../hooks/request';

export function useHome() {
  const { setMealsInDB, organizedMeals, setOrganizedMeals } = useMeals();
  const [categories, setCategories] = useState();

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const userSearch = searchParams.get('search');

  const { manageRequests } = useRequest();
  const { userInfos } = useAuth();

  function renderCardsDesktop() {
    if (!organizedMeals || !categories) return null;

    return categories.map(category => {
      const mealsFiltered = organizedMeals.filter(
        meal => meal.category == category
      );

      return (
        <Carousel
          title={category}
          meals={mealsFiltered}
          key={String(category)}
        />
      );
    });
  }

  function renderCardsMobile() {
    if (!organizedMeals || !categories) return null;

    return categories.map(category => {
      const mealsFiltered = organizedMeals.filter(
        meal => meal.category == category
      );

      return (
        <SectionMeals
          title={category}
          meals={mealsFiltered}
          key={String(category)}
        />
      );
    });
  }

  function ensureTheMealHasACategory(meals) {
    if (!meals) return;

    const mealsWithCategory = meals.map(meal => ({
      ...meal,
      category: meal.category == null ? 'Sem categoria' : meal.category,
    }));

    return mealsWithCategory;
  }

  async function fetchFavorites() {
    const favoritesResponse = await manageRequests('get', '/favorites');

    return favoritesResponse.data;
  }

  function checkIfThisMealIsAFavorite(favorites, meal) {
    const isAFavorite = favorites.find(favorite => favorite.id === meal.id);

    return isAFavorite ? true : false;
  }

  async function tagFavoriteMeals(meals) {
    if (!userInfos) return meals;

    const favorites = (await fetchFavorites()) || [];

    const mealsWithFavorites = meals.map(meal => {
      return { ...meal, favorite: checkIfThisMealIsAFavorite(favorites, meal) };
    });

    return mealsWithFavorites;
  }

  async function fetchMeals() {
    return await manageRequests('get', '/meals');
  }

  function validateIfTheResponseWasSuccessful(response) {
    const wasThereSomeError = !Array.isArray(response.data);

    if (wasThereSomeError) {
      return navigate('/off-air');
    }

    return response.data;
  }

  function formatCategories() {
    if (!organizedMeals) return;

    const onlyCategories = organizedMeals.map(meal => {
      return meal.category;
    });

    const categoriesUnique = [...new Set(onlyCategories)];

    const categoriesOrdered = categoriesUnique.sort();

    const someUncategorized = categoriesOrdered.find(
      category => category == 'Sem categoria'
    );

    const categoriesFiltered =
      someUncategorized &&
      categoriesUnique.filter(category => category !== 'Sem categoria');

    const categoriesFormatted = someUncategorized
      ? [...categoriesFiltered, 'Sem categoria']
      : categoriesUnique;

    setCategories(categoriesFormatted);
  }

  function filterMeals(meals) {
    if (userSearch) {
      return meals.filter(meal =>
        meal.title.toLowerCase().includes(userSearch.toLowerCase())
      );
    }

    return meals;
  }

  useEffect(() => {
    formatCategories();
  }, [organizedMeals]);

  useEffect(() => {
    async function loadMeals() {
      const mealsResponse = await fetchMeals();
      const verifiedMeals = validateIfTheResponseWasSuccessful(mealsResponse);
      setMealsInDB(verifiedMeals);

      const mealsFiltered = filterMeals(verifiedMeals);
      const mealsWithCategory = ensureTheMealHasACategory(mealsFiltered);
      const mealWithFavorites = await tagFavoriteMeals(mealsWithCategory);
      setOrganizedMeals(mealWithFavorites);
    }

    loadMeals();
  }, []);

  return { organizedMeals, categories, renderCardsMobile, renderCardsDesktop };
}
