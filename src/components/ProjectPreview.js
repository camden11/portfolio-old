import React, { Component } from 'react';
import Projects from '../data/Projects';
import { H6, P } from './Tags';
import Div from './TypedOutlineDiv';
import { TypeIndexTracker } from '../lib/utils';
import Images from '../img'
import ProjectPreviewImage from './ProjectPreviewImage';
import { Link } from 'react-router-dom';

class ProjectPreview extends Component {
  renderText(project) {
    const { tracker, reverse } = this.props;
    return (
      <div className='seven'>
        <Div className='project-preview-text' index={tracker.index()}>
          <div className={reverse ? 'reverse-margin' : ''}>
            <H6 index={tracker.index()} className="project-preview-header">
              {project.name}
            </H6>
            <P className='project-preview-description' index={tracker.index()}>
              {project.header}
            </P>
          </div>
        </Div>
      </div>
    )
  }

  renderImage(project) {
    const { tracker, reverse } = this.props;
    return (
      <div className={`five project-preview-image-section ${reverse ? 'reverse' : ''}`}>
        <ProjectPreviewImage
          src={Images.preview[project.name]}
          tracker={tracker}
          color={project.backgroundColor}
          reverse={reverse}
        />
      </div>
    );
  }

  render() {
    const project = Projects[this.props.project];
    const { reverse } = this.props;
    return (
      <Link className='project-preview grid-parent no-gap' to={project.href}>
        { reverse ? this.renderImage(project) : this.renderText(project) }
        { reverse ? this.renderText(project) : this.renderImage(project) }
      </Link>
    );
  }
}

export default ProjectPreview
