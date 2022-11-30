import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Food from '../../assets/food.png';
import { Carousel } from '../../components/Carousel';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { SectionMeals } from '../../components/SectionMeals';
import { Wrapper } from '../../components/Wrapper';
import { useAuth } from '../../hooks/auth';
import { useRequest } from '../../hooks/request';
import { useSearch } from '../../hooks/search';
import { Container, Desktop, Mobile } from './styles';

export function Home() {
  const [meals, setMeals] = useState();
  const [categories, setCategories] = useState();

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const title = searchParams.get('title');

  const { manageRequests } = useRequest();
  const { userInfos } = useAuth();
  const { search, setSearch } = useSearch();

  function renderCardsDesktop() {
    if (!meals || !categories) return null;

    return categories.map(category => {
      const mealsFiltered = meals.filter(meal => meal.category == category);

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
    if (!meals || !categories) return null;

    return categories.map(category => {
      const mealsFiltered = meals.filter(meal => meal.category == category);

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
    const mealsResponse = await manageRequests('get', `/meals?title=${search}`);

    return mealsResponse;
  }

  function validateIfTheResponseWasSuccessful(response) {
    const wasThereSomeError = !Array.isArray(response.data);

    if (wasThereSomeError) {
      return navigate('/off-air');
    }

    return response.data;
  }

  useEffect(() => {
    function formatCategories() {
      if (!meals) return;

      const onlyCategories = meals.map(meal => {
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

    formatCategories();
  }, [meals]);

  useEffect(() => {
    async function loadMeals() {
      const mealsResponse = await fetchMeals();

      const verifiedMeals = validateIfTheResponseWasSuccessful(mealsResponse);

      const mealsWithCategory = ensureTheMealHasACategory(verifiedMeals);
      const mealWithFavorites = await tagFavoriteMeals(mealsWithCategory);

      setMeals(mealWithFavorites);
    }

    loadMeals();
  }, [search]);

  useEffect(() => {
    function loadTheSearch() {
      if (title || title === '') {
        setSearch(title);
      }
    }

    loadTheSearch();
  }, []);

  return (
    <Container>
      <Header />
      {meals ? (
        <Wrapper>
          <Mobile>
            <div className="top-mobile">
              <img
                src={Food}
                alt="Imagem de comida"
              />
              <h1>Sabores inigualáveis</h1>
              <h3>Sinta o cuidado do preparo com ingredientes selecionados</h3>
            </div>
            {renderCardsMobile()}
          </Mobile>
          <Desktop>
            <div className="top-desktop">
              <img
                src={Food}
                alt="Imagem de comida"
              />
              <h1>Sabores inigualáveis</h1>
              <h3>Sinta o cuidado do preparo com ingredientes selecionados</h3>
            </div>
            {renderCardsDesktop()}
          </Desktop>
        </Wrapper>
      ) : (
        <Loading />
      )}
      <Footer />
    </Container>
  );
}
