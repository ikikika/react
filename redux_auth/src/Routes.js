import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/User/Auth/Login";
import Register from "./pages/User/Auth/Register";
import Guard from "./Guard";
import PrivateRoutes from "./PrivateRoutes";

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => (
          <Redirect to={{ pathname: "/home" }} props={props} />
        )}
      />
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />

      <Guard
        path="/user"
        token="user-token"
        routeRedirect="/login"
        component={PrivateRoutes}
      />
    </Switch>
  );
};

export default Routes;
