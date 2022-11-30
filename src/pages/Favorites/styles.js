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
  padding: 30px 0;

  h1 {
    font-weight: 500;
    margin-bottom: clamp(20px, 6vw, 40px);
  }

  .cards {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: clamp(10px, 5vw, 50px);

    > .my-card {
      margin: 0;
    }
  }
`;

export { Container, Content };
