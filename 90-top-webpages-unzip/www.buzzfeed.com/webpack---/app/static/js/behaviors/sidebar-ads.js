import { Application } from 't3js';
import globalEvents from '@buzzfeed/buzzblocks/js/services/global-events';
import { AdManager } from '@buzzfeed/adlib/core';
import adExTemplate from '@buzzfeed/adlib/components/ex/index.html';
import adExStickyTemplate from '@buzzfeed/adlib/components/ex-sticky/index.html';


class SidebarAds extends AdManager {
  init() {
    this.config.injectMethod = 'after';
    this.onmessage[globalEvents.componentLoaded] = this.addAds;
    super.init();

    // if an ad should be the first item, there won't be a module before it that triggers the event,
    // so it should be handled differently
    if (this.placements[0] && this.placements[0] === 1) {
      Application.broadcast(
        this.feedLoadedMsg,
        {
          // a hack to insert an ad at the very beginning,
          // since this manager is configured to insert ads *after* something
          // @todo Figure out a better way
          sidebarItem: this.element.querySelector('script[type="text/x-config"]'),
          idxInSidebar: 0
        }
      );
    }
  }

  addAds({id, idxInParent}) {
    const sidebarItem = document.getElementById(id);
    if (!this.element.contains(sidebarItem)) { // if not actually a sidebar module
      return;
    }
    Application.broadcast(this.feedLoadedMsg, {sidebarItem, idxInSidebar: idxInParent});
  }

  injectAds({sidebarItem, idxInSidebar}) {
    this.processFeedItem(sidebarItem, idxInSidebar);
  }

  getAdForPlacement(idxInSidebar) {
    // if the module right before the ad has loaded, load the ad too
    const adIdx = this.placements.indexOf(idxInSidebar + 1);
    if (adIdx === -1) {
      return null;
    }
    return this.getAd(adIdx);
  }

  getAdModuleTemplate({slot}) {
    if (slot.adPos === 'promo-sticky') {
      return adExStickyTemplate;
    } else if (slot.adType === 'ex') {
      return adExTemplate;
    }
    return null;
  }
}

export const name = 'sidebar-ads';

Application.addBehavior(name, SidebarAds.generateBehavior());
