import { useState } from "react";

import { IoIosArrowBack } from "react-icons/io";

import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

export function Profile() {
  const [name, setName] = useState("Gustavo");
  const [email, setEmail] = useState("gustavo@email.com");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <Container>
      <Header />
      <Wrapper>
        <Form>
          <ButtonText title="voltar" icon={IoIosArrowBack} />
          <h1>Meu perfil</h1>
          <Input title="Nome:" type="text" placeholder={name} value={name} />
          <Input
            title="E-mail:"
            type="text"
            placeholder={email}
            value={email}
          />
          <Input
            title="Senha atual:"
            type="password"
            placeholder="No mínimo 6 caracteres"
            value={oldPassword}
          />
          <Input
            title="Senha nova:"
            type="password"
            placeholder="No mínimo 6 caracteres"
            value={newPassword}
          />
          <Button title="Salvar" type="button" disabled />
        </Form>
      </Wrapper>
      <Footer />
    </Container>
  );
}
