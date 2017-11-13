import React from 'react';
import { P, H4 } from '../Tags';
import { TypeIndexTracker } from '../../lib/utils';

export default (props) => {
  const tracker = new TypeIndexTracker(props.tracker);
  const typeTime = props.typeTime;
  return (
    <div>
      <H4 index={tracker.index()}>Background</H4>
        <P index={tracker.index()} typeTime={typeTime}>
          I'm currently working to completely redesign and rebuild the website
          for Idea, Northeastern's student-run venture accelerator. I've most
          recently finished the wireframing stage of the projects and am
          moving in to building out a Wordpress template for the site.
        </P>
        <P index={tracker.index()} typeTime={typeTime}>
          More details coming soon.
        </P>
    </div>
  )
}
