import { Controller } from 'stimulus';

export default class MobileHoverController extends Controller {
  public connect() {
    this.element.addEventListener('touchstart', () => {
      this.addHoverEffect();
    });
    this.element.addEventListener('touchend', () => {
      this.removeHoverEffect();
    });
  }

  public addHoverEffect() {
    this.element.classList.add('hover-effect');
  }

  public removeHoverEffect() {
    this.element.classList.remove('hover-effect');
  }
}
