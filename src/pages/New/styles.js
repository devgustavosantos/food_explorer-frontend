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

const Content = styled.div`
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

export { Container, Content };
