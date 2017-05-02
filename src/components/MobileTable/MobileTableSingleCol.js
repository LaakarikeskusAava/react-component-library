import React from 'react';
import Classnames from 'classnames';
import PropTypes from 'prop-types';

export const MobileTableSingleCol = ({ row, odd }) => {
  const classes = Classnames('table__row', `table__row--${odd ? 'odd' : 'even'}`);

  return (
    <tr className={classes}>
      {row.map((item) => {
        return (
          <td>{item}</td>
        );
      })}
    </tr>
  );
};

MobileTableSingleCol.propTypes = {
  row: PropTypes.array.isRequired,
  odd: PropTypes.bool
};

export default MobileTableSingleCol;
