import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import TypedSection from '../TypedSection';

import mapStateToProps from './mapStateToProps';

const link = ({ children, index, className, to, color }) => {
  return (
    <Link className={className} to={to} style={{ color }}>
      <TypedSection index={index}>{children}</TypedSection>
    </Link>
  );
};
export default connect(mapStateToProps)(link);
