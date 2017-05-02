import React from 'react';
import Classnames from 'classnames';
import PropTypes from 'prop-types';
import TableRow from './TableRow';
import Throbber from '../Throbber';
import './Table.scss';

export const Table = ({ table, modifierClass }) => {
  if (typeof table === 'undefined' || typeof table.rows === 'undefined' || table.rows === null) {
    return <Throbber />;
  }

  const classes = Classnames('table', 'table--content', modifierClass);

  return (
    <table className={classes}>
      <tbody>
        <TableRow row={table.headers} heading />
        {table.rows.map((row, i) => {
          return <TableRow key={i} row={row} odd={(i + 1) % 2 === 0} />;
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  table: PropTypes.object,
  modifierClass: PropTypes.string
};

export default Table;
