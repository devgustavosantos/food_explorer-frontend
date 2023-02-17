import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { defaultBreakpoint } from '../../styles/variables';
import { Container as Wrapper } from '../Wrapper/styles';
import { Container as SearchBar } from './components/SearchBar/styles';

const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.BLUE_700};
  padding: clamp(15px, 4vw, 30px) 0px;

  @media (min-width: ${defaultBreakpoint}) {
    ${Wrapper} {
      display: flex;
    }
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Brand = styled(Link)`
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

  @media (min-width: ${defaultBreakpoint}) {
    display: none;
    overflow: hidden;
  }
`;

const Base = styled.div`
  display: flex;
  width: 100%;

  ${SearchBar} {
    margin: 0 2rem;
  }

  @media (max-width: ${defaultBreakpoint}) {
    display: block;
    max-height: ${({ isMenuOpen }) => (isMenuOpen ? '1000px' : '0')};
    overflow: hidden;
    transition: all 0.5s ease 0s;

    ${SearchBar} {
      margin: 2rem 0 0 0;
    }
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

export {
  Base,
  Brand,
  ButtonMenu,
  Container,
  Image,
  MenuIcon,
  Navigation,
  Title,
  Top,
};
