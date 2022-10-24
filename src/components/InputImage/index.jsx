import { Container } from "./styles";

import { FiUpload } from "react-icons/fi";

export function InputImage() {
  return (
    <Container>
      <p>Imagem do prato</p>
      <label htmlFor="meal-image">
        <FiUpload />
        <p>Selecione imagem</p>
        <input type="file" accept="image/png, image/jpeg" id="meal-image" />
      </label>
    </Container>
  );
}
