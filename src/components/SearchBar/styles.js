import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  gap: 15px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_300};

  input {
    flex-grow: 1;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_900};
    }
  }
  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_900};
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    border: none;
  }
`;

export { Container };
