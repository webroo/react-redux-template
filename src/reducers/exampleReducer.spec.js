import Immutable from 'immutable';
import {expect} from 'chai';

import exampleReducer, {ADD_EXAMPLE_ITEM, addExampleItemAction} from './exampleReducer';

describe('Add example item action', () => {
  it('should return a new action with text', () => {
    const action = addExampleItemAction();
    expect(action).to.eql({
      type: ADD_EXAMPLE_ITEM,
      text: 'This is an example item',
    });
  })
});

describe('Example reducer', () => {
  it('should add a new item', () => {
    const initialState = Immutable.fromJS([
      'This is an example item',
    ]);
    const expectedState = Immutable.fromJS([
      'This is an example item',
      'This is an example item',
    ]);
    const newState = exampleReducer(initialState, addExampleItemAction());
    expect(newState).to.equal(expectedState);
  });
});
