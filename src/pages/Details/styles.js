import styled from "styled-components";

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

  @media (min-width: 770px) {
    display: grid;
    gap: 10px;
    grid-template-areas:
      "b1 aa aa aa"
      "A B B B"
      "A C C C"
      "A D D D"
      "A E F G";
    grid-template-columns: 1.5fr 1fr 1fr 0.5fr;

    text-align: left;
  }

  a {
    font-size: 2.4rem;
    grid-area: b1;
    justify-self: flex-start;
    @media (min-width: 770px) {
      margin-bottom: 40px;
    }
  }

  > img {
    width: 100%;
    border-radius: 50%;
    grid-area: A;
    @media (min-width: 770px) {
      padding-right: 30px;
    }
  }

  h1 {
    font-size: clamp(2.5rem, 8vw, 4rem);
    font-weight: 500;
    line-height: 100%;
    grid-area: B;
    margin-bottom: -15px;
  }

  > p {
    font-family: "Poppins", sans-serif;
    font-size: clamp(1.5rem, 4vw, 2.4rem);
    grid-area: C;
  }

  .ingredients {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    grid-area: D;

    @media (min-width: 770px) {
      justify-content: flex-start;
    }
  }

  .price {
    color: ${({ theme }) => theme.COLORS.BLUE_100};
    font-size: clamp(2.8rem, 6vw, 3.2rem);
    font-family: "Roboto", sans-serif;
    grid-area: E;
  }

  .buttons {
    grid-area: F;
    @media (min-width: 770px) {
      /* margin-left: 5vw; */
    }
  }
`;

export { Container, Content };
