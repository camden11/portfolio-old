import { connect } from 'react-redux';
import React, { Component } from 'react';
import styled from 'styled-components';

import { H1 } from '../components/typed';
import ProjectPreview from '../components/ProjectPreview';

import { allProjects } from '../data/Projects';
import { resetTypedSection } from '../actions/TypedSectionActions';
import { setAddress } from '../actions/AddressBarActions';
import { setColor } from '../actions/ColorActions';
import { TypeIndexTracker, getNamePath } from '../lib/utils';
import { Container, Wrapper } from '../style';

const BASE_PATH = [getNamePath(), 'Work'];
const BACKGROUND_COLOR = '#ffffff';
const TEXT_COLOR = '#272727';

const ProjectPreviews = styled.div`
  margin-top: 20px;
`;

class Work extends Component {
  constructor(props) {
    super(props);
    window.scrollTo(0, 0);
  }

  componentWillMount() {
    const { resetTypedSection, setAddress, setColor } = this.props;
    resetTypedSection();
    setAddress(BASE_PATH);
    setColor(BACKGROUND_COLOR, TEXT_COLOR);
  }

  render() {
    const tracker = new TypeIndexTracker();
    return (
      <Wrapper>
        <Container>
          <H1 index={tracker.index()}>
            I've tackled a variety of unique design and development challenges.
          </H1>
          <ProjectPreviews>
            {allProjects.map((project, index) => {
              return (
                <ProjectPreview
                  project={project}
                  tracker={tracker}
                  reverse={index % 2 === 1}
                  key={index}
                />
              );
            })}
          </ProjectPreviews>
        </Container>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAddress: path => dispatch(setAddress(path)),
    resetTypedSection: () => dispatch(resetTypedSection()),
    setColor: (backgroundColor, textColor) =>
      dispatch(setColor(backgroundColor, textColor)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Work);
