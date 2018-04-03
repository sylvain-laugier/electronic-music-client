import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoadingChoice from '../AlbumPage/Choices/LoadingChoice';
import apiKey from '../apiAuthentificate';

class CuriousButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
    this.renderCuriousButton = this.renderCuriousButton.bind(this);
    this.manageRandomClick = this.manageRandomClick.bind(this);
    this.isRandomClickAllowed = this.isRandomClickAllowed.bind(this);
  }
  isRandomClickAllowed() {
    if (!this.state.loading) {
      this.setState({ loading: true }, () => {
        setTimeout(this.manageRandomClick, 1000);
      });
    }
  }
  manageRandomClick() {
    fetch(`${process.env.REACT_APP_API_URL}/albums/random`, {
      method: 'GET',
      headers: new Headers(apiKey),
    })
      .then(res => res.json())
      .then((album) => {
        const target = album._fields[0].properties._id;
        const currentId = this.context.router.route.match.params.id;
        if (currentId !== target) {
          this.props.setReverseAnim(false, () => this.context.router.history.push(`/${target}`));
          setTimeout(() => this.setState({ loading: false }), 1000);
        } else {
          this.manageRandomClick();
        }
      });
  }
  renderCuriousButton() {
    return this.state.loading ?
      <div> <p>Selecting a random album</p><LoadingChoice /></div> :
      <p>I'm feeling curious</p>;
  }

  render() {
    return (
      <div
        className={this.state.loading ? "curious-loading random-button" : "random-button random-button--unopen button button-album-page"}
        title="Click here to go to a random album "
        onClick={this.isRandomClickAllowed}
      >{this.renderCuriousButton()}
      </div>

    );
  }
}

CuriousButton.contextTypes = { router: PropTypes.object };

export default CuriousButton;
