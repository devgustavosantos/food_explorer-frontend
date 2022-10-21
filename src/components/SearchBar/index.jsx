import { Container } from "./styles";

export function SearchBar({ icon: Icon, ...rest }) {
  return (
    <Container>
      <input
        type="text"
        placeholder="Busque pelas opções de pratos"
        {...rest}
      />
      {Icon && (
        <button>
          <Icon />
        </button>
      )}
    </Container>
  );
}
