import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAddress } from '../actions/AddressBarActions';
import Typer from './Typer';
import { arrayEquals } from '../lib/utils';
import AddressUrls from '../lib/AddressUrls';
import { Link } from 'react-router-dom';

const BACKSPACE_TIME = 50;
const TYPE_TIME = 50;

class AddressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: [''],
      currentIndex: 0,
      forward: false,
      initiated: false
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ forward: false, initiated: true });
    this.startTyping(BACKSPACE_TIME);
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
    this.stopTyping()
    this.startTyping(TYPE_TIME);
  }

  shouldContinueBackspacing() {
    const { current, currentIndex, forward } = this.state;
    const { target } = this.props;
    return !forward
      && current.length > 0
      && current[0].length > 0
      && !arrayEquals(current, target.slice(0, currentIndex + 1));
  }

  typeStep() {
    const { current, forward } = this.state;
    const { target } = this.props;
    if (this.shouldContinueBackspacing()) {
      this.backspace();
    } else {
      if (!forward) {
        this.setState({ forward: true });
        this.switchInterval();
      }
      const doneTyping = arrayEquals(current, target);
      if (!doneTyping) {
        this.type()
      } else {
        this.stopTyping();
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
        currentIndex: currentIndex + 1
      });
    }
    this.typeCurrentSection();
  }

  typeCurrentSection() {
    const { target } = this.props;
    const { current, currentIndex } = this.state;
    const newCurrent = current;
    newCurrent[currentIndex] = target[currentIndex]
      .substring(0, newCurrent[currentIndex].length + 1);
    this.setState({
      current: newCurrent
    });
  }

  backspace() {
    const { current, currentIndex } = this.state;
    this.backspaceCurrentSection();
    if (current[currentIndex].length === 0) {
      this.setState({
        current: current.slice(0, currentIndex),
        currentIndex: currentIndex - 1
      });
    }
  }

  backspaceCurrentSection() {
    const { current, currentIndex } = this.state;
    const newCurrent = current;
    newCurrent[currentIndex] = current[currentIndex]
      .substring(0, current[currentIndex].length - 1);
    this.setState({
      current: newCurrent
    });
  }

  render() {
    const { current, initiated } = this.state;
    const { target } = this.props;
    if (initiated) {
      return (
        <h4>
          {current.map((section, index) => {
            if (index < target.length) {
              return (
                <span key={index}>
                  <Link to={AddressUrls[target[index]]}>
                    {section}
                  </Link>
                  {index !== current.length - 1 && ' / '}
                </span>
              )
            }
            return null;
          })}
        </h4>
      )
    }
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    target: state.addressBar.address
  }
}

export default connect(mapStateToProps)(AddressBar);
