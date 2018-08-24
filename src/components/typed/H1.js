import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TypedSection from '../TypedSection';

import mapStateToProps from './mapStateToProps';
import { MediaQueries } from '../../style';

const Heading = styled.h1`
  font-family: 'Crimson';
  font-size: 55px;
  line-height: 65px;
  margin-bottom: 70px;

  ${MediaQueries.small} {
    font-size: 40px;
    line-height: 47px;
    margin-bottom: 45px;
  }

  ${MediaQueries.extraSmall} {
    font-size: 40px;
    line-height: 47px;
    margin-bottom: 60px;
  }
`;

const H1 = ({ children, index, className, color }) => {
  return (
    <Heading className={className} style={{ color }}>
      <TypedSection index={index}>{children}</TypedSection>
    </Heading>
  );
};
export default connect(mapStateToProps)(H1);
