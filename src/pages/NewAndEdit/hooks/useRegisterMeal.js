import { useRequest } from '../../../hooks/request';
import { validateRequest } from '../../../utils/helpers';
import { formatPrice } from '../utils/helpers';
import { errorMessages } from '../utils/messages';

export function useRegisterMeal({
  title,
  category,
  price,
  description,
  ingredientsOfThisMeal: ingredients,
  photo,
  resetAllStates,
  inputsValidation,
}) {
  const { manageRequests } = useRequest();

  async function registerTheMeal() {
    const response = await manageRequests('post', '/meals', {
      title,
      category,
      price: formatPrice(price),
      description,
      ingredients,
    });

    return response;
  }

  async function registerThePhoto(mealId) {
    const fileForm = new FormData();
    fileForm.append('image', photo);

    const response = await manageRequests(
      'patch',
      `/meals/${mealId}`,
      fileForm
    );

    return response;
  }

  async function handleRequests() {
    const mealResponse = await registerTheMeal();
    validateRequest({
      response: mealResponse,
      devMessage: errorMessages.onRegisterIngredient.dev,
    });

    const photoResponse = await registerThePhoto(mealResponse.data.id);
    validateRequest({
      response: photoResponse,
      devMessage: errorMessages.onRegisterIngredient.dev,
    });
  }

  async function handleRegisterMeal() {
    inputsValidation();

    await handleRequests();

    resetAllStates();
    alert('Prato cadastrado com sucesso!');
  }

  return {
    handleRegisterMeal,
  };
}
