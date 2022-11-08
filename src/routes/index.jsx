import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { AdmRoutes } from "./adm.routes";
import { ClientRoutes } from "./client.routes";
import { PublicRoutes } from "./public.routes";

import { useAuth } from "../hooks/auth";

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

  useEffect(() => {
    console.log({ userInfos });
  }, []);

  return <BrowserRouter>{rederRoutes()}</BrowserRouter>;
}
