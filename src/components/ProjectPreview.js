import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import Div from './TypedOutlineDiv';
import Images from '../img'
import ProjectPreviewImage from './ProjectPreviewImage';
import { H5, P } from './Tags';

import Projects from '../data/Projects';

class ProjectPreview extends Component {
  renderText(project) {
    const { tracker, reverse } = this.props;
    return (
      <div className='seven project-preview-info-section'>
        <Div className='project-preview-text' index={tracker.index()}>
          <div className={reverse ? 'reverse-margin' : ''}>
            <H5 index={tracker.index()} className="project-preview-header">
              {project.name}
            </H5>
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