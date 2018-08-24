import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TypedSection from '../TypedSection';

import mapStateToProps from './mapStateToProps';

const ListItem = styled.li`
  display: ${props => (props.show ? 'list-item' : 'none')};
  font-family: 'Input Light';
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 10px;
`;

const Li = ({ children, index, currentIndex, className, color, typeTime }) => {
  return (
    <ListItem
      className={className}
      style={{ color }}
      show={index <= currentIndex}
    >
      <TypedSection index={index} typeTime={typeTime} paragraph={true}>
        {children}
      </TypedSection>
    </ListItem>
  );
};
export default connect(mapStateToProps)(Li);
