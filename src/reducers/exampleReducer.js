import Immutable from 'immutable';

const initialState = Immutable.fromJS([
  'This is an example item',
]);

// We're using the concept of 'Ducks' and putting actions and reducers in the same module
export const ADD_EXAMPLE_ITEM = 'ADD_EXAMPLE_ITEM';

export const addExampleItemAction = () => ({
  type: ADD_EXAMPLE_ITEM,
  text: 'This is an example item',
});

export default function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EXAMPLE_ITEM:
      return state.push(action.text);
    default:
      return state;
  }
}

// Example async action using redux thunks

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export const GET_ITEM_PENDING = 'GET_ITEM_PENDING';
const getItemPending = itemText => ({
  type: GET_ITEM_PENDING,
  itemText,
});

export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
const getItemSuccess = (itemId, data) => ({
  type: GET_ITEM_SUCCESS,
  itemId,
  data,
});

export const GET_ITEM_FAILURE = 'GET_ITEM_FAILURE';
const getItemFailure = (itemId, error) => ({
  type: GET_ITEM_FAILURE,
  itemId,
  error,
});

export const getItemAction = itemId => {
  return dispatch => {
    dispatch(getItemPending(itemId));
    return fetch(`http://api.localhost/item/${itemId}`)
      .then(checkStatus)
      .then(response => response.json())
      .then(json => dispatch(getItemSuccess(itemId, json)))
      .catch(error => dispatch(getItemFailure(itemId, error)));
  };
};
