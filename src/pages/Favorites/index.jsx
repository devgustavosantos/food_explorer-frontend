import { useState } from "react";

import { Container, Content } from "./styles";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { Card } from "../../components/Card";

export function Favorites() {
  const [favorites, setFavorites] = useState([
    {
      id: 2,
      title: "Macarrão",
      description: "Um prato italiano",
      price: 32.05,
      image:
        "photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 7,
      title: "Salada 2022",
      description: "Um prato italiano",
      price: 9.05,
      image:
        "photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 49,
      title: "Macarrão 88",
      description: "Um prato italiano",
      price: 32.05,
      image:
        "photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 482,
      title: "Macarrão",
      description: "Um prato italiano",
      price: 32.05,
      image:
        "photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 647,
      title: "Salada 2022",
      description: "Um prato italiano",
      price: 9.05,
      image:
        "photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 549,
      title: "Macarrão 88",
      description: "Um prato italiano",
      price: 32.05,
      image:
        "photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 452,
      title: "Macarrão",
      description: "Um prato italiano",
      price: 32.05,
      image:
        "photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 57,
      title: "Salada 2022",
      description: "Um prato italiano",
      price: 9.05,
      image:
        "photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);

  return (
    <Container>
      <Header />
      <Wrapper>
        <Content>
          <h1>Favoritos</h1>
          <section className="cards">
            {favorites &&
              favorites.map(favorite => {
                const { title, description, id, image, price } = favorite;

                return (
                  <Card
                    key={String(id)}
                    image={image}
                    title={title}
                    description={description}
                    meal_id={id}
                    price={price}
                  />
                );
              })}
          </section>
        </Content>
      </Wrapper>
      <Footer />
    </Container>
  );
}
