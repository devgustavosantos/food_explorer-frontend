import { Container, Top } from "./styles";

import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";

import Food from "../../assets/food.png";

export function Home() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Top>
          <img src={Food} alt="Imagem de comida" />
          <h1>Sabores inigualáveis</h1>
          <h3>Sinta o cuidado do preparo com ingredientes selecionados</h3>
        </Top>
        <Section title="Pratos principais">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            aperiam distinctio ipsum laudantium tempora similique dolorum,
            repellat harum omnis fugiat excepturi, eius rerum eligendi. Aut
            consectetur impedit officia esse nulla?
          </p>
        </Section>
      </Wrapper>
      <Footer />
    </Container>
  );
}
