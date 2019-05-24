import React, { Component } from "react";
import "./App.css";
import firebaseInit from "./firebaseConfig";
import Home from "./Home";
import Login from "./Login";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebaseInit.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ user });
        // localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem("user");
      }
    });
  }

  render() {
    // console.log(this.state);
    return <div className="App">{this.state.user ? <Home /> : <Login />}</div>;
  }
}

export default App;
