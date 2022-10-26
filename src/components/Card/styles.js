import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  max-width: 300px;
  margin: auto;
  padding: 55px 20px 35px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_900};
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  margin-bottom: 25px;

  > img {
    width: 175px;
    aspect-ratio: 1;
    border-radius: 50%;
  }

  > h2 {
    font-family: "Poppins";
    font-size: clamp(2rem, 6vw, 2.4rem);
  }

  p:nth-of-type(1) {
    font-size: 1.4rem;
  }

  p:nth-of-type(2) {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.BLUE_100};
  }
`;

export { Container };
