import { Controller } from 'stimulus';
import gaClient from '../src/gaClient';

// fires a tracking event on connect
export default class extends Controller {
  public connect() {
    gaClient.trackEvent({
      action: this.data.get('action'),
      category: this.data.get('category'),
      label: this.data.get('label'),
      noBounce: true
    });
  }
}
