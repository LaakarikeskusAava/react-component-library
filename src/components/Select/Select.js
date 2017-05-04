import React from 'react';
import Classnames from 'classnames';
import PropTypes from 'prop-types';
import './Select.scss';

const Select = (props) => {
  const { className, modifierClass, ...childProps } = props;
  const classes = Classnames('select', className, modifierClass);

  return (
    <select className={classes} {...childProps} />
  );
};

Select.propTypes = {
  className: PropTypes.string,
  modifierClass: PropTypes.string
};

export default Select;
