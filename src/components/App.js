import React, { Component } from 'react';
import Routes from './Routes';
import AddressBar from './AddressBar';

class App extends Component {
  render() {
    return (
      <div className="cp-site-wrapper">
        <AddressBar />
        <Routes />
      </div>
    )
  }
}

export default App;
