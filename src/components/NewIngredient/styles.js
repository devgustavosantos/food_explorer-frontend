import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_900}` : 'none'};
  border-radius: 10px;
  padding: 6.5px 15px;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : `${theme.COLORS.BLUE_200}`};

  p {
    font-size: clamp(1.4rem, 4vw, 1.6rem);
    cursor: not-allowed;
  }

  button {
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;

    svg {
      color: ${({ theme, isNew }) =>
        isNew ? `${theme.COLORS.GRAY_900}` : `${theme.COLORS.WHITE}`};
    }
  }

  input {
    width: 70px;

    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_900};
    }
  }
`;

export { Container };
