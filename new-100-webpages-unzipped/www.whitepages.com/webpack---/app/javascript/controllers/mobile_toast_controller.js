import {
    Controller
} from 'stimulus';

export default class extends Controller {
    static targets = ['close'];

    connect() {
        window.addEventListener('scroll', () => {
            this.showToast();
            this.makeSticky();
        });
    }

    close() {
        document.querySelector('.left-rail-desktop').classList.add('hide');
        this.element.classList.add('hide');
        document.getElementById('header').classList.remove('no-shadow');
    }

    makeSticky() {
        if (window.scrollY > 0) {
            this.element.classList.add('scrolling');
        } else {
            this.element.classList.remove('scrolling');
        }
    }

    showToast() {
        let bottomHeader = document.querySelector('#header').offsetHeight;
        let topViewDetails = document
            .querySelector('.toast-trigger')
            .getBoundingClientRect().bottom;

        if (bottomHeader >= topViewDetails) {
            if (this.element.classList) {
                if (!this.element.classList.contains('slide-in'))
                    this.element.classList.add('slide-in');
            } else {
                this.element.className = 'slide-in';
            }
        }
    }
}