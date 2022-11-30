import { Route, Routes } from 'react-router-dom';

import { AllOrders } from '../pages/AllOrders';
import { Details } from '../pages/Details';
import { Favorites } from '../pages/Favorites';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { OffAir } from '../pages/OffAir';
import { Order } from '../pages/Order';
import { Profile } from '../pages/Profile';
import { ShoppingCart } from '../pages/ShoppingCart';

export function ClientRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/favorites"
        element={<Favorites />}
      />
      <Route
        path="/profile"
        element={<Profile />}
      />
      <Route
        path="/details/:id"
        element={<Details />}
      />
      <Route
        path="/cart"
        element={<ShoppingCart />}
      />
      <Route
        path="/all-orders"
        element={<AllOrders />}
      />
      <Route
        path="/order/:id"
        element={<Order />}
      />
      <Route
        path="/off-air"
        element={<OffAir />}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}
