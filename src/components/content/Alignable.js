import React from 'react';
import { P, H4 } from '../typed';
import { PROJECT_START_INDEX } from '../../constants';
import { TypeIndexTracker } from '../../lib/utils';

export default props => {
  const tracker = new TypeIndexTracker({ tracker: props.tracker });
  const { typeTime } = props;
  return (
    <div>
      <H4 index={tracker.index()}>Background</H4>
      <P index={tracker.index()} typeTime={typeTime}>
        I worked for six months as a software engineer co-op at Alignable, a
        Boston-based startup seeking to help small businesses connect with
        others in their communities. Alignable is a social network similar to
        LinkedIn, in which small business owners can create profiles for their
        businesses, list promotions and services, and connect with and recommend
        other nearby businesses.
      </P>
      <H4 index={tracker.index()}>Work</H4>
      <P index={tracker.index()} typeTime={typeTime}>
        While at Alignable, I worked on a wide variety of the different facets
        of their web application, ranging from small bug fixes to major new
        features. My biggest project was working with a team of other engineers
        to completely revamp the site’s users-only message boards to a public
        facing Q&A and blog post platform. This was a months-long endeavor that
        involved the creation of a great deal of new features, each of which had
        to be carefully integrated into the rest of the application in many
        different ways. My primary focuses during this project was a topic
        following interface that allowed users to select which categories of
        posts were most interesting to them and a dynamic public-facing nav bar
        designed to feature the site’s most popular content.
      </P>
    </div>
  );
};
