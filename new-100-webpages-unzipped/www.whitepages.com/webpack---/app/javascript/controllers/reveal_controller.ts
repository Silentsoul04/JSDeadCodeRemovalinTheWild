import { Controller } from 'stimulus';

function itemHeight(el) {
  const elStyling = getComputedStyle(el);

  if (!elStyling.height || !elStyling.marginBottom) {
    throw new Error('Height and margin-bottom needs to be defined');
  }

  return parseInt(elStyling.height, 10) + parseInt(elStyling.marginBottom, 10);
}

// TODO: consolidate with ListRevealController?
export default class extends Controller {
  public static targets = ['container', 'expander'];

  public containerTarget: HTMLElement;
  public expanderTarget: HTMLElement;

  public revealMore() {
    if (this.containerTarget.classList.contains('collapsed')) {
      this.containerTarget.classList.remove('collapsed');
      this.containerTarget.style.maxHeight = `${this.containerContentHeight}px`;
      this.expanderTarget.style.display = 'none';
    }
  }

  get containerContentHeight() {
    return itemHeight(this.containerTarget.children[0]);
  }
}
