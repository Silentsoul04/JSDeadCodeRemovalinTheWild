import { Controller } from 'stimulus';

export default class extends Controller {
  public static targets = ['secondaryContent', 'showAll'];

  public secondaryContentTarget: HTMLElement;
  public hasSecondaryContentTarget: boolean;
  public showAllTarget: Element;

  public connect() {
    this.setUpResult();
  }

  public setUpResult() {
    if (this.hasSecondaryContentTarget) {
      if (this.secondaryContentTarget.offsetHeight < 85) {
        this.secondaryContentTarget.style.borderBottom = 'none';
        this.secondaryContentTarget.classList.add('no-fade');
        this.showAllTarget.classList.add('hide');
      }
    } else {
      this.showAllTarget.classList.add('hide');
    }
  }
}
