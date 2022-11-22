import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

import { Container } from "./styles";
import { ClientButtons } from "../ClientButtons";
import { AdmButtons } from "../AdmButtons";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useRequest } from "../../hooks/request";

export function Card({ meal_id, title, description, price, image, isFav }) {
  const [isAdm, setIsAdm] = useState(false);
  const [favoriteMeal, setFavoriteMeal] = useState(isFav);

  const { userInfos } = useAuth();

  const navigate = useNavigate();

  const { manageRequests } = useRequest();

  function renderManipulationButtons() {
    if (!userInfos || !userInfos.isAdm) {
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

  function renderButtonFav() {
    if (!userInfos || !userInfos.isAdm) {
      return (
        <button type="button" onClick={handleAddToFavorite}>
          {favoriteMeal ? <FaHeart /> : <FiHeart />}
        </button>
      );
    }
  }

  async function handleAddToFavorite() {
    if (!userInfos) {
      const response = confirm(`
        Para utilizar esse recurso você precisa estar logado.
        Deseja se logar agora?
      `);

      if (response) {
        navigate("/login");
      }

      return;
    }

    setFavoriteMeal(prevState => !prevState);

    let response;

    if (favoriteMeal) {
      response = await manageRequests("delete", `/favorites/${meal_id}`);
    } else {
      response = await manageRequests("post", `/favorites/${meal_id}`);
    }

    console.log({ response });
  }

  function handleGoToDetails() {
    navigate(`/details/${meal_id}`);
  }

  return (
    <Container className="my-card">
      {renderButtonFav()}
      <img
        src={`${api.defaults.baseURL}/files/meals/${image}`}
        alt={`Foto do prato ${title}`}
        onClick={handleGoToDetails}
      />
      <h2 onClick={handleGoToDetails}>{`${title} >`}</h2>
      <p>{description}</p>
      <p>R$ {price}</p>
      {renderManipulationButtons()}
    </Container>
  );
}
