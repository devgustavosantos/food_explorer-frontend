import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { ShoppingCart } from "../pages/ShoppingCart";
import { SignUp } from "../pages/SignUp";
import { SignIn } from "../pages/SignIn";
import { OffAir } from "../pages/OffAir";
import { NotFound } from "../pages/NotFound";

export function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/off-air" element={<OffAir />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
