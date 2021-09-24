import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

import { DashboardRoutes } from "./DashboardRoutes";
import MiCuenta from "../pages/MiCuenta/MiCuenta";

export const AppRouter = () => {
  
  const { user, roles } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <PublicRoute
          path="/"
          component={() => DashboardRoutes(roles)}
          isAuthenticated={user.logged}
        />

        <PrivateRoute
          exact
          path="/micuenta"
          component={MiCuenta}
          isAuthenticated={user.logged}
        />
        <Route path="*">
          <Redirect to={"/"} />
        </Route>
      </Switch>
    </Router>
  );
};
