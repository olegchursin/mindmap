import React, { Component } from 'react';
import './css/App.css';

import BrainContainer from './BrainContainer'

class App extends Component {
  render() {
    return (
      <div className="App ui text container">
        <h1>Functional areas of the human brain.</h1>
        <BrainContainer />
      </div>
    );
  }
}

export default App;
