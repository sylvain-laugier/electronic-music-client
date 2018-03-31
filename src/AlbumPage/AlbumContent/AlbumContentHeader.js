import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StreamsterTitle from '../AlbumHeaders/StreamsterTitle';
import PrismTitle from '../AlbumHeaders/PrismTitle';

const fontSizeGenerator = (size) => {
  let baseSize = 4;
  if (window.innerWidth < 1024) {
    baseSize = 3;
  }
  if (size <= 10) {
    return {
      fontSize: `${baseSize}rem`,
      top: `${baseSize / 2}rem`,
    };
  }
  const difference = ((size - 10) * 2) / 10;
  const fontSize = baseSize - difference;
  if (fontSize < 2) {
    return {
      fontSize: `${baseSize / 2}rem`,
      top: `${baseSize * 2}rem`,
    };
  }
  return {
    fontSize: `${baseSize - difference}rem`,
    top: `${baseSize + difference}rem`,
  };
};

export default class AlbumContentHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleArtist: fontSizeGenerator(this.props.artistName.length),
    };
    this.renderHeader = this.renderHeader.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (typeof nextProps.artistName === 'string') {
      this.setState({
        styleArtist: fontSizeGenerator(nextProps.artistName.length),
      });
    }
  }
  renderHeader() {
    if (this.props.minimized) {
      return (
        <div className="album-content-header-background album-content-header-background--minimzed" >
          <PrismTitle>{`${this.props.albumName} `}</PrismTitle>
        </div>
      );
    }
    return (
      <div className="album-content-header-background" >
        <PrismTitle>
          <div>{`${this.props.albumName} `}<br /> <span>by</span></div>
        </PrismTitle>
        <StreamsterTitle
          style={this.state.styleArtist}
        >
          {`${this.props.artistName}`}
        </StreamsterTitle>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.renderHeader()}
      </div>
    );
  }
}

AlbumContentHeader.defaultProps = {
  minimized: false,
  artistName: null,
};

AlbumContentHeader.propTypes = {
  albumName: PropTypes.string.isRequired,
  artistName: PropTypes.string,
  minimized: PropTypes.bool,
};
