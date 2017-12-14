import example from './example.jpg';
import hubspotPreview from './hubspot_preview.jpg';
import ideaPreview from './idea_preview.jpg';
import alignablePreview from './alignable_preview.jpg';
import openlinesPreview from './openlines_preview.jpg';
import trash2treasurePreview from './trash2treasure_preview.jpg';
import camden from './camden.jpg';
import camdenMobile from './camden-mobile.jpg';
import shop from './t2t_shop.png'
import checkout from './t2t_checkout.png';
import seller from './t2t_seller.png';
import openLines from './open_lines.jpg';
import openLinesActive from './open_lines_active.jpg';
import dashboard from './hs_dashboard.png';
import analyze from './hs_analyze.png';

export default {
  preview : {
    "TrailTag": example,
    "HubSpot": hubspotPreview,
    "Idea": ideaPreview,
    "Alignable": alignablePreview,
    "Trash2Treasure": trash2treasurePreview,
    "Open Lines": openlinesPreview
  },
  camden,
  camdenMobile,
  t2t: {
    shop,
    checkout,
    seller
  },
  openLines: {
    vis: openLines,
    active: openLinesActive
  },
  hubspot: {
    dashboard,
    analyze
  }
}
