import { connect } from 'react-redux';
import React, { Component } from 'react';

import Typer from './Typer';

import { incrementTypedSectionIndex } from '../actions/TypedSectionActions';
import { TypedSectionPhases } from '../constants';

class TypedSection extends Component {
  constructor(props) {
    super(props);
    if (props.children === "Work") {
      console.log('construct');
      console.log(props);
    }
    this.state = {
      ready: props.started && props.index === props.currentIndex,
      finished: false
    }
    if (props.children === "Work") {
      console.log(this.state);
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

  incrementTypedSectionTest() {
    const { incrementTypedSectionIndex, children, currentIndex } = this.props;
    incrementTypedSectionIndex();
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
          onFinishTyping={() => this.incrementTypedSectionTest()}
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
    started: state.typedSection.phase === TypedSectionPhases.CONTENT
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementTypedSectionIndex: () => dispatch(incrementTypedSectionIndex())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TypedSection)
