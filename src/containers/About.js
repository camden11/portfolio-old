import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAddress } from '../actions/AddressBarActions';
import { resetTypedSectionIndex } from '../actions/TypedSectionActions';
import { Link } from 'react-router-dom';
import TypedSection from '../components/TypedSection';

const BASE_PATH = ['Camden Phalen', 'About']

class About extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(resetTypedSectionIndex());
    dispatch(setAddress(BASE_PATH))
  }

  render() {
    return (
      <div className="work">
        <h2>
          <TypedSection index={0}>This is the about page</TypedSection>
        </h2>
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
