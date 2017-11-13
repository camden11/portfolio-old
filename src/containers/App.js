import React, { Component } from 'react';

import Background from '../components/Background';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="site-wrapper">
        <Routes />
        <Background />
      </div>
    )
  }
}

export default App;
