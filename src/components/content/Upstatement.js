import React from 'react';
import { P } from '../typed';
import { TypeIndexTracker } from '../../lib/utils';

export default props => {
  const tracker = new TypeIndexTracker({ tracker: props.tracker });
  const { typeTime } = props;
  return (
    <div>
      <P index={tracker.index()} typeTime={typeTime}>
        I recently started working at Upstatement, a creative agency based in
        Boston and New York. Over the past few months, I've been working on a
        variety of different projects at Upstatement and their clients,
        including the newly launched Tito's Handmade Vodka Shopify store and an
        internal company project using Vue.js.
      </P>
      <P index={tracker.index()} typeTime={typeTime}>
        More information coming soon.
      </P>
    </div>
  );
};
