import React, { Component } from "react";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m4 offset-m4">
            <form className="white" onSubmit={this.handleSubmit}>
              <h5 className="grey-text text-darken-3 center">Sign In</h5>
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-field center">
                <button className="btn pink lighten-1 z-depth-0">Log In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
