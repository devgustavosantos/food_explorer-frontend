import { useState } from 'react';
import { TfiReceipt } from 'react-icons/tfi';

import { useCart } from '../../hooks/cart';
import { Button } from '../Button';
import { Container } from './styles';

export function ClientButtons({
  withIcon = false,
  meal_id,
  title,
  price,
  image,
}) {
  const [amount, setAmount] = useState(1);

  const { handleAddMeal } = useCart();

  function handleAmount(isItAdd) {
    if (isItAdd) {
      if (amount < 10) {
        setAmount(prevState => prevState + 1);
      } else {
        alert('Cada prato possui um limite de 10 unidades por pedido.');
      }
    } else {
      if (amount > 1) {
        setAmount(prevState => prevState - 1);
      }
    }
  }

  return (
    <Container className="client-buttons">
      <div className="amount-buttons">
        <button
          type="button"
          onClick={() => handleAmount(false)}
        >
          -
        </button>
        <span>{String(amount).padStart(2, '0')}</span>
        <button
          type="button"
          onClick={() => handleAmount(true)}
        >
          +
        </button>
      </div>
      {withIcon ? (
        <Button
          icon={TfiReceipt}
          title="incluir"
          onClick={() => {
            handleAddMeal({ meal_id, title, price, image, amount });
            setAmount(1);
          }}
        />
      ) : (
        <Button
          title="incluir"
          onClick={() => {
            handleAddMeal({ meal_id, title, price, image, amount });
            setAmount(1);
          }}
        />
      )}
    </Container>
  );
}
