import { useState } from 'react';

import { useRequest } from '../../../hooks/request';
import { showErrorMessage } from '../../../utils/helpers';
import { errorMessages } from '../utils/messages';

export function useRegisterNewIngredient({
  handleModal,
  newIngredient,
  setIngredientsOfThisMeal,
  setNewIngredient,
  ingredientsRegisteredInDB,
}) {
  const { manageRequests } = useRequest();

  const [newIngredientPhoto, setNewIngredientPhoto] = useState();

  let ingredientResponse, ingredientPhotoResponse;

  function validateIfNewIngredientIsEmpty() {
    if (!newIngredient) {
      showErrorMessage({
        userMessage: errorMessages.newIngredientEmpty.user,
        devMessage: errorMessages.newIngredientEmpty.dev,
      });
    }
  }

  function ingredientAlreadyRegistered() {
    const alreadyRegistered = ingredientsRegisteredInDB.find(
      ingredient => ingredient.name === newIngredient
    );

    if (alreadyRegistered) {
      showErrorMessage({
        userMessage: errorMessages.nameAlreadyRegistered.user,
        devMessage: errorMessages.nameAlreadyRegistered.dev,
      });
    }
  }

  async function registerTheIngredient() {
    ingredientResponse = await manageRequests('post', '/ingredients', {
      name: newIngredient,
    });
  }

  function ingredientWasRegisteredSuccessfully() {
    const someErrorHappened = Object.prototype.hasOwnProperty.call(
      ingredientResponse.data,
      'message'
    );

    if (someErrorHappened) {
      showErrorMessage({
        userMessage: ingredientResponse.data.message,
        devMessage: errorMessages.onRegisterIngredient.dev,
      });
    }
  }

  function updateDisplay() {
    setIngredientsOfThisMeal(prevState => [
      ingredientResponse.data,
      ...prevState,
    ]);
    setNewIngredient('');
    setNewIngredientPhoto(null);

    alert('Ingrediente cadastrado com sucesso!');
    handleModal();
  }

  async function handleRegisterWithoutPhoto() {
    validateIfNewIngredientIsEmpty();
    ingredientAlreadyRegistered();

    await registerTheIngredient();
    ingredientWasRegisteredSuccessfully();

    updateDisplay();
  }

  function wasThePhotoAdded() {
    if (!newIngredientPhoto) {
      showErrorMessage({
        userMessage: errorMessages.anyPhotoAdded.user,
        devMessage: errorMessages.anyPhotoAdded.dev,
      });
    }
  }

  async function registerThePhotoOfNewIngredient() {
    const newIngredientId = ingredientResponse.data.id;

    const fileForm = new FormData();
    fileForm.append('image', newIngredientPhoto);

    ingredientPhotoResponse = await manageRequests(
      'patch',
      `/ingredients/${newIngredientId}`,
      fileForm
    );
  }

  function photoWasRegisteredSuccessfully() {
    const someErrorHappened = Object.prototype.hasOwnProperty.call(
      ingredientPhotoResponse.data,
      'message'
    );

    if (someErrorHappened) {
      showErrorMessage({
        userMessage: ingredientResponse.data.message,
        devMessage: errorMessages.onRegisterPhoto.dev,
      });
    }
  }

  async function handleRegisterWithPhoto() {
    validateIfNewIngredientIsEmpty();
    ingredientAlreadyRegistered();
    wasThePhotoAdded();

    await registerTheIngredient();
    ingredientWasRegisteredSuccessfully();

    await registerThePhotoOfNewIngredient();
    photoWasRegisteredSuccessfully();

    updateDisplay();
  }

  async function handleRegisterIngredient(registerWithPhoto) {
    registerWithPhoto
      ? handleRegisterWithPhoto()
      : handleRegisterWithoutPhoto();
  }

  return {
    setNewIngredientPhoto,
    handleRegisterIngredient,
  };
}
