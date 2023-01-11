import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useRequest } from '../../../hooks/request';
import { validateRequest } from '../../../utils/helpers';

export function useNewAndEdit() {
  const [modalOpen, setModalOpen] = useState(false);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const [photo, setPhoto] = useState(null);

  const [newIngredient, setNewIngredient] = useState('');
  const [ingredientsOfThisMeal, setIngredientsOfThisMeal] = useState([]);
  const [ingredientsRegisteredInDB, setIngredientsRegisteredInDB] = useState();

  const [editInterface, setEditInterface] = useState(false);
  const [mealInfos, setMealInfos] = useState();

  const navigate = useNavigate();
  const location = useLocation();

  const { manageRequests } = useRequest();

  function handleModal() {
    setModalOpen(prevState => !prevState);
  }

  async function handleAddNewIngredient() {
    if (!newIngredient) return;

    const ingredientAlreadyAddedToMeal = ingredientsOfThisMeal.find(
      ingredient => ingredient.name === newIngredient
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

    setIngredientsOfThisMeal(prevState => [
      ingredientAlreadyRegisteredInTheDB,
      ...prevState,
    ]);
    setNewIngredient('');
  }

  function removeNewIngredient(ingredientRemoved) {
    const ingredientsUpdated = ingredientsOfThisMeal.filter(
      ingredient => ingredient.name !== ingredientRemoved
    );

    setIngredientsOfThisMeal(ingredientsUpdated);
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

  function resetAllStates() {
    setModalOpen(false);

    setTitle('');
    setCategory('');
    setPrice('');
    setDescription('');

    setPhoto(null);

    setNewIngredient('');
    setIngredientsOfThisMeal([]);
  }

  async function loadData() {
    const response = await fetchIngredients();
    const responseChecked = validateTheResponse(response);
    showMessageIfThereIsAnError(responseChecked);

    checkIfThisPageWillBeRendered(responseChecked);

    setIngredientsRegisteredInDB(response.data);
  }

  function checkIfIsEditInterface() {
    const currentPath = location.pathname;

    const isEditInterface = currentPath.includes('edit');

    return isEditInterface;
  }

  async function fetchMealInfos() {
    const mealId = location.pathname.replace('/edit/', '');

    const response = await manageRequests('get', `/meals/${mealId}`);

    return response;
  }

  function loadDataOfMeal(data) {
    setMealInfos(data);
    setTitle(data.title);
    setCategory(data.category);
    setPrice(String(data.price));
    setPhoto(data.image);
    setDescription(data.description);
    setIngredientsOfThisMeal(data.ingredients);
  }

  async function handleRenderEditInterface() {
    setEditInterface(true);

    const mealResponse = await fetchMealInfos();

    validateRequest({
      response: mealResponse,
      devMessage: 'The request to get meal infos was not successful.',
    });

    loadDataOfMeal(mealResponse.data);
  }

  async function handleTheRendering() {
    const isEditInterface = checkIfIsEditInterface();

    if (isEditInterface) await handleRenderEditInterface();
  }

  useEffect(() => {
    loadData();

    handleTheRendering();
  }, []);

  return {
    modalOpen,
    category,
    setCategory,
    title,
    setTitle,
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
    photo,
    setPhoto,
    resetAllStates,
    editInterface,
    mealInfos,
  };
}
