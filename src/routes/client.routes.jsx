import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { Details } from "../pages/Details";
import { ShoppingCart } from "../pages/ShoppingCart";
import { AllOrders } from "../pages/AllOrders";
import { Order } from "../pages/Order";
import { NotFound } from "../pages/NotFound";

export function ClientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/all-orders" element={<AllOrders />} />
      <Route path="/order/:id" element={<Order />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
