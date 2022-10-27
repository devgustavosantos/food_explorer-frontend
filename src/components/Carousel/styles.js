import styled from "styled-components";

const Container = styled.section`
  > h2 {
    margin-bottom: 40px;
  }

  .carousel-window {
    position: relative;

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
      background: ${({ theme }) =>
        `linear-gradient(to right, ${theme.COLORS.BLUE_800}, transparent)`};
    }

    > button:nth-of-type(2) {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      padding: 0 15px 0 60px;
      background: ${({ theme }) =>
        `linear-gradient(to left, ${theme.COLORS.BLUE_800}, transparent)`};
    }
  }

  .carousel-meals {
    display: flex;
    gap: 25px;
    width: 100%;
    overflow: hidden;
    scroll-behavior: smooth;
  }
`;

export { Container };
