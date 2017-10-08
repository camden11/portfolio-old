import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAddress } from '../actions/AddressBarActions';
import { resetTypedSectionIndex } from '../actions/TypedSectionActions';
import { setColor } from '../actions/ColorActions';
import Projects from '../data/Projects';
import TypedSection from '../components/TypedSection';
import { P, H1, H3, H6, A } from '../components/Tags';
import { TypeIndexTracker } from '../lib/utils';
import content from '../components/content';

const BASE_PATH = ['Camden Phalen', 'Work'];

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: Projects[props.match.params.project],
      Content: content[props.match.params.project]
    }
  }

  componentDidMount() {
    const { project } = this.state;
    const { dispatch } = this.props;
    const path = BASE_PATH.slice();
    path.push(project.name);
    dispatch(resetTypedSectionIndex());
    dispatch(setAddress(path));
    dispatch(setColor(project.backgroundColor, project.textColor));
  }

  render(){
    const { project, Content } = this.state;
    const { color } = this.props;
    const tracker = new TypeIndexTracker();
    return (
      <div className="project container">
        <H1 index={tracker.index()}>{project.header}</H1>
        <div className="grid-parent">
          <div className="four project-data">
            <H3 index={tracker.index()}>{project.name}</H3>
            <div className="project-data-section">
              <H6 index={tracker.index()}>Date</H6>
              <P className="project-data-text" index={3}>{project.dates}</P>
            </div>
            <div className="project-data-section">
              <H6 index={tracker.index()}>Categories</H6>
              {project.categories.map(category => {
                return <P className="project-data-text"index={tracker.index()}>{category}</P>
              })}
            </div>
            <div className="project-data-section">
              <H6 index={tracker.index()}>Tech Used</H6>
              {project.techUsed.map(tech => {
                return <P className="project-data-text" index={tracker.index()}>{tech}</P>
              })}
            </div>
            <div className="project-data-section">
              <H6 index={tracker.index()}>Links</H6>
              {project.links.map(link => {
                return <A href={link.href} className="project-data-link" index={tracker.index()}>{link.name}</A>
              })}
            </div>
          </div>
          <div className="eight project-content" style={{ borderColor: color }}>
            <Content tracker={tracker} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    color: state.color.textColor,
  }
}

export default connect(mapStateToProps)(Project);
