import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Food from "../../assets/food.png";
import { Container, Desktop, Mobile } from "./styles";
import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { SectionMeals } from "../../components/SectionMeals";
import { Footer } from "../../components/Footer";
import { Carousel } from "../../components/Carousel";
import { Loading } from "../../components/Loading";
import { useRequest } from "../../hooks/request";
import { useAuth } from "../../hooks/auth";

export function Home() {
  const [meals, setMeals] = useState();
  const [categories, setCategories] = useState();

  const navigate = useNavigate();

  const { manageRequests } = useRequest();

  const { userInfos } = useAuth();

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

  function formatMeals({ meals, favorites }) {
    if (!meals || !favorites) return;

    const mealsWithCategory = meals.map(meal => {
      return {
        ...meal,
        category: meal.category == null ? "Sem categoria" : meal.category,
      };
    });

    const mealsWithFavorites = mealsWithCategory.map(meal => {
      const isThisMealInFavorites = favorites.find(
        favorite => meal.id === favorite.id
      );

      return {
        ...meal,
        favorite: isThisMealInFavorites ? true : false,
      };
    });

    return mealsWithFavorites;
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
        category => category == "Sem categoria"
      );

      const categoriesFiltered =
        someUncategorized &&
        categoriesUnique.filter(category => category !== "Sem categoria");

      const categoriesFormatted = someUncategorized
        ? [...categoriesFiltered, "Sem categoria"]
        : categoriesUnique;

      setCategories(categoriesFormatted);
    }

    formatCategories();
  }, [meals]);

  useEffect(() => {
    async function fetchMeals() {
      const mealsResponse = await manageRequests("get", "/meals");

      if (mealsResponse instanceof Error) {
        return navigate("/off-air");
      }

      let favoritesResponse;

      if (userInfos) {
        favoritesResponse = await manageRequests("get", "/favorites");
      } else {
        favoritesResponse = [];
      }

      const allOfRequestsWasSuccessful =
        Array.isArray(mealsResponse.data) &&
        Array.isArray(favoritesResponse.data);

      if (allOfRequestsWasSuccessful) {
        const mealsFormatted = formatMeals({
          meals: mealsResponse.data,
          favorites: favoritesResponse.data,
        });
        setMeals(mealsFormatted);
      }
    }

    fetchMeals();
  }, []);

  return (
    <Container>
      <Header />
      {meals ? (
        <Wrapper>
          <Mobile>
            <div className="top-mobile">
              <img src={Food} alt="Imagem de comida" />
              <h1>Sabores inigualáveis</h1>
              <h3>Sinta o cuidado do preparo com ingredientes selecionados</h3>
            </div>
            {renderCardsMobile()}
          </Mobile>
          <Desktop>
            <div className="top-desktop">
              <img src={Food} alt="Imagem de comida" />
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
