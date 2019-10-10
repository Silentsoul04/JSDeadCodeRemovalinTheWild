import ShowHideController from './show_hide_controller';

// show/hide controller that also toggles a gradient reveal
export default class extends ShowHideController {
  public static targets = ['show', 'hide', 'container', 'reveal'];
  public revealTarget: Element;

  public show() {
    super.show();
    this.revealTarget.classList.toggle('more-gradient');
  }

  public hide() {
    super.hide();
    this.revealTarget.classList.toggle('more-gradient');
  }
}
