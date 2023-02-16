import { FiMenu, FiX } from 'react-icons/fi';

import foodExplorerLogo from '../../assets/logo.svg';
import { SearchBar } from '../SearchBar';
import { Wrapper } from '../Wrapper';
import { clientLinks } from './data';
import {
  Container,
  Top,
  Image,
  Brand,
  Title,
  ButtonMenu,
  MenuIcon,
  Base,
  Navigation,
  List,
  ListItem,
  NavigationLink,
  LinkName,
} from './styles.js';
import { useHeader } from './useHeader';

export function Header() {
  const { isMenuOpen, handleMenu, handleNavigation } = useHeader();

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
            <List>
              {clientLinks.map(link => (
                <ListItem key={link.name}>
                  <NavigationLink
                    title={link.name}
                    onClick={handleNavigation}
                    name={link.name}
                  >
                    {link.icon}
                    <LinkName>{link.name}</LinkName>
                  </NavigationLink>
                </ListItem>
              ))}
            </List>
          </Navigation>
        </Base>
      </Wrapper>
    </Container>
  );
}
