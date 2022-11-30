import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Container = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.COLORS.WHITE};

  p {
    font-size: clamp(1.4rem, 4vw, 2.4rem);
  }
`;

export { Container };
