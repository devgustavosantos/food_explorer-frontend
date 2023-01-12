import { useEffect, useState } from 'react';

import { api } from '../../services/api';
import { handleImageRequest } from '../../utils/helpers';
import { Container } from './styles';

export function Ingredient({ image, name }) {
  const [ingredientImage, setIngredientImage] = useState();

  async function renderImage() {
    const url = `${api.defaults.baseURL}/files/ingredients/${image}`;

    handleImageRequest({ url, setState: setIngredientImage });
  }

  useEffect(() => {
    renderImage();
  }, []);
  return (
    <Container>
      <img
        src={ingredientImage}
        alt={`Foto do ingrediente ${name}`}
      />
      <p>{name}</p>
    </Container>
  );
}
