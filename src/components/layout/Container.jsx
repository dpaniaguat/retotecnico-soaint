import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => {

  return (
    <div className="main">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node
}

export default Container;
