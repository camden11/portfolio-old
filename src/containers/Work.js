import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAddress } from '../actions/AddressBarActions';
import { resetTypedSectionIndex } from '../actions/TypedSectionActions';
import { setColor } from '../actions/ColorActions';
import TypedSection from '../components/TypedSection';
import { TypeIndexTracker } from '../lib/utils';
import { H1, H2, L } from '../components/Tags';

const BASE_PATH = ['Camden Phalen', 'Work'];
const BACKGROUND_COLOR = '#ffffff';
const TEXT_COLOR = '#272727';

class Work extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(resetTypedSectionIndex());
    dispatch(setAddress(BASE_PATH));
    dispatch(setColor(BACKGROUND_COLOR, TEXT_COLOR));
  }

  render() {
    const tracker = new TypeIndexTracker();
    return (
      <div className="work container">
        <H1 index={tracker.index()}>This is the work page</H1>
        <H2 index={tracker.index()}>Here are some projects I've done.</H2>
        <ul>
          <li>
            <L to='/work/trailtag' index={tracker.index()}>TrailTag</L>
          </li>
          <li>
            <L to='/work/hubspot' index={tracker.index()}>HubSpot</L>
          </li>
          <li>
            <L to='/work/idea' index={tracker.index()}>Idea</L>
          </li>
          <li>
            <L to='/work/alignable' index={tracker.index()}>Alignable</L>
          </li>
          <li>
            <L to='/work/trash2treasure' index={tracker.index()}>Trash2Treasure</L>
          </li>
          <li>
            <L to='/work/openlines' index={tracker.index()}>Open Lines</L>
          </li>
        </ul>
        <L to="/" index={tracker.index()}>Home</L>
        <L to="/about" index={tracker.index()}>About</L>
      </div>
    )
  }
}

export default connect()(Work);
