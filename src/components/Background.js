import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementTypedSectionIndex } from '../actions/TypedSectionActions';

const TRANSITION_SPEED = 1 ;

class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bg1pos: 0,
      bg2pos: -100,
      bg1color: props.color,
      bg2color: props.color,
      bg1active: true,
      transitionActive: false
    }
  }

  componentWillReceiveProps(nextProps) {
    const { color, dispatch } = this.props;
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
      dispatch(incrementTypedSectionIndex());
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
    console.log(this.state);
    const { dispatch } = this.props;
    const activeBgPos = bg1active ? 'bg1pos' : 'bg2pos';
    const inactiveBgPos = bg1active ? 'bg2pos' : 'bg1pos';
    const newState = {};
    newState[activeBgPos] = this.state[activeBgPos] + 2;
    if (newState[activeBgPos] === 0) {
      newState[inactiveBgPos] = -100;
      newState.transitionActive = false;
      clearInterval(intervalId);
      dispatch(incrementTypedSectionIndex());
    }
    this.setState(newState);
  }

  render() {
    const { bg1pos, bg2pos, bg1color, bg2color, bg1active } = this.state;
    return (
      <div className="background-container">
        <div
          className="background"
          style={{ background: bg1color, left: `${bg1pos}%`, zIndex: bg1active ? -1 : -2 }}
        ></div>
        <div
          className="background"
          style={{ background: bg2color, left: `${bg2pos}%`, zIndex: bg1active ? -2 : -1 }}
        ></div>
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
export default connect(mapStateToProps)(Background);
