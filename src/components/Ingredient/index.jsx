import { Container } from "./styles";

export function Ingredient({ image, name }) {
  return (
    <Container>
      <img src={image} alt={`Foto do ingrediente ${name}`} />
      <p>{name}</p>
    </Container>
  );
}
