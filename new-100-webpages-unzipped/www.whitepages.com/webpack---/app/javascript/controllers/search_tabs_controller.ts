import { Controller } from 'stimulus';
import { fadeIn, selectFirstFormInput } from './helpers';

export default class SearchTabsController extends Controller {
  public static targets = ['tab', 'tabElement'];

  public tabTargets: HTMLInputElement[];
  public tabElementTargets: HTMLElement[];

  public connect() {
    const active_tabs = this.tabTargets.filter(tab =>
      tab.classList.contains('active')
    );

    if (active_tabs.length == 0) {
      this.tabTargets[0].classList.add('active');
    }
  }

  public selectTab(event) {
    if (
      event.currentTarget.classList.contains('disabled') ||
      event.currentTarget.classList.contains('active')
    ) {
      return;
    }

    this.tabElementTargets.forEach(el => el.classList.remove('in'));

    const tab_type = event.currentTarget.dataset['search'];
    this.tabElementTargets.forEach(function(el) {
      if (el.classList.contains(tab_type)) {
        if (el.dataset['fadeIn'] != 'false') fadeIn(el);
        el.classList.add('in');
        if (el.classList.contains('form-joined-wrapper')) {
          selectFirstFormInput(el);
        }
      }
    });

    this.tabTargets.forEach(function(tab) {
      tab.classList.remove('active');
      if (tab.dataset['search'] == tab_type) {
        tab.classList.add('active');
      }
    });
  }
}
