import { connect } from 'react-redux';
import React, { Component } from 'react';
import styled from 'styled-components';

import About from '../components/About';
import ProjectPreview from '../components/ProjectPreview';
import { H1, L, OutlineDiv } from '../components/typed';

import { resetTypedSection } from '../actions/TypedSectionActions';
import { setAddress } from '../actions/AddressBarActions';
import { setColor } from '../actions/ColorActions';
import { TypeIndexTracker } from '../lib/utils';
import { Container, Wrapper } from '../style';

const BASE_PATH = ['Camden Phalen'];
const BACKGROUND_COLOR = '#ffffff';
const TEXT_COLOR = '#272727';
const NUM_ELEMENTS = 23;

const Divider = styled(OutlineDiv)`
  height: 0px;
  margin-top: 50px;
  margin-bottom: 20px;
  width: 100%;
  border-bottom: 1.5px solid #000;
`;

const ViewMore = styled(L)`
  font-size: 20px;
  width: 100%;
  text-align: right;
`;

class Home extends Component {
  componentWillMount() {
    const { setAddress, resetTypedSection, setColor } = this.props;
    setAddress(BASE_PATH);
    resetTypedSection();
    setColor(BACKGROUND_COLOR, TEXT_COLOR);
    const scrollListener = () => this.handleScroll();
    this.setState({ scrollListener });
    window.addEventListener('scroll', scrollListener);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.state.scrollListener);
  }

  handleScroll() {
    const { typeIndex } = this.props;
    const scroll = window.scrollY;
    const scrollBottom = scroll + window.innerHeight;
    const dividerLocation = document.getElementById('about').offsetTop - 62;
    const bottom = document.documentElement.scrollHeight;
    const { inAboutSection } = this.state;
    const { setAddress } = this.props;
    if (
      scroll > dividerLocation ||
      (typeIndex === NUM_ELEMENTS && scrollBottom === bottom)
    ) {
      if (!inAboutSection) {
        setAddress(BASE_PATH.concat(['About']));
        this.setState({ inAboutSection: true });
      }
    } else if (inAboutSection) {
      setAddress(BASE_PATH);
      this.setState({ inAboutSection: false });
    }
  }

  render() {
    const tracker = new TypeIndexTracker();
    return (
      <Wrapper>
        <Container>
          <H1 index={tracker.index()}>
            I combine clean code with design thinking to build distinctive user
            experiences.
          </H1>
          <ProjectPreview project="upstatement" tracker={tracker} />
          <ProjectPreview
            project="mass-hike"
            tracker={tracker}
            reverse={true}
          />
          <ViewMore to="/work" index={tracker.index()}>
            View more
          </ViewMore>
          <Divider index={tracker.index()} id="about" />
          <About tracker={tracker} />
        </Container>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    textColor: state.color.textColor,
    typeIndex: state.typedSection.index,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
