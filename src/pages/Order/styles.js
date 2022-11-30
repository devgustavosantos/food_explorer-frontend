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

const Situation = styled.section`
  .infos-situation {
    padding: clamp(30px, 9vw, 60px) 10px;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    text-align: center;
    border: ${({ theme }) => `1px solid ${theme.COLORS.BLUE_500}`};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(15px, 8vw, 35px);

    img {
      width: 105px;
      height: 105px;
    }
  }
`;

export { Container, Content, Cart, Situation };
