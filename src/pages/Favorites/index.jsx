import { useState, useEffect } from "react";

import { Container, Content } from "./styles";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { Card } from "../../components/Card";
import { Loading } from "../../components/Loading";
import { useRequest } from "../../hooks/request";

export function Favorites() {
  const [favorites, setFavorites] = useState();

  const { manageRequests } = useRequest();

  useEffect(() => {
    async function fetchFavorites() {
      const response = await manageRequests("get", "/favorites");

      const theRequestWasSuccessful = Array.isArray(response.data);

      if (theRequestWasSuccessful) {
        return setFavorites(response.data);
      }

      if (response instanceof Error) {
        alert(
          "Não foi possível carregar as informações! Por favor tente novamente mais tarde."
        );
      }

      if (response.data) {
        alert(response.data.message);
      } else {
        alert(
          "Não foi possível carregar as informações! Por favor tente novamente mais tarde."
        );
      }

      return navigate("/");
    }

    fetchFavorites();
  }, []);

  return (
    <Container>
      <Header />
      <Wrapper>
        {!favorites ? (
          <Loading />
        ) : (
          <Content>
            {favorites.length == 0 ? (
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
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
}
