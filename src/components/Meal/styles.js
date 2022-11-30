import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: grid;
  grid-template-areas:
    'A B B C'
    'A D E E';
  grid-template-columns: 1fr 1fr 1.5fr 1fr;

  align-items: center;

  > img {
    grid-area: A;
    width: clamp(50px, 14vw, 70px);
    aspect-ratio: 1;
    border-radius: 50%;
  }

  > p:nth-of-type(1) {
    grid-area: B;
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.6rem, 5vw, 2rem);
  }

  > p:nth-of-type(2) {
    color: ${({ theme }) => theme.COLORS.GRAY_900};
    font-size: clamp(1.4rem, 4vw, 1.6rem);
    grid-area: C;
  }

  > button {
    grid-area: D;
    justify-self: flex-start;
    color: ${({ theme }) => theme.COLORS.RED_800};
    font-size: clamp(1.4rem, 4vw, 1.6rem);
  }
`;

export { Container };
