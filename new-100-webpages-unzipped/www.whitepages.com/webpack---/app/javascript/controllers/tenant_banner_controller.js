import {
    Controller
} from 'stimulus';

export default class extends Controller {
    close() {
        this.element.classList.add('hide');
        const homeNav = document.querySelector('#home-nav');
        if (homeNav) {
            homeNav.classList.remove('banner-top');
        }
        monster.increment('tenant_app_monthly', 1, '/');
    }
}