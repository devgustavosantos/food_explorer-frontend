import { useState } from 'react';

import { useRequest } from '../../hooks/request';
import { validateRequest } from '../../utils/helpers';

export function useSelect({ order_id, status }) {
  const { manageRequests } = useRequest();

  const [currentStatus, setCurrentStatus] = useState(status);

  async function handleChangeStatus(e) {
    const statusUpdated = e.target.value;

    const confirmation = confirm(
      `Você tem certeza que deseja mudar o pedido ${order_id} para o status ${statusUpdated}?`
    );

    if (!confirmation) {
      throw 'The user abort the change of order status.';
    }

    const response = await manageRequests('put', '/orders', {
      order_id,
      status: statusUpdated,
    });

    validateRequest({
      response,
      devMessage: 'The order status was not updated successfully.',
    });

    setCurrentStatus(statusUpdated);

    alert('O pedido foi atualizado com sucesso!');
  }

  return { currentStatus, handleChangeStatus };
}
