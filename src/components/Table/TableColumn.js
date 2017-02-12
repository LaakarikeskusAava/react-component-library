import React from 'react';

export const TableColumn = ({ item, heading }) => {
  if (heading) {
    return <th className="table__cell">{item}</th>;
  }
  return <td className="table__cell">{item}</td>;
};

TableColumn.propTypes = {
  item: React.PropTypes.node,
  heading: React.PropTypes.bool
};

export default TableColumn;
