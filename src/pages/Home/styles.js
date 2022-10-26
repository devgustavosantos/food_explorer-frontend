import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  > .my-wrapper {
    flex-grow: 1;
  }

  main {
    padding: clamp(30px, 8vw, 60px) 0;
  }
`;

const Top = styled.div`
  width: 100%;
  padding: 30px 10px;
  margin-bottom: clamp(30px, 8vw, 60px);
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  background: ${({ theme }) =>
    `linear-gradient(${theme.COLORS.BLUE_300}, ${theme.COLORS.BLUE_600})`};

  img {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateX(50%);
    z-index: 1;
    height: 100%;
  }

  h1,
  h3 {
    position: relative;
    z-index: 2;
    text-shadow: 0 0 10px black;
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: clamp(3.2rem, 8vw, 4rem);
    line-height: 100%;
    margin-bottom: 15px;
  }

  h3 {
    font-family: "Poppins", sans-serif;
    font-size: clamp(1.4rem, 4vw, 1.6rem);
    font-weight: 400;
  }
`;

export { Container, Top };
