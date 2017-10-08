import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAddress } from '../actions/AddressBarActions';
import { resetTypedSectionIndex } from '../actions/TypedSectionActions';
import { setColor } from '../actions/ColorActions';
import { Link } from 'react-router-dom';
import TypedSection from '../components/TypedSection';
import { TypeIndexTracker } from '../lib/utils';
import { H1, L } from '../components/Tags';

const BASE_PATH = ['Camden Phalen', 'About'];
const BACKGROUND_COLOR = '#ffffff';
const TEXT_COLOR = "#272727";

class About extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(resetTypedSectionIndex());
    dispatch(setAddress(BASE_PATH));
    dispatch(setColor(BACKGROUND_COLOR, TEXT_COLOR));
  }

  render() {
    const tracker = new TypeIndexTracker();
    return (
      <div className="about container">
        <H1 index={tracker.index()}>This is the about page</H1>
        <L to="/work" index={tracker.index()}>Work</L>
        <L to="/" index={tracker.index()}>Home</L>
      </div>
    )
  }
}

export default connect()(About);
