import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware,compose } from 'redux';
import { logger } from 'redux-logger';
import * as serviceWorker from './serviceWorker';
import App from './App';

import {reducer} from './store';

const store = createStore(reducer, compose(
  applyMiddleware(logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //it says if we have a redux extensions
));  

ReactDOM.render( 
  <Provider store = {store}><App/> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();