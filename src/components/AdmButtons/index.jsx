import { FiEdit2, FiTrash } from "react-icons/fi";

import { Container } from "./styles";
import { Button } from "../Button";

export function AdmButtons({ dishId }) {
  return (
    <Container>
      <Button icon={FiEdit2} title="Editar" isHighlighted={false} />
      <Button icon={FiTrash} title="Excluir" />
    </Container>
  );
}
