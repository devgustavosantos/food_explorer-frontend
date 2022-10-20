import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  padding: 25px 0;
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
    gap: 10px;

    @media (max-width: 545px) {
      flex-grow: 1;
    }
  }

  p {
    font-family: "DM Sans", sans-serif;
    text-align: center;

    @media (max-width: 545px) {
      flex-grow: 1;
    }
  }
`;

export { Container };
