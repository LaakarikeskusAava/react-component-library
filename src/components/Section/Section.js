import React from 'react';
import './Section.scss';

export const Section = (props) => {
  return (
    <div className="section">{props.children}</div>
  );
};

Section.propTypes = {
  children: React.PropTypes.node
};

export default Section;
