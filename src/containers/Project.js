import { connect } from 'react-redux';
import React, { Component } from 'react';
import styled from 'styled-components';

import content from '../components/content';
import { P, H1, H3, H6, A, L, OutlineDiv } from '../components/typed';

import Projects from '../data/Projects';
import { resetTypedSection } from '../actions/TypedSectionActions';
import { setAddress } from '../actions/AddressBarActions';
import { setColor } from '../actions/ColorActions';
import { TypeIndexTracker, getNamePath } from '../lib/utils';
import { MediaQueries, Container, Colors } from '../style';

const BASE_PATH = [getNamePath(), 'Work'];
const PARAGRAPH_TYPE_TIME = 1;

const GridParent = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  ${MediaQueries.small} {
    grid-template-columns: 1fr;
  }
`;

const ProjectData = styled.div`
  grid-column: span 4;
  ${MediaQueries.small} {
    padding-bottom: 50px;
  }
`;

const Sticky = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 85px;

  ${MediaQueries.small} {
    position: static;
  }
`;

const ProjectDataSection = styled.div`
  margin-bottom: 30px;
`;

const ProjectDataText = styled(P)`
  font-size: 16px;
  margin: 0;
  margin-bottom: 2px;

  ${MediaQueries.small} {
    font-size: 16px;
  }
`;

const ProjectDataLink = styled(A)`
  font-size: 16px;
  margin: 0;
  margin-bottom: 2px;
  display: block;

  ${MediaQueries.small} {
    font-size: 16px;
  }
`;

const ProjectContent = styled(OutlineDiv)`
  grid-column: span 8;
  border-left: 1.5px solid ${Colors.gray};
  padding-left: 25px;
  transition: border-width 0.2s;

  ${MediaQueries.small} {
    border-top: 1.5px solid $main-gray;
    border-left: none;
    padding-left: 0;
    padding-top: 20px;
  }
`;

const ProjectSwitcher = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 30px;
`;
const ProjectSwitcherItem = styled.div`
  grid-column: span 1;
  text-align: ${props => (props.right ? 'right' : 'left')};
`;

const ProjectText = styled(H6)`
  ${MediaQueries.small} {
    display: none;
  }
`;

const ProjectTextMobile = styled(H6)`
  display: none;
  ${MediaQueries.small} {
    display: block;
  }
`;

class Project extends Component {
  constructor(props) {
    super(props);
    window.scrollTo(0, 0);
    console.log(props.name);
    this.state = {
      project: Projects[props.name],
      Content: content[props.name],
      dataFixed: false,
    };
  }

  componentWillMount() {
    const { project } = this.state;
    const { resetTypedSection, setAddress, setColor } = this.props;
    const path = BASE_PATH.slice();
    path.push(project.name);
    resetTypedSection();
    setAddress(path);
    setColor(project.backgroundColor, project.textColor);
  }

  render() {
    const { project, Content } = this.state;
    const { color } = this.props;
    const tracker = new TypeIndexTracker();
    return (
      <Container>
        <H1 index={tracker.index()}>{project.header}</H1>
        <GridParent>
          <ProjectData className="project-data">
            <Sticky>
              <H3 index={tracker.index()}>{project.name}</H3>
              <ProjectDataSection>
                <H6 index={tracker.index()}>Date</H6>
                <ProjectDataText index={tracker.index()}>
                  {project.dates}
                </ProjectDataText>
              </ProjectDataSection>
              <ProjectDataSection>
                <H6 index={tracker.index()}>Categories</H6>
                {project.categories.map((category, index) => {
                  return (
                    <ProjectDataText index={tracker.index()} key={index}>
                      {category}
                    </ProjectDataText>
                  );
                })}
              </ProjectDataSection>
              <ProjectDataSection>
                <H6 index={tracker.index()}>Tech Used</H6>
                {project.techUsed.map((tech, index) => {
                  return (
                    <ProjectDataText index={tracker.index()} key={index}>
                      {tech}
                    </ProjectDataText>
                  );
                })}
              </ProjectDataSection>
              <ProjectDataSection>
                <H6 index={tracker.index()}>Links</H6>
                {project.links.map((link, index) => {
                  return (
                    <ProjectDataLink
                      href={link.href}
                      index={tracker.index()}
                      key={index}
                    >
                      {link.name}
                    </ProjectDataLink>
                  );
                })}
              </ProjectDataSection>
            </Sticky>
          </ProjectData>
          <ProjectContent borderColor={color} index={tracker.index()}>
            <Content tracker={tracker} typeTime={PARAGRAPH_TYPE_TIME} />
            <ProjectSwitcher>
              <ProjectSwitcherItem>
                <ProjectText index={tracker.index()}>
                  Previous Project
                </ProjectText>
                <ProjectTextMobile index={tracker.index()}>
                  Previous
                </ProjectTextMobile>
                <L index={tracker.index()} to={project.previousHref}>
                  {project.previousName}
                </L>
              </ProjectSwitcherItem>
              <ProjectSwitcherItem right>
                <ProjectText index={tracker.index()}>Next Project</ProjectText>
                <ProjectTextMobile index={tracker.index()}>
                  Next
                </ProjectTextMobile>
                <L index={tracker.index()} to={project.nextHref}>
                  {project.nextName}
                </L>
              </ProjectSwitcherItem>
            </ProjectSwitcher>
          </ProjectContent>
        </GridParent>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    color: state.color.textColor,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAddress: path => dispatch(setAddress(path)),
    resetTypedSection: () => dispatch(resetTypedSection()),
    setColor: (backgroundColor, textColor) => {
      dispatch(setColor(backgroundColor, textColor));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);
