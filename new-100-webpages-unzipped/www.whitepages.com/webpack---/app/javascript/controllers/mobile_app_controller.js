import {
    Controller
} from 'stimulus';

export default class extends Controller {
    connect() {
        window.setTimeout(() => {
            document.querySelector('.banner-mobile').classList.add('slide-in');
        }, 1000);

        if (document.body.classList.contains('banner-mobile')) {
            window.onscroll = function() {
                if (
                    document.body.scrollTop < 1 &&
                    document.documentElement.scrollTop < 1
                ) {
                    document
                        .querySelector('.landing-wrapper')
                        .classList.remove('scrolling');
                    document
                        .querySelector('.mobile-banner')
                        .classList.remove('scrolling');
                } else {
                    document.querySelector('.landing-wrapper').classList.add('scrolling');
                    document.querySelector('.mobile-banner').classList.add('scrolling');
                }
            };
        }
    }

    close() {
        document.querySelector('.banner-mobile').classList.remove('slide-in');
        window.setTimeout(() => {
            this.element.classList.add('hide');
            document.body.classList.remove('banner-mobile');
        }, 500);
        monster.increment('mobile_app_daily', 1, '/');
        monster.increment('mobile_app_monthly', 1, '/');
    }
}