import { Controller } from 'stimulus';

export default class extends Controller {
  public connect() {
    const jqElement = $(this.element) as any;
    jqElement.modal();
  }
}
