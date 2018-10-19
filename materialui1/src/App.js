import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
