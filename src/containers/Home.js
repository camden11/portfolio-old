import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAddress } from '../actions/AddressBarActions';
import { resetTypedSectionIndex } from '../actions/TypedSectionActions';
import { setBackgroundColor } from '../actions/ColorActions';
import { Link } from 'react-router-dom';
import TypedSection from '../components/TypedSection';
import ProjectPreview from '../components/ProjectPreview';

const BASE_PATH = ['Camden Phalen'];
const BACKGROUND_COLOR = '#ffffff';

class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(setAddress(BASE_PATH));
    dispatch(resetTypedSectionIndex());
    dispatch(setBackgroundColor(BACKGROUND_COLOR));
  }

  render() {
    return (
      <div className="home">
        <h1>
          <TypedSection index={0}>I am a creative developer passionate about finishing this website.</TypedSection>
        </h1>
        <Link to="/work">
          <TypedSection index={1}>Work</TypedSection>
        </Link>
        <Link to="/about">
          <TypedSection index={2}>About</TypedSection>
        </Link>
        <ProjectPreview />
      </div>
    );
  }
}

export default connect()(Home);
