import { Controller } from 'stimulus';

export default class TotalCheckedController extends Controller {
  public static targets = ['checkedBox', 'submitBtn'];
  public submitBtnTarget: HTMLElement;
  public checkedBoxTargets: HTMLElement[];

  public changeTotalCount() {
    let totalNumChecked = 0;
    this.checkedBoxTargets.forEach(checkedBox => {
      if (!checkedBox.classList.contains('hide')) {
        totalNumChecked++;
      }
    });

    this.submitBtnTarget.dataset['checkedboxes'] = totalNumChecked.toString();
  }
}
