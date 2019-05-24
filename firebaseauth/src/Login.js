import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebaseInit from "./firebaseConfig";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  login = e => {
    e.preventDefault();
    firebaseInit
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button type="submit" onClick={this.login}>
            Login
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
