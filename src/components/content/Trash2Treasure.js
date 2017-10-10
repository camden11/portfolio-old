import React, { Component } from 'react';
import { P, H4 } from '../Tags';
import { TypeIndexTracker } from '../../lib/utils';

export default (props) => {
  const tracker = new TypeIndexTracker(props.tracker);
  return (
    <div>
      <H4 index={tracker.index()}>More information coming soon.</H4>
      <P index={tracker.index()}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique aliquet sodales. Donec at nisl non dolor euismod iaculis. Nam purus sapien, tempor quis lacinia tempus, consequat a enim. Mauris porttitor mollis maximus. Aenean nulla eros, semper vel laoreet ac, condimentum vel turpis. Nunc egestas elit sit amet lectus eleifend, at volutpat massa congue. Aenean elementum neque quis egestas convallis. Etiam interdum maximus venenatis. Etiam non tellus nec massa fermentum consectetur. Nulla eget fermentum metus. Curabitur vitae ultrices sem. Pellentesque mollis vehicula nisl, sit amet mattis urna pretium nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</P>
      <P index={tracker.index()}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique aliquet sodales. Donec at nisl non dolor euismod iaculis. Nam purus sapien, tempor quis lacinia tempus, consequat a enim. Mauris porttitor mollis maximus. Aenean nulla eros, semper vel laoreet ac, condimentum vel turpis. Nunc egestas elit sit amet lectus eleifend, at volutpat massa congue. Aenean elementum neque quis egestas convallis. Etiam interdum maximus venenatis. Etiam non tellus nec massa fermentum consectetur. Nulla eget fermentum metus. Curabitur vitae ultrices sem. Pellentesque mollis vehicula nisl, sit amet mattis urna pretium nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</P>
      <P index={tracker.index()}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique aliquet sodales. Donec at nisl non dolor euismod iaculis. Nam purus sapien, tempor quis lacinia tempus, consequat a enim. Mauris porttitor mollis maximus. Aenean nulla eros, semper vel laoreet ac, condimentum vel turpis. Nunc egestas elit sit amet lectus eleifend, at volutpat massa congue. Aenean elementum neque quis egestas convallis. Etiam interdum maximus venenatis. Etiam non tellus nec massa fermentum consectetur. Nulla eget fermentum metus. Curabitur vitae ultrices sem. Pellentesque mollis vehicula nisl, sit amet mattis urna pretium nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</P>
    </div>
  )
}
