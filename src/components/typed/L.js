import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import TypedSection from '../TypedSection';

import mapStateToProps from './mapStateToProps';

const createClass = template => {
  const StyledComponent = styled(Link)(template);
  class RouterLink extends Component {
    static extend(template) {
      return createClass(template);
    }

    render() {
      const { children, index, className, to, color } = this.props;
      return (
        <StyledComponent className={className} to={to} style={{ color }}>
          <TypedSection index={index}>{children}</TypedSection>
        </StyledComponent>
      );
    }
  }
  return connect(mapStateToProps)(RouterLink);
};

const Base = createClass``;
export default Base;
