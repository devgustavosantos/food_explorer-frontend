import styled from "styled-components";

import { Link } from "react-router-dom";

const Container = styled(Link)`
  width: 100%;
  max-width: 300px;
  margin: auto;
  padding: 20px 20px 35px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  margin-bottom: 25px;

  > button:first-child {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: clamp(2rem, 6vw, 2.4rem);
    align-self: flex-end;
  }

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

  > .client-buttons {
    width: 100%;
    padding: 0 15px;
  }
`;

export { Container };
