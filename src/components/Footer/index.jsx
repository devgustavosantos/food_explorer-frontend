import { Container } from "./styles";

import { Wrapper } from "../Wrapper";

import DiscreetLogo from "../../assets/discreet-logo.svg";

export function Footer() {
  return (
    <Container>
      <Wrapper>
        <div className="brand">
          <img src={DiscreetLogo} alt="Foto do logotipo" />
          <h3>food explorer</h3>
        </div>
        <p>&copy; 2022 - Todos os direitos reservados</p>
      </Wrapper>
    </Container>
  );
}
