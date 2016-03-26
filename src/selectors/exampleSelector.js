import {createSelector} from 'reselect';

// Select the example items from the state
const exampleItemsSelector = state => state.get('exampleItems');

// Creates a selector that filters the items down to only ones that contain the word 'example'.
// Reselect will only recompute when the return value of exampleItemsSelector changes.
export const filteredExampleItemsSelector = createSelector(
  [exampleItemsSelector],
  exampleItems => exampleItems.filter(item => item.indexOf('example') > -1)
);
