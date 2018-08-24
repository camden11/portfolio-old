import { connect } from 'react-redux';
import React, { Component } from 'react';

import { incrementTypedSectionIndex } from '../../actions/TypedSectionActions';
import { TypedSectionPhases } from '../../constants';

class OutlineDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
    };
  }
  componentWillReceiveProps(nextProps) {
    const { index, incrementTypedSectionIndex } = this.props;
    const { ready } = this.state;
    if (!ready && nextProps.started && nextProps.currentIndex >= index) {
      this.setState({ ready: true });
      incrementTypedSectionIndex();
    }
  }

  render() {
    const { children, className, borderColor, id } = this.props;
    const { ready } = this.state;
    const usedStyle = ready ? { borderColor } : { borderWidth: 0 };

    return (
      <div className={className} style={usedStyle} id={id}>
        {children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentIndex: state.typedSection.index,
    started: state.typedSection.phase === TypedSectionPhases.CONTENT,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementTypedSectionIndex: () => dispatch(incrementTypedSectionIndex()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutlineDiv);
