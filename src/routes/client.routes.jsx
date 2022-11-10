import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Favorites } from "../pages/Favorites";
import { Profile } from "../pages/Profile";
import { Details } from "../pages/Details";
import { ShoppingCart } from "../pages/ShoppingCart";
import { AllOrders } from "../pages/AllOrders";
import { Order } from "../pages/Order";
import { OffAir } from "../pages/OffAir";
import { NotFound } from "../pages/NotFound";

export function ClientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/all-orders" element={<AllOrders />} />
      <Route path="/order/:id" element={<Order />} />
      <Route path="/off-air" element={<OffAir />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
