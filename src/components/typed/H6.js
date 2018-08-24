import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TypedSection from '../TypedSection';

import mapStateToProps from './mapStateToProps';
import { MediaQueries } from '../../style';

const Heading = styled.h6`
  font-size: 14px;
  font-family: 'Input Bold';
  margin-top: 0;
  margin-bottom: 5px;
  ${MediaQueries.small} {
    font-size: 16px;
  }
`;

const H6 = ({ children, index, className, color }) => {
  return (
    <Heading className={className} style={{ color }}>
      <TypedSection index={index}>{children}</TypedSection>
    </Heading>
  );
};
export default connect(mapStateToProps)(H6);
