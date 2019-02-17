import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import Posts from "./components/Posts";
import Postform from "./components/Postform";
import "./App.css";

const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Postform />
        <hr />
        <Posts />
      </Provider>
    );
  }
}

export default App;
