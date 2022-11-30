import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex-grow: 1;
    max-width: 400px;
    margin: 80px auto;
    padding: 0 40px;
    text-align: center;

    h1 {
      line-height: 100%;
      font-weight: 500;
      font-size: 5.5rem;
    }

    p {
      margin: 20px 0;
      font-family: 'Poppins', sans-serif;
      font-size: 2rem;
    }
  }
`;

export { Container };
