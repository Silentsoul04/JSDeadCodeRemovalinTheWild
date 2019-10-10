import { Controller } from 'stimulus';
import monster from '../lib/monster';
export default class extends Controller {
  public dismiss(event) {
    event.preventDefault();
    this.element.classList.add('hide');
    monster.increment('tenant_app_monthly', 1, '/');
  }
}
