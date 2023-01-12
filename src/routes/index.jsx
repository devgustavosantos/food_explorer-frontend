import { HashRouter } from 'react-router-dom';

import { useAuth } from '../hooks/auth';
import { AdmRoutes } from './adm.routes';
import { ClientRoutes } from './client.routes';
import { PublicRoutes } from './public.routes';

export function Routes() {
  const { userInfos } = useAuth();

  function rederRoutes() {
    if (!userInfos) {
      return <PublicRoutes />;
    }

    if (userInfos.isAdm) {
      return <AdmRoutes />;
    }

    if (!userInfos.isAdm) {
      return <ClientRoutes />;
    }
  }

  return <HashRouter>{rederRoutes()}</HashRouter>;
}
