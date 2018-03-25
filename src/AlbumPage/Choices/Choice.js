import React from 'react';
import PropTypes from 'prop-types';

import { richChoiceShape } from '../../lib/PropTypesValues';

const Choice = ({
  richChoice,
  setReverseAnim,
}, context) => (
  <div
    className="button button-album-page"
    onClick={() => (
      setReverseAnim(false, () => context.router.history.push(`/${richChoice.targetObj._id}`))
      )}
  >
    <p>{richChoice.message}</p>
  </div>
);


Choice.contextTypes = { router: PropTypes.object };

Choice.propTypes = {
  richChoice: PropTypes.shape(richChoiceShape).isRequired,
  setReverseAnim: PropTypes.func.isRequired,
};

export default Choice;
