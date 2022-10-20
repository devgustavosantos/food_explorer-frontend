import styled from "styled-components";

const Container = styled.header`
  width: 100%;

  padding: 20px 0;
  background-color: ${({ theme }) => theme.COLORS.BLUE_700};
`;

const Menu = styled.button`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  align-items: center;
  background-color: transparent;
  border: none;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 4rem;
`;

const Options = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  transition: all 0.5s;
  max-height: 1000px;

  &.hidden {
    max-height: 0;
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

export { Container, Menu, Options };
