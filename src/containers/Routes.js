import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Work from './Work';
import About from './About';
import AddressBar from '../components/AddressBar';

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={AddressBar} />
          <Route exact path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    )
  }
}

export default Routes;