import { Application } from 't3js';
import { name as sidebarAds } from '../behaviors/sidebar-ads';


class Sidebar {
  constructor(context) {
    this.element = context.getElement();
    this.behaviors = [sidebarAds];
  }
}

Application.addModule('sidebar', (context) => new Sidebar(context));
