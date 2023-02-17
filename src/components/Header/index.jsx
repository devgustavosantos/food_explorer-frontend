import { FiMenu, FiX } from 'react-icons/fi';

import foodExplorerLogo from '../../assets/logo.svg';
import { Wrapper } from '../Wrapper';
import { AdminNavigation } from './components/AdminNavigation';
import { ClientNavigation } from './components/ClientNavigation';
import { SearchBar } from './components/SearchBar';
import {
  Base,
  Brand,
  ButtonMenu,
  Container,
  Image,
  MenuIcon,
  Navigation,
  Title,
  Top,
} from './styles.js';
import { useHeader } from './useHeader';

export function Header() {
  const {
    handleLogout,
    handleMenu,
    isMenuOpen,
    isUserLoggedIn,
    shouldAdmNavigationBeRendered,
    shouldClientNavigationBeRendered,
  } = useHeader();

  return (
    <Container>
      <Wrapper>
        <Top>
          <Brand to="/">
            <Image
              src={foodExplorerLogo}
              alt=""
            />
            <Title>foodExplorer</Title>
          </Brand>

          <ButtonMenu
            title="Abrir ou fechar o menu"
            onClick={handleMenu}
          >
            {isMenuOpen && (
              <MenuIcon>
                <FiX />
              </MenuIcon>
            )}

            {!isMenuOpen && (
              <MenuIcon>
                <FiMenu />
              </MenuIcon>
            )}
          </ButtonMenu>
        </Top>
        <Base isMenuOpen={isMenuOpen}>
          <SearchBar />
          <Navigation>
            {shouldAdmNavigationBeRendered && (
              <AdminNavigation onLogout={handleLogout} />
            )}
            {shouldClientNavigationBeRendered && (
              <ClientNavigation
                isUserLoggedIn={isUserLoggedIn}
                onLogout={handleLogout}
              />
            )}
          </Navigation>
        </Base>
      </Wrapper>
    </Container>
  );
}
