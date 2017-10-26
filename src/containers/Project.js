import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAddress } from '../actions/AddressBarActions';
import { resetTypedSectionIndex } from '../actions/TypedSectionActions';
import { setColor } from '../actions/ColorActions';
import Projects from '../data/Projects';
import TypedSection from '../components/TypedSection';
import { P, H1, H3, H6, A, L } from '../components/Tags';
import { TypeIndexTracker } from '../lib/utils';
import content from '../components/content';
import Div from '../components/TypedOutlineDiv';

const BASE_PATH = ['Camden Phalen', 'Work'];
const FIXED_DATA_SCROLL = 50;
const PARAGRAPH_TYPE_TIME = 1;

class Project extends Component {
  constructor(props) {
    super(props);
    window.scrollTo(0, 0);
    this.state = {
      project: Projects[props.match.params.project],
      Content: content[props.match.params.project],
      dataFixed: false
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

  componentWillUnmount() {

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
            <div className="project-data-sticky">
              <H3 index={tracker.index()}>{project.name}</H3>
              <div className="project-data-section">
                <H6 index={tracker.index()}>Date</H6>
                <P className="project-data-text" index={3}>{project.dates}</P>
              </div>
              <div className="project-data-section">
                <H6 index={tracker.index()}>Categories</H6>
                {project.categories.map((category, index) => {
                  return <P className="project-data-text"index={tracker.index()} key={index}>
                    {category}
                  </P>
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
              <L index={tracker.index()} to={project.previous}>Previous</L>
              <L index={tracker.index()}to={project.next}>Next</L>
            </div>
          </div>
          <Div className="eight project-content" borderColor={color} index={10} index={tracker.index()}>
            <Content tracker={tracker} typeTime={PARAGRAPH_TYPE_TIME}/>
          </Div>
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
