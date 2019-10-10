import { path } from 'ramda';
import { Controller } from 'stimulus';

const GOOGLE_AD_STYLE_ID = '9307861418';
const grandparent = path<HTMLElement>(['parentNode', 'parentNode']);

function adLoadedCallback(containerId, adShown) {
  const adsensePartial = grandparent(document.getElementById(containerId));

  if (!adShown && adsensePartial) {
    adsensePartial.style.display = 'none';
  }
}

// This class assumes that the adsense partial is rendered in the head
export default class extends Controller {
  public static targets = ['adunit'];

  public adunitTargets: HTMLElement[];

  public connect() {
    (window as any)._googCsa('ads', this.pageConfig, this.adunitConfig);
  }

  get pageConfig() {
    return {
      adPage: this.data.get('page') || 1,
      channel: this.data.get('channel'),
      pubId: this.data.get('pubid') || 'partner-whitepages',
      query: this.data.get('query'),
      styleId: GOOGLE_AD_STYLE_ID
    };
  }

  get adunitConfig() {
    return this.adunitTargets.map(adunit => {
      const adProperties: any = {
        adLoadedCallback,
        container: adunit.id
      };

      if (adunit.dataset.position === 'atf') {
        adProperties.maxTop = adunit.dataset.adnum;
      } else {
        adProperties.number = adunit.dataset.adnum;
      }

      return adProperties;
    });
  }
}
