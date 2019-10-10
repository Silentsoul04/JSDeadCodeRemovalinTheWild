import { Controller } from 'stimulus';

export default class MultiFieldController extends Controller {
  public static targets = ['input'];

  public inputTargets: HTMLInputElement[];

  public keyFormInput(event) {
    const current_field = event.currentTarget;
    const fieldIndex = parseInt(current_field.dataset['fieldIndex']);
    const moveLeftKeys = ['Backspace', 'ArrowLeft', 'Left'];
    const moveRightKeys = ['ArrowRight', 'Right'];

    if (moveLeftKeys.indexOf(event.key) > -1) {
      this.moveLeft(event, current_field, fieldIndex);
    } else if (moveRightKeys.indexOf(event.key) > -1) {
      this.moveRight(event, current_field, fieldIndex);
    } else if (this.matches_input_pattern(event, current_field)) {
      if (current_field.value.length < current_field.maxLength)
        current_field.value += event.key;
      this.autoTab(current_field, fieldIndex);
      event.preventDefault();
    }
  }

  private autoTab(current_field, fieldIndex) {
    if (
      current_field.value.length == current_field.maxLength &&
      !this.last_field(fieldIndex)
    ) {
      this.inputTargets[fieldIndex + 1].focus();
      this.inputTargets[fieldIndex + 1].select();
    }
  }

  //paste from current field to last field
  public pasteAll(event) {
    event.stopPropagation();
    event.preventDefault();
    const fieldIndex = parseInt(event.currentTarget.dataset['fieldIndex']);
    let pastedData = event.clipboardData.getData('Text');

    for (let idx = fieldIndex; idx < this.inputTargets.length; idx++) {
      let divider = this.inputTargets[idx].maxLength;
      this.inputTargets[idx].value = pastedData.substring(0, divider);
      pastedData = pastedData.substring(divider);
      this.inputTargets[idx].focus();
    }
  }

  private moveLeft(event, current_field, fieldIndex) {
    if (current_field.selectionStart == 0 && fieldIndex != 0) {
      if (!(event.key == 'Backspace' && current_field.selectionEnd != 0))
        this.inputTargets[fieldIndex - 1].focus();
      if (event.key == 'ArrowLeft' || event.key == 'Left')
        event.preventDefault();
    }
  }

  private moveRight(event, current_field, fieldIndex) {
    if (
      current_field.selectionStart == current_field.value.length &&
      !this.last_field(fieldIndex)
    ) {
      this.inputTargets[fieldIndex + 1].focus();
      event.preventDefault();
    }
  }

  private last_field(curr_field): boolean {
    return this.inputTargets.length - 1 == curr_field;
  }

  private matches_input_pattern(event, current_field): boolean {
    const pattern = new RegExp(current_field.pattern);
    return pattern.test(event.key);
  }
}
