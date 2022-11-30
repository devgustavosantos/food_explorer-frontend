import styled from 'styled-components';

const Container = styled.footer`
  width: 100%;
  padding: clamp(17px, 5vw, 25px) 0;
  background-color: ${({ theme }) => theme.COLORS.BLUE_700};

  .my-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
  }

  .brand {
    min-width: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: clamp(7px, 2.2vw, 10px);

    img {
      width: clamp(2rem, 6vw, 3rem);
      height: clamp(2rem, 6vw, 3rem);
    }

    h3 {
      color: ${({ theme }) => theme.COLORS.GRAY_800};
      font-size: clamp(1.7rem, 5vw, 2.5rem);
    }

    @media (max-width: 545px) {
      flex-grow: 1;
    }
  }

  p {
    font-family: 'DM Sans', sans-serif;
    text-align: center;
    font-size: clamp(1.2rem, 3vw, 1.4rem);

    @media (max-width: 545px) {
      flex-grow: 1;
    }
  }
`;

export { Container };
