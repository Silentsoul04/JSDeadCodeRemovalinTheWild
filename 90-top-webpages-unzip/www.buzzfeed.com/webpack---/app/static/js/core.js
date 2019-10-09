/**
 * @fileoverview
 * Webpack entry for enhanced-ux version only.
 * Loads all components and initializes the application.
 */

// Non-js dependencies
import '../img/buzzfeed_arrow.png';
import '../img/holiday_gift_guide_v2.png';
import '../img/buzzfeed_news.png';
import '../img/buzzfeed_news_jp.png';
import '../img/favicon.ico';
import '../img/apple-touch-icon.png';
import '../img/startup.png';
import '../img/touch-icon-ios_60.png';
import '../img/touch-icon-ios_76.png';
import '../img/touch-icon-ios_120.png';
import '../img/touch-icon-ios_152.png';
import '../img/touch-icon-ios_180.png';
import '../img/touch-icon-android.png';
import '../img/investigations/segura.png';
import '../img/shopping/gifts.png';
import '../img/shopping_header.png';
import '../img/shopping/cyberweek-2x.png';
import '../img/shopping/cyberweek-mobile-2x.png';
import '../img/asis/asis_logo.png';
import '../img/asis/asis_header.png';
import '../img/bringme/bringme_logo.png';
import '../img/nifty/nifty_logo.png';
import '../img/goodful/goodful_logo.png';
import '../img/verticals/reader-title.jpg';
import '../img/bestof2018_banner_repeat.png';
import '../img/bientasty/bientasty_logo.jpg';
import './modules/index-core';

import { Application } from 't3js';
import Hls from 'hls.js';
import './tracking/branch';
import abeagle from '@buzzfeed/buzzblocks/js/services/abeagle';
import ads from '@buzzfeed/adlib/core/ads';
import confetti from './services/confetti';
import experiments from './services/ab-tests';
import getSentry from '@buzzfeed/buzzblocks/js/services/sentry';
import konamiCode from './services/konami-code';
import speedtrack from '@buzzfeed/buzzblocks/js/services/performance';
import qualtrics from '@buzzfeed/buzzblocks/js/services/qualtrics';
import '@buzzfeed/buzzblocks/js/services/nunjucks-env';

function App() {
  abeagle.registerExperiments(experiments);

  var startT3 = async function(config) {
    Application.init(config);
    abeagle.start();
    qualtrics.init();
    speedtrack.mark('mark_time_to_interact');

    /**
     * This will delay loading of external tracking beacons
     * until our application and ads are done initialising.
     * We do this to ensure our own code have priority over 3rd party JS execution.
    */
    try {
      await ads.start();
    } catch(err) {} finally {
      import(/* webpackChunkName: "beacons-external" */ './tracking/beacons-external');
    }
  };

  return {
    init: function() {
      var config = {
        debug: window.BZFD.Config.env === 'dev'
      };

      if (document.readyState === 'complete' ||
        (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
        startT3(config);
      } else {
        document.addEventListener('DOMContentLoaded', function() {
          startT3(config);
        });
      }
    },
    getService: Application.getService.bind(Application)
  };
}

if (typeof window.Hls === 'undefined') {
  window.Hls = Hls;
}

if (typeof window.FEEDPAGER === 'undefined') {
  window.FEEDPAGER = {};
}

getSentry({
  env: window.BZFD.Config.env,
  url: window.BZFD.Config.sentryUrl,
  sampleRate: 0.05
});

window.FEEDPAGER.App = new App();
window.FEEDPAGER.App.init();

if (window.BZFD.Context.page.name.toLowerCase() === 'home') {
  var _konamiCodeId = konamiCode.add(function() {
    confetti.start();
    konamiCode.remove(_konamiCodeId);
  });
}
