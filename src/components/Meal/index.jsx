import { Container } from "./styles";

export function Meal({
  id,
  title,
  price,
  image,
  meal_amount,
  isNew,
  onClick,
  ...rest
}) {
  return (
    <Container {...rest}>
      <img
        src={`https://images.pexels.com/${image}`}
        alt={`Foto do prato ${title}`}
      />
      <p>{`${meal_amount}x ${title}`}</p>
      <p>{`R$ ${price}`}</p>
      {isNew && (
        <button type="button" onClick={onClick}>
          Excluir
        </button>
      )}
    </Container>
  );
}
