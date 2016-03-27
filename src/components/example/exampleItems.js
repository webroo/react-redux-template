import styles from './exampleItems.css';

import React, {PropTypes} from 'react';
import Immutable from 'immutable';

// Presentational components should be logic-free and have actions and props passed in from containers
const ExampleItems = ({items, onAddItem}) => (
  <div>
    <button className={styles.addButton} onClick={() => onAddItem()}>Add another item</button>
    <ul>
    {
      items.map(item => (<li key={item}>{item}</li>))
    }
    </ul>
  </div>
);

ExampleItems.propTypes = {
  items: PropTypes.instanceOf(Immutable.List).isRequired,
  onAddItem: PropTypes.func.isRequired,
};

export default ExampleItems;
