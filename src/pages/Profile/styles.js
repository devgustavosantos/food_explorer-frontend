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

const Form = styled.form`
  width: 100%;
  max-width: 420px;
  margin: 40px auto;
  text-align: center;

  a {
    font-size: 2.4rem;
  }

  h1 {
    margin: 35px auto 15px;
    text-align: left;
    font-size: 3rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    line-height: 2.5rem;
  }

  .my-input:nth-child(4) {
    margin-bottom: 45px;
  }
`;

export { Container, Form };
