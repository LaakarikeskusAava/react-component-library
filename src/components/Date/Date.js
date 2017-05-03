import React from 'react';
import moment from 'moment';

const Date = ({ timestamp, relative, language = 'en' }) => {
  if (relative) {
    return (
      <span>
        {moment.unix(timestamp).locale(language).fromNow()}
      </span>
    );
  }

  return (
    <span>
      {moment.unix(timestamp).locale(language).format('L')}
    </span>
  );
};

Date.propTypes = {
  timestamp: React.PropTypes.number.isRequired,
  relative: React.PropTypes.bool,
  language: React.PropTypes.string
};

export default Date;
