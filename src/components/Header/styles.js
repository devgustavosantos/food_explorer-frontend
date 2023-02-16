import styled from 'styled-components';

import { defaultBreakpoint } from '../../styles/variables';
import { Container as SearchBar } from '../SearchBar/styles';


const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.BLUE_700};
  padding: clamp(15px, 4vw, 30px) 0px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Brand = styled.a`
  align-items: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  gap: 10px;
`;

const Image = styled.img`
  height: clamp(2.3rem, 5vw, 3.5rem);
  width: clamp(2.3rem, 5vw, 3.5rem);
`;

const Title = styled.h2`
  font-family: Roboto, sans-serif;
  font-size: clamp(2rem, 5vw, 2.5rem);
`;

const ButtonMenu = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  font-size: 3.5rem;
  justify-content: center;
`;

const MenuIcon = styled.span`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Hamburger = styled.span``;

const XIcon = styled.span``;

const Base = styled.div`
  @media (max-width: ${defaultBreakpoint}) {
    max-height: ${({ isMenuOpen }) => (isMenuOpen ? '1000px' : '0')};
    overflow: hidden;
    transition: all 0.5s ease 0s;

    ${SearchBar} {
      margin-top: 2rem;
    }
  }
`;

const Navigation = styled.nav``;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ListItem = styled.li`
  @media (max-width: ${defaultBreakpoint}) {
    &:first-child {
      margin-top: 2rem;
    }
  }
`;

const Link = styled.a`
  align-items: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  gap: 10px;
`;

const LinkName = styled.span``;

export {
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
};
