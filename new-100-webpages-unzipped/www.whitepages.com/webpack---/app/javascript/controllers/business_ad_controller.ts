import gaClient from '../src/gaClient';
import ApplicationController from './application_controller';

export default class extends ApplicationController {
  public static targets = ['details', 'cta'];

  public detailsTargets: HTMLElement[];

  public ctaTarget: HTMLElement;

  public connect() {
    this.trackImpression();
  }

  public trackImpression() {
    this.sendGoogleEvent('imp');
    this.sendBusinessEvent('imp');
  }

  public clickEvent() {
    this.sendBusinessEvent('click');
  }

  public callEvent() {
    this.sendBusinessEvent('call');
  }

  public sendBusinessEvent(type) {
    this.postJSON('/business/event', {
      event: [
        {
          events: [type],
          listing_id: this.data.get('uids'),
          provider: this.data.get('provider')
        }
      ]
    });
  }

  public sendGoogleEvent(label) {
    gaClient.trackEvent({
      label,
      action: this.data.get('provider'),
      category: 'business-partner',
      noBounce: true
    });
  }

  public showMore() {
    this.detailsTargets.forEach(detail => {
      detail.classList.remove('hide');
      detail.classList.add('in');
    });

    this.ctaTarget.style.display = 'none';
  }
}
