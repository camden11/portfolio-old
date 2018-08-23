import React from 'react';
import { P } from '../typed';
import { TypeIndexTracker } from '../../lib/utils';

export default props => {
  const tracker = new TypeIndexTracker({ tracker: props.tracker });
  const typeTime = props.typeTime;
  return (
    <div>
      <P index={tracker.index()} typeTime={typeTime}>
        During my last semester at Northeastern, I worked as a project lead for
        Scout, Northeastern's student-led design studio. As a project lead, I
        lead a team of five designers and developers to carry out a variety of
        different design and development tasks for Mass Hike, a local nonprofit
        that aims to make nature more accessible to those who need it. These
        included an entire rebrand of the company, development and design of a
        new marketing website, and devlopment and design of a platform that
        allows Mass Hike's customes to book tickets for the trips into nature
        the company offers.
      </P>
      <P index={tracker.index()} typeTime={typeTime}>
        This project is current wrapping up. More information coming soon.
      </P>
    </div>
  );
};
