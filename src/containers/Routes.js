import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';

import AddressBar from '../components/AddressBar';
import Home from './Home';
import Project from './Project';
import Work from './Work';

class Routes extends Component {
  renderProject(props) {
    const projectName = props.match.params.project;
    return (
      <Project name={projectName} key={projectName} />
    );
  }

  render() {
    return (
      <Router>
        <div className="phalen-io">
          <Route path="/" component={AddressBar} />
          <Route exact path="/" component={Home} />
          <Route exact path="/work" component={Work} />
          {/* <Route path="/work/:project" component={Project} /> */}
          <Route path="/work/:project" render={this.renderProject} />
        </div>
      </Router>
    )
  }
}

export default Routes;
