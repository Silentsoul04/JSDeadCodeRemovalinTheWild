import * as $ from 'jquery';
import ApplicationController from './application_controller';

export default class SignUpValidationController extends ApplicationController {
  public static targets = [
    'emailWrapper',
    'passwordWrapper',
    'emailField',
    'passwordField',
    'checkWrapper',
    'checkBox',
    'emptyCheckBox',
    'errorCheckBox',
    'submit',
    'emailContent',
    'passwordContent'
  ];
  public emailWrapperTarget: Element;
  public passwordWrapperTarget: Element;
  public emailFieldTarget: HTMLInputElement;
  public passwordFieldTarget: HTMLInputElement;
  public checkWrapperTarget: Element;
  public checkBoxTarget: HTMLElement;
  public emptyCheckBoxTarget: HTMLElement;
  public errorCheckBoxTarget: HTMLElement;
  public submitTarget: Element;
  public emailContentTarget: HTMLInputElement;
  public passwordContentTarget: HTMLInputElement;
  public emailValidated: boolean;

  public async validateEmail(event) {
    const email_input = this.emailFieldTarget.value;
    const email = email_input.substring(0, email_input.lastIndexOf('.'));
    const tld = email_input.substring(
      email_input.lastIndexOf('.') + 1,
      email_input.length
    );
    var response = await this.getJSON(
      '/validate/email?email=' + encodeURIComponent(email) + '&tld=' + tld
    );
    this.validateEmailResponseNoPwd(response, event, email_input);
  }

  public validateEmailResponseNoPwd(response, event, email) {
    if (
      (response.valid && response.unused_email) ||
      (response.valid && response.user_type == 'free_no_pwd')
    ) {
      this.emailWrapperTarget.classList.remove(
        'error',
        'invalid-email',
        'taken-email'
      );
      this.emailWrapperTarget.classList.add('valid');
      this.submitTarget.classList.remove('disabled');
      this.emailValidated = true;
    } else {
      event.preventDefault();
      this.emailWrapperTarget.classList.remove('valid');
      this.submitTarget.classList.add('disabled');
      if (!response.valid) {
        this.emailWrapperTarget.classList.add('error', 'invalid-email');
      } else {
        this.logInAndMonitorModal(event, email);
      }
    }
  }

  public resetEmailField(event) {
    if (event.keyCode != '13') {
      this.emailValidated = false;
      // this has to be done one at a time because ie
      this.emailWrapperTarget.classList.remove('error');
      this.emailWrapperTarget.classList.remove('valid');
      this.emailWrapperTarget.classList.remove('invalid-email');
      this.emailWrapperTarget.classList.remove('taken-email');
    }
  }

  public validatePassword() {
    if (this.validPassword) {
      this.addPasswordValid();
      this.submitTarget.classList.remove('disabled');
    } else {
      this.addPasswordError();
      this.submitTarget.classList.add('disabled');
    }
  }

  public resetPasswordField(event) {
    if (event.keyCode != '13') {
      this.passwordWrapperTarget.classList.remove('valid', 'error');
      this.submitTarget.classList.remove('disabled');
    } else {
      this.validateForm(event);
    }
  }

  public validateForm(event) {
    if (!this.emailValidated || !this.validPassword || !this.boxChecked) {
      event.preventDefault();
      this.submitTarget.classList.add('disabled');
      if (this.validPassword) {
        this.addPasswordValid();
      } else {
        this.addPasswordError();
      }
      if (!this.boxChecked) {
        this.emptyCheckBoxTarget.classList.add('hide');
        this.errorCheckBoxTarget.classList.remove('hide');
        this.checkWrapperTarget.classList.add('error');
      } else {
        this.checkWrapperTarget.classList.remove('error');
      }
    } else {
      this.submitTarget.classList.remove('disabled');
      this.checkWrapperTarget.classList.remove('error');
      this.addPasswordValid();
    }
  }

  public validateFormNoPwd(event) {
    if (!this.emailValidated || !this.boxChecked) {
      event.preventDefault();
      this.submitTarget.classList.add('disabled');
      if (!this.boxChecked) {
        this.emptyCheckBoxTarget.classList.add('hide');
        this.errorCheckBoxTarget.classList.remove('hide');
        this.checkWrapperTarget.classList.add('error');
      } else {
        this.checkWrapperTarget.classList.remove('error');
      }
    } else {
      this.submitTarget.classList.remove('disabled');
      this.checkWrapperTarget.classList.remove('error');
    }
  }

  public async transitionContentForward(event) {
    event.preventDefault();
    if (!this.emailValidated) {
      await this.validateEmail(event);
    }

    if (this.emailValidated) {
      this.emailContentTarget.classList.add('hidden');
      this.passwordContentTarget.classList.remove('hidden');
      this.passwordFieldTarget.focus();
    }
  }

  public transitionContentBack(event) {
    event.preventDefault();
    this.passwordContentTarget.classList.add('hidden');
    this.emailContentTarget.classList.remove('hidden');
    this.emailFieldTarget.focus();
  }

  public logInModal(event) {
    event.preventDefault();
    ($('#sign-up') as any).modal('hide');
    ($('#sign-in') as any).modal({ backdrop: 'static' });
    ($('#sign-in') as any).modal('show');
  }

  public signUpModal(event) {
    event.preventDefault();
    $('#sign-up-no-pwd').removeClass('hide');
  }

  public logInAndMonitorModal(event, email) {
    event.preventDefault();
    ($('#sign-up') as any).modal('hide');
    ($('#sign-in-and-monitor') as any).modal({ backdrop: 'static' });
    ($('#sign-in-and-monitor') as any).modal('show');
    if (email) {
      $('#sign-in-and-monitor #email').val(email);
      $('#sign-in-and-monitor .greeting-wrapper p').text(
        'Welcome back! Please log in to continue.'
      );
    }
  }

  public acceptTOS() {
    if (!this.emptyCheckBoxTarget.classList.contains('hide')) {
      this.emptyCheckBoxTarget.click();
    } else if (!this.errorCheckBoxTarget.classList.contains('hide')) {
      this.errorCheckBoxTarget.click();
    } else {
      this.checkBoxTarget.click();
    }
  }

  get validPassword() {
    return this.passwordFieldTarget.value.length > 5;
  }

  get boxChecked() {
    return !this.checkBoxTarget.classList.contains('hide');
  }

  private addPasswordError() {
    this.passwordWrapperTarget.classList.add('error');
    this.passwordWrapperTarget.classList.remove('valid');
  }

  private addPasswordValid() {
    this.passwordWrapperTarget.classList.remove('error');
    this.passwordWrapperTarget.classList.add('valid');
  }
}
