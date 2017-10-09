import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAddress } from '../actions/AddressBarActions';
import { resetTypedSectionIndex } from '../actions/TypedSectionActions';
import { setColor } from '../actions/ColorActions';
import { Link } from 'react-router-dom';
import TypedSection from '../components/TypedSection';
import ProjectPreview from '../components/ProjectPreview';
import { TypeIndexTracker } from '../lib/utils';
import { H1, L } from '../components/Tags';

const BASE_PATH = ['Camden Phalen'];
const BACKGROUND_COLOR = '#ffffff';
const TEXT_COLOR = '#272727';

class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(setAddress(BASE_PATH));
    dispatch(resetTypedSectionIndex());
    dispatch(setColor(BACKGROUND_COLOR, TEXT_COLOR));
  }

  render() {
    const tracker = new TypeIndexTracker();
    return (
      <div className="home container">
        <H1 index={tracker.index()}>
          I am a creative developer passionate about finishing this website.
        </H1>
        <ProjectPreview project="trailtag" tracker={tracker}/>
        <ProjectPreview project="trailtag" tracker={tracker} reverse={true}/>
        <L to="/work" index={tracker.index()}>Work</L>
        <L to="/about" index={tracker.index()}>About</L>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    textColor: state.color.textColor,
  }
}

export default connect(mapStateToProps)(Home);
