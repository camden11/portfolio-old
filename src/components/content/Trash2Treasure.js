import React from 'react';
import { P, H4, PhoneImg, WebImg } from '../typed';
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
        At the end of every school year, Northeastern’s Trash to Treasure
        organization runs a collection of unwanted items from residents of
        on-campus housing. The following fall, they hold a massive sale of all
        the donated items, with the proceeds going to Northeastern student
        groups that volunteer at the sale and collection. The sale has gotten
        more popular every year, with revenue exceeding $11,000 for the 2016
        sale. Unfortunately, this increased popularity has caused its fare share
        of problems. In recent years, cashiers have been unable to accommodate
        the massive amount of people that attend the sale, and the checkout line
        has become a huge bottleneck.
      </P>
      <H4 index={tracker.index()}>Design</H4>
      <P index={tracker.index()} typeTime={typeTime}>
        I worked with the Trash to Treasure committee to try to solve this
        problem. My solution was an in-browser online checkout system designed
        to decrease checkout time by reducing the amount of work cashiers had to
        do to check someone out.
      </P>
      <PhoneImg index={tracker.index()} src={Image.t2t.shop} />
      <P index={tracker.index()} typeTime={typeTime}>
        Using my application, shoppers enter items into the app as they pick
        them up. When finished shopping, they tap a “checkout” button, which
        generates a shopper number for them.
      </P>
      <PhoneImg index={tracker.index()} src={Image.t2t.checkout} />
      <P index={tracker.index()} typeTime={typeTime}>
        The cashier will be shown everything the shopper has in their cart with
        the price calculated automatically.
      </P>
      <WebImg index={tracker.index()} src={Image.t2t.seller} />
      <P index={tracker.index()} typeTime={typeTime}>
        This makes it so they only have to confirm the shopper has what they see
        on screen rather than individually determine the category and price of
        each item.
      </P>
      <H4 index={tracker.index()}>Results</H4>
      <P index={tracker.index()} typeTime={typeTime}>
        The application made its debut with a trial run at the fall 2016 Trash
        to Treasure sale. It was used by only a small portion of shoppers, but
        the ones that did use it gave positive feedback. NU Trash to Treasure
        has since continued using the seller-side portion of the app to keep
        inventory for their sales.
      </P>
    </div>
  );
};
