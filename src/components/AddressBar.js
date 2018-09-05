import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import styled from 'styled-components';

import Background from './Background';

import AddressUrls from '../data/AddressUrls';
import { arrayEquals } from '../lib/utils';
import { finishAddressBarTyping } from '../actions/TypedSectionActions';
import { MediaQueries, Container, Colors } from '../style';

const BACKSPACE_TIME = 50;
const TYPE_TIME = 50;

const AddressBarWrapper = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  margin: 0 auto;
`;

const AddressBarContainer = styled(Container)`
  padding-top: 0;
  padding-bottom: 0;
  ${MediaQueries.small} {
    min-height: 38px;
  }
`;

const Heading = styled.h2`
  font-size: 24px;
  line-height: 24px;
  min-height: 24px;
  font-family: 'Input';
  margin-top: 16px;
  margin-bottom: 17px;

  ${MediaQueries.small} {
    font-size: 16px;
    line-height: 16px;
    min-height: 16px;
    margin-top: 12px;
    margin-bottom: 10px;
  }
`;

const AddressBarLink = styled(Link)`
  text-decoration: none;
  transition: color 0.2s;
  color: ${Colors.gray};
`;

class AddressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: [''],
      currentIndex: 0,
      forward: false,
      initiated: false,
      done: false,
      color: props.nextColor,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.stopTyping();
    if (!arrayEquals(nextProps.target, this.props.target)) {
      this.setState({ forward: false, initiated: true });
      this.startTyping(BACKSPACE_TIME);
    }
  }

  startTyping(time) {
    const intervalId = setInterval(() => this.typeStep(), time);
    this.setState({ intervalId });
  }

  stopTyping() {
    const { intervalId } = this.state;
    clearInterval(intervalId);
  }

  switchInterval() {
    this.stopTyping();
    this.startTyping(TYPE_TIME);
  }

  shouldContinueBackspacing() {
    const { current, currentIndex, forward } = this.state;
    const { target } = this.props;
    return (
      !forward &&
      current.length > 0 &&
      current[0].length > 0 &&
      !arrayEquals(current, target.slice(0, currentIndex + 1))
    );
  }

  typeStep() {
    const { current, forward } = this.state;
    const { target, finishAddressBarTyping, nextColor } = this.props;
    if (this.shouldContinueBackspacing()) {
      this.backspace();
    } else {
      if (!forward) {
        this.setState({ forward: true });
        this.switchInterval();
      }
      const doneTyping = arrayEquals(current, target);
      if (!doneTyping) {
        this.type();
      } else {
        this.stopTyping();
        this.setState({ color: nextColor });
        finishAddressBarTyping();
      }
    }
  }

  type() {
    const { current, currentIndex } = this.state;
    const { target } = this.props;
    if (current[currentIndex] === target[currentIndex]) {
      const newCurrent = current;
      newCurrent[currentIndex + 1] = '';
      this.setState({
        current: newCurrent,
        currentIndex: currentIndex + 1,
      });
    }
    this.typeCurrentSection();
  }

  typeCurrentSection() {
    const { target } = this.props;
    const { current, currentIndex } = this.state;
    const newCurrent = current;
    newCurrent[currentIndex] = target[currentIndex].substring(
      0,
      newCurrent[currentIndex].length + 1
    );
    this.setState({
      current: newCurrent,
    });
  }

  backspace() {
    const { current, currentIndex } = this.state;
    this.backspaceCurrentSection();
    if (current[currentIndex].length === 0) {
      this.setState({
        current: current.slice(0, currentIndex),
        currentIndex: currentIndex - 1,
      });
    }
  }

  backspaceCurrentSection() {
    const { current, currentIndex } = this.state;
    const newCurrent = current;
    newCurrent[currentIndex] = current[currentIndex].substring(
      0,
      current[currentIndex].length - 1
    );
    this.setState({
      current: newCurrent,
    });
  }

  linkOnClick(target, index) {
    return target[index] === 'About' ? () => {} : () => window.scrollTo(0, 0);
  }

  render() {
    const { current, initiated, color } = this.state;
    const { target } = this.props;
    if (initiated) {
      return (
        <AddressBarWrapper>
          <Background
            addressBar
            containerClassName="address-bar-background-container"
          />
          <AddressBarContainer
            style={{ color: color, borderBottom: `1.5px solid ${color}` }}
          >
            <Heading className="address-bar-text">
              {current.map((section, index) => {
                if (index < target.length) {
                  return (
                    <span key={index}>
                      <AddressBarLink
                        to={AddressUrls[target[index]]}
                        style={{ color: color }}
                        onClick={this.linkOnClick(target, index)}
                      >
                        {section}
                      </AddressBarLink>
                      {index !== current.length - 1 && ' / '}
                    </span>
                  );
                }
                return (
                  <span key={index}>
                    {section}
                    {index !== current.length - 1 && ' / '}
                  </span>
                );
              })}
            </Heading>
          </AddressBarContainer>
        </AddressBarWrapper>
      );
    }
    return null;
  }
}

const mapStateToProps = state => {
  return {
    target: state.addressBar.address,
    nextColor: state.color.textColor,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    finishAddressBarTyping: () => dispatch(finishAddressBarTyping()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressBar);
