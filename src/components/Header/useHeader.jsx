import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { alertRestrictedArea } from './alerts';
import { clientLinks } from './data';

export function useHeader() {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { userInfos } = useAuth();

  function handleMenu() {
    setIsMenuOpen(state => !state);
  }

  async function handleNavigation(event) {
    event.preventDefault();

    const { title } = event.currentTarget;

    const linkSelected = clientLinks.find(link => link.name === title);

    if (!userInfos && linkSelected.isRestrict) {
      const userWantToLoginNow = await alertRestrictedArea();

      if (!userWantToLoginNow) return;

      return navigate('/login');
    }

    navigate(linkSelected.url);
  }

  return { isMenuOpen, handleMenu, handleNavigation };
}
