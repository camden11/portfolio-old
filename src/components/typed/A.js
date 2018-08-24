import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TypedSection from '../TypedSection';

import mapStateToProps from './mapStateToProps';

const Anchor = styled.a`
  font-family: 'Input Light';
  text-decoration: underline;
`;

const A = ({ children, index, className, href, color }) => {
  return (
    <Anchor className={className} href={href} target="_blank" style={{ color }}>
      <TypedSection index={index}>{children}</TypedSection>
    </Anchor>
  );
};
export default connect(mapStateToProps)(A);
