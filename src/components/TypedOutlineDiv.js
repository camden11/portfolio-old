import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementTypedSectionIndex } from '../actions/TypedSectionActions';

class TypedOutlineDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false
    }
  }
  componentWillReceiveProps(nextProps) {
    const { index, dispatch } = this.props;
    const { ready } = this.state;
    if (!ready && nextProps.started && nextProps.currentIndex >= index) {
      this.setState({ ready: true });
      dispatch(incrementTypedSectionIndex());
    }
  }

  render() {
    const { children, className, borderColor, id } = this.props;
    const { ready } = this.state;
    const usedStyle = ready ? { borderColor} : { borderWidth: 0 };

    return (
      <div className={className} style={usedStyle} id={id}>
        {children}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentIndex: state.typedSection.index,
    started: state.typedSection.started
  }
}

export default connect(mapStateToProps)(TypedOutlineDiv);
