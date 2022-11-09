import { useState } from "react";

import { Container, Desktop, Mobile } from "./styles";
import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { SectionMeals } from "../../components/SectionMeals";
import { Footer } from "../../components/Footer";
import { Carousel } from "../../components/Carousel";
import Food from "../../assets/food.png";
import { api } from "../../services/api";
import { useEffect } from "react";

export function Home() {
  const [meals, setMeals] = useState();

  console.log({ meals });

  const [categories, setCategories] = useState();

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
      try {
        const response = await api.get("/meals");

        const mealsFormatted = formatMeals(response.data);
        setMeals(mealsFormatted);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível carregar os pratos.");
          console.log(error);
        }
      }
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
    </Container>
  );
}
