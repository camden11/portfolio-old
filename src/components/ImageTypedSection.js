import { connect } from 'react-redux';
import React, { Component } from 'react';

import { incrementTypedSectionIndex } from '../actions/TypedSectionActions';

const DEFAULT_TIME = 1;

class ImageTypedSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      finished: false,
      active: false,
      intervalIds: []
    }
  }

  shouldComponentUpdate() {
    return !this.state.finished;
  }

  componentWillReceiveProps(nextProps) {
    const { index } = this.props;
    const { active } = this.state;
    if (nextProps.started && nextProps.currentIndex >= index && !active) {
      this.start(this.time());
    }
  }

  componentWillUnmount() {
    this.stop();
  }

  time() {
    return this.props.time || DEFAULT_TIME;
  }

  start(time) {
    const { intervalIds } = this.state;
    const intervalId = setInterval(() => this.step(), time);
    intervalIds.push(intervalId);
    this.setState({ intervalIds, active: true });
  }

  stop() {
    const { intervalIds } = this.state;
    intervalIds.forEach(intervalId => {
      clearInterval(intervalId);
    })
    this.setState({ active: false })
  }

  step() {
    const { height } = this.state;
    this.setState({ height: height + 2 }, () => {
      if (height + 2 === 100) {
        this.setState({ finished: true });
        this.stop();
        this.increment();
      }
    })
  }

  increment() {
    const { dispatch } = this.props;
    dispatch(incrementTypedSectionIndex());
  }

  render() {
    const { height } = this.state;
    const { children, className } = this.props;
    return (
      <div className={`image-container ${className}`} style={{ height: `${height}%`}}>
        { children }
      </div>
    )
  }

}

export default connect(({ typedSection }) => {
  return {
    currentIndex: typedSection.index,
    started: typedSection.started
  }
})(ImageTypedSection)
