import React, { Component } from 'react';
import { P } from '../Tags';
import { TypeIndexTracker } from '../../lib/utils';

export default (props) => {
  const tracker = new TypeIndexTracker(props.tracker);
  return (
    <P index={tracker.index()}>This is Trash2Treasure</P>
  )
}
