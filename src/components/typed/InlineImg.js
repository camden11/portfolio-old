import React, { Component } from 'react';
import styled from 'styled-components';

import Img from './Img';

const OuterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

const InnerContainer = styled.div`
  grid-column: span 1;
  grid-row: span 1;
  height: 100%;
`;

const createClass = (...template) => {
  const StyledComponent = Img.extend(...template);
  class InlineImage extends Component {
    static extend(...template) {
      return createClass(...template);
    }
    render() {
      const { index, className, src, mobileSrc, alt } = this.props;
      return (
        <OuterContainer>
          <InnerContainer>
            <StyledComponent
              index={index}
              className={className}
              src={src}
              mobileSrc={mobileSrc}
              alt={alt}
            />
          </InnerContainer>
        </OuterContainer>
      );
    }
  }
  return InlineImage;
};

const Base = createClass``;
export default Base;
