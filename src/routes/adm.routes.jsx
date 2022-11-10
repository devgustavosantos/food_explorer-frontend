import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { New } from "../pages/New";
import { Details } from "../pages/Details";
import { AllOrders } from "../pages/AllOrders";
import { Order } from "../pages/Order";
import { OffAir } from "../pages/OffAir";
import { NotFound } from "../pages/NotFound";

export function AdmRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/new" element={<New />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/all-orders" element={<AllOrders />} />
      <Route path="/order/:id" element={<Order />} />
      <Route path="/off-air" element={<OffAir />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
