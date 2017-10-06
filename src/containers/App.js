import React, { Component } from 'react';
import Routes from './Routes';
import Background from '../components/Background';

class App extends Component {
  render() {
    return (
      <div className="site-wrapper">
        <div className="container">
          <Routes />
        </div>
        <Background />
      </div>
    )
  }
}

export default App;
