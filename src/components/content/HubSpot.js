import React from 'react';
import { H4, P, InlineImg } from '../Tags';
import { PROJECT_START_INDEX } from '../../constants';
import { TypeIndexTracker } from '../../lib/utils';
import Image from '../../img';

export default (props) => {
  const tracker = new TypeIndexTracker({tracker: props.tracker});
  const { typeTime } = props;
  return (
    <div>
      <H4 index={tracker.index()}>Background</H4>
      <P index={tracker.index()} typeTime={typeTime}>
        I started my second and final Northeastern co-op this past July at
        HubSpot, a marketing software company based in Cambridge, MA. HubSpot's
        product is a suite of applications designed to help small and growing
        businesses find leads, acquire customers, and maintain relationships
        with said customers. I've been working on the pages section of their
        content management system, which allows users to build their own landing
        pages and websites.
      </P>
      <H4 index={tracker.index()}>Work</H4>
      <P index={tracker.index()} typeTime={typeTime}>
        The focus of my work during my first few months of the company was the
        pages dashboard, which allows users to view their landing and website
        pages,create and modify those pages, and get insight on how their pages
        have been doing. The dashboard had recently been redesigned, and I was
        responsible for implementing features that followed the new design
        language, as well fixing the inevitable bugs that appear when an app is
        rewritten.
      </P>
      <InlineImg
        index={tracker.index()}
        src={Image.hubspot.dashboard}
        className="image-web"
      />
      <P index={tracker.index()} typeTime={typeTime}>
        During this time, I grew proficient with HubSpot's front-end stack,
        which is primarily composed of React and Redux.
      </P>
      <InlineImg
        index={tracker.index()}
        src={Image.hubspot.analyze}
        className="image-web"
      />
      <P index={tracker.index()} typeTime={typeTime}>
        With the skills I had gained from working on the dashboard, I began work
        on my first large-scale project this past September. I was tasked with
        rebuilding HubSpot's content creator interface to match their new design
        language, effectively bulding a brand new application from the ground
        up. This project is currently still in progress.
      </P>
    </div>
  )
}
