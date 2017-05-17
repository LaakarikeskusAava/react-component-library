import React from 'react';
import Classnames from 'classnames';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({ className, modifierClass, fullWidth, error, type, ...childProps }) => {
  const classes = Classnames(
    'input',
    `input--${type}`,
    className,
    modifierClass,
    fullWidth ? 'input--full-width' : null,
    error ? 'has-error' : null
  );

  return (
    <input className={classes} type={type} {...childProps} />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  modifierClass: PropTypes.string,
  fullWidth: PropTypes.bool,
  error: PropTypes.bool
};

export default Input;
