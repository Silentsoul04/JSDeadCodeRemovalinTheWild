import * as $ from 'jquery';
import { Controller } from 'stimulus';

export default class ShowHideController extends Controller {
  public static targets = ['show', 'hide', 'container'];
  public showTarget: Element;
  public hideTarget: Element;
  public containerTarget: Element;
  public hasContainerTarget: boolean;

  public connect() {
    if (this.hasContainerTarget) {
      this.initEvents();
    }
  }

  public hide() {
    this.showTarget.classList.remove('hide');
    this.showTarget.classList.add('in');
    this.hideTarget.classList.add('hide');
  }

  public show() {
    this.hideTarget.classList.remove('hide');
    this.hideTarget.classList.add('in');
    this.showTarget.classList.add('hide');
  }

  private initEvents() {
    $(this.containerTarget).on('hide.bs.collapse', () => {
      this.hide();
    });

    $(this.containerTarget).on('show.bs.collapse', () => {
      this.show();
    });
  }
}
