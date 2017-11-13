import React, { Component } from 'react';

import { Img } from './Tags';
import ImageTypedSection from './ImageTypedSection';

class ProjectPreviewImage extends Component {
  render() {
    const { src, color, tracker, reverse } = this.props;
    return (
      <div className="project-preview-image-container">
        <Img className="project-preview-image" src={src} index={tracker.index()} />
        <ImageTypedSection
          index={tracker.index()}
          className={`project-preview-color ${reverse ? 'reverse' : ''}`}
        >
          <div
            style={{ backgroundColor: color }}
          >
          </div>
        </ImageTypedSection>
      </div>
    );
  }
}

export default ProjectPreviewImage;
