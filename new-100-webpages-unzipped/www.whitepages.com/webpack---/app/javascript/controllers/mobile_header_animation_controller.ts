import { Controller } from 'stimulus';

export default class extends Controller {
  public static targets = ['menuOptions', 'fullPage'];

  public menuOptionsTarget: HTMLElement;
  public fullPageTarget: HTMLElement;

  public showMenu() {
    this.menuOptionsTarget.style.overflowY = 'scroll';
    this.fullPageTarget.style.display = 'none';
  }

  public hideMenu() {
    this.fullPageTarget.style.display = 'block';
  }
}
