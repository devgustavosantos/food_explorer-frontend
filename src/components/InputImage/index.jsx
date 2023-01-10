import { FiUpload } from 'react-icons/fi';

import { Container } from './styles';

export function InputImage({ isAMeal, onChange, ...rest }) {
  return (
    <Container>
      <p>Imagem do {isAMeal ? 'prato' : 'ingrediente'}</p>
      <label>
        <FiUpload />
        <p>Selecione imagem</p>
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={onChange}
          {...rest}
        />
      </label>
    </Container>
  );
}
