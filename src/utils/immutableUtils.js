import Immutable from 'immutable';
import {LOCATION_CHANGE} from 'react-router-redux';

/**
 * Alternative version of Redux.combineReducers() that returns an Immutable Map instead of a
 * plain object. Use this to combine other Immutable reducers in your app.
 * @param  {Object}   reducers Object map of reducer functions
 * @return {Function}          Combined reducer function
 */
export function combineImmutableReducers(reducers) {
  return (state = new Immutable.Map(), action) => (
    // withMutations ensures that multiple mutations are executed in the most performant way
    // We use this to call .set() on the state object multiple times
    state.withMutations(tempState => {
      Object.keys(reducers).forEach(reducerName => {
        tempState.set(reducerName, reducers[reducerName](tempState.get(reducerName), action));
      });
    })
  );
}

const initialRouterState = new Immutable.Map({locationBeforeTransitions: null});

/**
 * Custom reducer for react-router-redux, designed to save router state as Immutable data.
 */
export function immutableRouterReducer(state = initialRouterState, {type, payload}) {
  if (type === LOCATION_CHANGE) {
    return state.merge({locationBeforeTransitions: payload});
  }
  return state;
}
