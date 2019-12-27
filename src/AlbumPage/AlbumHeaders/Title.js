import React from 'react';
import PropTypes from 'prop-types';

function getClassName(font) {
  switch(font) {
    case 'prism': {
      return 'prism-title'
    }
    case 'streamster': {
      return 'streamster-title'
    }

    default : {
      return 'prism-title'
    }
  }
}
const PrismTitle = ({ children, classNameProp, font, style }) => (
  <div className={classNameProp}>
    <span style={style} className={getClassName(font)}>
      {children}
    </span>
  </div>
);

PrismTitle.defaultProps = {
  classNameProp: null,
  font: 'prism'
};

PrismTitle.propTypes = {
  children: PropTypes.node.isRequired,
  classNameProp: PropTypes.string,
  font: PropTypes.string,
};

export default PrismTitle;
