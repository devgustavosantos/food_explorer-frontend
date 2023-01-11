import { showErrorMessage } from '../../../utils/helpers';
import { formatPrice } from '../utils/helpers';
import { errorMessages } from '../utils/messages';

export function useValidations({
  title,
  category,
  price,
  description,
  ingredientsOfThisMeal: ingredients,
  newIngredient,
  photo,
}) {
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

  function isThePriceEnteredValid() {
    const priceWithDot = formatPrice(price);

    const isThePriceAValidNumber = !isNaN(Number(priceWithDot));

    if (!isThePriceAValidNumber) {
      showErrorMessage({
        userMessage: errorMessages.priceInvalid.user,
        devMessage: errorMessages.priceInvalid.dev,
      });
    }
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

  return {
    inputsValidation,
  };
}
