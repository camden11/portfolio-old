import React, { Component } from 'react';
import Routes from './Routes';
import AddressBar from '../components/AddressBar';

class App extends Component {
  render() {
    return (
      <div className="cp-site-wrapper">
        <Routes />
      </div>
    )
  }
}

export default App;
