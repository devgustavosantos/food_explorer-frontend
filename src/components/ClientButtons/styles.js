import styled from "styled-components";

const Container = styled.div`
  max-width: 250px;
  margin: 0 auto;
  display: flex;
  gap: 25px;

  > div {
    width: 100%;
  }

  .amount-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;

    button {
      border: none;
      background-color: transparent;
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 2.5rem;
    }
  }
`;

export { Container };
