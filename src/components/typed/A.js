import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TypedSection from '../TypedSection';

import mapStateToProps from './mapStateToProps';

const createClass = template => {
  const StyledComponent = styled.a(template);
  class Anchor extends Component {
    static extend(template) {
      return createClass(template);
    }

    render() {
      const { children, index, className, href, color } = this.props;
      return (
        <StyledComponent
          className={className}
          href={href}
          target="_blank"
          style={{ color }}
        >
          <TypedSection index={index}>{children}</TypedSection>
        </StyledComponent>
      );
    }
  }
  return connect(mapStateToProps)(Anchor);
};

const Base = createClass``;
export default Base;
