import React from 'react';
import Classnames from 'classnames';
import PropTypes from 'prop-types';
import '../Table/Table.scss';
import './MobileTable.scss';
import MobileTableTwoCol from './MobileTableTwoCol';
import Throbber from '../Throbber';
import MobileTableSingleCol from './MobileTableSingleCol';

export const MobileTable = ({ table, modifierClass, twoCol }) => {
  if (typeof table === 'undefined' || typeof table.rows === 'undefined' || table.rows === null) {
    return <Throbber />;
  }

  const { rows, headers } = table;

  const classes = Classnames('table', 'table--content', 'table--mobile', `table--${twoCol ? 'two-column' : 'single-column'}`, modifierClass);
  return (
    <table className={classes}>
      {rows.map((row, i) => {
        if (twoCol) {
          return <MobileTableTwoCol key={i} row={row} headers={headers} odd={(i + 1) % 2 === 0} />;
        }

        return <MobileTableSingleCol key={i} headers={headers} row={row} odd={(i + 1) % 2 === 0} />;
      })}
    </table>
  );
};

MobileTable.propTypes = {
  table: PropTypes.object,
  modifierClass: PropTypes.string,
  twoCol: PropTypes.bool
};

export default MobileTable;
