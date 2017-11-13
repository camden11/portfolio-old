import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAddress } from '../actions/AddressBarActions';
import { resetTypedSectionIndex } from '../actions/TypedSectionActions';
import { setColor } from '../actions/ColorActions';
import { TypeIndexTracker } from '../lib/utils';
import { H1 } from '../components/Tags';
import { allProjects } from '../data/Projects';
import ProjectPreview from '../components/ProjectPreview';

const BASE_PATH = ['Camden Phalen', 'Work'];
const BACKGROUND_COLOR = '#ffffff';
const TEXT_COLOR = '#272727';

class Work extends Component {
  constructor(props) {
    super(props);
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(resetTypedSectionIndex());
    dispatch(setAddress(BASE_PATH));
    dispatch(setColor(BACKGROUND_COLOR, TEXT_COLOR));
  }

  render() {
    const tracker = new TypeIndexTracker();
    return (
      <div className="work container">
        <H1 index={tracker.index()}>I've worked on a lot of cool projects. Here are a few of them.</H1>
        <div className="project-previews">
          { allProjects.map((project, index) => {
            return (
              <ProjectPreview
                project={project}
                tracker={tracker}
                reverse={ index % 2 === 1 }
                key={index}
              />
            );
          })}
        </div>
      </div>
    )
  }
}

export default connect()(Work);
