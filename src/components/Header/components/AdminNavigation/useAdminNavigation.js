import { useNavigate } from 'react-router-dom';

import { adminLinks } from './data';

export function useAdminNavigation(onLogout) {
  const navigate = useNavigate();

  function handleNavigation(event) {
    event.preventDefault();

    const { title } = event.currentTarget;

    const linkSelected = adminLinks.find(link => link.name === title);

    const userWantsToLogoutNow = linkSelected.url === '/login';

    if (userWantsToLogoutNow) {
      return onLogout();
    }

    navigate(linkSelected.url);
  }

  return { handleNavigation };
}
