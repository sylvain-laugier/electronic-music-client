import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Title from './Title';

const fontSizeGenerator = (size) => {
  let baseSize = 4;
  const mobile = window.innerWidth < 1024;
  if (mobile) {
    baseSize = 3;
  }
  if (size <= 10) {
    return {
      fontSize: `${baseSize}rem`,
      top: mobile ? `${baseSize * 2}rem` : `${baseSize / 3}rem`,
    };
  }
  const difference = ((size - 10) * 2) / 10;
  const fontSize = baseSize - difference;
  if (fontSize < 2.5) {
    return {
      fontSize: `${baseSize / 2}rem`,
      top: mobile ? `${baseSize * 2}rem` :`${baseSize / 2}rem`,
      left: `${baseSize * 3}rem`,
    };
  }
  return {
    fontSize: `${baseSize - difference}rem`,
    top: mobile ? `${(baseSize * 2)}rem` : `${(baseSize / 2) - difference}rem`,
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
    let { albumName } = this.props;
    let smallFont = false;
    if (window.innerWidth < 1024 && albumName.length > 20) {
      albumName = `${albumName.substring(0, 20)}...`;
      smallFont = true;
    } else if (albumName.length > 32) {
      albumName = `${albumName.substring(0, 32)}...`;
      smallFont = true;
    }
    return (
      <div className="album-content-header-background" >
        <Title font="prism" style={{fontSize: smallFont ? '3rem' : '4rem'}}>
          <div>{albumName}<br /> <span>by</span></div>
        </Title>
        <Title
          font="streamster"
          style={this.state.styleArtist}
        >
          {this.props.artistName}
        </Title>
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
