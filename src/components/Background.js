import { connect } from "react-redux";
import React, { Component } from "react";
import styled from "styled-components";

import { finishBackgroundTyping } from "../actions/TypedSectionActions";
import { TypedSectionPhases } from "../constants";

import { MediaQueries } from "../style";

const TRANSITION_SPEED = 1;

const BackgroundColor = styled.div`
  top: 0;
  width: 100%;
  height: 100%;
  position: ${props => (props.addressBar ? "absolute" : "fixed")};
`;

const BackgroundContainer = styled.div``;
const AddressBarBackgroundContainer = styled.div`
  position: absolute;
  height: 59px;
  width: 100%;
  z-index: -1;

  > div {
    position: relative;
    width: 100%;
    height: 100%;
  }

  ${MediaQueries.small} {
    height: 38px;
  }
`;

class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bg1pos: 0,
      bg2pos: -100,
      bg1color: "#ffffff",
      bg2color: props.color,
      bg1active: true,
      transitionActive: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const { finishBackgroundTyping } = this.props;
    const { bg1active } = this.state;
    const activeBgColor = this.state[bg1active ? "bg1color" : "bg2color"];
    if (nextProps.color !== activeBgColor && nextProps.ready) {
      const { bg1active } = this.state;
      this.setState(
        {
          bg1active: !bg1active,
          bg1color: bg1active ? activeBgColor : nextProps.color,
          bg2color: bg1active ? nextProps.color : activeBgColor
        },
        () => this.transition()
      );
    } else if (nextProps.ready) {
      finishBackgroundTyping();
    }
  }

  transition() {
    const { transitionActive } = this.state;
    if (!transitionActive) {
      const intervalId = setInterval(
        () => this.transitionStep(),
        TRANSITION_SPEED
      );
      this.setState({ intervalId, transitionActive: true });
    }
  }

  transitionStep() {
    const { bg1active, intervalId } = this.state;
    const { finishBackgroundTyping } = this.props;
    const activeBgPos = bg1active ? "bg1pos" : "bg2pos";
    const inactiveBgPos = bg1active ? "bg2pos" : "bg1pos";
    const newState = {};
    newState[activeBgPos] = this.state[activeBgPos] + 2;
    if (newState[activeBgPos] === 0) {
      newState[inactiveBgPos] = -100;
      newState.transitionActive = false;
      clearInterval(intervalId);
      finishBackgroundTyping();
    }
    this.setState(newState);
  }

  render() {
    const { addressBar } = this.props;
    const { bg1pos, bg2pos, bg1color, bg2color, bg1active } = this.state;
    const Container = addressBar
      ? AddressBarBackgroundContainer
      : BackgroundContainer;
    return (
      <Container>
        <div>
          <BackgroundColor
            addressBar={addressBar}
            style={{
              background: bg1color,
              left: `${bg1pos}%`,
              zIndex: bg1active ? -2 : -3
            }}
          />
          <BackgroundColor
            addressBar={addressBar}
            style={{
              background: bg2color,
              left: `${bg2pos}%`,
              zIndex: bg1active ? -3 : -2
            }}
          />
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    color: state.color.backgroundColor,
    ready: state.typedSection.phase === TypedSectionPhases.BACKGROUND
  };
};

const mapDispatchToProps = dispatch => {
  return {
    finishBackgroundTyping: () => dispatch(finishBackgroundTyping())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Background);
