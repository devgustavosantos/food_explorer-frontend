import styled from 'styled-components';

const Container = styled.div`
  max-width: 250px;
  margin: 0 auto;
  display: flex;
  gap: 25px;

  @media (min-width: 770px) {
    margin: 0;
  }

  .amount-buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: clamp(5px, 4vw, 15px);
    font-size: 2rem;

    button {
      border: none;
      background-color: transparent;
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 2rem;
    }
  }
`;

export { Container };
