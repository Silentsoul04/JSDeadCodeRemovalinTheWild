import { Controller } from 'stimulus';

export default class AutoFocusController extends Controller {
  public static targets = ['firstInput'];

  public firstInputTarget: HTMLInputElement;

  public focusInput() {
    $('html, body').animate({ scrollTop: 0 }, 500);
    this.firstInputTarget.focus();
    this.firstInputTarget.select();
  }
}
