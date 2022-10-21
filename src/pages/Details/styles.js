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

const Content = styled.main`
  width: 100%;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;

  a {
    font-size: 2.4rem;
  }

  > img {
    width: 100%;
    border-radius: 50%;
  }

  h1 {
    font-size: 4rem;
    font-weight: 500;
    line-height: 100%;
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
  }

  .ingredients {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
  }

  .price {
    color: ${({ theme }) => theme.COLORS.BLUE_100};
    font-size: 4.5rem;
    font-family: "Roboto", sans-serif;
  }
`;

export { Container, Content };
