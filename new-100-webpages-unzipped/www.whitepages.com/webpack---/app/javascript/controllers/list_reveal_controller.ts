import { Controller } from 'stimulus';

function itemHeight(el) {
  const elStyling = getComputedStyle(el);

  if (!elStyling.height || !elStyling.marginBottom) {
    throw new Error('Height and margin-bottom needs to be defined');
  }

  return parseInt(elStyling.height, 10) + parseInt(elStyling.marginBottom, 10);
}

export default class ListRevealController extends Controller {
  public static targets = ['list', 'item', 'revealMore'];
  public itemTargets: Element[];
  public revealMoreTarget: HTMLElement;
  public hasRevealMoreTarget: boolean;
  public listTarget: HTMLElement;

  get listItemHeight() {
    return itemHeight(this.itemTargets[0]);
  }

  get maxHeight() {
    return this.itemTargets.length * this.listItemHeight;
  }

  get initialItemsVisible() {
    return parseInt(this.data.get('initItemsVisible') || '5', 10);
  }

  get numItemsToReveal() {
    return parseInt(this.data.get('numItemsToReveal') || '10', 10);
  }

  public connect() {
    const initialHeight = this.listItemHeight * this.initialItemsVisible;

    if (this.hasRevealMoreTarget && initialHeight >= this.maxHeight) {
      this.hideRevealButton();
    } else {
      this.listTarget.style.height = `${initialHeight}px`;
      this.listTarget.style.maxHeight = `${this.maxHeight}px`;
    }
  }

  public revealMore() {
    const listHeight =
      itemHeight(this.listTarget) + this.listItemHeight * this.numItemsToReveal;
    this.listTarget.style.height = `${listHeight}px`;
    if (listHeight >= this.maxHeight) {
      this.hideRevealButton();
    }
  }

  public hideRevealButton() {
    this.revealMoreTarget.style.display = 'none';
    this.listTarget.classList.add('no-fade-cover');
  }
}
