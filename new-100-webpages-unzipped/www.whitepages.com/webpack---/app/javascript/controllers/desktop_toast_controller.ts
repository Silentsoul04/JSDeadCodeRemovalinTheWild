import { Controller } from 'stimulus';

export default class extends Controller {
  public static targets = ['premiumButton', 'close'];

  public connect() {
    if (this.header) {
      this.header.classList.add('no-shadow');
    }

    window.setTimeout(() => {
      if (this.element.classList) {
        this.element.classList.add('slide-in');
      } else {
        this.element.className = 'slide-in';
      }
    }, 3000);
  }

  public close() {
    if (this.leftRail) {
      this.leftRail.classList.add('hide');
    }

    this.element.classList.add('hide');

    if (this.header) {
      this.header.classList.remove('no-shadow');
    }
  }

  get header() {
    return document.getElementById('header');
  }

  get leftRail() {
    return document.querySelector('.left-rail-mobile');
  }
}
