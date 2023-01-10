import { useRequest } from '../../hooks/request';
import { showErrorMessage } from '../../utils/helpers';

export function useAdmButtons({ meal_id }) {
  const { manageRequests } = useRequest();

  async function handleDeleteMeal() {
    const userConfirmation = confirm(
      'Você tem certeza que deseja excluir esse prato?'
    );

    if (!userConfirmation) return;

    const response = await manageRequests('delete', `/meals/${meal_id}`);

    const someErrorHappened = Object.prototype.hasOwnProperty.call(
      response.data,
      'message'
    );

    if (someErrorHappened) {
      showErrorMessage({
        userMessage: response.data.message,
        devMessage: 'The meal was not deleted with success.',
      });
    }

    alert('O prato foi excluído com sucesso!');

    location.reload();
  }
  return { handleDeleteMeal };
}
