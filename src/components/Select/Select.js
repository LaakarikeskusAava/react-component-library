import React from 'react';
import Classnames from 'classnames';
import './Select.scss';

const Select = (props) => {
  const { className, modifierClass, ...childProps } = props;
  const classes = Classnames('select', className, modifierClass);

  return (
    <select className={classes} {...childProps} />
  );
};

Select.propTypes = {
  className: React.PropTypes.string,
  modifierClass: React.PropTypes.string,
};

export default Select;
