/* eslint-disable consistent-return */

import { get, isUndefined } from 'lodash';

import { map as metricsMapping } from '@buzzfeed/buzzblocks/js/services/metrics/mapping';
import { pixiedustMap as videoPlayerMapping } from '@buzzfeed/buzzblocks/js/services/video-player-analytics/bfa-pixiedust';
import { performanceMap as performanceMapping, customMarkMap as customMarkMapping } from '@buzzfeed/buzzblocks/js/services/performance/mapping';
import { pixiedustFeedTrackingMapper } from '@buzzfeed/site-tracking/feed';
import { pixiedustMap as pdBBPackageMapper } from '@buzzfeed/buzzblocks/components/package/bfa-pd';
import { pixiedustMap as feedHeaderMapping } from '@buzzfeed/buzzblocks/components/feed-header/bfa-pixiedust';
import auth from '@buzzfeed/buzzblocks/js/services/auth';

function getOs() {
  var OperatingSystems = {
    LINUX: 'Linux',
    MAC_OS: 'MacOs',
    UNIX: 'Unix',
    UNKNOWN: 'Unknown',
    WINDOWS: 'Windows',
  };
  var HOST_OS = '';

  if (navigator.appVersion.indexOf('Win') !== -1) {
    HOST_OS = OperatingSystems.WINDOWS;
  } else if (navigator.appVersion.indexOf('Mac') !== -1) {
    HOST_OS = OperatingSystems.MAC_OS;
  } else if (navigator.appVersion.indexOf('X11') !== -1) {
    HOST_OS = OperatingSystems.UNIX;
  } else if (navigator.appVersion.indexOf('Linux') !== -1) {
    HOST_OS = OperatingSystems.LINUX;
  } else {
    HOST_OS = OperatingSystems.UNKNOWN;
  }

  return HOST_OS;
}
export default function(mapper) {
  /**
   *  Added to route map common params and extendData
   *    Common metadata contain:
   *      author            -> ''
   *      author_id         -> ''
   *      buzz              -> ''
   *      buzz_id           -> ''
   *      page
   *      referrer
   *      screen_resolution
   *      source            -> 'buzz_web'
   *      url
   *      user_agent
   *
   *    extendData can contain:
   *      content_id
   *      mode
   *      os
   *      page_type       -> 'feed'
   *      page_url
   *      position
   *      post_category   -> ''
   *      unit
   *      unit_client_id  -> ''
   *      variation_id    -> ''
   * @param {String} routeConfig - router config
   * @param {Object} extendData - array of additional params which should be added to router
   * @returns {void}
   */
  function setCommonData(routeConfig, extendData) {
    routeConfig.addMapTo('source', 'buzz_web');
    routeConfig.addMapTo('user_agent', navigator.userAgent.toLowerCase());
    routeConfig.addMapTo('screen_resolution', '').mapFrom(function() {
      return window.screen.availWidth + ' x ' + window.screen.availHeight;
    });
    routeConfig.addMapTo('referrer', '').mapFrom(function() {
      return window.document.referrer;
    });
    routeConfig.addMapTo('url', '').mapFrom(function(src) {
      var url = get(src, 'data.page.uri.path', null);
      if (typeof url === undefined) { // for IE11, SITE-2497
        url = null;
      }
      /* eslint-disable no-extend-native */
      if (!String.prototype.startsWith) { // for IE11, SITE-2497
        String.prototype.startsWith = function(searchString, position) {
          position = position || 0;
          return this.indexOf(searchString, position) === position;
        };
      }
      /* eslint-disable no-extend-native */
      if (url === null && window.BZFD.Context.page.name === 'Home') {
        url = '/index';
      }
      if (url === null) {
        url = get(src, 'data.page.uri.href');
      }
      if (url === null) {
        url = document.location.href;
      }
      if (url && !url.startsWith('http://') && !url.startsWith('https://')) {
        url = document.location.origin + url + get(src, 'data.page.uri.search', '');
      }
      return url;
    });
    routeConfig.addMapTo('page', '').mapFrom(function(src) {
      return window.BZFD.Context.page.name ? this.capitalize(window.BZFD.Context.page.name) : this.capitalize(src.data.page.category);
    });
    routeConfig.addMapTo('author', '');
    routeConfig.addMapTo('author_id', '');
    routeConfig.addMapTo('buzz', '');
    routeConfig.addMapTo('buzz_id', '');
    routeConfig.addMapTo('page_edition', '').mapFrom(function(src) {
      var country = get(src, 'data.page.country', null);
      return country;
    });

    if (typeof extendData !== 'undefined') {
      extendData.forEach(function(val) {
        switch (val) {
        case 'page_type':
          routeConfig.addMapTo('page_type', 'feed');
          break;
        case 'variation_id':
          routeConfig.addMapTo('variation_id', '').mapFrom(function(src) {
            return src.data.variation_id ? src.data.variation_id : '';
          });
          break;
        case 'unit':
          routeConfig.addMapTo('unit', '').mapFrom('l', [mapper.formatters.strToLowerCase, ]);
          break;
        case 'mode':
          routeConfig.addMapTo('mode', 'desktop');
          break;
        case 'page_url':
          routeConfig.addMapTo('page_url', '').mapFrom(function(src) {
            var url = get(src, 'data.page.uri.path', null);
            if (window.BZFD.Context.page.name === 'Home' && window.BZFD.Config.tracking.pixiedust.page_view_url) {
              if (!window.BZFD.Config.tracking.pixiedust.page_view_url.startsWith('/')) {
                url = '/' + window.BZFD.Config.tracking.pixiedust.page_view_url;
              } else {
                url = window.BZFD.Config.tracking.pixiedust.page_view_url;
              }
            }
            if (url === null && window.BZFD.Context.page.name === 'Home') {
              url = '/index';
            }
            if (url === null) {
              url = get(src, 'data.page.uri.href');
            }
            if (url === null) {
              url = document.location.href;
            }
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
              url = document.location.origin + url + get(src, 'data.page.uri.search', '');
            }
            return url;
          });
          break;
        case 'os':
          routeConfig.addMapTo('os', getOs());
          break;
        case 'position':
          routeConfig.addMapTo('position', '').mapFrom(function(src) {
            if (src.data && src.data.p) {
              return this.strToInt(src.data.p);
            }
          });
          break;
        case 'sub_position':
          routeConfig.addMapTo('sub_position', '').mapFrom(function(src) {
            if (src.data && src.data.sub_p) {
              return this.strToInt(src.data.sub_p);
            }
          });
          break;
        case 'content_id':
          routeConfig.addMapTo('content_id', '').mapFrom(function(src) {
            if (src.opt.dimension2) {
              return 'buzz:' + this.strToInt(src.opt.dimension2);
            } else if (src.opt.dimension3) {
              return 'video:' + this.strToInt(src.opt.dimension3);
            } else if (src.opt.dimension13) {
              var creativeId = src.opt.dimension13;

              if (creativeId !== 'adxbackfill') {
                this.strToInt(creativeId);
              }

              return 'creative:' + creativeId;
            }
          });
          break;
        case 'post_category':
          routeConfig.addMapTo('post_category', '').mapFrom(function(src) {
            if(src.data && src.data.post_category) {
              return src.data.post_category;
            }
          });
          break;
        case 'unit_client_id':
          routeConfig.addMapTo('unit_client_id', '');
          break;
        case 'data_source':
          routeConfig.addMapTo('data_source', '').mapFrom(function(src) {
            var dataSource = get(src, 'data.data_source', null);

            return isAd(src) ? 'ad_api' : dataSource;
          });
          break;
        case 'treatment':
          routeConfig.addMapTo('treatment', '').mapFrom(function(src) {
            return get(src, 'data.treatment', null);
          });
          break;
        case 'sub_unit':
          routeConfig.addMapTo('sub_unit', '').mapFrom(function(src) {
            return isAd(src) ? 'ad' : get(src, 'data.sub_unit', null);
          });
          break;
        case 'v':
          routeConfig.addMapTo('v', '').mapFrom(function(src) {
            return get(src, 'data.platform', 'feedpager');
          });
        }

      });
    }
  }

  function isAd(src) {
    if(src.n.indexOf('dfp') === -1) {
      return false;
    }

    if(src.n.match('|')) {
      src.n = src.n.replace(/\|/g, '/');
    }

    return true;
  }

  mapper.addUtility('capitalize', function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });

  mapper.addUtility('isNumeric', function(str) {
    return !isNaN(parseFloat(str)) && isFinite(str);
  });

  mapper.addUtility('strToInt', function(str) {
    var intValue = parseInt(str, 10);
    return !isNaN(intValue) && isFinite(intValue) ? intValue : '';
  });

  mapper.addUtility('getIdFromObjectId', function(objId) {
    if (typeof objId === 'string' && objId.indexOf(':') > -1) {
      objId = objId.split(':')[1];
    }
    return objId;
  });

  // ========================== PAGE VIEW MAP

  var pageViewRouter = mapper.getOrCreateRouter('track/page/view');

  var pageViewMap = pageViewRouter.createConfigForRoute(function(src) {
    // on the new homepage we want to only fire the event on the initial load (?p=1)
    var re = /\?p=(\d)/;
    var url = get(src, 'data.url', '');
    return url === '' || !url.match(re);
  });

  setCommonData(pageViewMap, [
    'page',
    'v'
  ]);
  pageViewMap.addMapTo('type', 'pageview');
  pageViewMap.addMapTo('is_logged_in', auth.isLoggedIn());

  // ========================== PAGE VIEW MAP

  var pageExitRouter = mapper.getOrCreateRouter('track/page/exit');

  var pageExitMap = pageExitRouter.createConfigForRoute(function(src) {
    return src.n === 'exit';
  });
  setCommonData(pageExitMap, [
    'post_category',
    'page',
    'os',
  ]);

  pageExitMap.addMapTo('type', 'page_exit');
  // ========================== CLICK MAPPING

  var clickRouter = mapper.getOrCreateRouter('track/click');

  // Routing for Feed
  var clickFeedMap = clickRouter.createConfigForRoute(function(src) {
    if (src.data.fromUW) {
      clickFeedMap.addMapTo('unit_client_id', this.strToInt(src.data.user.clientId));
      clickFeedMap.addMapTo('content_id', 'buzz:' + src.data.adbuzzid);
      clickFeedMap.addMapTo('position', src.d);
      return false;
    } else if (src.n === 'click:open-share-sheet') {
      return false;
    }
    /* eslint-disable indent */
    return (
        (src.l.indexOf('Feed') === 0 || src.l.indexOf('sidebar') === 0) &&
        (src.n.indexOf('post') === 0 || src.n.indexOf('video') === 0)
      ) ||
      src.l === 'Package' ||
      src.l === 'feed-filters' ||
      isAd(src);
    /* eslint-enable indent */
  });
  setCommonData(clickFeedMap, [
    'mode',
    'page_url',
    'os',
    'position',
    'sub_position',
    'post_category',
    'content_id',
    'unit_client_id',
    'page_type',
    'variation_id',
    'unit',
    'data_source',
    'treatment',
    'sub_unit',
  ]);

  clickFeedMap.addMapTo('type', 'unit_click');

  // ========================== BREAKING BAR MAPPING
  var clickBreakingMap = clickRouter.createConfigForRoute(function(src) {
    return src.l === 'Breaking-Bar';
  });

  clickBreakingMap.applyTemplateByName('commonFields');
  clickBreakingMap.applyTemplateByName('pageFields');
  clickBreakingMap.addMapTo('type', 'unit_click');
  clickBreakingMap.addMapTo('unit', 'breaking');
  clickBreakingMap.addMapTo('link_url', '').mapFrom('data.url');

  setCommonData(clickBreakingMap, [
    'mode',
    'page_url',
    'os',
    'position',
    'content_id',
    'page_type',
    'unit_client_id',
    'post_category',
    'variation_id',
    'treatment',
    'sub_unit',
  ]);

  // ========================== VideoMAPPING

  var videoRouter = mapper.getOrCreateRouter('track/video');
  // Routing for Feed
  var excludedRouts = [
    'share',
    'native-video:autoplay',
    'video:spinner',
    'video:playback',
  ];
  var videoFeedMap = videoRouter.createConfigForRoute(function(src) {
    return (!src.n || excludedRouts.indexOf(src.n) === -1);
  });

  setCommonData(videoFeedMap, [
    'mode',
    'page_url',
    'os',
    'position',
    'content_id',
    'page_type',
    'unit',
    'unit_client_id',
    'post_category',
    'variation_id',
    'treatment',
    'sub_unit',
  ]);

  videoFeedMap.addMapTo('type', '').mapFrom('data.e', [mapper.formatters.strToLowerCase, ]);
  videoFeedMap.addMapTo('orientation').mapFrom('data.o', [mapper.formatters.strToLowerCase, ]);
  videoFeedMap.addMapTo('player_location', '').mapFrom('l', [mapper.formatters.strToLowerCase, ]);
  videoFeedMap.addMapTo('duration', '').mapFrom(function(src) {
    return this.strToInt(src.data.d);
  });
  videoFeedMap.addMapTo('play_start_type').mapFrom('data.s', [mapper.formatters.strToLowerCase, ]);
  videoFeedMap.addMapTo('audio_volume').mapFrom('data.v', [mapper.formatters.strToLowerCase, ]);
  videoFeedMap.addMapTo('video_ts').mapFrom(function(src) {
    return this.strToInt(src.data.t);
  });


  // ========================== IMPRESSION MAPPING

  var scrollRouter = mapper.getOrCreateRouter('track/scroll/impression');

  // Routing for Feed
  var impressionMap = scrollRouter.createConfigForRoute(function(src) {
    return src.t === 'scroll'
        && ((src.l === 'Feed' && (src.n === 'post' || src.n === 'video')) || src.l === 'Package' || isAd(src))
        && !isUndefined(src.data)
        && !isUndefined(src.data.obj_id)
        && this.isNumeric(this.getIdFromObjectId(src.data.obj_id));
  });

  setCommonData(impressionMap, [
    'mode',
    'page_url',
    'os',
    'position',
    'content_id',
    'unit_client_id',
    'post_category',
    'variation_id',
    'unit',
    'page_type',
    'data_source',
    'treatment',
    'sub_unit',
  ]);

  impressionMap.addMapTo('type', 'unit_impression');


  // ========================== SHARE MAPPING

  var shareRouter = mapper.getOrCreateRouter('track/click');
  var shareFeedMap = shareRouter.createConfigForRoute(function(src) {
    return src.l === 'Share';
  });
  setCommonData(shareFeedMap, [
    'mode',
    'page_url',
    'os',
    'position',
    'content_id',
  ]);

  shareFeedMap.addMapTo('type', 'share');

  shareFeedMap.addMapTo('unit', 'feed');
  shareFeedMap.addMapTo('share_type', '').mapFrom('d');
  shareFeedMap.addMapTo('share_activity_source', '').mapFrom(function(src) {
    return src.n === 'click:feed-module' ? 'on_screen' : 'share_sheet';
  });
  shareFeedMap.addMapTo('share_button_location', 'feed_module');
  shareFeedMap.addMapTo('share_tap_outcome', '');


  // ========================== ABeagle Event Mapping
  var abTestMap = mapper.getOrCreateMap('track/abtest');
  setCommonData(abTestMap, [
    'mode',
    'page_url',
    'os',
    'position',
    'post_category',
    'content_id',
    'unit_client_id',
    'page_type',
    'unit',
  ]);
  abTestMap.addMapTo('type', 'experiment_status');
  abTestMap.addMapTo('experiment_name', '').mapFrom('data.experiment');
  abTestMap.addMapTo('experiment_id', null).mapFrom('data.variation.id');
  abTestMap.addMapTo('experiment_version', null).mapFrom('data.variation.version');
  abTestMap.addMapTo('variant_id', null).mapFrom('data.variation.variant_id');
  abTestMap.addMapTo('variant_name', null).mapFrom('data.variation.value');

  var experimentRequestMap = mapper.getOrCreateMap('track/abeagle/request');
  setCommonData(experimentRequestMap, [
    'mode',
    'page_url',
    'os',
    'position',
    'post_category',
    'content_id',
    'unit_client_id',
    'page_type',
    'unit',
  ]);
  experimentRequestMap.addMapTo('type', 'experiment_request');
  experimentRequestMap.addMapTo('response_time_ms').mapFrom('data.responseTime');

  // Adds mapping for client side metrics reporting and buzzblocks
  pixiedustFeedTrackingMapper(mapper);
  videoPlayerMapping(mapper);
  metricsMapping(mapper);
  performanceMapping(mapper);
  customMarkMapping(mapper);
  pdBBPackageMapper(mapper, setCommonData);
  feedHeaderMapping(mapper, setCommonData);
}

/* eslint-enable consistent-return */
