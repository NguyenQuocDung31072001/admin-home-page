import { LinearProgress } from "@material-ui/core";
import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import { routers } from "../config/router";
import NotFound from "./notFound";

export default function RouteApp(props) {
  const token = localStorage.getItem("access-token");
  //  fake check Authecation
  const isAuth = () => {
    // save token in localStorage ==>> logined
    return !!token;
  };
  return (
    <Switch>
      {routers.map((r, index) => (
        <Route
          key={index}
          exact
          path={r.path}
          render={(props) => {
            const RenderedComponent = lazy(() => import(`./${r.component}`));
            return (
              <Suspense fallback={<LinearProgress />}>
                {r.private ? (
                  isAuth() ? (
                    <RenderedComponent props={props} />
                  ) : (
                    <Redirect to="/login" />
                  )
                ) : isAuth() ? (
                  <Redirect to="/" />
                ) : (
                  <RenderedComponent props={props} />
                )}
              </Suspense>
            );
          }}
        />
      ))}
      <Route component={<NotFound />} />
    </Switch>
  );
}
