import React from 'react';
import Classnames from 'classnames';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import './Button.scss';

export function Button(props) {
  const { className, modifierClass, ...childProps } = props;
  const classes = Classnames('button', className, modifierClass);

  let buttonMarkup = (
    <button className={classes} {...childProps} />
  );

  // Use <a> element instead of button if button is a link.
  if (typeof childProps.to !== 'undefined') {
    buttonMarkup = (
      <Link className={classes} {...childProps}>
        {props.children}
      </Link>
    );
  }

  return buttonMarkup;
}

Button.propTypes = {
  className: PropTypes.string,
  modifierClass: PropTypes.string,
  children: PropTypes.string
};

export default Button;
