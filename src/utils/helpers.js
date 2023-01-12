import defaultImage from '../assets/cross-circle.svg';
import { api } from '../services/api';

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

export async function handleImageRequest({ url, setState }) {
  try {
    const response = await api.get(url, {
      responseType: 'blob',
    });

    const imgUrl = URL.createObjectURL(response.data);

    setState(imgUrl);
  } catch {
    setState(defaultImage);
  }
}
