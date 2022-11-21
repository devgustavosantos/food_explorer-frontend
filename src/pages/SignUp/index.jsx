import { useState } from "react";

import Logo from "../../assets/logo.svg";
import { Container, Brand, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { useRequest } from "../../hooks/request";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { manageRequests } = useRequest();

  function validateEmail() {
    const requiredAttributes = /\S+@\S+\.\S+/;

    return requiredAttributes.test(email);
  }

  function validateData() {
    const missingData = !name || !email || !password;

    if (missingData) {
      alert("Faltam dados! Verifique e tente novamente.");

      return false;
    }

    const isAValidEmail = validateEmail();

    if (!isAValidEmail) {
      alert("E-mail inválido! Verifique e tente novamente.");

      return false;
    }

    return true;
  }

  async function handleSignUp() {
    const allDataIsValid = validateData();

    if (!allDataIsValid) return;

    const response = await manageRequests("post", "users");
  }

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
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          title="E-mail:"
          type="text"
          placeholder="exemplo@exemplo.com.br"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          title="Senha:"
          type="password"
          placeholder="No mínimo 6 caracteres"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button
          title="Criar conta"
          type="button"
          isHighlighted
          onClick={handleSignUp}
        />
        <ButtonText title="Já tenho uma conta" to="/login" />
      </Form>
    </Container>
  );
}
