import styled from 'styled-components';

import { defaultBreakpoint } from '../../../styles/variables';

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: ${defaultBreakpoint}) {
    flex-direction: row;
    align-items: center;
  }
`;

const ListItem = styled.li`
  list-style: none;

  @media (max-width: ${defaultBreakpoint}) {
    &:first-child {
      margin-top: 2rem;
    }
  }
`;

const NavigationLink = styled.a`
  align-items: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  font-size: clamp(1.4rem, 4vw, 1.6rem);
  gap: 10px;
`;

const IconMenu = styled.span`
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  display: flex;
  align-items: center;
`;

const LinkName = styled.span`
  @media (min-width: ${defaultBreakpoint}) {
    display: none;
  }
`;

export { Container, IconMenu, LinkName, ListItem, NavigationLink };
