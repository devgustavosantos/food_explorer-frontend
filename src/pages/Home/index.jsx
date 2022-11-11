import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Desktop, Mobile } from "./styles";
import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { SectionMeals } from "../../components/SectionMeals";
import { Footer } from "../../components/Footer";
import { Carousel } from "../../components/Carousel";
import { Loading } from "../../components/Loading";
import Food from "../../assets/food.png";
import { api } from "../../services/api";
import { useRequest } from "../../hooks/request";

export function Home() {
  const [meals, setMeals] = useState();

  const [categories, setCategories] = useState();

  const navigate = useNavigate();

  const { manageRequests } = useRequest();

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

  function formatMeals(meals) {
    const mealsFormatted = meals.map(meal => {
      return {
        ...meal,
        category: meal.category == null ? "Sem categoria" : meal.category,
      };
    });

    return mealsFormatted;
  }

  useEffect(() => {
    function formatCategories() {
      if (!meals) return;

      const onlyCategories = meals.map(meal => {
        return meal.category;
      });

      const categoriesUnique = [...new Set(onlyCategories)];

      const categoriesFiltered = categoriesUnique.filter(
        category => category !== "Sem categoria"
      );

      const categoriesOrdered = categoriesFiltered.sort();

      const categoriesFormatted = [...categoriesOrdered, "Sem categoria"];

      setCategories(categoriesFormatted);
    }

    formatCategories();
  }, [meals]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await manageRequests("get", "/meals");

      console.log({ response });

      if (response instanceof Error) {
        return navigate("/off-air");
      }

      const mealsFormatted = formatMeals(response);
      setMeals(mealsFormatted);
    }

    fetchMeals();
  }, []);

  return (
    <Container>
      <Header />
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
      <Footer />
      {!meals && <Loading />}
    </Container>
  );
}
