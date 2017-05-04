import React from 'react';
import PropTypes from 'prop-types';

export const TableColumn = ({ item, heading }) => {
  if (heading) {
    return <th className="table__cell">{item}</th>;
  }
  return <td className="table__cell">{item}</td>;
};

TableColumn.propTypes = {
  item: PropTypes.node,
  heading: PropTypes.bool
};

export default TableColumn;
