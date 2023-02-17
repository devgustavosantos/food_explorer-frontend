import { FiSearch } from 'react-icons/fi';

import { Container, Input, ButtonSearch } from './styles';
import { useSearchBar } from './useSearchBar';

export function SearchBar() {
  const { handleSearch } = useSearchBar();

  return (
    <Container onSubmit={handleSearch}>
      <Input
        type="text"
        placeholder="Busque pelas opções de pratos"
        id="userSearch"
      />

      <ButtonSearch>
        <FiSearch />
      </ButtonSearch>
    </Container>
  );
}
