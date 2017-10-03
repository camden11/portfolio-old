import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAddress } from '../actions/AddressBarActions';

const PATH = 'Camden Phalen';

class Home extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    dispatch(setAddress(PATH))
  }
  render() {
    const { dispatch } = this.props;
    return (
      <div className="Home">
        <h2>Welcome to Camden Website</h2>
        <p>It's coming right along.</p>
        <button onClick={() => dispatch(setAddress("Camden Phalen / Code"))}>Code</button>
        <button onClick={() => dispatch(setAddress("Camden Phalen / Experience"))}>Experience</button>
        <button onClick={() => dispatch(setAddress("Camden Phalen / About"))}>About</button>
      </div>
    );
  }
}

export default connect()(Home);
