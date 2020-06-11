import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/User/Auth/Login";
import Register from "./pages/User/Auth/Register";

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => <Redirect to={{ pathname: "/home" }} />}
      />
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  );
};

export default Routes;
