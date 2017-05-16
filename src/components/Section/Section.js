import React from 'react';
import PropTypes from 'prop-types';
import './Section.scss';

export const Section = (props) => {
  const { sectionTitle, sectionTitleLevel } = props;

  let sectionTitleMarkup = null;
  if (sectionTitle) {
    if (sectionTitleLevel === 1) {
      sectionTitleMarkup = (<h1 className="section__title">{sectionTitle}</h1>);
    } else {
      sectionTitleMarkup = (<h2 className="section__title">{sectionTitle}</h2>);
    }
  }

  return (
    <div className="section">
      { sectionTitleMarkup }
      { props.children }
    </div>
  );
};

Section.propTypes = {
  sectionTitle: PropTypes.string,
  sectionTitleLevel: PropTypes.number,
  children: PropTypes.node
};

export default Section;
