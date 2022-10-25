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

  > a {
    margin-bottom: 25px;
  }

  > h1 {
    font-size: clamp(2.4rem, 7vw, 3.2rem);
    margin-bottom: clamp(20px, 6vw, 30px);
  }
`;

const Ingredients = styled.div`
  width: 100%;
  margin-bottom: 20px;

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
    /* justify-content: space-evenly; */
    flex-wrap: wrap;
    gap: 15px;
  }
`;

export { Container, Form, Ingredients };
