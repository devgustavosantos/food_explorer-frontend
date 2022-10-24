import { Container, Content } from "./styles";

import { IoIosArrowBack } from "react-icons/io";

import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { ButtonText } from "../../components/ButtonText";
import { InputImage } from "../../components/InputImage";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

export function New() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Content>
          <ButtonText title="voltar" icon={IoIosArrowBack} />
          <h1>Adicionar Prato</h1>
          <InputImage />
          <Input title="Nome" placeholder="Ex.: Salada Ceasar" />
          <Input title="Categoria" placeholder="Ex.: Prato Principal" />
          <Input title="Preço" placeholder="R$ 00,00" />
          <Button title="Adicionar pedido" isHighlighted={false} />
        </Content>
      </Wrapper>
      <Footer />
    </Container>
  );
}
