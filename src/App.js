import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import glasses from './images/glasses.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={glasses} className="App-logo" alt="logo" />
          <h2>Welcome to Emoji Roulette</h2>
        </div>
        <p className="App-intro">
          Click start for a new game!
        </p>
      </div>
    );
  }
}

export default App;
