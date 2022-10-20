import { Container } from "./styles";

export function ButtonText({ title, icon: Icon }) {
  return (
    <Container>
      {Icon && <Icon />}
      {title}
    </Container>
  );
}
