import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import styled from 'styled-components';

import Images from '../img';
import ProjectPreviewImage from './ProjectPreviewImage';
import { H5, P, OutlineDiv } from './typed';

import Projects from '../data/Projects';
import { MediaQueries, Colors } from '../style';

const ProjectPreviewContainer = styled(Link)`
  text-decoration: none;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  margin-bottom: 80px;
  transition: padding-bottom 0.2s;
  overflow: visible;
  &:hover {
    padding-bottom: 10px;
  }
  ${MediaQueries.small} {
    grid-template-columns: 1fr;
    &:hover {
      padding-bottom: 20px;
    }
  }
`;

const ProjectPreviewDescription = styled(P)`
  font-size: 20px;
  line-height: 30px;
  margin-top: 2px;
  margin-bottom: 20px;
  margin-right: ${props => (props.reverse ? '0' : '20px')}
  transition: margin-bottom 0.2s;
  ${ProjectPreviewContainer}:hover & {
    margin-bottom: 10px;
  }
  ${MediaQueries.small} {
    font-size: 16px;
    line-height: 24px;
    ${ProjectPreviewContainer}:hover & {
      margin-bottom: 0;
    }
  }
`;

const InfoSection = styled.div`
  grid-column: span 7;

  ${MediaQueries.small} {
    order: 2;
  }
`;

const ImageSection = styled.div`
  grid-column: span 5;
  height: 100%;
  overflow: visible;
  padding-right: ${props => (props.reverse ? '0' : '20px')};
  padding-left: ${props => (props.reverse ? '20px' : '0')};
  transition: margin-top 0.2s, padding-left 0.2s, padding-right 0.2s;

  ${ProjectPreviewContainer}:hover & {
    padding-right: 10px;
    padding-left: 10px;
    margin-top: -10px;
  }

  ${MediaQueries.small} {
    order: 1;
    margin-bottom: 20px;
    padding-right: 0;
    padding-left: 0
    height: calc(100% - 25px);

    ${ProjectPreviewContainer}:hover & {
      padding-right: 0;
      padding-left: 0;
      margin-top: 0;
    }
  }
`;

const Text = styled(OutlineDiv)`
  border-bottom: 1.5px solid ${Colors.gray};
  > div {
    margin-left: ${props => (props.reverse ? '20px' : '0')};
  }
  ${MediaQueries.small} {
    border: none !important;
    > div {
      margin-left: 0;
    }
  }
`;

class ProjectPreview extends Component {
  renderText(project) {
    const { tracker, reverse } = this.props;
    return (
      <InfoSection>
        <Text index={tracker.index()} reverse={reverse}>
          <div>
            <H5 index={tracker.index()}>{project.name}</H5>
            <ProjectPreviewDescription
              index={tracker.index()}
              reverse={reverse}
            >
              {project.header}
            </ProjectPreviewDescription>
          </div>
        </Text>
      </InfoSection>
    );
  }

  renderImage(project) {
    const { tracker, reverse } = this.props;
    return (
      <ImageSection reverse={reverse}>
        <ProjectPreviewImage
          src={Images.preview[project.name]}
          tracker={tracker}
          color={project.previewColor || project.backgroundColor}
          reverse={reverse}
        />
      </ImageSection>
    );
  }

  render() {
    const project = Projects[this.props.project];
    const { reverse } = this.props;
    return (
      <ProjectPreviewContainer to={project.href} className="project-preview">
        {reverse ? this.renderImage(project) : this.renderText(project)}
        {reverse ? this.renderText(project) : this.renderImage(project)}
      </ProjectPreviewContainer>
    );
  }
}

export default ProjectPreview;
