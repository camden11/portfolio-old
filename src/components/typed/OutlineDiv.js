import { connect } from 'react-redux';
import React, { Component } from 'react';
import styled from 'styled-components';

import { incrementTypedSectionIndex } from '../../actions/TypedSectionActions';
import { TypedSectionPhases } from '../../constants';

const createClass = template => {
  const StyledComponent = styled.div(template);
  class OutlineDiv extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ready: false,
      };
    }

    static extend(template) {
      return createClass(template);
    }

    componentWillReceiveProps(nextProps) {
      const { index, incrementTypedSectionIndex } = this.props;
      const { ready } = this.state;
      if (!ready && nextProps.started && nextProps.currentIndex >= index) {
        this.setState({ ready: true });
        incrementTypedSectionIndex();
      }
    }

    render() {
      const { children, className, borderColor, id } = this.props;
      const { ready } = this.state;
      const usedStyle = ready ? { borderColor } : { borderWidth: 0 };

      return (
        <StyledComponent className={className} style={usedStyle} id={id}>
          {children}
        </StyledComponent>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      currentIndex: state.typedSection.index,
      started: state.typedSection.phase === TypedSectionPhases.CONTENT,
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      incrementTypedSectionIndex: () => dispatch(incrementTypedSectionIndex()),
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(OutlineDiv);
};

const Base = createClass``;
export default Base;
