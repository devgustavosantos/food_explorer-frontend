import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  > .my-wrapper {
    flex-grow: 1;

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
  }
`;

const Mobile = styled.main`
  padding: clamp(30px, 8vw, 60px) 0;

  @media (min-width: 780px) {
    display: none;
  }

  .top-mobile {
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
  }
`;

// const Top = styled.div`
//   width: 100%;
//   padding: 30px 10px;
//   margin-bottom: clamp(30px, 8vw, 60px);
//   border-radius: 10px;
//   position: relative;
//   overflow: hidden;
//   background: ${({ theme }) =>
//     `linear-gradient(${theme.COLORS.BLUE_300}, ${theme.COLORS.BLUE_600})`};

//   img {
//     position: absolute;
//     bottom: 0;
//     right: 0;
//     transform: translateX(50%);
//     z-index: 1;
//     height: 100%;
//   }

//   h1,
//   h3 {
//     position: relative;
//     z-index: 2;
//     text-shadow: 0 0 10px black;
//   }

//   h1 {
//     font-family: "Poppins", sans-serif;
//     font-weight: 500;
//     font-size: clamp(3.2rem, 8vw, 4rem);
//     line-height: 100%;
//     margin-bottom: 15px;
//   }

//   h3 {
//     font-family: "Poppins", sans-serif;
//     font-size: clamp(1.4rem, 4vw, 1.6rem);
//     font-weight: 400;
//   }
// `;

const Desktop = styled.main`
  @media (max-width: 780px) {
    display: none;
  }

  .top-desktop {
    background: ${({ theme }) =>
      `linear-gradient(${theme.COLORS.BLUE_300}, ${theme.COLORS.BLUE_600})`};
    border-radius: 10px;
    margin: 150px 0 35px;
    padding: 85px 0;
    display: grid;
    grid-template-areas:
      "A B"
      "A C";
    grid-template-columns: 1fr 430px;
    position: relative;

    img {
      position: absolute;
      height: 155%;
      left: -23px;
      bottom: 0;
    }

    h1 {
      grid-area: B;
    }

    h3 {
      grid-area: C;
    }
  }

  .my-section {
    .items-section {
      position: relative;
      display: flex;
      gap: 25px;

      > button {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 2.5rem;
      }

      > button:nth-of-type(1) {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        padding: 0 60px 0 15px;
        background: linear-gradient(to right, black, transparent);
      }

      > button:nth-of-type(2) {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        padding: 0 15px 0 60px;
        background: linear-gradient(to left, black, transparent);
      }
    }
    overflow-x: scroll;
  }
`;

export { Container, Mobile, Desktop };
