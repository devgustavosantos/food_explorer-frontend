import { Container, Top } from "./styles";

import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import Food from "../../assets/food.png";

export function Home() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <main>
          <Top>
            <img src={Food} alt="Imagem de comida" />
            <h1>Sabores inigualáveis</h1>
            <h3>Sinta o cuidado do preparo com ingredientes selecionados</h3>
          </Top>
          <Section title="Pratos principais">
            {[
              {
                id: 1,
                title: "Pizza",
                description: "Uma obra de arte italiana.",
                price: 32.59,
                image:
                  "photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                created_at: "2022-10-11 14:44:41",
                updated_at: "2022-10-18 16:46:45",
              },
              {
                id: 2,
                title: "Macarrão",
                description: "Um prato italiano",
                price: 32.05,
                image:
                  "photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                created_at: "2022-10-13 11:15:09",
                updated_at: "2022-10-13 11:15:09",
              },
              {
                id: 3,
                title: "Macarrão 4",
                description: "Um prato italiano",
                price: 32.05,
                image:
                  "photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                created_at: "2022-10-13 11:34:29",
                updated_at: "2022-10-13 11:34:29",
              },
            ].map(meal => (
              <Card
                key={String(meal.id)}
                title={meal.title}
                description={meal.description}
                image={meal.image}
                price={meal.price}
              />
            ))}
          </Section>
          <Button title="Mostrar mais" />
        </main>
      </Wrapper>
      <Footer />
    </Container>
  );
}
