import React from 'react';
import Classnames from 'classnames';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import './Button.scss';

export function Button(props) {
  const { className, modifierClass, ...childProps } = props;
  const classes = Classnames('button', className, modifierClass);

  // Use <a> element instead of button if button is a link.
  if (typeof childProps.to !== 'undefined') {
    return <Link className={classes} {...childProps} />;
  }

  return <button className={classes} {...childProps} />;
}

Button.propTypes = {
  className: PropTypes.string,
  modifierClass: PropTypes.string,
};

export default Button;
