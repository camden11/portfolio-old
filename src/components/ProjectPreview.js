import React, { Component } from 'react';
import Projects from '../data/Projects';
import { H6, P } from './Tags';
import { TypeIndexTracker } from '../lib/utils';
import Images from '../img'
import ProjectPreviewImage from './ProjectPreviewImage';

class ProjectPreview extends Component {
  renderText(project) {
    const { tracker, reverse } = this.props;
    return (
      <div className='seven'>
        <div className='project-preview-text'>
          <div className={reverse ? 'reverse-margin' : ''}>
            <H6 index={tracker.index()}>{project.name}</H6>
            <P className='project-preview-description' index={tracker.index()}>
              {project.header}
            </P>
          </div>
        </div>
      </div>
    )
  }

  renderImage(project) {
    const { tracker, reverse } = this.props;
    return (
      <div className={`five project-preview-image-section ${reverse ? 'reverse' : ''}`}>
        <ProjectPreviewImage
          src={Images.example}
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
      <div className='project-preview grid-parent no-gap'>
        { reverse ? this.renderImage(project) : this.renderText(project) }
        { reverse ? this.renderText(project) : this.renderImage(project) }
      </div>
    );
  }
}

export default ProjectPreview
