import React, { Component } from 'react';

const DEFAULT_BACKSPACE_TIME = 40;
const DEFAULT_TYPE_TIME = 80;

class Typer extends Component {
  constructor(props) {
    super(props);
    const { start } = props;
    this.state = {
      currentText: start,
      forward: false
    }
  }

  componentDidMount() {
    this.startTyping()
  }

  componentWillReceiveProps(nextProps) {
    const { start } = nextProps;
    this.setState({ forward: false });
    this.startTyping();
  }

  backspaceTime() {
    return this.props.backspaceTime || DEFAULT_BACKSPACE_TIME;
  }

  typeTime() {
    return this.props.typeTime || DEFAULT_TYPE_TIME;
  }

  startTyping() {
    const intervalId = setInterval(() => this.typeStep(), this.backspaceTime());
    this.setState({ intervalId });
  }

  switchInterval() {
    const { intervalId } = this.state;
    clearInterval(intervalId);
    const newIntervalId = setInterval(() => this.typeStep(), this.typeTime());
    this.setState({ intervalId: newIntervalId })
  }

  shouldContinueBackspacing() {
    const { currentText, forward } = this.state;
    const { end } = this.props;
    return !forward &&
      currentText.length !== 0 &&
      currentText !== end.substring(0, currentText.length);
  }

  typeStep() {
    const { currentText, forward, intervalId } = this.state;
    const { end } = this.props
    if (this.shouldContinueBackspacing()) {
      this.backspace();
    } else {
      if (!forward) {
        this.setState({forward: true})
        // this.switchInterval();
      }
      const doneTyping = currentText === end;
      if (!doneTyping) {
        this.type();
      } else {
        clearInterval(intervalId);
      }
    }
  }

  backspace() {
    const { currentText } = this.state;
    this.setState({
      currentText: currentText.substring(0, currentText.length - 1)
    });
  }

  type() {
    const { end } = this.props;
    const { currentText } = this.state;
    this.setState({
      currentText: end.substring(0, currentText.length + 1)
    });
  }

  render() {
    console.log('render');
    const { currentText } = this.state;
    return <span className="typer">{currentText}</span>
  }
}

export default Typer;
