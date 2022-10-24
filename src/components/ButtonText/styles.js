import styled from "styled-components";

const Container = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  p {
    font-size: clamp(1.4rem, 4vw, 2.4rem);
  }
`;

export { Container };
