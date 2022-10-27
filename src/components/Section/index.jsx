import { Container } from "./styles";

export function Section({ children, title }) {
  return (
    <Container className="my-section">
      <h2>{title}</h2>
      <div className="items-section">{children}</div>
    </Container>
  );
}
