import React from 'react';
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
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
};

export default Details;
