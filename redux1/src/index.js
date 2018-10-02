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
    
    //to act upon the action we just sent/dispatch
    if( action.type === 'changeState' ){
        return action.payload.newState;
    }

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
console.log(store.getState);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
