export function showErrorMessage({ userMessage, devMessage }) {
  alert(userMessage);

  throw new Error(devMessage);
}

export function validateRequest({ response, devMessage }) {
  const someErrorHappened = Object.prototype.hasOwnProperty.call(
    response.data,
    'message'
  );

  if (someErrorHappened) {
    showErrorMessage({
      userMessage: response.data.message,
      devMessage,
    });
  }
}
