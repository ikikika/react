import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//we need 2 reducers and we can use combineReducers to combine them
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';

import { Provider } from 'react-redux';

import productsReducer from './reducers/products-reducer';
import userReducer from './reducers/user-reducer';

const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
});

const allStoreEnhancers = compose(
    window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
    allReducers, 
    {
        products: [{name: 'iPhone'}],
        user: 'Micheal'
    },
    allStoreEnhancers
);
console.log(store.getState());

const updateUserAction = {
    type: 'updateUser',
    payload: {
        user: 'John'
    }
}
store.dispatch(updateUserAction);

ReactDOM.render(
    <Provider store={store}>
        <App aRandomProp="whatever"/>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
