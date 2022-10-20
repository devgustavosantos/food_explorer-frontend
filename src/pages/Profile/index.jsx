import { IoIosArrowBack } from "react-icons/io";

import { Container, Form } from "./styles";

import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

export function Profile() {
  return (
    <Container>
      <Form>
        <ButtonText title="voltar" icon={IoIosArrowBack} />
        <h1>Meu perfil</h1>
        <Input title="Nome:" type="text" placeholder="" />
        <Input title="E-mail:" type="text" placeholder="" />
        <Input
          title="Senha atual:"
          type="password"
          placeholder="No mínimo 6 caracteres"
        />
        <Input
          title="Senha nova:"
          type="password"
          placeholder="No mínimo 6 caracteres"
        />
        <Button title="Salvar" type="button" disabled />
      </Form>
      <Footer />
    </Container>
  );
}
