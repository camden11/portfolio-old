import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TypedSection from '../TypedSection';

import mapStateToProps from './mapStateToProps';

const Heading = styled.h4`
  font-family: 'Input';
  text-transform: uppercase;
`;

const H4 = ({ children, index, className, color }) => {
  return (
    <Heading className={className} style={{ color }}>
      <TypedSection index={index}>{children}</TypedSection>
    </Heading>
  );
};
export default connect(mapStateToProps)(H4);
