import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger'
import allReducers from './reducers';
import App from './components/index';

const store = compose(applyMiddleware(thunk))(createStore)(allReducers);

// Creates the Redux reducer with the redux-thunk middleware, which allows us
// to do asynchronous things in the actions
// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const store = createStoreWithMiddleware(allReducers);

//const store=createStore(allReducers);  //creating the store, it will not be changing, Reducer's responsibility will be to update the store

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
        </div>
    </Provider>,
    document.getElementById('root')
);
