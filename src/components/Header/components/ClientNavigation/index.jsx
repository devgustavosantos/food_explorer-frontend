import {
  Container,
  IconMenu,
  LinkName,
  ListItem,
  NavigationLink,
} from '../navigationStyles';
import { clientLinks } from './data';
import { useClientNavigation } from './useClientNavigation';

export function ClientNavigation({ isUserLoggedIn, onLogout }) {
  const { handleNavigation } = useClientNavigation({
    isUserLoggedIn,
    onLogout,
  });

  return (
    <Container>
      {clientLinks.map(link => (
        <ListItem key={link.name}>
          <NavigationLink
            title={link.name}
            onClick={handleNavigation}
            name={link.name}
          >
            <IconMenu>{link.icon}</IconMenu>
            <LinkName>{link.name}</LinkName>
          </NavigationLink>
        </ListItem>
      ))}
    </Container>
  );
}
