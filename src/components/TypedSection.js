import { connect } from 'react-redux';
import React, { Component } from 'react';

import Typer from './Typer';

import { incrementTypedSectionIndex } from '../actions/TypedSectionActions';

class TypedSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: props.started && props.index === props.currentIndex,
      finished: false
    }
  }

  shouldComponentUpdate() {
    return !this.state.finished;
  }

  componentWillReceiveProps(nextProps) {
    const { index } = this.props;
    const { ready } = this.state;
    if (ready) {
      this.setState({ finished: true });
    } else if (nextProps.started && nextProps.currentIndex >= index) {
      this.setState({ ready: true });
    }
  }

  increment() {
    const { dispatch } = this.props;
    dispatch(incrementTypedSectionIndex());
  }

  render() {
    const { children, typeTime } = this.props;
    const { ready } = this.state;
    if (ready) {
      return (
        <Typer
          onFinishTyping={() => this.increment()}
          typeTime={typeTime}
        >
          { children }
        </Typer>
      );
    }
    return null;
  }
}

export default connect(({ typedSection }) => {
  return {
    currentIndex: typedSection.index,
    started: typedSection.started
  }
})(TypedSection)
