import React from 'react';
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

export default ({ index, className, src, mobileSrc, alt }) => {
  return (
    <OuterContainer>
      <InnerContainer>
        <Img
          index={index}
          className={className}
          src={src}
          mobileSrc={mobileSrc}
          alt={alt}
        />
      </InnerContainer>
    </OuterContainer>
  );
};
