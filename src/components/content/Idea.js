import React from 'react';
import { P, H4 } from '../typed';
import { PROJECT_START_INDEX } from '../../constants';
import { TypeIndexTracker } from '../../lib/utils';

export default props => {
  const tracker = new TypeIndexTracker({ tracker: props.tracker });
  const typeTime = props.typeTime;
  return (
    <div>
      <H4 index={tracker.index()}>Background</H4>
      <P index={tracker.index()} typeTime={typeTime}>
        During my Fall 2017 semester at Northeastern, I worked on the tech team
        for Idea, the university's student-run venture accelerator. Our team had
        two major responsibilities: redesigning and rebuilding the university's
        Wordpress website and helping to nuture the entrepreneurship community
        within Northeastern's College of Computer and Information Science.
      </P>
      <P index={tracker.index()} typeTime={typeTime}>
        During my three months with idea, I helped to provide funding to a
        variety of different techical project, ranging from simple web apps to
        large scale data analysis projects. I also designed and developed a new
        foundation for their Wordpress site that their current designers and
        developers are continuing to work on today.
      </P>
    </div>
  );
};
