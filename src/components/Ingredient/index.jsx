import { api } from '../../services/api';
import { Container } from './styles';

export function Ingredient({ image, name }) {
  return (
    <Container>
      <img
        src={`${api.defaults.baseURL}/files/ingredients/${image}`}
        alt={`Foto do ingrediente ${name}`}
      />
      <p>{name}</p>
    </Container>
  );
}
