import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home/Home";
import { RouteData } from "./RouteData";

export const DashboardRoutes = (roles, privado = false) => {
  return (
    <>
      <Layout>
        <Switch>
          <Route key={0} exact={true} path="/" component={Home} />
          {RouteData.map(
            ({ component, path, rolId, exact }) =>
              (!privado && (
                <Route
                  key={rolId}
                  exact={exact}
                  path={path}
                  component={component}
                />
              )) ||
              null
          )}
          {privado &&
            RouteData.map(
              ({ component, path, rolId, exact }) =>
                (privado && (
                  <Route
                    key={rolId}
                    exact={exact}
                    path={path}
                    component={component}
                  />
                )) ||
                null
            )}
          <Route exact={true} path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </>
  );
};
