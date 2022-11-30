import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Container = styled.header`
  width: 100%;

  padding: clamp(15px, 4vw, 30px) 0;
  background-color: ${({ theme }) => theme.COLORS.BLUE_700};
`;

const Desktop = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;

  @media (max-width: 779px) {
    display: none;
  }

  nav {
    flex-grow: 1;

    ul {
      flex-grow: 1;
      display: flex;
      gap: 20px;
      align-items: center;
    }

    li:first-child {
      flex-grow: 1;
    }

    li {
      list-style: none;
    }

    a,
    svg {
      display: flex;
      justify-content: center;
      align-items: center;

      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 2rem;
    }
  }
`;

const Mobile = styled.div`
  .top {
    display: flex;
    justify-content: flex-end;

    justify-content: space-between;

    @media (min-width: 780px) {
      display: none;
    }
  }
`;

const Brand = styled(Link)`
  display: flex;
  gap: 10px;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.WHITE};

  img {
    width: clamp(2.3rem, 5vw, 3.5rem);
    height: clamp(2.3rem, 5vw, 3.5rem);
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: clamp(2rem, 5vw, 2.5rem);
  }
`;

const HamburgerMenu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 3.5rem;
`;

const Navigation = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
    transition: all 0.5s;
    max-height: 1000px;

    &.hidden {
      max-height: 0;
    }

    @media (min-width: 780px) {
      display: none;
    }
  }

  li:first-child {
    margin-top: 20px;
  }

  li {
    list-style: none;
  }

  a,
  button {
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: clamp(1.4rem, 4vw, 1.6rem);
  }
`;

export { Container, Desktop, Mobile, Brand, HamburgerMenu, Navigation };
