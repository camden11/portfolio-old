import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TypedSection from '../TypedSection';

import mapStateToProps from './mapStateToProps';
import { MediaQueries } from '../../style';

const Heading = styled.h3`
  margin-top: 0;
  margin-bottom: 30px;
  font-family: 'Input Bold';
  font-size: 30px;
  ${MediaQueries.small} {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

const H3 = ({ children, index, className, color }) => {
  return (
    <Heading className={className} style={{ color }}>
      <TypedSection index={index}>{children}</TypedSection>
    </Heading>
  );
};
export default connect(mapStateToProps)(H3);
