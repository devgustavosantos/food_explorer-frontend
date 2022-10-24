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
  padding: clamp(20px, 6vw, 40px) 0;
`;

export { Container, Content };
