import { Container, Brand, Form } from "./styles";

import Logo from "../../assets/logo.svg";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {
  return (
    <Container>
      <Brand>
        <img src={Logo} alt=" Logo do food explorer" />
        <h1>food explorer</h1>
      </Brand>
      <Form>
        <div className="top">
          <img src={Logo} alt=" Logo do food explorer" />
          <h1>food explorer</h1>
        </div>
        <h2>Faça seu login</h2>
        <Input title="Nome:" type="text" placeholder="exemplo@exemplo.com.br" />
        <Input
          title="Senha:"
          type="password"
          placeholder="No mínimo 6 caracteres"
        />
        <Button title="Entrar" type="button" isHighlighted />
        <ButtonText title="Criar uma conta" />
      </Form>
    </Container>
  );
}
