import { useNavigate } from 'react-router-dom';

import { alertRestrictedArea } from '../../alerts';
import { clientLinks } from './data';

export function useClientNavigation({ isUserLoggedIn, onLogout }) {
  const navigate = useNavigate();

  async function handleNavigation(event) {
    event.preventDefault();

    const { title } = event.currentTarget;

    const linkSelected = clientLinks.find(link => link.name === title);

    const userWantsToLogoutNow =
      isUserLoggedIn && linkSelected.url === '/login';

    if (!isUserLoggedIn && linkSelected.isRestrict) {
      const userWantToLoginNow = await alertRestrictedArea();

      if (!userWantToLoginNow) return;

      return navigate('/login');
    }

    if (userWantsToLogoutNow) {
      return onLogout();
    }

    navigate(linkSelected.url);
  }

  return { handleNavigation };
}
