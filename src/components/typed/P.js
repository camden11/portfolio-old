import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TypedSection from '../TypedSection';

import mapStateToProps from './mapStateToProps';

const Paragraph = styled.p`
  font-family: 'Input Light';
  font-size: 16px;
  line-height: 20px;
`;

const P = ({ children, index, className, color, typeTime }) => {
  return (
    <Paragraph className={className} style={{ color }}>
      <TypedSection index={index} typeTime={typeTime} paragraph={true}>
        {children}
      </TypedSection>
    </Paragraph>
  );
};
export default connect(mapStateToProps)(P);
