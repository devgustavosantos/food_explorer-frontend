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

  async function requestUpdateMeal() {
    const response = await manageRequests('put', `/meals/${mealInfos.id}`, {
      title,
      category,
      price: formatPrice(price),
      description,
      ingredients,
    });

    return response;
  }

  async function handleMealUpdate() {
    const mealResponse = await requestUpdateMeal();

    validateRequest({
      response: mealResponse,
      devMessage: 'The meal update was not successful.',
    });
  }

  async function requestUpdatePhoto(fileForm) {
    const response = await manageRequests(
      'patch',
      `/meals/${mealInfos.id}`,
      fileForm
    );

    return response;
  }

  function createFileForm() {
    const fileForm = new FormData();

    fileForm.append('image', photo);

    return fileForm;
  }

  async function handleImageUpdate() {
    const fileForm = createFileForm();

    const imageResponse = await requestUpdatePhoto(fileForm);

    validateRequest({
      response: imageResponse,
      devMessage: 'The image meal update was not successful.',
    });
  }

  async function validateImageUpdate() {
    const theImageHasBeenChanged = mealInfos.image !== photo;

    if (theImageHasBeenChanged) await handleImageUpdate();
  }

  function handleEditSuccess() {
    alert('O prato foi atualizado com sucesso!');

    navigate(`/details/${mealInfos.id}`);
  }

  async function handleEditMeal() {
    inputsValidation();

    await handleMealUpdate();

    await validateImageUpdate();

    handleEditSuccess();
  }

  return {
    handleEditMeal,
  };
}
