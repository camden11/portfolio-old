import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TypedSection from '../TypedSection';

import mapStateToProps from './mapStateToProps';

const Heading = styled.h5`
  font-size: 20px;
  font-family: 'Input Bold';
  margin-top: 0;
  margin-bottom: 5px;
`;

const H5 = ({ children, index, className, color }) => {
  return (
    <Heading className={className} style={{ color }}>
      <TypedSection index={index}>{children}</TypedSection>
    </Heading>
  );
};
export default connect(mapStateToProps)(H5);
