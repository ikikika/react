import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
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
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m4 offset-m4">
            <form className="white" onSubmit={this.handleSubmit}>
              <h5 className="grey-text text-darken-3 center">Sign Up</h5>
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
              <div className="input-field">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-field center">
                <button className="btn pink lighten-1 z-depth-0">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(SignUp);
