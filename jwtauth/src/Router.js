import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Landing from "./components/Landing";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Profile from "./components/Profile";
import Auth from "./components/Auth/Auth";
import CreateProduct from "./components/Products/Create";

const Router = props => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/product/create" component={CreateProduct} />
    </Switch>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login"
          }}
        />
      )
    }
  />
);

export default Router;
