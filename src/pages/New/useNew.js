import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useRequest } from '../../hooks/request';

export function useNew() {
  const [modalOpen, setModalOpen] = useState(false);

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [newIngredient, setNewIngredient] = useState('');

  const [ingredientsOfThisMeal, setIngredientsOfThisMeal] = useState([]);
  const [ingredientsRegisteredInDB, setIngredientsRegisteredInDB] = useState();

  const navigate = useNavigate();

  const { manageRequests } = useRequest();

  function handleModal() {
    setModalOpen(prevState => !prevState);
  }

  async function handleAddNewIngredient() {
    if (!newIngredient) return;

    const ingredientAlreadyAddedToMeal = ingredientsOfThisMeal.find(
      ingredient => ingredient == newIngredient
    );

    if (ingredientAlreadyAddedToMeal) {
      return alert('Este ingrediente já foi adicionado!');
    }

    const ingredientAlreadyRegisteredInTheDB = ingredientsRegisteredInDB.find(
      ingredient => ingredient.name === newIngredient
    );

    if (!ingredientAlreadyRegisteredInTheDB) {
      return handleModal();
    }

    setIngredientsOfThisMeal(prevState => [newIngredient, ...prevState]);
    setNewIngredient('');
  }

  function removeNewIngredient(ingredientRemoved) {
    const ingredientsUpdated = ingredientsOfThisMeal.filter(
      ingredient => ingredient !== ingredientRemoved
    );

    setIngredientsOfThisMeal(ingredientsUpdated);
  }

  function handleRegisterMeal() {
    console.log({ name, category, price, description });
  }

  async function fetchIngredients() {
    const response = await manageRequests('get', '/ingredients');

    return response;
  }

  function validateTheResponse(response) {
    const isAValidResponse = Array.isArray(response.data);

    return isAValidResponse;
  }

  function showMessageIfThereIsAnError(withoutErros) {
    if (!withoutErros) {
      alert(
        'Não foi possível carregar os dados! Por favor, tente novamente mais tarde.'
      );
    }
  }

  function checkIfThisPageWillBeRendered(hadNoProblem) {
    if (hadNoProblem) return;

    navigate('/');
  }

  async function loadData() {
    const response = await fetchIngredients();
    const responseChecked = validateTheResponse(response);
    showMessageIfThereIsAnError(responseChecked);

    checkIfThisPageWillBeRendered(responseChecked);

    setIngredientsRegisteredInDB(response.data);
  }

  useEffect(() => {
    loadData();
  }, []);

  return {
    modalOpen,
    category,
    setCategory,
    name,
    setName,
    price,
    setPrice,
    description,
    setDescription,
    newIngredient,
    setNewIngredient,
    setIngredientsOfThisMeal,
    ingredientsOfThisMeal,
    ingredientsRegisteredInDB,
    handleModal,
    handleAddNewIngredient,
    removeNewIngredient,
    handleRegisterMeal,
  };
}
