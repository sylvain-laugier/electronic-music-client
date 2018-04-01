import React from 'react';
import PropTypes from 'prop-types';

const PrismTitle = ({ children, classNameProp }) => (
  <div className={classNameProp}>
    <span className="prism-title">
      {children}
    </span>
  </div>
);

PrismTitle.defaultProps = {
  classNameProp: null,
};

PrismTitle.propTypes = {
  children: PropTypes.node.isRequired,
  classNameProp: PropTypes.string,
};

export default PrismTitle;
