import { useRequest } from '../../../hooks/request';
import { showErrorMessage } from '../../../utils/helpers';
import { errorMessages } from '../utils/messages';

export function useRegisterMeal({
  title,
  category,
  price,
  description,
  ingredientsOfThisMeal: ingredients,
  newIngredient,
  photo,
  resetAllStates,
}) {
  const { manageRequests } = useRequest();

  function isInputFilled(input) {
    if (!input) {
      showErrorMessage({
        userMessage: errorMessages.genericInputEmpty.user,
        devMessage: errorMessages.genericInputEmpty.dev,
      });
    }
  }

  function atLeastAIngredientWasAdded() {
    if (ingredients.length < 1) {
      showErrorMessage({
        userMessage: errorMessages.anyIngredientAdd.user,
        devMessage: errorMessages.anyIngredientAdd.dev,
      });
    }
  }

  function somethingWasTypedInNewIngredient() {
    if (newIngredient) {
      showErrorMessage({
        userMessage: errorMessages.newIngredientNotAdd.user,
        devMessage: errorMessages.newIngredientNotAdd.dev,
      });
    }
  }

  function wasThePhotoAdd() {
    if (!photo) {
      showErrorMessage({
        userMessage: errorMessages.anyPhotoAdded.user,
        devMessage: errorMessages.anyPhotoAdded.dev,
      });
    }
  }

  function formatPrice() {
    const priceWithoutSymbols = price.replace('R$ ', '');

    const priceWithDot = priceWithoutSymbols.replace(',', '.');

    return priceWithDot;
  }

  function isThePriceEnteredValid() {
    const priceWithDot = formatPrice();

    const isThePriceAValidNumber = !isNaN(Number(priceWithDot));

    if (!isThePriceAValidNumber) {
      showErrorMessage({
        userMessage: errorMessages.priceInvalid.user,
        devMessage: errorMessages.priceInvalid.dev,
      });
    }
  }

  async function registerTheMeal() {
    const response = await manageRequests('post', '/meals', {
      title,
      category,
      price: formatPrice(),
      description,
      ingredients,
    });

    return response;
  }

  function wasThereAnErrorOnRequest(response) {
    const someErrorHappened = Object.prototype.hasOwnProperty.call(
      response.data,
      'message'
    );

    if (someErrorHappened) {
      showErrorMessage({
        userMessage: response.data.message,
        devMessage: errorMessages.onRegisterIngredient.dev,
      });
    }
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

  function inputsValidation() {
    [title, category, price, description].forEach(input =>
      isInputFilled(input)
    );

    atLeastAIngredientWasAdded();
    wasThePhotoAdd();
    isThePriceEnteredValid();
    somethingWasTypedInNewIngredient();
  }

  async function handleRequests() {
    const mealResponse = await registerTheMeal();
    wasThereAnErrorOnRequest(mealResponse);

    const photoResponse = await registerThePhoto(mealResponse.data.id);
    wasThereAnErrorOnRequest(photoResponse);
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
