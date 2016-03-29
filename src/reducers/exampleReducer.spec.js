import Immutable from 'immutable';
import {expect} from 'chai';

import exampleReducer, {ADD_EXAMPLE_ITEM, addExampleItem} from './exampleReducer';

describe('addExampleItem action', () => {
  it('should return an action object with text', () => {
    const action = addExampleItem();
    expect(action).to.eql({
      type: ADD_EXAMPLE_ITEM,
      text: 'This is an example item',
    });
  });
});

describe('exampleReducer', () => {
  it('should return the initial state', () => {
    const newState = exampleReducer(undefined, {});
    console.log('newState:', newState.toJS());
    expect(newState).to.equal(Immutable.fromJS(["This is an example item"]));
  });

  it('should add a new item', () => {
    const initialState = Immutable.fromJS([
      'This is an example item',
    ]);
    const expectedState = Immutable.fromJS([
      'This is an example item',
      'This is an example item',
    ]);
    const newState = exampleReducer(initialState, addExampleItem());
    expect(newState).to.equal(expectedState);
  });
});
