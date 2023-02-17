import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { confirmLogout } from './alerts';

export function useHeader() {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { userInfos, clearLoginData } = useAuth();

  const isUserLoggedIn = !!userInfos;

  const shouldAdmNavigationBeRendered = userInfos?.isAdm;

  const shouldClientNavigationBeRendered = !userInfos || !userInfos?.isAdm;

  function handleMenu() {
    setIsMenuOpen(state => !state);
  }

  async function handleLogout() {
    const userConfirmExit = await confirmLogout();

    if (!userConfirmExit) return;

    navigate('/');

    return clearLoginData();
  }

  return {
    handleLogout,
    handleMenu,
    isMenuOpen,
    isUserLoggedIn,
    shouldAdmNavigationBeRendered,
    shouldClientNavigationBeRendered,
  };
}
