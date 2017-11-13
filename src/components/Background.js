import { connect } from 'react-redux';
import React, { Component } from 'react';

import { incrementTypedSectionIndex } from '../actions/TypedSectionActions';

const TRANSITION_SPEED = 1 ;

class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bg1pos: 0,
      bg2pos: -100,
      bg1color: '#ffffff',
      bg2color: props.color,
      bg1active: true,
      transitionActive: false
    }
  }

  componentWillReceiveProps(nextProps) {
    const { incrementTypedSectionIndex } = this.props;
    const { bg1active } = this.state;
    const activeBgColor = this.state[bg1active ? 'bg1color' : 'bg2color'];
    if (nextProps.color !== activeBgColor && nextProps.ready) {
      const { bg1active } = this.state;
      this.setState({
        bg1active: !bg1active,
        bg1color: bg1active ? activeBgColor : nextProps.color,
        bg2color: bg1active ? nextProps.color : activeBgColor
      }, () => this.transition());
    } else if (nextProps.ready) {
      incrementTypedSectionIndex();
    }
  }

  transition() {
    const { transitionActive } = this.state;
    if (!transitionActive) {
      const intervalId = setInterval(() => this.transitionStep(), TRANSITION_SPEED);
      this.setState({ intervalId, transitionActive: true })
    }
  }

  transitionStep() {
    const { bg1active, intervalId } = this.state;
    const { incrementTypedSectionIndex } = this.props;
    const activeBgPos = bg1active ? 'bg1pos' : 'bg2pos';
    const inactiveBgPos = bg1active ? 'bg2pos' : 'bg1pos';
    const newState = {};
    newState[activeBgPos] = this.state[activeBgPos] + 2;
    if (newState[activeBgPos] === 0) {
      newState[inactiveBgPos] = -100;
      newState.transitionActive = false;
      clearInterval(intervalId);
      incrementTypedSectionIndex();
    }
    this.setState(newState);
  }

  render() {
    const { className, containerClassName } = this.props;
    const { bg1pos, bg2pos, bg1color, bg2color, bg1active } = this.state;
    return (
      <div className={`background-container ${containerClassName}`}>
        <div>
          <div
            className={`background ${className}`}
            style={{ background: bg1color, left: `${bg1pos}%`, zIndex: bg1active ? -2 : -3 }}
          ></div>
          <div
            className={`background ${className}`}
            style={{ background: bg2color, left: `${bg2pos}%`, zIndex: bg1active ? -3 : -2 }}
          ></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    color: state.color.backgroundColor,
    ready: state.typedSection.started
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementTypedSectionIndex: () => dispatch(incrementTypedSectionIndex())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Background);
