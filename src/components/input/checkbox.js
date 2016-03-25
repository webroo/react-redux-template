import React, {PropTypes} from 'react';

/**
 * Input checkbox component that allows the `indeterminate` flag to be set via props.
 * @param  {Object} props Component props
 * @return {ReactElement}
 */
const Checkbox = props => (
  <input
    {...props}
    type="checkbox"
    ref={input => {
      if (input) {
        input.indeterminate = props.indeterminate;
      }
    }}
  />
);

Checkbox.propTypes = {
  indeterminate: PropTypes.bool,
};

export default Checkbox;
