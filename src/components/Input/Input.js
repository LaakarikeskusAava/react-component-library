import React from 'react';
import Classnames from 'classnames';
import './Input.scss';

const Input = (props) => {
  const { className, modifierClass, type, ...childProps } = props;
  const classes = Classnames('input', `input--${type}`, className, modifierClass);

  return (
    <input className={classes} type={type} {...childProps} />
  );
};

Input.propTypes = {
  type: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  modifierClass: React.PropTypes.string,
};

export default Input;
