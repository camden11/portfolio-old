import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayEquals } from '../lib/utils';
import AddressUrls from '../data/AddressUrls';
import { Link } from 'react-router-dom';
import { startTypedSection } from '../actions/TypedSectionActions';
import Background from './Background';

const BACKSPACE_TIME = 40;
const TYPE_TIME = 60;

class AddressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: [''],
      currentIndex: 0,
      forward: false,
      initiated: false,
      done: false,
      color: props.nextColor
    }
  }

  componentWillReceiveProps(nextProps) {
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
    const { target, dispatch, nextColor, nextBackgroundColor } = this.props;
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
        this.setState({ color: nextColor })
        dispatch(startTypedSection());
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
    const { current, initiated, color } = this.state;
    const { target } = this.props;
    if (initiated) {
      return (
        <div className="address-bar-container">
          <div className="address-bar-subcontainer">
            <Background
              className ="address-bar-background"
              containerClassName="address-bar-background-container"
            />
            <div className="address-bar-left"></div>
            <div
              className='address-bar'
              style={{ color: color, borderBottom: `1.5px solid ${color}`}}
            >
              <h2 className='address-bar-text'>
                {current.map((section, index) => {
                  if (index < target.length) {
                    return (
                      <span key={index}>
                        <Link
                          to={AddressUrls[target[index]]}
                          className='address-bar-link'
                          style={{ color: color }}
                        >
                          {section}
                        </Link>
                        {index !== current.length - 1 && ' / '}
                      </span>
                    )
                  }
                  return (
                    <span key={index}>
                      {section}
                      {index !== current.length - 1 && ' / '}
                    </span>
                  )
                })}
              </h2>
            </div>
            <div className="address-bar-right"></div>
          </div>
        </div>
      )
    }
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    target: state.addressBar.address,
    nextColor: state.color.textColor
  }
}

export default connect(mapStateToProps)(AddressBar);
