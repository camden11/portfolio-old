import React, { Component } from 'react';
import { P } from '../Tags';

export default ({ tracker }) => {
  return (
    <P index={tracker.index()}>This is HubSpot.</P>
  )
}
