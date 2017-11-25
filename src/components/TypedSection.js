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

  render() {
    const {
      children,
      typeTime,
      incrementTypedSectionIndex,
      paragraph
    } = this.props;
    const { ready } = this.state;
    if (ready) {
      return (
        <Typer
          onFinishTyping={incrementTypedSectionIndex}
          typeTime={typeTime}
          paragraph={paragraph}
        >
          { children }
        </Typer>
      );
    }
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    currentIndex: state.typedSection.index,
    started: state.typedSection.started
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementTypedSectionIndex: () => dispatch(incrementTypedSectionIndex())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TypedSection)
