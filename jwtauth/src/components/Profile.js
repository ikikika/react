import React, { Component } from "react";
import Auth from "./Auth/Auth";

class Profile extends Component {
  state = {
    name: "",
    email: ""
  };

  componentDidMount() {
    Auth.getAuth().then(res => {
      if (res.success === true) {
        this.setState({
          name: res.data.user.name,
          email: res.data.user.email
        });
      } else if (res.success === false) {
        this.props.history.push("/login");
      }
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
