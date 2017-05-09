import React from 'react';
import PropTypes from 'prop-types';
import './Throbber.scss';

export const Throbber = ({ backgroundColor = 'rgba(249, 249, 249, 0.80)' }) => {
  return (
    <div className="throbber-wrapper" style={{ backgroundColor }}>
      <div className="throbber">
        <svg className="throbber__image" viewBox="25 25 50 50">
          <circle className="throbber__path" stroke="#1f9ad7" cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeMiterlimit="10" />
        </svg>
      </div>
    </div>
  );
};

Throbber.propTypes = {
  backgroundColor: PropTypes.string
};

export default Throbber;
