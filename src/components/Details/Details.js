import React from 'react';
import PropTypes from 'prop-types';
import './Details.scss';

export const Details = ({ title, text }) => {
  return (
    <details className="details">
      <summary className="details__summary">{title}</summary>
      <div>{text}</div>
    </details>
  );
};

Details.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Details;
