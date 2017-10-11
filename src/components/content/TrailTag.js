import React, { Component } from 'react';
import { P, H4 } from '../Tags';
import { TypeIndexTracker } from '../../lib/utils';

export default (props) => {
  const tracker = new TypeIndexTracker(props.tracker);
  return (
    <div>
      <H4 index={tracker.index()}>More information coming soon.</H4>
    </div>
  )
}
