import { Container } from "./styles";

import { FiPlus, FiX } from "react-icons/fi";

export function NewIngredient({ isNew, value, ...rest }) {
  return (
    <Container isNew={isNew}>
      {isNew ? (
        <>
          <input type="text" placeholder={isNew && "Adicionar"} />
          <button type="button">
            <FiPlus />
          </button>
        </>
      ) : (
        <>
          <p>{value}</p>
          <button type="button">
            <FiX />
          </button>
        </>
      )}
    </Container>
  );
}
