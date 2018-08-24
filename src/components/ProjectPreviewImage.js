import React, { Component } from 'react';
import styled from 'styled-components';

import { Img } from './typed';
import ProjectPreviewColor from './ProjectPreviewColor';

import { MediaQueries } from '../style';

const Container = styled.div`
  height: 100%;
  position: relative;
  overflow: visible;
`;

class ProjectPreviewImage extends Component {
  render() {
    const { src, color, tracker, reverse } = this.props;
    return (
      <Container>
        <Img src={src} index={tracker.index()} />
        <ProjectPreviewColor index={tracker.index()} reverse={reverse}>
          <div style={{ backgroundColor: color }} />
        </ProjectPreviewColor>
      </Container>
    );
  }
}

export default ProjectPreviewImage;
