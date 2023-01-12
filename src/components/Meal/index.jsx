import { useEffect, useState } from 'react';

import { api } from '../../services/api';
import { handleImageRequest } from '../../utils/helpers';
import { Container } from './styles';

export function Meal({
  title,
  price,
  image,
  meal_amount,
  isNew,
  onClick,
  ...rest
}) {
  const [mealImage, setMealImage] = useState();

  async function renderImage() {
    const url = `${api.defaults.baseURL}/files/meals/${image}`;

    handleImageRequest({ url, setState: setMealImage });
  }

  useEffect(() => {
    renderImage();
  }, []);

  return (
    <Container {...rest}>
      <img
        src={mealImage}
        alt={`Foto do prato ${title}`}
        data-oi="oi"
      />
      <p>{`${meal_amount}x ${title}`}</p>
      <p>{`R$ ${price}`}</p>
      {isNew && (
        <button
          type="button"
          onClick={onClick}
        >
          Excluir
        </button>
      )}
    </Container>
  );
}
