import { Controller } from 'stimulus';

export default class extends Controller {
  public static targets = ['cover', 'actionList'];

  public coverTarget: HTMLElement;
  public actionListTarget: HTMLElement;

  public showOverlay() {
    this.coverTarget.style.display = 'block';
    this.actionListTarget.style.display = 'flex';
  }

  public hideOverlay() {
    this.coverTarget.style.display = 'none';
    this.actionListTarget.style.display = 'none';
  }
}
