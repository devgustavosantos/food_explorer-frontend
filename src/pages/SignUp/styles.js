import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: auto;
  max-width: 1120px;

  display: flex;

  @media (min-width: 900px) {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  h1 {
    font-size: 3rem;
    font-family: 'Roboto', sans-serif;
  }
`;

const Brand = styled.div`
  display: none;
  margin-left: 40px;

  @media (min-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 540px;
  min-height: 100vh;
  margin: auto;
  padding: 80px clamp(15px, 4vw, 40px);
  text-align: center;
  background-color: ${({ theme }) => theme.COLORS.BLUE_700};

  @media (min-width: 540px) {
    min-height: initial;
    border-radius: 15px;
    margin: 40px auto;
  }

  @media (min-width: 900px) {
    margin-right: 40px;
  }

  > .top {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 40px;

    @media (min-width: 900px) {
      display: none;
    }
  }

  img {
    width: 35px;
    height: 35px;
  }

  h2 {
    margin-bottom: 40px;
  }

  > *:last-child {
    margin-top: 40px;

    > * {
      font-size: 1.4rem;
    }
  }
`;

export { Container, Brand, Form };
