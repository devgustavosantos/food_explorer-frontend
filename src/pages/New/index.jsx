import { useState } from "react";

import { Container, Form, Ingredients, Description, Modal } from "./styles";

import { IoIosArrowBack } from "react-icons/io";
import { FiX } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { ButtonText } from "../../components/ButtonText";
import { InputImage } from "../../components/InputImage";
import { Input } from "../../components/Input";
import { NewIngredient } from "../../components/NewIngredient";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

export function New() {
  const [modalOpen, setModalOpen] = useState(false);

  function handleModal() {
    setModalOpen(prevState => !prevState);
  }

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
      <Modal className={modalOpen ? "open" : "close"}>
        <div className="alert">
          <button type="button" onClick={handleModal}>
            <FiX />
          </button>
          <h2>Ingrediente Novo!</h2>
          <p>
            Identificamos que você adicionou um Ingrediente novo. Gostaria de
            adicionar uma foto à ele?
          </p>
          <Input title="Nome" placeholder="Ex.: Sal" />
          <InputImage />
          <Button title="Cadastrar sem foto" isHighlighted={false} />
          <Button title="Cadastrar com foto" />
        </div>
      </Modal>
    </Container>
  );
}
