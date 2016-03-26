import Immutable from 'immutable';

const initialState = Immutable.fromJS([
  'This is example item no. ' + Date.now(),
]);

// We're using the concept of 'Ducks' and putting actions and reducers in the same module
export const ADD_EXAMPLE_ITEM = 'ADD_EXAMPLE_ITEM';

export const addExampleItemAction = () => ({
  type: ADD_EXAMPLE_ITEM,
  text: 'This is example item no. ' + Date.now(),
});

export default function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EXAMPLE_ITEM:
      return state.push(action.text);
    default:
      return state;
  }
}
