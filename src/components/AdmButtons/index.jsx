import { FiEdit2, FiTrash } from 'react-icons/fi';

import { Button } from '../Button';
import { Container } from './styles';

export function AdmButtons({ meal_id }) {
  return (
    <Container>
      <Button
        icon={FiEdit2}
        title="Editar"
        isHighlighted={false}
      />
      <Button
        icon={FiTrash}
        title="Excluir"
      />
    </Container>
  );
}
