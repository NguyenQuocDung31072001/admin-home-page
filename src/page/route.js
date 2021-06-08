import { LinearProgress } from "@material-ui/core";
import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { routers } from "../config/router";
import AuthStore, { AuthContext } from "../store/authStore";
import NotFound from "./notFound";
import apiHelper from "../helper/apiHelper";

export default function RouteApp(props) {
  const token = localStorage.getItem("access-token");
  const [authState, dispatch] = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const { isAuth, user } = authState;
  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const { data } = await apiHelper.get("/account/me");
        const { acc } = data;
        dispatch({ type: "SET_USER", payload: acc });
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (token) {
      getUser();
    }
  }, []);
  useEffect(() => {
    console.log("authState", authState);
  });

  return (
    <BrowserRouter>
      <Switch>
        {routers.map((r, index) => (
          <Route
            key={index}
            exact
            path={r.path}
            render={(props) => {
              const RenderedComponent = lazy(() => import(`./${r.component}`));
              return !loading ? (
                <Suspense fallback={<LinearProgress />}>
                  {r.private ? (
                    isAuth ? (
                      <RenderedComponent props={props} />
                    ) : (
                      <Redirect to="/login" />
                    )
                  ) : isAuth ? (
                    <Redirect to="/" />
                  ) : (
                    <RenderedComponent props={props} />
                  )}
                </Suspense>
              ) : (
                <LinearProgress />
              );
            }}
          />
        ))}
        <Route component={<NotFound />} />
      </Switch>
    </BrowserRouter>
  );
}
