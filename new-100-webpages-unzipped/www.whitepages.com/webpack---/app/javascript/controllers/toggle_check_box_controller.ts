import { Controller } from 'stimulus';

export default class ToggleCheckBoxController extends Controller {
  public static targets = ['empty', 'filled', 'error'];
  public emptyTarget: Element;
  public filledTarget: Element;
  public errorTarget: Element;
  public hasFilledTarget: boolean;
  public hasErrorTarget: boolean;

  public connect() {
    if (this.hasFilledTarget) {
      this.filledTarget.classList.add('hide');
    }
    if (this.hasErrorTarget) {
      this.errorTarget.classList.add('hide');
    }
  }

  public check(event) {
    if (event.type == 'click' || event.key == 'Enter') {
      this.emptyTarget.classList.add('hide');
      this.filledTarget.classList.remove('hide');
      this.errorTarget.classList.add('hide');
    }
  }

  public uncheck(event) {
    if (event.type == 'click' || event.key == 'Enter') {
      this.errorTarget.classList.remove('hide');
      this.filledTarget.classList.add('hide');
      this.emptyTarget.classList.add('hide');
    }
  }

  public toggleCheck(event) {
    this.emptyTarget.classList.toggle('hide');
    this.filledTarget.classList.toggle('hide');
  }
}
