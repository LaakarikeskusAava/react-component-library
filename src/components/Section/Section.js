import React from 'react';
import PropTypes from 'prop-types';
import './Section.scss';

export const Section = (props) => {
  return (
    <div className="section">{props.children}</div>
  );
};

Section.propTypes = {
  children: PropTypes.node
};

export default Section;
