import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAddress } from '../actions/AddressBarActions';
import { resetTypedSectionIndex } from '../actions/TypedSectionActions';
import Projects from '../data/Projects';
import TypedSection from '../components/TypedSection';

const BASE_PATH = ['Camden Phalen', 'Work'];

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: Projects[props.match.params.project]
    }
  }

  componentDidMount() {
    const { project } = this.state;
    const { dispatch } = this.props;
    const path = BASE_PATH.slice();
    path.push(project.name);
    dispatch(resetTypedSectionIndex());
    dispatch(setAddress(path));
  }
  render(){
    const { project } = this.state;
    return (
      <div className="project">
        <h1><TypedSection index={0}>{project.header}</TypedSection></h1>
        <p><TypedSection index={1}>Testing</TypedSection></p>
      </div>
    )
  }
}

export default connect()(Project);
