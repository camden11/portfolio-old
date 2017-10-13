import React, { Component } from 'react';
import { P, H4 } from '../Tags';
import { TypeIndexTracker } from '../../lib/utils';

export default (props) => {
  const tracker = new TypeIndexTracker(props.tracker);
  const typeTime = props.typeTime;
  return (
    <div>
      <H4 index={tracker.index()}>Background</H4>
      <P index={tracker.index()} typeTime={typeTime}>
        Last spring, I worked as a member of Scout, Northeastern's student-run
        design studio to build the app for TrailTag, a new wearable safetly device
        in development by a group of Boston entrepreneurs and Northeastern grad
        students. TrailTag is a simple but powerful emergency device that lets
        a group of friends communicate and signal emergencies to each other
        on wilderness excusrions, even when cellular service is not available.
        The wearable device connects to the app we built, which allows users
        to view their friends' locations and communicate via text message.
      </P>
      <H4 index={tracker.index()}>Work</H4>
      <P index={tracker.index()} typeTime={typeTime}>
        I contributed to both the design and development of TrailTag. I first worked
        with the design team to create a user interface for the application. Designing
        around the many limitations that come with using an app in the backcountry was
        a challenging yet very rewarding process. After finishing the UX designs, I
        switched into development and began building the app in React native with
        another team member. By the end of our development process, we had completely
        built out the interface for the application and made provisions for full
        functionality, including bluetooth communcation, to be added in the future.
      </P>
      <P index={tracker.index()} typeTime={typeTime}>
        More information coming soon.
      </P>
    </div>
  )
}
