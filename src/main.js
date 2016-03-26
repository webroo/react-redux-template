/* globals process */

// Polyfills for the browser environment
import 'babel-polyfill';
import 'whatwg-fetch';

import './normalize.css';
import './global.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {Iterable} from 'immutable';

import rootReducer from './reducers/rootReducer';
import App from './containers/app/app';

// List of Redux middlewares
const middlewares = [thunk];

// We only want to add Redux logger middleware in a dev environment
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger({
    collapsed: true,
    stateTransformer: state => (
      Iterable.isIterable(state) ? state.toJS() : state
    ),
  }));
}

// Redux middleware needs to be applied to create a Store enhancer
let storeEnhancer = applyMiddleware(...middlewares);

// If we're in dev mode we add a hook for the Redux Chrome tools to the store enhancer
if (process.env.NODE_ENV !== 'production') {
  storeEnhancer = compose(
    storeEnhancer,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
}

// Create the Redux store
const mainStore = createStore(rootReducer, storeEnhancer);

// Create an new history object that syncs navigation events with the Redux store
// See `src/utils/immutableUtils#immutableRouterReducer` for the associated reducer
// Because we're using Immutable we also supply a function that converts it back to regular JS
const syncedHistory = syncHistoryWithStore(browserHistory, mainStore, {
  selectLocationState: state => state.get('routing').toJS(),
});

ReactDOM.render((
  <Provider store={mainStore}>
    <Router history={syncedHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
), document.getElementById('app'));
