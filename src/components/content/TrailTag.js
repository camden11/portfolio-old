import React from 'react';
import { P, H4, Ul, Li, InlineImg, PhoneImg, PhotoImg } from '../typed';
import { PROJECT_START_INDEX } from '../../constants';
import { TypeIndexTracker } from '../../lib/utils';
import Image from '../../img';

export default props => {
  const tracker = new TypeIndexTracker({ tracker: props.tracker });
  const typeTime = props.typeTime;
  return (
    <div>
      <H4 index={tracker.index()}>Background</H4>
      <P index={tracker.index()} typeTime={typeTime}>
        While a member of Scout, Northeastern University’s student led design
        studio, I worked with a team of developers and designers to build the
        mobile app for TrailTag, a wearable safety device being developed by a
        group of Boston-based entrepreneurs. TrailTag is a simple but powerful
        emergency device that lets a group of friends communicate and signal
        emergencies to each other on wilderness excursions, even when cellular
        service is not available. The wearable device connects to the app we
        built, which allows users to view their friends' locations and
        communicate via text message.
      </P>
      <InlineImg index={tracker.index()} src={Image.trailtag.logo} />
      <H4 index={tracker.index()}>Client Requirements</H4>
      <P index={tracker.index()} typeTime={typeTime}>
        The team’s deliverables for the project included identity and branding
        for TrailTag, UI and UX design for the TrailTag mobile app, and the
        development of the mobile app. I focused primarily on UX design and
        development, while offering some feedback and guidance to the rest of
        the team in the remaining areas of our work.
      </P>
      <P index={tracker.index()} typeTime={typeTime}>
        The requirements for the mobile app were as follows:
      </P>
      <Ul>
        <Li index={tracker.index()} typeTime={typeTime}>
          Provide an interface for users to pair their phone to a TrailTag.
        </Li>
        <Li index={tracker.index()} typeTime={typeTime}>
          Provide an interface for users to join groups with others in their
          party for the purpose of communication and emergency signaling
        </Li>
        <Li index={tracker.index()} typeTime={typeTime}>
          Display the location of the user and the others in their group on a
          map of the surrounding area, along with whether or not each user has
          signaled an emergency.
        </Li>
        <Li index={tracker.index()} typeTime={typeTime}>
          Allow users to get directions to any other member of their group
        </Li>
        <Li index={tracker.index()} typeTime={typeTime}>
          Allow users to text message other users through their Trailtyped
        </Li>
        <Li index={tracker.index()} typeTime={typeTime}>
          Allow users to signal emergency alerts
        </Li>
        <Li index={tracker.index()} typeTime={typeTime}>
          Inform users when a member of their group has signaled an emergency
        </Li>
      </Ul>
      <H4 index={tracker.index()}>Research</H4>
      <P index={tracker.index()} typeTime={typeTime}>
        We spent three weeks conducting research to determine how to best build
        a brand and mobile application for TrailTag. This included exercises
        with our clients to get a better idea of their vision for TrailTag,
        interviews with members of the target market to gain insight on their
        needs and expectations for a safety mobile app, and research on the
        activities that TrailTag would be used with to determine what its ideal
        use cases would be and what limitations may arise. Through our research,
        we were able to create a much better defined vision for TrailTag.
      </P>
      <PhotoImg index={tracker.index()} src={Image.trailtag.ski} />
      <P index={tracker.index()} typeTime={typeTime}>
        Many of our findings had serious implications for the design and
        development of the mobile app. We decided that the best use case to
        focus on for TrailTag would be skiing, and designed around the tags
        being offered as rentals from ski resorts. This necessitated a simple,
        streamlined onboarding process for users that likely wouldn’t be using
        the app frequently and tag connection system that could function well
        even with upwards of 100 tags within connection range. The fact that
        Trailtyped would be primarily used in the wilderness also created a few
        important limitations we’d have to work around: First, users would not
        reliably have internet service, so the app would have to provide some
        way to download and store maps locally. Secondly, we wouldn’t be able to
        use a standard mapping service like Google or Apple since they provide
        little to no detail in wilderness areas.
      </P>
      <PhotoImg index={tracker.index()} src={Image.trailtag.ux} />
      <H4 index={tracker.index()}>Wireframing</H4>
      <P index={tracker.index()} typeTime={typeTime}>
        After finalizing our design requirements, we began working on
        wireframing the app. Through this process, we streamlined the app’s
        proposed features and created the it’s final UX and navigational flow.
      </P>
      <PhoneImg index={tracker.index()} src={Image.trailtag.screen1} />
      <H4 index={tracker.index()}>Development</H4>
      <P index={tracker.index()} typeTime={typeTime}>
        As the designers began transitioning the wireframes to high-fidelity
        mockups, the team’s other developer and I began working on developing
        the mobile app. We opted to use React Native to build an app that would
        be fully functional on both Android and iOS. We employed a variety of
        frameworks to assist on our development, including NativeBase for UI
        components, Redux for state management, and React Native Mapbox GL for
        topographic maps as well as local map storage. We also made provisions
        for the app to connect to the physical TrailTag devices via Bluetooth
        Low Energy using React Native BLE PLX. Once the designers were finished
        with the UI, we updated the app the match the high fidelity mockups
        using a Sass framework for React Native.
      </P>
      <PhoneImg index={tracker.index()} src={Image.trailtag.screen2} />
      <H4 index={tracker.index()}>Results</H4>
      <P index={tracker.index()} typeTime={typeTime}>
        Due to the production of the TrailTag hardware on our client’s end
        taking longer than expected, we were unable to make the application
        fully functional. However, we completely built out the interface for the
        app, and made provisions for bluetooth functionality and tag-to-tag
        connectivity functions to be added in in the future. Our clients are
        currently working on finishing the TrailTag hardware and getting it
        integrated with our application.
      </P>
    </div>
  );
};
