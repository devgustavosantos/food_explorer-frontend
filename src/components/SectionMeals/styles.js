import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  margin-top: 40px;

  h2:first-child {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: clamp(2.4rem, 7vw, 3.2rem);
    margin-bottom: clamp(20px, 6vw, 40px);
  }

  .show-few {
    height: ${({ heightOfFewCards }) => `${heightOfFewCards}px`};
    overflow: hidden;
  }
`;

export { Container };
