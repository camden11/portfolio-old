import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementTypedSectionIndex } from '../actions/TypedSectionActions';

const DEFAULT_TIME = 1;

class ImageTypedSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      finished: false,
      active: false
    }
  }

  shouldComponentUpdate() {
    return !this.state.finished;
  }

  componentWillReceiveProps(nextProps) {
    const { index } = this.props;
    const { ready, active } = this.state;
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
    const intervalId = setInterval(() => this.step(), time);
    this.setState({ active: true });
    this.setState({ intervalId });
  }

  stop() {
    const { intervalId } = this.state;
    this.setState({ active: false });
    clearInterval(intervalId);
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
    const { src, children, className } = this.props;
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
