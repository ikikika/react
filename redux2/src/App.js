import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateUser } from "./actions/user-actions";
class App extends Component {
  //we need to access "this" in our methods, we need to bind it in the constructor
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(e) {
    this.props.onUpdateUser(e.target.value);
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <input onChange={this.onUpdateUser} />
        {this.props.user}
      </div>
    );
  }
}

//mapStateToProps: receives the state from the store, then we can decide what props we want to pass to the component
const mapStateToProps = (state, props) => {
  console.log(props);
  return {
    products: state.products,
    user: state.user,
    userPlusProp: `${state.user} ${props.randomProp}`
  };
};

//mapActionsToProps: allows us to dispatch actions easily so we don't need to dispatch actions from the components.
// we can call functions that will automaticlaly dispatch actions to the store
const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      onUpdateUser: updateUser
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
