import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAddress } from '../actions/AddressBarActions';
import { resetTypedSectionIndex } from '../actions/TypedSectionActions';
import { Link } from 'react-router-dom';
import TypedSection from '../components/TypedSection';

const BASE_PATH = ['Camden Phalen'];

class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(setAddress(BASE_PATH));
    dispatch(resetTypedSectionIndex());
  }

  render() {
    return (
      <div className="home">
        <h2>
          <TypedSection index={0}>Welcome to Camden Website</TypedSection>
        </h2>
        <p>
          <TypedSection index={1}>It's coming right along.</TypedSection>
        </p>
        <p>
          <TypedSection index={2}>Here's another paragraph.</TypedSection>
        </p>
        <Link to="/work">
          <TypedSection index={3}>Work</TypedSection>
        </Link>
        <Link to="/about">
          <TypedSection index={4}>About</TypedSection>
        </Link>
      </div>
    );
  }
}

export default connect()(Home);
