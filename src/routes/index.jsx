import { BrowserRouter } from "react-router-dom";

import { AdmRoutes } from "./adm.routes";
import { ClientRoutes } from "./client.routes";
import { PublicRoutes } from "./public.routes";

export function Routes() {
  return (
    <BrowserRouter>
      <ClientRoutes />
    </BrowserRouter>
  );
}
