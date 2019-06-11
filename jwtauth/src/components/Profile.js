import React, { Component } from "react";
import { getProfile } from "./UserFunctions";

class Profile extends Component {
  state = {
    name: "",
    email: ""
  };

  componentDidMount() {
    getProfile().then(res => {
      this.setState({
        name: res.user.name,
        email: res.user.email
      });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Welcome, {this.state.name}</h1>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
