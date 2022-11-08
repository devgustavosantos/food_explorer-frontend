import { useState } from "react";
import { FiHeart } from "react-icons/fi";

import { Container } from "./styles";
import { ClientButtons } from "../ClientButtons";
import { AdmButtons } from "../AdmButtons";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export function Card({ meal_id, title, description, price, image }) {
  const [isAdm, setIsAdm] = useState(false);

  const { userInfos } = useAuth();

  const navigate = useNavigate();

  function renderButtons() {
    if (!userInfos || !userInfos.isAdm) {
      return <ClientButtons />;
    } else {
      return <AdmButtons />;
    }
  }

  function renderButtonFav() {
    if (!userInfos || !userInfos.isAdm) {
      return (
        <button type="button" onClick={handleAddToFavorite}>
          <FiHeart />
        </button>
      );
    }
  }

  function handleAddToFavorite() {
    if (!userInfos) {
      const response = confirm(`
        Para utilizar esse recurso você precisa estar logado.
        Deseja se logar agora?
      `);

      if (response) {
        navigate("/login");
      }
    }
  }

  function handleGoToDetails() {
    navigate(`/details/${meal_id}`);
  }

  return (
    <Container className="my-card">
      {renderButtonFav()}
      <img
        src={`https://images.pexels.com/${image}`}
        alt={`Foto do prato ${title}`}
        onClick={handleGoToDetails}
      />
      <h2 onClick={handleGoToDetails}>{`${title} >`}</h2>
      <p>{description}</p>
      <p>R$ {price}</p>
      {renderButtons()}
    </Container>
  );
}
