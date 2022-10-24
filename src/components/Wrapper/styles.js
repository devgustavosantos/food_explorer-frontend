import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 550px;
  padding: 0 clamp(20px, 6vw, 40px);
  margin: 0 auto;

  @media (min-width: 770px) {
    max-width: 1200px;
  }
`;

export { Container };
