import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  > .my-wrapper {
    flex-grow: 1;
  }
`;

const Content = styled.main`
  width: 100%;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;

  @media (min-width: 780px) {
    display: grid;
    gap: 10px;
    grid-template-areas:
      'A A A A'
      'B C C C'
      'B D D D'
      'B E E E'
      'B F G H';
    grid-template-columns: 1.5fr 1fr 1fr 0.5fr;
    grid-template-columns: 3fr 170px 2fr 0.5fr;

    align-items: center;
    text-align: left;
  }

  a {
    font-size: 2.4rem;
    grid-area: A;
    justify-self: flex-start;
    @media (min-width: 780px) {
      margin-bottom: 30px;
    }
  }

  > img {
    width: 75%;
    margin: auto;
    border-radius: 50%;
    aspect-ratio: 1;
    grid-area: B;
    @media (min-width: 780px) {
      width: 90%;
      margin: 0;
    }
  }

  h1 {
    font-size: clamp(2.5rem, 8vw, 4rem);
    font-weight: 500;
    line-height: 100%;
    grid-area: C;
  }

  > p {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.5rem, 4vw, 2.4rem);
    grid-area: D;
  }

  .ingredients {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    grid-area: E;

    @media (min-width: 780px) {
      justify-content: flex-start;
      margin-bottom: clamp(25px, 4vw, 40px);
    }
  }

  .price {
    color: ${({ theme }) => theme.COLORS.BLUE_100};
    font-size: clamp(2.8rem, 6vw, 3.2rem);
    font-family: 'Roboto', sans-serif;
    grid-area: F;
  }

  .buttons {
    grid-area: G;
  }
`;

export { Container, Content };
