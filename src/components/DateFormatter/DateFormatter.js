import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const DateFormatter = ({ timestamp, relative, language = 'en' }) => {
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

DateFormatter.propTypes = {
  timestamp: PropTypes.number.isRequired,
  relative: PropTypes.bool,
  language: PropTypes.string
};

export default DateFormatter;
