import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAddress } from '../actions/AddressBarActions';
import Typer from './Typer';

class AddressBar extends Component {
  render() {
    const { currentAddress, previousAddress } = this.props;
    return (
      <h4><Typer start={previousAddress} end={currentAddress}/></h4>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentAddress: state.addressBar.currentAddress,
    previousAddress: state.addressBar.previousAddress
  }
}

export default connect(mapStateToProps)(AddressBar);
