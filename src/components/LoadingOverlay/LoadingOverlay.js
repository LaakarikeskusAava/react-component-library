import React from 'react';
import Throbber from '../Throbber';
import './LoadingOverlay.scss';

export const LoadingOverlay = (props) => {
  return (
    <div className="loading-overlay">
      <div className="loading-overlay__layer">
        <Throbber />
      </div>
      {props.children}
    </div>
  );
};

LoadingOverlay.propTypes = {
  children: React.PropTypes.node
};

export default LoadingOverlay;
