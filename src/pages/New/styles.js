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

const Form = styled.form`
  width: 100%;
  padding: clamp(40px, 12.5vw, 80px) 0;

  @media (min-width: 770px) {
    display: grid;
    grid-template-areas:
      "A A A A"
      "B B B B"
      "C D E E"
      "F F F G"
      "H H H H"
      "I I J J";

    align-items: center;
    gap: 30px;

    > * {
      margin-bottom: initial;
    }
  }

  > a {
    margin-bottom: 25px;
    grid-area: A;
    justify-self: flex-start;
  }

  > h1 {
    font-size: clamp(2.4rem, 7vw, 3.2rem);
    margin-bottom: clamp(20px, 6vw, 30px);
    grid-area: B;
  }

  > div:nth-child(4) {
    grid-area: D;
  }

  > div:nth-child(5) {
    grid-area: E;
  }

  > div:nth-child(7) {
    grid-area: G;
    align-self: stretch;
    input {
      height: 56px;
    }
  }

  > button:last-child {
    grid-area: J;
  }
`;

const Ingredients = styled.div`
  width: 100%;
  margin-bottom: 20px;
  grid-area: F;

  @media (min-width: 800px) {
    margin-bottom: 0px;
  }

  > p {
    margin-bottom: clamp(5px, 2vw, 10px);
    font-size: clamp(1.4rem, 4vw, 1.6rem);
  }

  .new-ingredients {
    width: 100%;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
    display: flex;

    flex-wrap: wrap;
    gap: 15px;
  }
`;

const Description = styled.div`
  width: 100%;
  margin-bottom: 10px;
  grid-area: H;

  > p {
    margin-bottom: clamp(5px, 2vw, 10px);
    font-size: clamp(1.4rem, 4vw, 1.6rem);
  }

  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
    resize: none;
    min-height: 170px;
  }
`;

export { Container, Form, Ingredients, Description };
