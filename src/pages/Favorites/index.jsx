import { useState, useEffect } from "react";

import { Container, Content } from "./styles";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { Card } from "../../components/Card";
import { useRequest } from "../../hooks/request";

export function Favorites() {
  const [favorites, setFavorites] = useState();

  console.log({ favorites });

  const { manageRequests } = useRequest();

  useEffect(() => {
    async function fetchFavorites() {
      const response = await manageRequests("get", "/favorites");

      setFavorites(response);
    }

    fetchFavorites();
  }, []);

  return (
    <Container>
      <Header />
      <Wrapper>
        <Content>
          {!favorites || favorites.length == 0 ? (
            <h1>Você ainda não tem favoritos</h1>
          ) : (
            <>
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
                        isFav={true}
                      />
                    );
                  })}
              </section>
            </>
          )}
        </Content>
      </Wrapper>
      <Footer />
    </Container>
  );
}
