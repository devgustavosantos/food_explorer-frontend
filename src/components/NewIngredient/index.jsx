import { FiPlus, FiX } from 'react-icons/fi';

import { Container } from './styles';

export function NewIngredient({ onClick, onChange, isNew, value, ...rest }) {
  return (
    <Container isNew={isNew}>
      {isNew ? (
        <>
          <input
            type="text"
            placeholder={isNew && 'Adicionar'}
            value={value}
            onChange={onChange}
            {...rest}
          />
          <button
            type="button"
            onClick={onClick}
          >
            <FiPlus />
          </button>
        </>
      ) : (
        <>
          <p>{value}</p>
          <button
            type="button"
            onClick={onClick}
          >
            <FiX />
          </button>
        </>
      )}
    </Container>
  );
}
