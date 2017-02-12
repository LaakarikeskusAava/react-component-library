import React from 'react';
import Classnames from 'classnames';

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
  row: React.PropTypes.array.isRequired,
  odd: React.PropTypes.bool
};

export default MobileTableSingleCol;
