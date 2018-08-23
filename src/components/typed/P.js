import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TypedSection from '../TypedSection';

import mapStateToProps from './mapStateToProps';

const createClass = template => {
  const StyledComponent = styled.p`
    ${template};
  `;
  class Paragraph extends Component {
    static extend(template) {
      return createClass(template);
    }

    render() {
      const { children, index, className, color, typeTime } = this.props;
      return (
        <StyledComponent className={className} style={{ color }}>
          <TypedSection index={index} typeTime={typeTime} paragraph={true}>
            {children}
          </TypedSection>
        </StyledComponent>
      );
    }
  }
  return connect(mapStateToProps)(Paragraph);
};

const Base = createClass``;
export default Base;
