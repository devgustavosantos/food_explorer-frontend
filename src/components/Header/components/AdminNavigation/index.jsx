import {
  Container,
  IconMenu,
  LinkName,
  ListItem,
  NavigationLink,
} from '../navigationStyles';
import { adminLinks } from './data';
import { useAdminNavigation } from './useAdminNavigation';

export function AdminNavigation({ onLogout }) {
  const { handleNavigation } = useAdminNavigation(onLogout);

  return (
    <Container>
      {adminLinks.map(link => (
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
