import 'devbridge-autocomplete';
import * as $ from 'jquery';
import { Controller } from 'stimulus';

export default class extends Controller {
  public connect() {
    $(this.element).autocomplete({
      autoSelectFirst: true,
      dataType: 'json',
      serviceUrl: this.data.get('url') || undefined
    });
  }
}
