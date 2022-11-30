import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
  text-align: left;

  p {
    font-size: clamp(1.4rem, 4vw, 1.6rem);
  }

  > input {
    margin-top: 10px;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
    outline: none;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
    padding: 15px;
    width: 100%;

    &::placeholder {
      font-size: clamp(1.4rem, 4vw, 1.6rem);
    }
  }
`;

export { Container };
