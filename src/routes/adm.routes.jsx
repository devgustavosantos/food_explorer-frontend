import { Route, Routes } from 'react-router-dom';

import { AllOrders } from '../pages/AllOrders';
import { Details } from '../pages/Details';
import { Home } from '../pages/Home';
import { NewAndEdit } from '../pages/NewAndEdit';
import { NotFound } from '../pages/NotFound';
import { OffAir } from '../pages/OffAir';
import { Order } from '../pages/Order';
import { Profile } from '../pages/Profile';

export function AdmRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/profile"
        element={<Profile />}
      />
      <Route
        path="/new"
        element={<NewAndEdit />}
      />
      <Route
        path="/edit/:id"
        element={<NewAndEdit />}
      />
      <Route
        path="/details/:id"
        element={<Details />}
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
