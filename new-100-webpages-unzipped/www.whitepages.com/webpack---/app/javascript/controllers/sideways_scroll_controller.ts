import * as $ from 'jquery';
import { Controller } from 'stimulus';

export default class extends Controller {
  public static targets = [
    'leftFaded',
    'leftBlack',
    'rightFaded',
    'rightBlack',
    'scrollContainer'
  ];

  public scrollContainerTarget: HTMLElement;
  public leftBlackTarget: Element;
  public rightBlackTarget: Element;
  public leftFadedTarget: Element;
  public rightFadedTarget: Element;

  public leftScroll() {
    $(this.scrollContainerTarget).animate(
      {
        scrollLeft: this.leftPostionScroll - this.scrollLength
      },
      800
    );
  }

  public rightScroll() {
    $(this.scrollContainerTarget).animate(
      {
        scrollLeft: this.leftPostionScroll + this.scrollLength
      },
      800
    );
  }

  public checkArrows() {
    const scrollLeftLength = this.scrollContainerTarget.scrollLeft;
    const width = this.scrollContainerTarget.offsetWidth;
    const { scrollWidth } = this.scrollContainerTarget;

    if (scrollWidth - scrollLeftLength - width <= 1) {
      this.rightBlackTarget.classList.add('hide');
      this.rightFadedTarget.classList.remove('hide');
    } else {
      this.rightBlackTarget.classList.remove('hide');
      this.rightFadedTarget.classList.add('hide');
    }
    if (scrollLeftLength === 0) {
      this.leftBlackTarget.classList.add('hide');
      this.leftFadedTarget.classList.remove('hide');
    } else {
      this.leftBlackTarget.classList.remove('hide');
      this.leftFadedTarget.classList.add('hide');
    }
  }

  get scrollLength() {
    return parseInt(this.data.get('scroll-length') || '0', 10);
  }

  get leftPostionScroll() {
    return this.scrollContainerTarget.scrollLeft;
  }
}
