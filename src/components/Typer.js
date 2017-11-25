import React, { Component } from 'react';

const DEFAULT_BACKSPACE_TIME = 10;
const DEFAULT_TYPE_TIME = 10;
const PARAGRAPH_INCREMENT = 3;

class Typer extends Component {
  constructor(props) {
    super(props);
    const { start } = props;
    this.state = {
      current: start || '',
      forward: false,
      callbackFinished: false,
      intervalIds: []
    };
    this.defaultProps = {
      paragraph: false
    };
  }

  componentDidMount() {
    this.startTyping(this.backspaceTime());
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ forward: false });
    this.startTyping();
  }

  componentWillUnmount() {
    this.stopTyping();
  }

  backspaceTime() {
    return this.props.backspaceTime || DEFAULT_BACKSPACE_TIME;
  }

  typeTime() {
    return this.props.typeTime || DEFAULT_TYPE_TIME;
  }

  startTyping(time) {
    const { intervalIds } = this.state;
    const intervalId = setInterval(() => this.typeStep(), time);
    intervalIds.push(intervalId);
    this.setState({ intervalIds });
  }

  stopTyping() {
    const { intervalIds } = this.state;
    intervalIds.forEach(intervalId => {
      clearInterval(intervalId);
    })
  }

  switchInterval() {
    this.stopTyping()
    this.startTyping(this.typeTime());
  }

  shouldContinueBackspacing() {
    const { current, forward } = this.state;
    const target = this.props.children;
    return !forward &&
      current.length !== 0 &&
      current !== target.substring(0, current.length);
  }

  typeStep() {
    const { current, forward, callbackFinished } = this.state;
    const { children, onFinishTyping } = this.props;
    const target = children;
    if (this.shouldContinueBackspacing()) {
      this.backspace();
    } else {
      if (!forward) {
        this.setState({forward: true})
        this.switchInterval();
      }
      const doneTyping = current === target;
      if (!doneTyping) {
        this.type();
      } else {
        this.stopTyping();
        if (onFinishTyping && !callbackFinished) {
          this.setState({ callbackFinished: true });
          onFinishTyping();
        }
      }
    }
  }

  backspace() {
    const { current } = this.state;
    this.setState({
      current: current.substring(0, current.length - 1)
    });
  }

  type() {
    const target = this.props.children;
    const { paragraph } = this.props;
    const { current } = this.state;

    let next;

    if (paragraph) {
      next = current.length + PARAGRAPH_INCREMENT <= target.length
        ? target.substring(0, current.length + PARAGRAPH_INCREMENT)
        : target;
    } else {
      next = target.substring(0, current.length + 1);
    }

    this.setState({
      current: next
    });
  }

  render() {
    const { current } = this.state;
    return <span className="typer">{current}</span>
  }
}

export default Typer;
