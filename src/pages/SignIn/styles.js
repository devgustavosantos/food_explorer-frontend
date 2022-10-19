import styled from "styled-components";

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
`;

const Form = styled.form`
  width: 100%;
  padding: 80px 40px;
  text-align: center;
  background-color: ${({ theme }) => theme.COLORS.BLUE_700};

  > .top {
    display: flex;
    justify-content: center;
    gap: 15px;
  }

  img {
    width: 35px;
    height: 35px;
  }

  h1 {
    font-size: 3rem;
    font-family: "Roboto", sans-serif;
  }

  h2 {
    margin: 40px auto;
  }
`;

export { Container, Form };
