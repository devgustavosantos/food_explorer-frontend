import { useState } from 'react';

import { useRequest } from '../../hooks/request';

export function useRegisterNewIngredient({
  handleModal,
  newIngredient,
  setIngredientsOfThisMeal,
  setNewIngredient,
  ingredientsRegisteredInDB,
}) {
  const [newIngredientPhoto, setNewIngredientPhoto] = useState();

  let ingredientResponse, ingredientPhotoResponse;

  const { manageRequests } = useRequest();

  function validateIfNewIngredientIsEmpty() {
    if (!newIngredient) {
      alert(
        'Para cadastrar um novo ingrediente é necessário dar um nome a ele. Verifique e tente novamente.'
      );

      throw new Error('The newIngredient is empty.');
    }
  }

  function ingredientAlreadyRegistered() {
    const alreadyRegistered = ingredientsRegisteredInDB.find(
      ingredient => ingredient.name === newIngredient
    );

    if (alreadyRegistered) {
      alert(
        'Este nome já foi cadastrado em outro ingrediente. Verifique e tente novamente.'
      );

      throw new Error(
        'The name of newIngredient is already registered in database.'
      );
    }
  }

  async function registerTheIngredient() {
    ingredientResponse = await manageRequests('post', '/ingredients', {
      name: newIngredient,
    });
  }

  function ingredientWasRegisteredSuccessfully() {
    const someErrorHappened = Object.prototype.hasOwnProperty.call(
      ingredientResponse,
      'message'
    );

    if (someErrorHappened) {
      alert(ingredientResponse.data.message);

      throw new Error('Ingredient was not registered successfully');
    }
  }

  function updateStates() {
    setIngredientsOfThisMeal(prevState => [newIngredient, ...prevState]);
    setNewIngredient('');
    setNewIngredientPhoto(null);
  }

  async function handleRegisterWithoutPhoto() {
    validateIfNewIngredientIsEmpty();
    ingredientAlreadyRegistered();

    await registerTheIngredient();
    ingredientWasRegisteredSuccessfully();

    updateStates();
    alert('Ingrediente cadastrado com sucesso!');
    handleModal();
  }

  function wasThePhotoAdded() {
    if (!newIngredientPhoto) {
      alert('Nenhuma foto foi adicionada! Verifique e tente novamente.');

      throw new Error('The photo was not added!');
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
      ingredientPhotoResponse,
      'message'
    );

    if (someErrorHappened) {
      alert(ingredientResponse.data.message);

      throw new Error('Ingredient was not registered successfully');
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

    updateStates();
    alert('Ingrediente cadastrado com sucesso!');
    handleModal();
  }

  async function handleRegisterIngredient(registerWithPhoto) {
    registerWithPhoto
      ? handleRegisterWithPhoto()
      : handleRegisterWithoutPhoto();
  }

  return {
    newIngredientPhoto,
    setNewIngredientPhoto,
    handleRegisterIngredient,
  };
}
