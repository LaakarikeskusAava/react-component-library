import React from 'react';
import Classnames from 'classnames';
import PropTypes from 'prop-types';

export const MobileTableSingleCol = ({ row, odd, headers }) => {
  const classes = Classnames('table__row', `table__row--${odd ? 'odd' : 'even'}`);

  return (<tbody className={classes} >
    {row.map((item, key) => {
      return (
        <tr key={key} className="table__sub-row">
          <td className="table__label table__cell">{headers[key]}</td>
          <td className="table__cell">{item}</td>
        </tr>
      );
    })}
  </tbody>);
};

MobileTableSingleCol.propTypes = {
  headers: PropTypes.array.isRequired,
  row: PropTypes.array.isRequired,
  odd: PropTypes.bool
};

export default MobileTableSingleCol;
