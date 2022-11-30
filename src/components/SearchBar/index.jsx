import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

export function SearchBar({ value, onChange, onClick, ...rest }) {
  return (
    <Container>
      <input
        type="text"
        placeholder="Busque pelas opções de pratos"
        value={value}
        onChange={onChange}
        {...rest}
      />

      <button onClick={onClick}>
        <FiSearch />
      </button>
    </Container>
  );
}
