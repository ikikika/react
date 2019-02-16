import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//we need 2 reducers and we can use combineReducers to combine them
import { combineReducers, createStore } from 'redux';
//reducers takes 2 parameters, state and action
//reducers listen to every single action that is sent
//we need to be able to figure out what to do differently for each action
function productsReducer(state = [], action){ 
    return state;
}
function userReducer(state = '', action){
    return state;
}
const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
});
const store = createStore(allReducers, {
    products: [{name: 'iPhone'}],
    user: 'Micheal'
});
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
