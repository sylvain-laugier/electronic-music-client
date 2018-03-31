import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HomeFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.toggleOpening = this.toggleOpening.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }
  toggleOpening() {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  }
  renderContent() {
    if (this.state.open) {
      return (
        <div className="footer-content--open">
          <div
            className="footer-close-icon"
            onClick={this.toggleOpening}
          >
            <svg
              enableBackground="new 0 0 100 100"
              version="1.1"
              viewBox="0 0 100 100"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <polygon
                fill="#fff"
                points="77.6,21.1 49.6,49.2 21.5,21.1 19.6,23 47.6,51.1 19.6,79.2 21.5,81.1 49.6,53 77.6,81.1 79.6,79.2   51.5,51.1 79.6,23 "
              />
            </svg>
          </div>
          <h1> What is this thing ?  </h1>
          <p> The idea for this website was inspired by {' '}
            <a
              href="https://i.imgur.com/oUJNUUK.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              this chart
            </a> made by redditor {' '}
            <a
              href="https://www.reddit.com/user/Beef_The_Thief"
              target="_blank"
              rel="noopener noreferrer"
            >
              Beef_The_Thief
            </a>.
          </p>
          <p> Many thanks to him or her.</p>
          <p> This guide was made by one guy so personnal taste is heavily involved. </p>
          <p> This guide doesn't want to be perfect : <br />
               - It probably lacks a lot of classics<br />
               - It probably features some album that you don't consider "good" or "true electronic" <br />
               - It doesn't feature your favorite underground berliner deep tech house dj you're the only one to know about  <br />
          </p>
          <p> Creating a perfect electronic music bible was not the goal, I just wanted to create a nice website with nice music reccomandations.</p>
          <br />
          <p> I hope you will enjoy it. </p><br />
          <p style={{fontStyle: 'italic', textAlign: 'right', fontSize: '2rem'}}> Created with love in France by Sylvain Laugier<br />
          <a
            href="https://github.com/Instant-Monkey"
            target="_blank"
            rel="noopener noreferrer"
            style={{fontStyle: 'normal'}}
          >
            Check my GitHub profile
          </a></p>
        </div>);
    }
    return (
      <div
        className="footer-content"

      >
        <p>About this website </p>
      </div>
    );
  }
  render() {
    return(
      <div
        className={this.state.open ? 'footer footer-open' : 'footer footer-hover'}
        onClick={this.state.open ? null : this.toggleOpening}
      >
        {this.renderContent()}
      </div>
    );
  }
}

HomeFooter.propTypes = {

};

export default HomeFooter;
