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
    dispatch(setAddress(BASE_PATH));
  }

  render() {
    return (
      <div className="work">
        <h1>
          <TypedSection index={0}>This is the work page</TypedSection>
        </h1>
        <h2>
          <TypedSection index={1}>Here are some projects I've done.</TypedSection>
        </h2>
        <ul>
          <li>
            <Link to='/work/trailtag'>
              <TypedSection index={2}>TrailTag</TypedSection>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to='/work/hubspot'>
              <TypedSection index={3}>HubSpot</TypedSection>
            </Link>
          </li>
        </ul>
        <Link to="/">
          <TypedSection index={4}>Home</TypedSection>
        </Link>
        <Link to="/about">
          <TypedSection index={5}>About</TypedSection>
        </Link>
      </div>
    )
  }
}

export default connect()(Work);
