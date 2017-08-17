import React from 'react';
import Classnames from 'classnames';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import './Button.scss';

export function Button(props) {
  const { className, modifierClass, ...childProps } = props;
  const classes = Classnames('button', className, modifierClass);

  // Use <a> element instead of button if button is a link.
  if (typeof childProps.to !== 'undefined' && typeof childProps.children !== 'undefined') {
    // @todo Remove override after https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/310
    //   has been fixed.
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <Link className={classes} {...childProps} />;
  }

  return <button className={classes} {...childProps} />;
}

Button.propTypes = {
  className: PropTypes.string,
  modifierClass: PropTypes.string
};

export default Button;
