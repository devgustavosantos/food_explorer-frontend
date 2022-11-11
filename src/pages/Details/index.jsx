import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import { Container, Content } from "./styles";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { ButtonText } from "../../components/ButtonText";
import { Ingredient } from "../../components/Ingredient";
import { Loading } from "../../components/Loading";
import { AdmButtons } from "../../components/AdmButtons";
import { ClientButtons } from "../../components/ClientButtons";
import { useRequest } from "../../hooks/request";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

const ingredientImage =
  "https://www.foodbusinessnews.net/ext/resources/TopicLandingPages/Product-Development-Ingredient-Applications.jpg?1519144948";

export function Details() {
  const { userInfos } = useAuth();

  const [mealInfos, setMealInfos] = useState();

  const { manageRequests } = useRequest();

  const { id } = useParams();
  const navigate = useNavigate();

  const [ingredients, setINgredients] = useState([
    {
      id: 2,
      name: "sal",
      image: ingredientImage,
    },
    {
      id: 3,
      name: "açucar",
      image: ingredientImage,
    },
    {
      id: 1,
      name: "Farinha",
      image: ingredientImage,
    },
    {
      id: 10,
      name: "Farinha",
      image: ingredientImage,
    },
    {
      id: 15,
      name: "Farinha",
      image: ingredientImage,
    },
  ]);

  console.log({ mealInfos });

  function renderIngredients() {
    return mealInfos.ingredients.map(ingredient => {
      const { id, name, image } = ingredient;

      return <Ingredient image={image} name={name} key={String(id)} />;
    });
  }

  function renderManipulationButtons() {
    if (!userInfos || !userInfos.isAdm) {
      const { meal_id, title, price, image } = mealInfos;

      return (
        <ClientButtons
          meal_id={meal_id}
          title={title}
          price={price}
          image={image}
        />
      );
    } else {
      return <AdmButtons meal_id={meal_id} />;
    }
  }

  useEffect(() => {
    async function fetchMealInfos() {
      const response = await manageRequests("get", `/meals/${id}`);

      if (response instanceof Error) {
        return navigate("/off-air");
      }

      setMealInfos(response);
    }

    fetchMealInfos();
  }, []);

  return (
    <Container>
      <Header />
      <Wrapper>
        {mealInfos ? (
          <Content>
            <ButtonText title="voltar" icon={IoIosArrowBack} to="/" />
            <img
              src={`${api.defaults.baseURL}/files/meals/${mealInfos.image}`}
              alt={`Foto do item ${mealInfos.title}`}
            />
            <h1>{mealInfos.title}</h1>
            <p>{mealInfos.description}</p>
            <div className="ingredients">
              {mealInfos.ingredients && renderIngredients()}
            </div>
            <p className="price">
              R$ <span>{mealInfos.price}</span>
            </p>
            <div className="buttons">{renderManipulationButtons()}</div>
          </Content>
        ) : (
          <Loading />
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
}
