import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import { Container, Brand, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Loading } from "../../components/Loading";
import { useRequest } from "../../hooks/request";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  const { manageRequests } = useRequest();
  const navigate = useNavigate();

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

    const thePasswordHasTheMinimumLength = password.length >= 6;

    if (!thePasswordHasTheMinimumLength) {
      alert(
        "A senha deve ter no mínimo 6 caracteres! Verifique e tente novamente."
      );

      return false;
    }

    return true;
  }

  async function handleSignUp() {
    const allDataIsValid = validateData();

    if (!allDataIsValid) return;

    setShowLoadingScreen(prevState => !prevState);

    const response = await manageRequests("post", "users", {
      name,
      email,
      password,
    });

    setShowLoadingScreen(prevState => !prevState);

    if (response instanceof Error) {
      return navigate("/off-air");
    }

    const hasAnyError = response.status == 400;

    if (hasAnyError) {
      return alert(response.message);
    }

    alert("Usuário cadastrado com sucesso! Agora você pode se logar");
    navigate("/login");
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
      {showLoadingScreen && <Loading />}
    </Container>
  );
}
