import { detect } from 'detect-browser';
import * as $ from 'jquery';
import { Controller } from 'stimulus';

export default class extends Controller {
  public static targets = ['topAd', 'bottomAd'];

  public topAdTarget: Element;
  public bottomAdTarget: Element;
  public hasTopAdTarget: boolean;
  public hasBottomAdTarget: boolean;

  public connect() {
    if ($('.ad-wrapper').length === 0 && $('.adsense-wrapper').length === 0) {
      $('.all-ads').hide();
    }

    if (!['iOS', 'Android OS'].includes(detect().os)) {
      if (this.hasTopAdTarget) {
        this.topAdTarget.classList.add('desktop-ads');
      }

      if (this.hasBottomAdTarget) {
        this.bottomAdTarget.classList.add('desktop-ads');
      }
    }

    if (this.hasTopAdTarget || this.hasBottomAdTarget) {
      this.loadAds();
    }
  }

  public loadAds() {
    if (this.data.has('adLoadPath')) {
      $.get(this.data.get('adLoadPath') as string, this.adParams).done(
        bizAds => {
          if (bizAds.top_ad && this.hasTopAdTarget) {
            this.topAdTarget.innerHTML = bizAds.top_ad;
          }
          if (bizAds.bottom_ad && this.hasBottomAdTarget) {
            this.bottomAdTarget.innerHTML = bizAds.bottom_ad;
          }
        }
      );
    }
  }

  get adParams() {
    return {
      business_category: this.data.get('category'),
      business_name: this.data.get('name'),
      forgo_google_ads: this.data.get('forgoGoogleAds'),
      location: {
        latitude: this.data.get('latitude'),
        longitude: this.data.get('longitude')
      }
    };
  }
}
