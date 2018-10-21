import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";
import Exercises from "./Components/Exercises";

import { muscles, exercises } from "./Components/store";

class App extends Component {
  states = {
    exercises
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Exercises />
        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}

export default App;
