import { LinearProgress } from "@material-ui/core";
import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { routers } from "../config/router";
import AuthStore, { AuthContext } from "../store/authStore";
import NotFound from "./notFound";
<<<<<<< HEAD
import AdminHome from "../admin-home-page"
=======
import apiHelper from "../helper/apiHelper";
import LayoutPage from "../layouts/layout";

>>>>>>> a1a7adadfc40918040081215758e34617ba763ca
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
<<<<<<< HEAD
    <Switch>
      {routers.map((r, index) => (
        <Route
          key={index}
          exact
          path={r.path}
          render={(props) => {
            const RenderedComponent = lazy(() => import(`./${r.component}`));
            const RenderedComponentProduct=lazy(()=>import(`../component/product/content`))
            return (
              <Suspense fallback={<LinearProgress />}>
                {r.private ? (
                  isAuth() ? (
                    <RenderedComponent props={props} />
                    // <RenderedComponentProduct props={props}/>
                  ) : (
                    <Redirect to="/login" />
                  )
                ) : isAuth() ? (
                  <Redirect to="/" />
                  // <Redirect to="/product"/>
                ) : (
                  <RenderedComponent props={props} />
                )}
              </Suspense>
            );
          }}
        />
      ))}
      {/* <Route path="/home" component={<AdminHome/>}/> */}
      <Route component={<NotFound />} />
    </Switch>
=======
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
                      <LayoutPage>
                        <RenderedComponent props={props} />
                      </LayoutPage>
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
>>>>>>> a1a7adadfc40918040081215758e34617ba763ca
  );
}
