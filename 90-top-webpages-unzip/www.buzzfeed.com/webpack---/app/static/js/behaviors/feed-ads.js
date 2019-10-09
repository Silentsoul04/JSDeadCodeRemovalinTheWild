import { Application } from 't3js';
import { AdManager, AD_MANAGER_EVENTS } from '@buzzfeed/adlib/core';
import bzfd from '@buzzfeed/buzzblocks/js/services/bzfd';
import solid from '@buzzfeed/buzzblocks/js/services/solid';
import util from '@buzzfeed/buzzblocks/js/services/util';
import adManagerTemplate from '@buzzfeed/adlib/core/partials/manager.html';
import storyAdTemplate from '@buzzfeed/adlib/components/feed-story/index.html';
import giftGuideAdPromoTemplate from '@buzzfeed/adlib/skins/giftguide/ex.html';
import giftGuideAdPromoWideTemplate from '@buzzfeed/adlib/skins/giftguide/ex-wide.html';


class FeedAdManager extends AdManager {
  constructor() {
    super(...arguments);
    this.filter = this.config.filter;
    // Hall of Fame package is a special case as it loads the content depending on an A/B test variant
    // and we should consider that when calculating ad placements
    this.eligibleFeedItems = {'story-card': true, 'card-video': true, 'hall-of-fame': false};
  }

  configure() {
    this.onmessage['hall-of-fame-active'] = (({filter}) => {
      if (filter === this.filter) {
        this.eligibleFeedItems['hall-of-fame'] = true;
      }
    });
  }

  resolveConfig() {
    super.resolveConfig();
    if (bzfd.pageName === 'giftguide') {
      // filter out ads that are invalid at our breakpoint
      const breakpoint = solid.getBreakPoint();
      if (breakpoint === 'xs' || breakpoint === 'sm') {
        let omitDesktopOnly = (ad) => !ad.slot || ad.slot.platform !== 'desktop';
        this.units = this.units.filter(omitDesktopOnly);
        this.unitsRepeated = this.unitsRepeated.filter(omitDesktopOnly);
      } else {
        let omitMobileOnly = (ad) => !ad.slot || ad.slot.platform !== 'mobileweb';
        this.units = this.units.filter(omitMobileOnly);
        this.unitsRepeated = this.unitsRepeated.filter(omitMobileOnly);
      }
    }
  }

  isEligibleForAd(feedItem) {
    if (!super.isEligibleForAd(feedItem)) {
      return false;
    }
    // omit hidden feed items assuming they are hidden on this breakpoint (like Trending Now package),
    // unless they are hidden because they'll load the content later on (like Hall of Fame package)
    return (
      this.eligibleFeedItems[feedItem.dataset.module]
      || getComputedStyle(feedItem).getPropertyValue('display') !== 'none'
    );
  }

  prepareAd(ad) {
    ad = super.prepareAd(...arguments);
    // this doesn't affect other ad manager instances because they don't share the config
    ad.slot.isInfinite = true;
    ad.extraClassNames = `js-feed-item js-feed-item--filtered js-feed-item--${this.filter}`;
    if (bzfd.pageName === 'giftguide') {
      ad.ad_wrapper_classes = 'ad-wireframe-wrapper--labeled ad-wireframe-wrapper--feed';
    }
    return ad;
  }

  getAdModuleTemplate(ad) {
    if (bzfd.pageName === 'giftguide') {
      if (/wide/.test(ad.template_path)) {
        return giftGuideAdPromoWideTemplate;
      } else {
        return giftGuideAdPromoTemplate;
      }
    }
    return storyAdTemplate;
  }
}

const moduleName = 'feed-ad-manager';

Application.addModule(moduleName, FeedAdManager.generateModule());


class FeedAds {
  constructor(context) {
    this.element = context.getElement();

    const container = document.createElement('div');
    container.className = 'xs-hide js-hidden js-ad-managers';
    // create an ad manager for each filter feed,
    // or a single ad manager for default feed if there are no filters
    let filters = bzfd.pageFilters;
    if (Object.keys(filters).length === 0) {
      filters = {'default': null};
    }
    Object.keys(filters).forEach((filter) => {
      const feedLoadedMsg = this._getFeedLoadedMsg(filter);
      const markup = adManagerTemplate.render({
        module: moduleName,
        config: Object.assign({filter, feedLoadedMsg}, context.getConfig('ads'))
      });
      container.insertAdjacentHTML('afterbegin', markup);
    });
    this.element.querySelector('script[type="text/x-config"]').insertAdjacentElement('afterend', container);
    Application.startAll(container);
  }

  init() {
    this.onmessage = {
      // when an initial feed page is ready
      'feed-set': this.initAds,
      // when a new feed page is dynamically loaded
      'feed-load-success': this.initAds,
      // when a feed filter is switched
      'feed-reload': this.initAds
    };
  }

  _getFeedLoadedMsg(filter) {
    return util.getUniqueEventName(`${AD_MANAGER_EVENTS.FEED_LOADED}--${filter}`, this.element);
  }

  initAds() {
    let currentFilter;
    let feedItemSelector;
    if (Object.keys(bzfd.pageFilters).length === 0) {
      currentFilter = 'default';
      feedItemSelector = '.js-feed-item';
    } else {
      currentFilter = bzfd.pageFilter || bzfd.pageMainFilter;
      feedItemSelector = `.js-feed-item--${currentFilter}`;
    }
    // to make sure `js-feed-item--` classes are added to feed items and the Hall of fame package is inserted
    setTimeout(() => {
      Application.broadcast(
        this._getFeedLoadedMsg(currentFilter),
        this.element.querySelectorAll(feedItemSelector)
      );
    }, 1);
  }

  destroy() {
    delete this.onmessage;
  }
}

export const name = 'feed-ads';

Application.addBehavior(name, (context) => new FeedAds(context));
