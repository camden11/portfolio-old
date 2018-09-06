import React from 'react';
import {
  P,
  H4,
  Ul,
  Li,
  A,
  InlineImg,
  PhoneImg,
  PhotoImg,
  WebImg,
} from '../typed';
import { TypeIndexTracker } from '../../lib/utils';
import Image from '../../img';

export default props => {
  const tracker = new TypeIndexTracker({ tracker: props.tracker });
  const typeTime = props.typeTime;
  return (
    <div>
      <H4 index={tracker.index()}>Background</H4>
      <P index={tracker.index()} typeTime={typeTime}>
        During my last semester at Northeastern, I worked as a project lead for
        Scout, Northeastern's student-led design studio. As a project lead, I
        lead a team of five designers and developers to carry out a variety of
        different design and development tasks for Mass Hike, a nonprofit
        organization based in Boston.
      </P>
      <P index={tracker.index()} typeTime={typeTime}>
        Mass Hike's goal as a company is simple but powerful: to make nature
        more accessible. Right now, they accomplish this goal by providing
        regular trips from Boston to hiking destinations in the surrounding area
        via a shuttle bus. Their target users fall into two distinct groups:
        young professionals who enjoy hiking but lack adequate transportation
        and members of low income communities who, due to financial constraints,
        have a difficult time getting out of the city and may have never been on
        a hike in their lives. Mass Hike helps these people experience nature by
        offering tickets to their hikes at a heavily discounted price to those
        who need them.
      </P>
      <PhotoImg index={tracker.index()} src={Image.massHike.hike} dark />
      <P index={tracker.index()} typeTime={typeTime}>
        Our goal as a team was to help achieve their goal of accessibility
        through three main deliverables: a completely revamped brand, a
        CMS-based marketing website, and an e-commerce platform to facilitate
        ticket sales, complete with both customer and admin facing web apps.
      </P>
      <H4 index={tracker.index()}>Research</H4>
      <P index={tracker.index()} typeTime={typeTime}>
        Before we could begin designing for Mass Hike’s users, we had to
        understand their backgrounds, motivations, and capabilities with regards
        to technology. As a team of college students, we felt like we had a
        fairly thorough understanding of the young professional half of their
        market, so we focused the majority of our efforts on gaining insight
        into the members of low income communities. Our primary questions were
        as follows:
      </P>
      <Ul>
        <Li index={tracker.index()} typeTime={typeTime}>
          How much experience with technology do the members of these
          communities have? What devices do they have access to?
        </Li>
        <Li index={tracker.index()} typeTime={typeTime}>
          How much exposure to wilderness and hiking do they have? What are
          their motivations for getting there?
        </Li>
        <Li index={tracker.index()} typeTime={typeTime}>
          What channels can we reach them through?
        </Li>
        <Li index={tracker.index()} typeTime={typeTime}>
          How do they prefer to pay for things purchased online? How common is
          it to not have a bank account or credit card?
        </Li>
      </Ul>
      <P index={tracker.index()} typeTime={typeTime}>
        We explored these questions through a variety of methods. First, we
        reached out to contacts in low income housing developments provided by
        Mass Hike. Following that, we created an online questionnaire and sent
        it to members of Mass Hike’s mailing list. Finally, to follow up on the
        questionnaire, we conducted a survey over the phone with some of Mass
        Hike’s previous customers. This research phase was extremely helpful in
        informing our design requirements.
      </P>
      <H4 index={tracker.index()}>Design Requirements</H4>
      <P index={tracker.index()} typeTime={typeTime}>
        Using our data from our research, as well as additional exercises with
        the Mass Hike team, we were able to solidify requirements for the design
        of the different components we’d be building.
      </P>
      <P index={tracker.index()} typeTime={typeTime}>
        Brand
      </P>
      <Ul>
        <Li index={tracker.index()} typeTime={typeTime}>
          Friendly, inviting, and welcoming to all potential users of Mass Hike
          without looking overly childish or unsophisticated
        </Li>
      </Ul>
      <P index={tracker.index()} typeTime={typeTime}>
        Marketing Website
      </P>
      <Ul>
        <Li index={tracker.index()} typeTime={typeTime}>
          Informative and easy to understand information on who Mass Hike is,
          how they operate, and the benefits of spending time in nature
        </Li>
        <Li index={tracker.index()} typeTime={typeTime}>
          Easily editable by non-technical members of the Mass Hike team
        </Li>
      </Ul>
      <P index={tracker.index()} typeTime={typeTime}>
        Booking Platform
      </P>
      <Ul>
        <Li index={tracker.index()} typeTime={typeTime}>
          Extremely user friendly for both the tech-savvy and people who use
          technology very infrequently
        </Li>
        <Li index={tracker.index()} typeTime={typeTime}>
          Mobile-first experience for community members who have smartphones but
          lack access to computers
        </Li>
        <Li index={tracker.index()} typeTime={typeTime}>
          Pages to view upcoming trips, learn more about them, and purchase
          tickets for them
        </Li>
        <Li index={tracker.index()} typeTime={typeTime}>
          An option to pay for trips with cash for community members who don’t
          have bank accounts or credit cards
        </Li>
        <Li index={tracker.index()} typeTime={typeTime}>
          Straightforward language and organization to assure users know exactly
          what it is they are getting out of Mass Hike
        </Li>
      </Ul>
      <P index={tracker.index()} typeTime={typeTime}>
        Admin Platform
      </P>
      <Ul>
        <Li index={tracker.index()} typeTime={typeTime}>
          Functionality for creating, editing, and viewing trips by Mass Hike
          team members
        </Li>
        <Li index={tracker.index()} typeTime={typeTime}>
          Functionality for viewing ticket order details
        </Li>
        <Li index={tracker.index()} typeTime={typeTime}>
          Functionality for receiving cash payments
        </Li>
        <Li index={tracker.index()} typeTime={typeTime}>
          Functionality prioritized over design, as it will only be used by
          members of the Mass Hike team
        </Li>
      </Ul>
      <PhotoImg index={tracker.index()} src={Image.massHike.brandWork} dark />
      <H4 index={tracker.index()}>Brand</H4>
      <P index={tracker.index()} typeTime={typeTime}>
        After we solidified the requirements for the brand, our brand and UI
        designer got to work. She drafted up a variety of different logo
        variations, each of which displaying Mass Hike’s desired friendly and
        welcoming personality. After much consultation with both our clients and
        our team, we eventually settled on the final logo.
      </P>
      <InlineImg index={tracker.index()} src={Image.massHike.logo} />
      <P index={tracker.index()} typeTime={typeTime}>
        Following the logo design process, work continued to extrapolate the
        colors and font used in the logo into a full cohesive brand. In the end,
        we chose fonts and colors that would evoke feelings of reading printed
        material for the purpose of familiarity, without compromising on the
        experience on the web. After the brand was finished, we worked to
        incorporate it into the user interface, and presented our client with a
        brand book detailing how and how not to use the brand.
      </P>
      <H4 index={tracker.index()}>User Experience and Interface</H4>
      <P index={tracker.index()} typeTime={typeTime}>
        Ultimately, the success of our new web apps would come down to how
        successfully we could implement our usability design requirements, so as
        soon as we established them, we dove directly in to brainstorming and
        wireframeing for the apps. During this process, I worked with a novice
        UX designer, and did my best to teach her everything she needed to know
        to take over the UX and UI process once I switched over to writing code.
      </P>
      <InlineImg
        index={tracker.index()}
        src={Image.massHike.wireframesMobile}
      />
      <P index={tracker.index()} typeTime={typeTime}>
        The first step of the UX design process was deciding exactly what
        information we wanted to display, and how it needed to be organized.
        Once we had an idea of what exactly we needed to design, we started
        working on wireframeing out our ideas. The process for the marketing
        website was fairly straightforward: we just needed to present the
        information in a sensible and well organized way and we had a lot of
        good inspiration to work with. The booking platform, on the other hand,
        provided much more of a challenge: we needed something that would work
        within our friendly and accessible brand, and something that would
        usable by someone who rarely interacted with technology.
      </P>
      <WebImg index={tracker.index()} src={Image.massHike.desktop} />
      <P index={tracker.index()} typeTime={typeTime}>
        Our final designs included a fairly standard marketing website,
        (complete with a landing page, about page, and FAQ) and a ticket
        checkout process that was meticulously designed to be as usable and
        forgiving as possible. Our checkout process was split into 4 different
        easily digestible sections, with each validating your information one
        step at a time before letting you move on. The biggest challenge during
        our UX design process was solving the issue of cash payment — an
        important design requirement for those who don’t have credit cards. In
        the end, we devised a system that would allow the Mass Hike team to
        schedule availability to meet with people who’d like to pay in cash, and
        an option in the checkout process to choose a time and meeting point to
        make the payment.
      </P>
      <PhoneImg index={tracker.index()} src={Image.massHike.mobile} />
      <P index={tracker.index()} typeTime={typeTime}>
        After the UX wireframes were finalized, both designers on the team got
        to work on applying the brand to the user interface. Thankfully, we had
        some extra time with our UX process, and were also able to design an
        interface for the admin side of the booking platform — that is, an
        application that Mass Hike team members would use to schedule trips,
        view information on ticket sales, and schedule cash payment
        availability.
      </P>
      <H4 index={tracker.index()}>Development</H4>
      <P index={tracker.index()} typeTime={typeTime}>
        The development process started with research onto what tech stack would
        best suit the project. I eventually settled on the following:
      </P>
      <Ul>
        <Li index={tracker.index()} typeTime={typeTime}>
          React on the frontend
        </Li>
        <Li index={tracker.index()} typeTime={typeTime}>
          Node/Express API on the backend
        </Li>
        <Li index={tracker.index()} typeTime={typeTime}>
          MongoDB for database
        </Li>
        <Li index={tracker.index()} typeTime={typeTime}>
          Prismic CMS for the marketing website
        </Li>
        <Li index={tracker.index()} typeTime={typeTime}>
          Stripe for processing payments
        </Li>
        <Li index={tracker.index()} typeTime={typeTime}>
          AWS for hosting booking platform images
        </Li>
      </Ul>
      <P index={tracker.index()} typeTime={typeTime}>
        Once we had some UX wireframes to go off, we got to work. Our
        development team was composed of three people: myself, and two junior
        developers. One them focused on the marketing website, while the other
        and I started building out the booking platform front end. We worked
        under the agile development methodology: implement what designs we had
        at the time, and then iterate on them later as they were updated.
        Throughout the process, I worked as a mentor for the other developers
        and handled the majority of code reviews for our repositories.
      </P>
      <PhotoImg index={tracker.index()} src={Image.massHike.code} />
      <P index={tracker.index()} typeTime={typeTime}>
        As the project went along, I took over backend work for the booking
        platform as well as full stack on the admin platform. At the end of the
        development process, we’d successfully implemented each of the design
        requirements we’d set out to.
      </P>
      <H4 index={tracker.index()}>Results</H4>
      <P index={tracker.index()} typeTime={typeTime}>
        The work we produced for Mass Hike has been a huge success for the
        organization. The site is up and running now, and has received
        overwhelmingly positive feedback from both their users and the members
        of their team who work with the site. If things continue as they’ve been
        gong so far, we hope that our work will help Mass Hike continue to
        accomplish their mission and bring nature to more and more people who
        need it.
      </P>
    </div>
  );
};
