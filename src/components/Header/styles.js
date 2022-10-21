import styled from "styled-components";

const Container = styled.header`
  width: 100%;

  padding: 20px 0;
  background-color: ${({ theme }) => theme.COLORS.BLUE_700};
`;

const Mobile = styled.div`
  .top {
    display: flex;
    justify-content: flex-end;

    @media (min-width: 370px) {
      justify-content: space-between;
    }
  }
`;

const Brand = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 370px) {
    display: none;
  }

  img {
    width: 35px;
    height: 35px;
  }

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 2.5rem;
  }
`;

const HamburgerMenu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 4rem;
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
  }

  li:first-child {
    margin-top: 20px;
  }

  li {
    list-style: none;
  }

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2rem;
  }
`;

export { Container, Mobile, Brand, HamburgerMenu, Navigation };
