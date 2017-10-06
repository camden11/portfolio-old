import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementTypedSectionIndex } from '../actions/TypedSectionActions';
import Typer from './Typer';

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
    const { children } = this.props;
    const { ready } = this.state;
    if (ready) {
      return (
        <Typer onFinishTyping={() => this.increment()}>{ children }</Typer>
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
