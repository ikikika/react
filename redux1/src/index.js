import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
//reducers takes 2 parameters, state and action
//reducers listen to every single action that is sent
//we need to be able to figure out what to do differently for each action
function reducer(state, action){ 
    console.log(action); //make sure that the action sent to the dispatcher is reaching the reducer
    return 'State';
}
const store = createStore(reducer);
console.log(store.getState());

//create a dispatcher
const action = {
    type: 'changeState',
    payload: {
        newState: 'New State'
    }
}
store.dispatch(action);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
