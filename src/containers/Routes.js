import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';

import AddressBar from '../components/AddressBar';
import Home from './Home';
import Project from './Project';
import Work from './Work';

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={AddressBar} />
          <Route exact path="/" component={Home} />
          <Route exact path="/work" component={Work} />
          <Route path="/work/:project" component={Project} />
        </div>
      </Router>
    )
  }
}

export default Routes;
