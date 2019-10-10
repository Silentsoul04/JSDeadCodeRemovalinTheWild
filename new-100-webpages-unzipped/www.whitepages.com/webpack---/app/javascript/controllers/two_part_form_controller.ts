import { Controller } from 'stimulus';
import WPR from '../lib/wpr-helpers';

export default class TwoPartFormController extends Controller {
  public static targets = [
    'initialObj',
    'fadeInObj',
    'removedObj',
    'form',
    'secondFormInput',
    'nameField',
    'nameInput',
    'nameFieldPossessive'
  ];

  public initialObjTarget: HTMLElement;
  public fadeInObjTarget: HTMLElement;
  public formTarget: HTMLElement;
  public secondFormInputTarget: HTMLInputElement;
  public nameInputTarget: HTMLInputElement;
  public removedObjTargets: HTMLElement[];

  public showNext() {
    const jq_form = $(
      `form.${this.formTarget.classList.value.replace(/ /g, '.')}`
    );
    if (WPR.empty_field_validation(jq_form)) {
      this.initialObjTarget.classList.add('hidden-form');
      this.fadeInObjTarget.classList.remove('hidden-form');
      this.removeObjects();
      setTimeout(() => {
        this.secondFormInputTarget.focus();
      }, 500);
    }
  }
  public showPrev() {
    this.fadeInObjTarget.classList.add('hidden-form');
    this.initialObjTarget.classList.remove('hidden-form');
    this.showObjects();
  }
  public checkEnter(event) {
    if (
      event.key == 'Enter' &&
      this.initialObjTarget.className != 'hidden-form'
    ) {
      event.preventDefault();
      this.showNext();
    }
  }

  private removeObjects() {
    this.removedObjTargets.forEach(obj => {
      obj.classList.add('hide');
    });
  }
  private showObjects() {
    this.removedObjTargets.forEach(obj => {
      obj.classList.remove('hide');
    });
  }
}
