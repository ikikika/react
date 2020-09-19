import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App";
import Welcome from "./components/Welcome";
import Signup from "./components/Auth/Signup";
import * as serviceWorker from "./serviceWorker";
import reducers from "./reducers";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers, {})}>
      <BrowserRouter>
        <App>
          <Route path="/" exact component={Welcome} />
          <Route path="/signup" exact component={Signup} />
        </App>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
