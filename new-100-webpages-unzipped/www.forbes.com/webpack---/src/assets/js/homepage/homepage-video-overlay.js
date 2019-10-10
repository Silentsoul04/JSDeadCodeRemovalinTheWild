import {
    fullAdZone,
    playerId
} from './../shared/clientConfigService';
import {
    dataVizController
} from './DataVizSingleton';

document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const modal = document.getElementById('modal__box');
    const videoModalBody = document.getElementsByClassName('modal__content')[0];
    const sliders = [...document.querySelectorAll('fbs-carousel')];
    const closeButton = modal.querySelector('.close');

    function openModal(videoCard) {
        body.classList.add('body--modal-open');
        dataVizController.clearTimer();

        const fbsVideo = document.createElement('fbs-video');
        fbsVideo.setAttribute('video-id', videoCard.dataset.videoId);
        fbsVideo.setAttribute('player-id', playerId);
        fbsVideo.setAttribute('ad-unit-path', fullAdZone);
        fbsVideo.setAttribute('autoplay', '');
        fbsVideo.setAttribute('controls', 'true');
        fbsVideo.setAttribute('secret-autoplay', '');
        fbsVideo.setAttribute('key-value-string', 'pos=vid-overlay');

        const title = document.createElement('div');
        title.classList.add('modal__title');
        title.append(videoCard.dataset.videoTitle);

        videoModalBody.append(fbsVideo, title);
    }

    function handleVideoClick(wrapper) {
        const el = wrapper || document;
        const videoCards = [...el.getElementsByClassName('card--video')];
        videoCards.forEach((videoCard) => {
            videoCard.onclick = (event) => {
                if (!body.classList.contains('body--modal-open')) {
                    openModal(videoCard);
                }
                event.preventDefault();
            };
        });
    }

    handleVideoClick();

    /**
     * Depending on how many slides is in view, if a slide is neither in view or
     * to the left or right of what's in view, it will not be in the DOM.
     * Click handler needs to be attached to slideChanged event so that DOM can
     * requery elements with the video class whenever what's in view changes.
     */
    sliders.forEach((slider) => {
        slider.addEventListener('slideChanged', () => {
            handleVideoClick();
        });
    });

    document.addEventListener('fbs-channel-response', (channelResponseEvent) => {
        handleVideoClick(channelResponseEvent.detail);
    });

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            dataVizController.startTimer();
            body.classList.remove('body--modal-open');
            videoModalBody.innerHTML = '';
            videoModalBody.appendChild(closeButton);
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            dataVizController.startTimer();
            body.classList.remove('body--modal-open');
            videoModalBody.innerHTML = '';
        }
    });
});



// WEBPACK FOOTER //
// ./src/assets/js/homepage/homepage-video-overlay.js