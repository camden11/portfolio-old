import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import ImageTypedSection from '../ImageTypedSection';

import mapStateToProps from './mapStateToProps';
import { MediaQueries } from '../../style';

const BaseImage = styled.img`
  width: 100%;
  height: auto;
  box-sizing: border-box;
`;

const MainImage = styled(BaseImage)`
  ${MediaQueries.small} {
    ${props => (props.hideOnMobile ? 'display: none;' : '')};
  }
`;

const MobileImage = styled(BaseImage)`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: none;
  ${MediaQueries.small} {
    display: initial;
  }
`;

const image = ({ index, className, src, mobileSrc, alt }) => {
  return (
    <ImageTypedSection index={index}>
      <MainImage
        className={className}
        src={src}
        alt={alt}
        hideOnMobile={!!mobileSrc}
      />
      {mobileSrc && (
        <MobileImage className={className} src={mobileSrc} alt={alt} />
      )}
    </ImageTypedSection>
  );
};
export default connect(mapStateToProps)(image);
