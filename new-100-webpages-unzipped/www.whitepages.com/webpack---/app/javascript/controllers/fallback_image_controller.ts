import { Controller } from 'stimulus';

export default class extends Controller {
  public image: HTMLImageElement;

  public connect() {
    this.loadLogo();
  }

  public loadLogo() {
    this.image = new Image();
    this.image.addEventListener('error', () => {
      (this
        .element as HTMLElement).style.backgroundImage = `url('${this.fallbackUrl}'`;
    });

    this.image.addEventListener('load', () => {
      (this
        .element as HTMLElement).style.backgroundImage = `url('${this.targetUrl}'`;
    });

    this.image.src = this.targetUrl;
  }

  get targetUrl() {
    return this.data.get('url') || this.fallbackUrl || 'fallback.png';
  }

  get fallbackUrl() {
    return this.data.get('fallbackUrl');
  }
}
