import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "Components/Dashboard/Dashboard";
import Create from "Components/Create/Create";
import Approve from "Components/Approve/Approve";
import ClientSearch from "Components/Client/Clientsearch";
import ClientProfile from "Components/Client/ClientProfile";
import { getAuthToken } from "util/utilities";
import PracticeSearch from "Components/PracticeSetup/PracticeSearch";
import Demo from "pages/Demo";

const DashboardRoute = () => (
  <Switch>
    <PrivateRoute exact path="/Dashboard" component={Dashboard} />
    <PrivateRoute exact path="/Dashboard" component={Dashboard} />
    <PrivateRoute exact path="/Create" component={Create} />
    <PrivateRoute exact path="/Approve" component={Approve} />
    <PrivateRoute exact path="/ClientSearch" component={ClientSearch} />
    <PrivateRoute exact path="/PracticeSearch" component={PracticeSearch} />
    <PrivateRoute
      exact
      path="/clientprofile/:clientId"
      component={ClientProfile}
    />
    <Route exact path="/Demo" component={Demo}></Route>
  </Switch>
);
export default DashboardRoute;

interface PrivateRouteProps {
  component: React.FC;
  exact?: boolean;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const token = getAuthToken();
  return (
    <Route
      {...rest}
      render={() =>
        token ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/Login",
            }}
          />
        )
      }
    />
  );
};
