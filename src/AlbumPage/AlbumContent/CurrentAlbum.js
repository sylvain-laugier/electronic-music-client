import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { albumShape } from '../../lib/PropTypesValues';

import AlbumContentHeader from '../AlbumHeaders/AlbumContentHeader';
import AlbumContentContainer from './AlbumContentContainer';

export default class CurrentAlbum extends Component {
  constructor(props) {
    super(props);
    this.renderContent = this.renderContent.bind(this);
  }

  renderContent() {
    const { name, artistName, image, url } = this.props.album;
    return (
      <div>
        <AlbumContentHeader albumName={name} artistName={artistName} />
        <AlbumContentContainer imageUrl={image} spotifyUrl={url} />
      </div>
    );
  }

  render() {
    const { url } = this.props.album;
    return (
      <div className="Album-Page-Container">
        {window.innerWidth < 1024 ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {this.renderContent()}
          </a>
        ) : (
          this.renderContent()
        )}
      </div>
    );
  }
}

CurrentAlbum.propTypes = {
  album: PropTypes.shape(albumShape).isRequired
};
