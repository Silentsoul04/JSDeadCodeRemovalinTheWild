import { Controller } from 'stimulus';

export default class LogInValidationController extends Controller {
  public static targets = [
    'emailWrapper',
    'emailField',
    'passwordWrapper',
    'passwordField',
    'submit'
  ];
  public emailWrapperTarget: Element;
  public emailFieldTarget: HTMLInputElement;
  public passwordWrapperTarget: Element;
  public passwordFieldTarget: HTMLInputElement;
  public submitTarget: Element;

  public submit(event) {
    if (!this.validEmail || !this.validPassword) {
      event.preventDefault();
      this.submitTarget.classList.add('disabled');
      if (!this.validEmail) {
        this.emailWrapperTarget.classList.add('error');
        if (this.emailFieldTarget.value.length > 0) {
          this.emailWrapperTarget.classList.add('invalid-email');
        } else {
          this.emailWrapperTarget.classList.add('required-email');
        }
      }
      if (!this.validPassword) {
        this.passwordWrapperTarget.classList.add('error');
      }
    }
  }

  public resetEmailField() {
    // this has to be dont individually because ie
    this.emailWrapperTarget.classList.remove('error');
    this.emailWrapperTarget.classList.remove('invalid-email');
    this.emailWrapperTarget.classList.remove('required-email');
    if (this.validPassword) {
      this.submitTarget.classList.remove('disabled');
    }
  }

  public resetPasswordField() {
    this.passwordWrapperTarget.classList.remove('error');
    if (this.emailFieldTarget.value.length > 0) {
      this.submitTarget.classList.remove('disabled');
    }
  }

  private;

  get validEmail() {
    const email_input = this.emailFieldTarget.value;
    let valid_email = /\S+@\S+\.\S+/;
    return valid_email.test(email_input);
  }

  get validPassword() {
    return this.passwordFieldTarget.value.length > 0;
  }
}
