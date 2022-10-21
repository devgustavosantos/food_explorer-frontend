import { Container } from "./styles";

import { FiSearch } from "react-icons/fi";

export function SearchBar({ ...rest }) {
  return (
    <Container>
      <input
        type="text"
        placeholder="Busque pelas opções de pratos"
        {...rest}
      />

      <button>
        <FiSearch />
      </button>
    </Container>
  );
}
