import * as Stickyfill from 'stickyfilljs';
import { Controller } from 'stimulus';

export default class extends Controller {
  public connect() {
    const elements: Iterable<HTMLElement> = document.querySelectorAll(
      '.right-rail, .left-rail'
    );
    Stickyfill.add(elements);
  }
}
