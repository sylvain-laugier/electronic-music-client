import React from 'react';
import PropTypes from 'prop-types';

import { albumShape, richChoiceShape } from '../../lib/PropTypesValues';

import Choice from './Choice';

const ChoiceContainer = ({ originAlbum, richChoices, setReverseAnim }) => {
  if (richChoices.length > 0) {
    return (
      <div className="album-page-choice-container">
        {richChoices.map(richChoice => (
          <Choice
            originAlbum={originAlbum}
            richChoice={richChoice}
            setReverseAnim={setReverseAnim}
            key={richChoice.targetObj._id}
          />
          ))}
      </div>
    );
  }
  return ( <div className="album-page-choice-container">
    <div className="rabbit-hole-container">
      <h2>No more choices from here !</h2>
      <h2>You're a curious one and went down the rabbit hole, nice ! </h2>
      <h2>Feel free to go back or to start over ! </h2>
    </div>
  </div>);
};

ChoiceContainer.propTypes = {
  originAlbum: PropTypes.shape(albumShape).isRequired,
  richChoices: PropTypes.arrayOf(PropTypes.shape(richChoiceShape)).isRequired,
};

export default ChoiceContainer;
