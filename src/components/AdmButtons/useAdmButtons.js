import { useNavigate } from 'react-router-dom';

import { useRequest } from '../../hooks/request';
import { showErrorMessage } from '../../utils/helpers';
import { messages } from './messages';

export function useAdmButtons({ meal_id }) {
  const navigate = useNavigate();

  const { manageRequests } = useRequest();

  function confirmExclusion() {
    const userConfirmation = confirm(messages.confirmationQuestion);

    if (!userConfirmation) {
      throw messages.abortTheDeletion;
    }
  }

  async function deleteMeal() {
    const response = await manageRequests('delete', `/meals/${meal_id}`);

    return response;
  }

  function verifyIfWasAnError(response) {
    const someErrorHappened = Object.prototype.hasOwnProperty.call(
      response.data,
      'message'
    );

    if (someErrorHappened) {
      showErrorMessage({
        userMessage: response.data.message,
        devMessage: messages.erroOnDeleteMeal,
      });
    }
  }

  function successfulDeletion() {
    alert(messages.successOnDeleteMeal);

    navigate('/');

    window.location.reload();
  }

  async function handleDeleteMeal() {
    confirmExclusion();

    const deleteResponse = await deleteMeal();

    verifyIfWasAnError(deleteResponse);

    successfulDeletion();
  }

  function handleEditMeal() {
    navigate(`/edit/${meal_id}`);
  }

  return { handleDeleteMeal, handleEditMeal };
}
