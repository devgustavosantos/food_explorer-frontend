import { Container, Form, Ingredients, Description } from "./styles";

import { IoIosArrowBack } from "react-icons/io";

import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { ButtonText } from "../../components/ButtonText";
import { InputImage } from "../../components/InputImage";
import { Input } from "../../components/Input";
import { NewIngredient } from "../../components/NewIngredient";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

export function New() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Form>
          <ButtonText title="voltar" icon={IoIosArrowBack} />
          <h1>Adicionar Prato</h1>
          <InputImage />
          <Input title="Nome" placeholder="Ex.: Salada Ceasar" />
          <Input title="Categoria" placeholder="Ex.: Prato Principal" />
          <Ingredients>
            <p>Ingredientes</p>
            <div className="new-ingredients">
              <NewIngredient value="sal" />
              <NewIngredient value="açúcar" />
              <NewIngredient value="fermento americano" />
              <NewIngredient isNew />
            </div>
          </Ingredients>

          <Input title="Preço" placeholder="R$ 00,00" type="number" />
          <Description>
            <p>Descrição</p>
            <textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição..."></textarea>
          </Description>
          <Button title="Adicionar prato" isHighlighted={false} />
        </Form>
      </Wrapper>
      <Footer />
    </Container>
  );
}
