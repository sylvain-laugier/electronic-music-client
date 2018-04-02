import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import ThreeBackground from './ThreeBackground';
import AlbumFetcher from './AlbumPage/AlbumFetcher';
import Home from './HomePage/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transitionFromHome: false,
      counterHome: 0,
      canvasWidth: window.innerWidth, // canvas width
      canvasHeight: window.innerHeight, // canvas height
    };
    this.toggleTransitionFromHome = this.toggleTransitionFromHome.bind(this);
    this.updateCanvasSize = this.updateCanvasSize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateCanvasSize, true);
  }

  updateCanvasSize() {
    return this.setState({
      canvasWidth: window.innerWidth, // canvas width
      canvasHeight: window.innerHeight, // canvas height
    });
  }
  toggleTransitionFromHome() {
    this.setState({
      transitionFromHome: !this.state.transitionFromHome,
    });
  }

  render() {
    return (
      <div className="App">
        <ThreeBackground
          cubeRotation={this.state.cubeRotation}
          transitionFromHome={this.state.transitionFromHome}
          counterHome={this.state.counterHome}
          incrementCountHome={this.incrementCountHome}
          canvasWidth={this.state.canvasWidth}
          canvasHeight={this.state.canvasHeight}
        />
        <div className="background" />
        <Route
          exact
          path="/"
          render={
            ({ location, match }) =>
              (<Home
                location={location}
                match={match}
                toggleTransitionFromHome={this.toggleTransitionFromHome}
              />)
          }
        />
        <Route
          path="/:id"
          render={
            ({ location, match }) => (<AlbumFetcher
              location={location}
              match={match}
              transitionFromHome={this.state.transitionFromHome}
              toggleTransitionFromHome={this.toggleTransitionFromHome}
            />)
            }
        />
      </div>
    );
  }
}


export default App;
