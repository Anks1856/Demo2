import React from "react";
import ResetPassword from "Components/Login/resetPassword";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "../Components/Login/Login";
import ForgotPassword from "Components/Login/forgotPassword";
import { getAuthToken } from "util/utilities";

const AuthRoutes = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={() =>
        getAuthToken() ? <Redirect to="/Dashboard" /> : <Redirect to="/Login" />
      }
    />
    <AlreadyLoggedInRoute exact component={Login} path="/Login" />
    <AlreadyLoggedInRoute
      exact
      component={ForgotPassword}
      path="/ForgotPassword"
    />
    <AlreadyLoggedInRoute
      exact
      component={ResetPassword}
      path="/ResetPassword/:userId"
    />
  </Switch>
);
export default AuthRoutes;

interface PrivateRouteProps {
  component: React.FC;
  exact?: boolean;
  path: string;
}

const AlreadyLoggedInRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const user = getAuthToken();
  return (
    <Route
      {...rest}
      render={() =>
        user ? (
          <Redirect
            to={{
              pathname: "/Dashboard",
            }}
          />
        ) : (
          <Component />
        )
      }
    />
  );
};
