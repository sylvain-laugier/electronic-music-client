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
  }
  manageRandomClick() {
    if (!this.state.loading) {
      this.setState({ loading: true }, () => {
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
              setTimeout(() => this.setState({ loading: false }), 600);
            } else {
              this.setState({ loading: false }, () => this.manageRandomClick());
            }
          });
      });
    }
  }
  renderCuriousButton() {
    return this.state.loading ?
      <LoadingChoice /> :
      <p>I'm feeling curious</p>;
  }

  render() {
    return (
        <div
          className="random-button button button-album-page"
          onClick={this.manageRandomClick}
        >{this.renderCuriousButton()}
        </div>

    );
  }
}

CuriousButton.contextTypes = { router: PropTypes.object };

export default CuriousButton;
