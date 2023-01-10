export function showErrorMessage({ userMessage, devMessage }) {
  alert(userMessage);

  throw new Error(devMessage);
}
