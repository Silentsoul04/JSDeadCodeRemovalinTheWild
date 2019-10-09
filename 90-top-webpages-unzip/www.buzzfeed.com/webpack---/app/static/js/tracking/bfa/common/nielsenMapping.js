import { get } from 'lodash';
import { neilsenMap as videoPlayerMapping } from '@buzzfeed/buzzblocks/js/services/video-player-analytics/bfa-neilsen';

export default function(mapper) {
  // ========================== PAGE VIEW MAP

  var pageViewMap = mapper.getOrCreateMap('track/page/view');

  pageViewMap.addMapTo('type', 'static');

  pageViewMap.addMapTo('assetid', '').mapFrom(function() {
    var unique = parseInt(Date.now() + Math.random() * 10000000000, 10);
    return unique.toString(16);
  });

  pageViewMap.addMapTo('section', '').mapFrom(function() {
    return 'home';
  }, [mapper.formatters.strToLowerCase, ]);

  pageViewMap.addMapTo('segA', '').mapFrom(function(src) {
    return get(src, 'data.page.post.isPromoted') ? 'sponsored' : 'editorial';
  });

  pageViewMap.addMapTo('segB', 'desktop');

  pageViewMap.addMapTo('segC', '').mapFrom('data.page.country');

  //========================== VIDEO

  var videoMapRouter = mapper.getOrCreateRouter('track/video');

  // Routing for loadDataVideoMap
  var loadDataVideoMap = videoMapRouter.createConfigForRoute(function(src) {
    return src.data.e === 'video_view';
  });

  loadDataVideoMap.addMapTo('type', 'content');
  loadDataVideoMap.addMapTo('assetid', '').mapFrom('d');
  loadDataVideoMap.addMapTo('isfullepisode', 'n');
  loadDataVideoMap.addMapTo('program').mapFrom(function(src) {
    return src.data.a || 'BuzzFeed Video';
  });
  loadDataVideoMap.addMapTo('title', '').mapFrom('data.n');
  loadDataVideoMap.addMapTo('length', '').mapFrom(function(src) {
    return Math.round(src.data.d);
  });
  loadDataVideoMap.addMapTo('mediaURL', '').mapFrom('data.u');
  loadDataVideoMap.addMapTo('segB', 'desktop');
  loadDataVideoMap.addMapTo('segC', '').mapFrom('data.page.country');
  loadDataVideoMap.addMapTo('airdate', '').mapFrom(function(src) {
    return src.data.ut.replace(/-/g, '').replace('T', ' ').replace('Z', '');
  });
  loadDataVideoMap.addMapTo('adloadtype', '2');
  loadDataVideoMap.addMapTo('hasAds', '0');

  // Routing for PLAY
  var playVideoMap = videoMapRouter.createConfigForRoute(function(src) {
    return src.data.e === 'play' || src.data.e === 'resume';
  });

  playVideoMap.addMapTo('playheadPosition', '').mapFrom('data.d');
  playVideoMap.addMapTo('assetid', '').mapFrom('d');

  // Routing for PAUSE
  var pauseVideoMap = videoMapRouter.createConfigForRoute(function(src) {
    return src.data.e === 'pause';
  });
  pauseVideoMap.addMapTo('playheadPosition', '').mapFrom('data.d');

  // Routing for SCRUB
  var scrubVideoMap = videoMapRouter.createConfigForRoute(function(src) {
    return src.data.e === 'scrub';
  });
  scrubVideoMap.addMapTo('playheadPosition', '').mapFrom(function(src) {
    return parseInt(src.data.st, 10);
  });

  // Routing for STOP
  var stopVideoMap = videoMapRouter.createConfigForRoute(function(src) {
    return src.d === '100%';
  });
  stopVideoMap.addMapTo('playheadPosition', '').mapFrom('data.d');

  videoPlayerMapping(mapper);
}
