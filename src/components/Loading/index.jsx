import { Container } from "./styles";

export function Loading() {
  return (
    <Container>
      <div className="circle"></div>
      <p>Carregando</p>
    </Container>
  );
}
