import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  backdrop-filter: blur(15px);
  background-color: red;
  background: #00000080;
  display: flex;
  gap: 10px;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 4;
  flex-direction: column;

  .circle {
    animation: rotating 1s infinite;
    border-radius: 50%;
    border: ${({ theme }) => `5px solid ${theme.COLORS.BLUE_700}`};
    border-top-color: ${({ theme }) => `${theme.COLORS.BLUE_100}`};
    height: 50px;
    width: 50px;
  }

  .loading {
    animation: fade-out 1s 30s forwards;
  }

  .just-moment {
    animation: fade-in 1s 30s forwards;
    opacity: 0;
  }

  @keyframes rotating {
    to {
      transform: rotate(1turn);
    }
  }

  @keyframes fade-in {
    to {
      transform: translateY(-150%);
      opacity: 1;
    }
  }

  @keyframes fade-out {
    to {
      transform: translateY(50%);
      opacity: 0;
    }
  }
`;

export { Container };
