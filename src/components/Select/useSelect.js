import { useState } from 'react';

import { useRequest } from '../../hooks/request';
import { validateRequest } from '../../utils/helpers';
import { messages } from './messages';

export function useSelect({ order_id, status }) {
  const { manageRequests } = useRequest();

  const [currentStatus, setCurrentStatus] = useState(status);

  function handleChangeConfirmation() {
    const confirmation = confirm(messages.changeConfirmation);

    if (!confirmation) {
      throw messages.abortStatusChange;
    }
  }

  async function requestStatusChange(status) {
    const response = await manageRequests('put', '/orders', {
      order_id,
      status,
    });

    return response;
  }

  function handleSuccessOnChangeStatus(statusUpdated) {
    setCurrentStatus(statusUpdated);

    alert(messages.successOnChangeStatus);
  }

  async function handleChangeStatus(e) {
    const statusUpdated = e.target.value;

    handleChangeConfirmation();

    const statusResponse = await requestStatusChange(statusUpdated);

    validateRequest({
      response: statusResponse,
      devMessage: messages.errorOnChangeStatus,
    });

    handleSuccessOnChangeStatus(statusUpdated);
  }

  return { currentStatus, handleChangeStatus };
}
