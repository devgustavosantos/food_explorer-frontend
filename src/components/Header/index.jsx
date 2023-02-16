import { useState } from 'react';
import {
  FiHeart,
  FiLogOut,
  FiMenu,
  FiShoppingCart,
  FiUser,
  FiX,
} from 'react-icons/fi';
import { TfiReceipt } from 'react-icons/tfi';

import foodExplorerLogo from '../../assets/logo.svg';
import { SearchBar } from '../SearchBar';
import { Wrapper } from '../Wrapper';
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
  Link,
  LinkName,
} from './styles.js';


const links = [
  { name: 'Favoritos', icon: <FiHeart />, url: '/favorites', isRestrict: true },
  {
    name: 'Carinho',
    icon: <FiShoppingCart />,
    url: '/cart',
    isRestrict: false,
  },
  {
    name: 'Pedidos',
    icon: <TfiReceipt />,
    url: '/all-orders',
    isRestrict: true,
  },
  { name: 'Perfil', icon: <FiUser />, url: '/profile', isRestrict: true },
  { name: 'Entrar/Sair', icon: <FiLogOut />, url: '/login', isRestrict: false },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenu() {
    setIsMenuOpen(state => !state);
  }

  return (
    <Container>
      <Wrapper>
        <Top>
          <Brand>
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
              {links.map(link => (
                <ListItem key={link.name}>
                  <Link>
                    {link.icon}
                    <LinkName>{link.name}</LinkName>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Navigation>
        </Base>
      </Wrapper>
    </Container>
  );
}
