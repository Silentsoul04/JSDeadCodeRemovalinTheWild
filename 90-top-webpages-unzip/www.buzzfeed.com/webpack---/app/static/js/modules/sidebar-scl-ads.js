import { Application } from 't3js';
import util from '@buzzfeed/buzzblocks/js/services/util';
import {
  pageLoadedEventPrefix as sclPageLoadedEventPrefix, itemClass as sclItemClass
} from '@buzzfeed/buzzblocks/components/site-component-list/site-component-list';
import { AdManager, AD_MANAGER_EVENTS } from '@buzzfeed/adlib/core';
import sclAdTemplate from '@buzzfeed/adlib/components/ex/index.html';


/**
 * Usually ad managers are implemented as behaviors,
 * but in the case of SCL we don't want to introduce a cross-dependency on adlib to buzzblocks,
 * so these are separate modules
 */
class SCLAdManager extends AdManager {
  get sclPageLoadedEvent() {
    return `${sclPageLoadedEventPrefix}${this.constructor.componentType}`;
  }

  init() {
    this.feedLoadedMsg = util.getUniqueEventName(AD_MANAGER_EVENTS.FEED_LOADED, this.element);
    this.onmessage[this.sclPageLoadedEvent] = this.addPageAds;
    super.init();
  }

  addPageAds({id}) {
    Application.broadcast(
      this.feedLoadedMsg, document.getElementById(id).querySelectorAll(`[data-buzzblock="site-component-list"] .${sclItemClass}`)
    );
  }

  getAdModuleTemplate({slot}) {
    if (slot.adType === 'ex') {
      return sclAdTemplate;
    }
    return null;
  }
}


class MoreBuzzAdManager extends SCLAdManager {
  static componentType = 'morebuzz'
}
Application.addModule(`scl-ads-${MoreBuzzAdManager.componentType}`, MoreBuzzAdManager.generateModule());


class TopPostsAdManager extends SCLAdManager {
  static componentType = 'top-posts'
}
Application.addModule(`scl-ads-${TopPostsAdManager.componentType}`, TopPostsAdManager.generateModule());
