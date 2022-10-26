import { useState } from "react";

import { IoIosArrowBack } from "react-icons/io";

import { Container, Content } from "./styles";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { ButtonText } from "../../components/ButtonText";
import { Ingredient } from "../../components/Ingredient";
import { Button } from "../../components/Button";
import { AdmButtons } from "../../components/AdmButtons";
import { ClientButtons } from "../../components/ClientButtons";

const ingredientImage =
  "https://www.foodbusinessnews.net/ext/resources/TopicLandingPages/Product-Development-Ingredient-Applications.jpg?1519144948";

export function Details() {
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

  const [adm, setAdm] = useState(false);

  return (
    <Container>
      <Header />
      <Wrapper>
        <Content>
          <ButtonText title="voltar" icon={IoIosArrowBack} />
          <img
            src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6354dfed1f4727b5f0191ef0_production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpeg"
            alt="Foto do Prato"
          />
          <h1>Nome do prato</h1>
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </p>
          <div className="ingredients">
            {ingredients &&
              ingredients.map(ingredient => (
                <Ingredient
                  image={ingredient.image}
                  name={ingredient.name}
                  key={String(ingredient.id)}
                />
              ))}
          </div>
          <p className="price">
            R$ <span>0032,55</span>
          </p>
          <div className="buttons">
            {adm ? (
              <AdmButtons dishId={10} />
            ) : (
              <ClientButtons dishId={10} withIcon />
            )}
          </div>
        </Content>
      </Wrapper>
      <Footer />
    </Container>
  );
}
