import React from 'react';
import Classnames from 'classnames';
import { Link } from 'react-router';
import './Button.scss';

export function Button(props) {
  const { className, modifierClass, ...childProps } = props;
  const classes = Classnames('button', className, modifierClass);

  return (
    <Link className={classes} {...childProps}>
      {props.children}
    </Link>
  );
}

Button.propTypes = {
  className: React.PropTypes.string,
  modifierClass: React.PropTypes.string,
  children: React.PropTypes.string
};

export default Button;
