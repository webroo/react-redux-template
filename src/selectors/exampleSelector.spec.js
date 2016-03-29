import Immutable from 'immutable';
import {expect} from 'chai';

import {filteredExampleItemsSelector} from './exampleSelector';

describe('filteredExampleItemsSelector', () => {
  it('should return filtered items', () => {
    const state = Immutable.fromJS({
      exampleItems: [
        'One example',
        'Two',
      ],
    });
    const expectedResult = Immutable.fromJS([
      'One example',
    ]);
    const result = filteredExampleItemsSelector(state);
    expect(result).to.eql(expectedResult);
  });
});
