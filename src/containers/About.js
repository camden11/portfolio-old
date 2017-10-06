import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAddress } from '../actions/AddressBarActions';
import { resetTypedSectionIndex } from '../actions/TypedSectionActions';
import { setBackgroundColor } from '../actions/ColorActions';
import { Link } from 'react-router-dom';
import TypedSection from '../components/TypedSection';

const BASE_PATH = ['Camden Phalen', 'About'];
const BACKGROUND_COLOR = '#ffffff';

class About extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(resetTypedSectionIndex());
    dispatch(setAddress(BASE_PATH));
    dispatch(setBackgroundColor(BACKGROUND_COLOR));
  }

  render() {
    return (
      <div className="work">
        <h1>
          <TypedSection index={0}>This is the about page</TypedSection>
        </h1>
        <Link to="/work">
          <TypedSection index={1}>Work</TypedSection>
        </Link>
        <Link to="/">
          <TypedSection index={2}>Home</TypedSection>
        </Link>
      </div>
    )
  }
}

export default connect()(About);
