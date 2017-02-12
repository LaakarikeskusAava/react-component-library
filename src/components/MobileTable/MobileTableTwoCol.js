import React from 'react';
import Classnames from 'classnames';

export const MobileTableTwoCol = ({ row, headers, odd }) => {
  const classes = Classnames('table__row', `table__row--${odd ? 'odd' : 'even'}`);
  const trClasses = Classnames('table__sub-row');
  const tdClasses = Classnames('table__cell');

  const firstRow = (
    <tr className={trClasses}>
      <td className={tdClasses}>{row[0]}</td>
      <td className={tdClasses}>{row[1]}</td>
    </tr>
  );

  return (
    <tbody className={classes}>
      {row.map((item, i) => {
        if (i === 0) {
          return firstRow;
        } else if (i === 1) {
          return null;
        }

        return (
          <tr className={trClasses}>
            <td className={tdClasses}><span className={i > 0 ? 'table__label' : ''}>{headers[i]}</span></td>
            <td className={tdClasses}>{item}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

MobileTableTwoCol.propTypes = {
  row: React.PropTypes.array.isRequired,
  headers: React.PropTypes.array.isRequired,
  odd: React.PropTypes.bool
};

export default MobileTableTwoCol;
