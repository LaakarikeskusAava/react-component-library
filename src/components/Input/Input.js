import React from 'react';
import Classnames from 'classnames';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = (props) => {
  const { className, modifierClass, type, ...childProps } = props;
  const classes = Classnames('input', `input--${type}`, className, modifierClass);

  return (
    <input className={classes} type={type} {...childProps} />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  modifierClass: PropTypes.string,
};

export default Input;
