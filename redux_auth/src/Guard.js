import React from "react";
import { Route, Redirect } from "react-router-dom";

const Guard = ({
  component: Component,
  token: Token,
  routeRedirect,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem(Token) ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: routeRedirect, state: { from: props.location } }}
        />
      )
    }
  />
);

export default Guard;
