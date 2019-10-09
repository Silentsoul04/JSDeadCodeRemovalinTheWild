import { get } from 'lodash';
import localization from '@buzzfeed/buzzblocks/js/services/localization';
import solid from '@buzzfeed/buzzblocks/js/services/solid';

export default function (mapper) {
  let mode = solid.isXsmall() || solid.isSmall() ? 'mobile' : 'desktop';
  let edition = localization.getEdition();

  function isAd(src) {
    if(src.n.indexOf('dfp') === -1) {
      return false;
    }
    if(src.n.match('|')) {
      src.n = src.n.replace(/\|/g, '/');
    }
    return true;
  }

  function isDisplayCardAdUnit(src) {
    return isAd(src) && (src.data.type === 'display_card' || src.data.type === 'dfp_native_video');
  }

  // ========================== PAGE VIEW MAPPING
  var pageViewMapper = mapper.getOrCreateMap('track/page/view');

  pageViewMapper.addMapTo('page', '').mapFrom('data.url');
  pageViewMapper.addMapTo('fbEventName').mapFrom(function(src) {
    var re = /\?p=(\d)/;
    var url = get(src, 'data.url', '');
    var res = url.match(re);
    return res ? 'PageScroll' : 'PageView';
  });

  // ========================== CLICK MAPPING
  var clickRouter = mapper.getOrCreateRouter('track/click');
  var shareMap = clickRouter.createConfigForRoute(function (src) {
    return src.l === 'Share';
  });

  shareMap.addMapTo('share', '').mapFrom('d');
  shareMap.addMapTo('fbEventName', 'Share');

  // ========================== VIDEO MAPPING
  var videoRouter = mapper.getOrCreateRouter('track/video');
  var videoConfig = videoRouter.createConfigForRoute(function(src) {
    return src.l === 'in_feed';
  });

  videoConfig.applyTemplateByName('gaTemplate');
  videoConfig.addMapTo('action', '').mapFrom('n');
  videoConfig.addMapTo('label', '').mapFrom('d');
  videoConfig.addMapTo('value', '').mapFrom(function(src) {
    var obj;

    if (src.opt) {
      if (src.opt.dimension5 && screen.orientation && screen.orientation.type) {
        src.opt.dimension5 = screen.orientation.type.replace('-primary', '');
      }

      obj = src.opt;
    }
    return obj;
  });
  videoConfig.addMapTo('fbEventName', 'Video');

  // ========================== ADS MAPPING
  let adUnitTemplate = mapper.createMapTemplate('adUnit');
  adUnitTemplate.addMapTo('creative_id', '').mapFrom(src => src.data.creativeId);
  adUnitTemplate.addMapTo('unit_type', '').mapFrom(src => src.data.type);
  adUnitTemplate.addMapTo('mode', mode);
  adUnitTemplate.addMapTo('page_edition', edition);
  adUnitTemplate.addMapTo('page_type', 'feed');
  adUnitTemplate.addMapTo('unit', '').mapFrom(src => src.l);

  //impressions for ad unit
  let scrollRouter = mapper.getOrCreateRouter('track/scroll/impression');
  let adUnitImpressionMap = scrollRouter.createConfigForRoute(src => isDisplayCardAdUnit(src));
  adUnitImpressionMap.addMapTo('fbEventName', 'UnitImpression');
  adUnitImpressionMap.applyTemplateByName('adUnit');

  //click for ad unit
  let adUnitClickMap = clickRouter.createConfigForRoute(src => isDisplayCardAdUnit(src));
  adUnitClickMap.addMapTo('fbEventName', 'UnitClick');
  adUnitClickMap.applyTemplateByName('adUnit');
}
