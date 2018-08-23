import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import ImageTypedSection from '../ImageTypedSection';

import mapStateToProps from './mapStateToProps';
import { MediaQueries } from '../../style';

const createClass = (...template) => {
  const StyledComponent = styled.img(...template);
  const MainImage = StyledComponent.extend`
    ${MediaQueries.small} {
      ${props => (props.hideOnMobile ? 'display: none;' : '')};
    }
  `;
  const MobileImage = StyledComponent.extend`
    display: none;
    ${MediaQueries.small} {
      display: initial;
    }
  `;
  class Image extends Component {
    static extend(...template) {
      return createClass(...template);
    }

    render() {
      const { index, className, src, mobileSrc, alt } = this.props;
      return (
        <ImageTypedSection index={index}>
          <MainImage
            className={className}
            src={src}
            alt={alt}
            hideOnMobile={mobileSrc}
          />
          {mobileSrc && (
            <MobileImage className={className} src={mobileSrc} alt={alt} />
          )}
        </ImageTypedSection>
      );
    }
  }
  return connect(mapStateToProps)(Image);
};

const Base = createClass``;
export default Base;
