import React from 'react';
import Classnames from 'classnames';
import TableColumn from './TableColumn';

export const TableRow = ({ row, heading, odd = null }) => {
  let rowModifier = '';
  let headingClass = '';
  if (odd) {
    rowModifier = `table__row--${(odd ? 'odd' : 'even')}`;
  }

  if (heading) {
    headingClass = 'table__header';
  }

  const classes = Classnames('table__row', rowModifier, headingClass);

  return (
    <tr className={classes}>
      {row.map((item, key) => {
        return (
          <TableColumn item={item} heading={heading} key={key} />
        );
      })}
    </tr>
  );
};

TableRow.propTypes = {
  row: React.PropTypes.array.isRequired,
  odd: React.PropTypes.bool,
  heading: React.PropTypes.bool
};

export default TableRow;
