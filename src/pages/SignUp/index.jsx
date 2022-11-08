import { Container, Brand, Form } from "./styles";

import Logo from "../../assets/logo.svg";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignUp() {
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
        <h2>Crie sua conta</h2>
        <Input
          title="Seu nome:"
          type="text"
          placeholder="Exemplo: Maria da Silva"
        />
        <Input
          title="E-mail:"
          type="text"
          placeholder="exemplo@exemplo.com.br"
        />
        <Input
          title="Senha:"
          type="password"
          placeholder="No mínimo 6 caracteres"
        />
        <Button title="Cria conta" type="button" isHighlighted />
        <ButtonText title="Já tenho uma conta" to="/login" />
      </Form>
    </Container>
  );
}
