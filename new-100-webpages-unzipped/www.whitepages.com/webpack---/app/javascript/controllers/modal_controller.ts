import * as $ from 'jquery';
import { Controller } from 'stimulus';

export default class ModalController extends Controller {
  public static targets = [
    'modal',
    'errorMessage',
    'successMessage',
    'firstFocus'
  ];

  public modalTarget: HTMLElement;
  public errorMessageTarget: Element;
  public successMessageTarget: Element;
  public firstFocusTarget: HTMLInputElement;
  public hasErrorMessageTarget: boolean;
  public hasSuccessMessageTarget: boolean;
  public hasFirstFocusTarget: boolean;

  public connect() {
    if (this.hasErrorMessageTarget || this.hasSuccessMessageTarget) {
      ($(this.modalTarget) as any).modal({ backdrop: 'static' });
      ($(this.modalTarget) as any).modal('show');
    }

    ($(this.modalTarget) as any).on('shown.bs.modal', () => {
      // focus in the first field
      if (this.hasFirstFocusTarget) {
        this.firstFocusTarget.focus();
      }
    });

    ($(this.modalTarget) as any).on('show.bs.modal', () => {
      // remove all error classes to reset input errors
      var errorElements = document.querySelectorAll<HTMLInputElement>(
        '.modal .error'
      );
      if (errorElements.length > 0) {
        errorElements.forEach(element => {
          element.classList.remove('error');
          element.classList.remove('invalid-email');
          element.classList.remove('required-email');
          element.classList.remove('taken-email');
        });
      }
      // enable all disabled buttons
      var disabledElements = document.querySelectorAll<HTMLInputElement>(
        '.modal .disabled'
      );
      if (disabledElements.length > 0) {
        disabledElements.forEach(element =>
          element.classList.remove('disabled')
        );
      }
    });
  }
}
