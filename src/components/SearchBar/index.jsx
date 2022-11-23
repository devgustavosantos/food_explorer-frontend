import { Container } from "./styles";

import { FiSearch } from "react-icons/fi";

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
