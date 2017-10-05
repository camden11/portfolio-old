import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAddress } from '../actions/AddressBarActions';
import { resetTypedSectionIndex } from '../actions/TypedSectionActions';
import { Link } from 'react-router-dom';
import TypedSection from '../components/TypedSection';

const BASE_PATH = ['Camden Phalen', 'Work']

class Work extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(resetTypedSectionIndex());
    dispatch(setAddress(BASE_PATH))
  }

  render() {
    return (
      <div className="work">
        <h1>
          <TypedSection index={0}>This is the work page</TypedSection>
        </h1>
        <Link to="/work">
          <TypedSection index={1}>Work</TypedSection>
        </Link>
        <Link to="/about">
          <TypedSection index={2}>About</TypedSection>
        </Link>
      </div>
    )
  }
}

export default connect()(Work);
