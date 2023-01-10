import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  grid-area: C;

  p {
    font-size: clamp(1.4rem, 4vw, 1.6rem);
  }

  label {
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
    padding: 15px;
    cursor: pointer;
  }

  input {
    display: none;
  }
`;

export { Container };
