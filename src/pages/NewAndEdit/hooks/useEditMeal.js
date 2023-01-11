import { useNavigate } from 'react-router-dom';

import { useRequest } from '../../../hooks/request';
import { validateRequest } from '../../../utils/helpers';
import { formatPrice } from '../utils/helpers';

export function useEditMeal({
  inputsValidation,
  mealInfos,
  title,
  category,
  price,
  description,
  ingredients,
  photo,
}) {
  const navigate = useNavigate();

  const { manageRequests } = useRequest();

  async function handleEditMeal() {
    inputsValidation();

    const priceFormatted = formatPrice(price);

    console.log({ priceFormatted });

    const mealResponse = await manageRequests('put', `/meals/${mealInfos.id}`, {
      title,
      category,
      price: priceFormatted,
      description,
      ingredients,
    });

    validateRequest({
      response: mealResponse,
      devMessage: 'The meal update was not successful.',
    });

    const isTheSameImage = mealInfos.image === photo;

    if (!isTheSameImage) {
      const fileForm = new FormData();

      fileForm.append('image', photo);

      const imageResponse = await manageRequests(
        'patch',
        `/meals/${mealInfos.id}`,
        fileForm
      );

      validateRequest({
        response: imageResponse,
        devMessage: 'The image meal update was not successful.',
      });
    }

    alert('O prato foi atualizado com sucesso!');

    navigate(`/details/${mealInfos.id}`);
  }

  return {
    handleEditMeal,
  };
}
