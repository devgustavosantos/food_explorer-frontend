import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  > .my-wrapper {
    flex-grow: 1;
  }

  h1 {
    margin-bottom: 35px;
    font-weight: 500;
    font-size: clamp(2.4rem, 6vw, 3.2rem);
  }
`;

const Content = styled.main`
  width: 100%;
  margin: clamp(30px, 8vw, 80px) auto;

  display: flex;
  flex-direction: column;
  gap: clamp(40px, 8vw, 75px);

  @media (min-width: 780px) {
    flex-direction: row;

    > * {
      flex-grow: 1;
      width: 100%;
    }
  }

  > h1 {
    text-align: center;
  }
`;

const Cart = styled.section`
  .total-price {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.6rem, 5vw, 2rem);
    margin-top: 30px;
  }
`;

const Payment = styled.section`
  width: 100%;

  .box-payment {
    width: 100%;
    border: ${({ theme }) => `1px solid ${theme.COLORS.BLUE_200}`};
    border-radius: 8px 8px 0 0;
    overflow: hidden;
  }

  .buttons-payment {
    border-bottom: ${({ theme }) => `1px solid ${theme.COLORS.BLUE_200}`};
    width: 100%;
    display: flex;

    button {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      padding: 15px 0;
      font-size: clamp(1.4rem, 4vw, 1.6rem);
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > button:nth-of-type(1) {
      border-right: ${({ theme }) => `1px solid ${theme.COLORS.BLUE_200}`};
    }

    img {
      width: 24px;
      height: 24px;
    }

    svg {
      font-size: 2.4rem;
    }

    .selected-payment {
      background-color: ${({ theme }) => theme.COLORS.BLUE_500};
    }
  }

  .payment-option {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    padding: clamp(20px, 5vw, 50px) clamp(35px, 10vw, 50px);

    @media (min-width: 780px) {
      width: clamp(310px, 5vw, 400px);
    }

    /* escrever daqui para cima */

    .card-details {
      display: flex;
      gap: 20px;
    }

    .hidden {
      display: none;
    }
  }
`;

export { Container, Content, Cart, Payment };
