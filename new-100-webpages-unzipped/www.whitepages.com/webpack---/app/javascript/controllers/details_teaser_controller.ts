import { Controller } from 'stimulus';

export default class extends Controller {
  public static targets = ['loading', 'results'];
  public loadingTarget: Element;
  public resultsTarget: Element;

  public connect() {
    setTimeout(() => {
      this.displayResults();
    }, 2000);
  }

  public displayResults() {
    this.loadingTarget.classList.add('hide');
    this.resultsTarget.classList.add('in');
    this.resultsTarget.classList.remove('hide');
    (window as any).ga(
      'send',
      'event',
      'wppremium',
      'viewed_ad',
      'SM_Phone_Details_A',
      {
        nonInteraction: true
      }
    );
  }
}
