import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

import ImageTypedSection from './ImageTypedSection';
import TypedSection from './TypedSection';

const mapStateToProps = (state) => {
  return {
    color: state.color.textColor,
    currentIndex: state.typedSection.index
  }
}

const paragraph = ({ children, index, className, color, typeTime }) => {
  return (
    <p className={className} style={{ color }}>
      <TypedSection
        index={index}
        typeTime={typeTime}
        paragraph={true}
      >
        {children}
      </TypedSection>
    </p>
  );
}
export const P = connect(mapStateToProps)(paragraph);

const heading1 = ({ children, index, className, color }) => {
  return (
    <h1 className={className} style={{ color }}>
      <TypedSection index={index}>{children}</TypedSection>
    </h1>
  );
}
export const H1 = connect(mapStateToProps)(heading1);

const heading2 = ({ children, index, className, color }) => {
  return (
    <h2 className={className} style={{ color }}>
      <TypedSection index={index}>{children}</TypedSection>
    </h2>
  );
}
export const H2 = connect(mapStateToProps)(heading2);

const heading3 = ({ children, index, className, color }) => {
  return (
    <h3 className={className} style={{ color }}>
      <TypedSection index={index}>{children}</TypedSection>
    </h3>
  );
}
export const H3 = connect(mapStateToProps)(heading3);

const heading4 = ({ children, index, className, color }) => {
  return (
    <h4 className={className} style={{ color }}>
      <TypedSection index={index}>{children}</TypedSection>
    </h4>
  );
}
export const H4 = connect(mapStateToProps)(heading4);

const heading5 = ({ children, index, className, color }) => {
  return (
    <h5 className={className} style={{ color }}>
      <TypedSection index={index}>{children}</TypedSection>
    </h5>
  );
}
export const H5 = connect(mapStateToProps)(heading5);

const heading6 = ({ children, index, className, color }) => {
  return (
    <h6 className={className} style={{ color }}>
      <TypedSection index={index}>{children}</TypedSection>
    </h6>
  );
}
export const H6 = connect(mapStateToProps)(heading6);

const anchor = ({ children, index, className, href, color }) => {
  return (
    <a className={className} href={href} target="_blank" style={{ color }}>
      <TypedSection index={index}>{children}</TypedSection>
    </a>
  );
}
export const A = connect(mapStateToProps)(anchor);

const link = ({ children, index, className, to, color }) => {
  return (
    <Link className={className} to={to} style={{ color }}>
      <TypedSection index={index}>{children}</TypedSection>
    </Link>
  );
}
export const L = connect(mapStateToProps)(link);

const image = ({ index, className, src, mobileSrc, alt }) => {
  return (
    <ImageTypedSection index={index}>
      <img
        className={`${className} ${mobileSrc ? 'large-only' : ''}`}
        src={src}
        alt={alt}
      />
      {mobileSrc &&
        <img className={`${className} small-only`} src={mobileSrc} alt={alt} />
      }
    </ImageTypedSection>
  );
}
export const Img = connect(mapStateToProps)(image);

export const InlineImg = ({ index, className, src, mobileSrc, alt }) => {
  return (
    <div className="inline-img-outer">
      <div className="inline-img-inner">
        <Img
          index={index}
          className={className}
          src={src}
          mobileSrc={mobileSrc}
          alt={alt}
        />
      </div>
    </div>
  );
}

const listItem = (
  { children, index, currentIndex, className, color, typeTime }
) => {
  const display = index <= currentIndex ? 'list-item' : 'none';
  return (
    <li className={className} style={{ color, display }}>
      <TypedSection
        index={index}
        typeTime={typeTime}
        paragraph={true}
      >
        {children}
      </TypedSection>
    </li>
  )
}
export const LI = connect(mapStateToProps)(listItem);
