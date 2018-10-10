import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import { updateUser, apiRequest } from './actions/user-actions';

class App extends Component {
  //because we need to access 'this' for onUpdateUser, we need to bind it
  constructor(props){
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  componentDidMount() {
    this.props.onApiRequest();
  }

  //because we use onUpdateUser method on onClick, we need to define it
  onUpdateUser(event){
    this.props.onUpdateUser(event.target.value);
  }
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <input onChange={this.onUpdateUser} />
        {this.props.user}
      </div>
    );
  }
}

//connect takes 3 arguments

//1st mapStateToProps: receives state of store, then use that state to decide what props we want to provide for that component
const mapStateToProps = (state, props) => {
  
  //using passed props to customise the props we're giving the component
  return {
    products: state.products,
    user: state.user,
    userPlusProp: `${state.user} ${props.aRandomProp}`
  }
};

//2nd mapActionsToProps: allows us to dispatch actions from our components easily so we dont need to mess with using dispatch in the components themselves
// need to bind dispatch to actions
const mapActionsToProps = {
    onUpdateUser: updateUser,
    onApiRequest: apiRequest
};

//3rd mergeProps
//propsFromState : whatever we return from mapStatetoProps
//mapActionsToProps: what we return from mapActionsToProps
//ownProps : passed in props
// const mergeProps = ( propsFromState, propsFromDispatch, ownProps) => {
//   console.log(propsFromState, propsFromDispatch, ownProps);
//   return {};
// } 

export default connect(mapStateToProps, mapActionsToProps) (App);
