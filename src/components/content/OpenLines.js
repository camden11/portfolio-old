import React from 'react';
import { P, H4, PhotoImg } from '../typed';
import { PROJECT_START_INDEX } from '../../constants';
import { TypeIndexTracker } from '../../lib/utils';
import Image from '../../img';

export default props => {
  const tracker = new TypeIndexTracker({ tracker: props.tracker });
  const { typeTime } = props;
  return (
    <div>
      <H4 index={tracker.index()}>Background</H4>
      <P index={tracker.index()} typeTime={typeTime}>
        Open lines is a research project run by Northeastern University
        professors Kristian Kloekl, Jonathan Carr, and Mark Sivak that seeks to
        examine the design of responsive environments and the way people
        interact with them. My role in the project has been to create the
        responsive environment that is to be studied. This environment consists
        of a series of cameras and projectors situated in the ceiling of
        Northeastern’s Snell Library. I wrote software that detects pedestrian
        motion using the cameras and projects a visualization that responds to
        this motion onto the floor. The current visualization involves a grid of
        moving lines that shifts in response to the average angle of pedestrian
        paths in the area.
      </P>
      <PhotoImg index={tracker.index()} src={Image.openLines.vis} />
      <P index={tracker.index()} typeTime={typeTime}>
        Following its completion, the environment was tested by improvisational
        theater actors to see what kind of behaviors the it could affect in a
        passerby. The professors and I are currently working on a paper to
        dicuss our findings.
      </P>
      <PhotoImg index={tracker.index()} src={Image.openLines.active} />
    </div>
  );
};
