import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 className="App-title">Coming soon. Photo by <a href="https://unsplash.com/@staticlaw" target="_blank">Fabrizio Conti</a></h1>
          <div className="quote">
              We shall not cease from exploration<br />
              And the end of all our exploring<br />
              Will be to arrive where we started<br />
              And know the place for the first time.<br />
              -T.S. Eliot
          </div>
        </div>
      </div>
    );
  }
}

export default App;
