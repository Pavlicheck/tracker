import React from "react";
import { Route, RouteProps, Switch } from "react-router-dom";

export const PageContent = ({ routes }: { routes: Array<RouteProps> }) => {
  return (
    <Switch>
      {routes.map(route => (
        <Route {...route} />
      ))}
    </Switch>
  );
};
