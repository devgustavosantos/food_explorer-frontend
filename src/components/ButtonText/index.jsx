import { Container } from "./styles";

export function ButtonText({ title, icon: Icon, to }) {
  return (
    <Container to={to}>
      {Icon && <Icon />}
      <p>{title}</p>
    </Container>
  );
}
