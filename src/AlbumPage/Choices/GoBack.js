import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoadingChoice from './LoadingChoice';

class GoBack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
    this.renderContent = this.renderContent.bind(this);
  }
  renderContent() {
    return this.state.loading ?
      <LoadingChoice /> :
      <p>&lsaquo;&ndash;</p>;
  }
  render() {
    return (
      this.props.display ?
        <div className="back-button-container">
          <button
            className="button back-button"
            onClick={() => {
              this.setState({ loading: true });
              return this.props.setReverseAnim(true, () => this.context.router.history.goBack());
            }}
          >
            {this.renderContent()}
          </button>
        </div> :
        null
    );
  }
}

GoBack.contextTypes = { router: PropTypes.object };

GoBack.propTypes = {
  display: PropTypes.bool.isRequired,
  setReverseAnim: PropTypes.func.isRequired,
};

export default GoBack;
