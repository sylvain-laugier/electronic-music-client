import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { richChoiceShape } from '../../lib/PropTypesValues';

import LoadingChoice from './LoadingChoice';

class Choice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
    this.renderContent = this.renderContent.bind(this);
  }

  renderContent() {
    return this.state.loading ?
      <LoadingChoice /> :
      <p>{this.props.richChoice.message}</p>;
  }
  render() {
    return (
      <button
        className={`button button-album-page ${this.state.loading ? '.button-album-page--active' : ''}`}
        onClick={() => {
          this.setState({
            loading: true,
          });
          return this.props.setReverseAnim(false, () => this.context.router.history.push(`/${this.props.richChoice.targetObj._id}`))
          }}
      >
        {this.renderContent()}
      </button>
    );
  }
}


Choice.contextTypes = { router: PropTypes.object };

Choice.propTypes = {
  richChoice: PropTypes.shape(richChoiceShape).isRequired,
  setReverseAnim: PropTypes.func.isRequired,
};

export default Choice;
