import { Controller } from 'stimulus';

export default class extends Controller {
  public static targets = ['showMore', 'count'];
  public showMoreTarget: HTMLElement;
  public countTarget: HTMLElement;

  public revealCards() {
    let hiddenCards = Array.from(this.element.getElementsByClassName('hide'));

    hiddenCards.slice(0, 4).forEach(function(item) {
      item.classList.remove('hide');
    });
    const remainingCards = hiddenCards.slice(4);

    if (remainingCards.length > 0) {
      // update the number
      this.countTarget.innerHTML = this.countTarget.innerHTML.replace(
        /\d+/,
        remainingCards.length.toString()
      );
    } else {
      // remove the show more button
      this.showMoreTarget.classList.add('hide');
    }
  }
}
