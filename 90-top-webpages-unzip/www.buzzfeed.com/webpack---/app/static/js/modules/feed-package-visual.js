import { Application } from 't3js';
import { name as autoTruncateDescription } from '@buzzfeed/buzzblocks/js/behaviors/auto-truncate-description';
import { name as lazyImage } from '@buzzfeed/buzzblocks/js/behaviors/lazy-image';
import { name as viewable } from '@buzzfeed/buzzblocks/js/behaviors/viewable';
import { name as lazyImageBackground } from '@buzzfeed/buzzblocks/js/behaviors/lazy-image-background';

import dom from '@buzzfeed/buzzblocks/js/services/dom';
import solid from '@buzzfeed/buzzblocks/js/services/solid';
import ScrollingCarousel from '@buzzfeed/buzzblocks/js/services/scrolling-carousel';

/**
 * Returns function that generates a T3 module which is a thin wrapper for `FeedPackage` descendant classes
 * @memberof FeedPackage
 * @returns {Function} - callback to T3 `addModule` method
 */
function generateModule() {
  const Cls = this; // since this is a static class method, `this` is a class itself

  return (context) => {
    return new Cls(context);
  };
}

class FeedPackage {
  constructor(context) {
    this.context = context;
    this.element = context.getElement();
    this.behaviors = [
      autoTruncateDescription,
      lazyImage,
      lazyImageBackground,
      viewable,
    ];
    this.isCarousel = false;
  }

  carouselMe() {
    if (solid.isXsmall() && !this.isCarousel) {
      new ScrollingCarousel(this.element).setSizes();
      this.isCarousel = true;
    } else {
      this.isCarousel = false;
    }
  }

  /**
   * Initialize
   * @returns {void}
   */
  init() {
    this.carouselMe();
    dom.on(window, 'resize', this.carouselMe.bind(this));

    if(solid.isXsmall()) {
      dom.find(this.element, '.js-xs-impressions').map(i => dom.setAttr(i, {'data-bfa-impressions': 'true'}));
    } else {
      dom.find(this.element, '.js-impressions').map(i => dom.setAttr(i, {'data-bfa-impressions': 'true'}));
    }
  }

  /**
   * Cleanup
   * @ignore
   * @returns {void}
   */
  destroy() {}
}

FeedPackage.generateModule = generateModule;

Application.addModule('feed-package-visual', FeedPackage.generateModule());

export { FeedPackage };
