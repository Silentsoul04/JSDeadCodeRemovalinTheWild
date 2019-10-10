import '@forbes/fbs-ads/dist/main';
import {
    isMobile
} from './is-mobile';
import {
    relativeVideo,
    retracted
} from './clientConfigService';
import throttle from './throttle';
import Observable from './Observable';

const progressiveAds = [];

/**
 * Check position of ad to see if it is close enough to load
 * @param {FbsAd} ad The ad to check
 * @return {boolean} is the ad in view (or close enough - 25% of window height away) that it should be loaded
 */
function progressiveAdShouldLoad(ad) {
    const PROGRESSIVE_LOAD_PERCENTAGE = 0.25;
    const {
        bottom
    } = ad.getBoundingClientRect();
    const editoolsOpen = document.documentElement.classList.contains('et-on');

    return !editoolsOpen && (bottom - window.innerHeight < (window.innerHeight * PROGRESSIVE_LOAD_PERCENTAGE));
}

/**
 * Displays ad that is in view or ads to progressiveAds collection to
 * be displayed on scroll
 * @param {FbsAd} ad The ad to insert
 */
function insertProgressiveAd(ad) {
    if (progressiveAdShouldLoad(ad)) {
        ad.display();
    } else {
        progressiveAds.push(ad);
    }
}

/**
 * Handler for window.scroll event to check if any progressive ads are ready to display
 */
function progressiveAdScrollHandler() {
    progressiveAds.forEach((ad) => {
        if (progressiveAdShouldLoad(ad)) {
            ad.display();
            progressiveAds.splice(progressiveAds.indexOf(ad), 1);
        }
    });
}

window.addEventListener('scroll', throttle(progressiveAdScrollHandler));

// Add tabIndex attribute to ad iframe to skip the ad by tab key - Accessibility
function addTabindex(ad, position) {
    if (position === 'ntv-home' || position === 'ntv-deskchannel') {
        return;
    }
    let counter = 0;
    const iframeInterval = setInterval(() => {
        const adiframe = ad.querySelector('iframe');
        let modified = false;
        if (adiframe && !adiframe.hasAttribute('tabindex')) {
            adiframe.setAttribute('tabindex', '-1');
            modified = true;
        }
        if (!modified && (adiframe || counter++ < 100)) {
            clearInterval(iframeInterval);
        }
    }, 100);
}

/**
 * Injects medianet ad into specified position.
 * @param {String} position Position name for the parent wrapper
 * @param {String} size Medianet create sizes to request
 * @param {String} crid Tag ID to request from medianet
 */
export function insertMedianet(position, size = '300x250', crid = '311139641') {
    const wrapper = document.querySelector(`.fbs-ad--${position}-wrapper`);
    if (wrapper) {
        const ad = document.createElement('div');
        ad.setAttribute('id', position);
        wrapper.appendChild(ad);
        const script = document.createElement('script');
        script.text = `
			try {
				window._mNHandle.queue.push(function () {
					window._mNDetails.loadTag('${position}', '${size}', '${crid}');
				});
			} catch (error) {}
		`;
        wrapper.appendChild(script);
    }
}

export const adObservable = new Observable(); // needs to be exported for ad logic in universal-header.js

/**
 * Handles logic for top ad onRender event
 * @param {Event} event
 */
function topAdRenderCallback(event) {
    const {
        detail: {
            size = []
        } = {}
    } = event;

    const adWrapper = document.querySelector('.fbs-ad--top-wrapper');
    const ad = document.querySelector('fbs-ad[position="top"]');
    const mainContent = document.querySelector('.main-content');
    const header = document.querySelector('.header');
    const paddingTopBottom = 24;

    // takeover ad
    if (size[0] === 7) {
        adWrapper.classList.add('fbs-ad--top-wrapper--takeover');
    }

    // fluid ad
    if (size.every(pos => pos === 0)) {
        const initialAdHeight = 114;
        ad.classList.add('fbs-ad--fluid-top');
        const interval = setInterval(() => {
            if (ad.clientHeight !== 0 && ad.clientHeight !== initialAdHeight) {
                adObservable.notify(ad.clientHeight);
                clearInterval(interval);
            }
        }, 100);
    }

    // regular ads
    if (size.every(pos => (pos !== 0 && pos !== 1))) {
        adObservable.notify(size[1] + paddingTopBottom);
    }

    // no ad targeted
    if (size.every(pos => pos === 1)) {
        adWrapper.style.height = 0;
        mainContent.style.paddingTop = `${header.clientHeight}px`;
    }
}

/**
 * Handles logic for spon-logo ad onRender event
 * @param {Event} event
 */
function sponLogoRenderCallback(event) {
    const {
        detail: {
            size = []
        } = {}
    } = event;
    const modalContent = document.querySelector('.modal__content');

    if (size[0] && size[0] !== 1) {
        const sponsor = modalContent.querySelector('.sponsor');
        if (sponsor) {
            sponsor.classList.add('sponsor--loaded');
        }
        modalContent.classList.add('modal__content--has-sponsor');
    } else {
        modalContent.classList.remove('modal__content--has-sponsor');
    }
}

/**
 * Handles logic for mobile sticky ad onRender event
 * @param {Event} event
 */
function mobileStickyRenderCallback(event) {
    const {
        detail: {
            size = []
        } = {}
    } = event;
    const ad = document.querySelector('fbs-ad[position="mobile"]');

    const footerContainer = document.querySelector('.footer');
    const adClose = document.createElement('button');
    const adCloseX = document.createElement('span');

    const footerMobileClass = 'footer--mobile';
    const fbsAdMobileClass = 'fbs-ad--mobile';

    adCloseX.classList.add('close');
    adCloseX.innerHTML = 'x';
    adClose.append(adCloseX);
    adClose.onclick = () => {
        document.querySelector(`.${fbsAdMobileClass}-wrapper fbs-ad`).classList.add('fbs-ad--mobile-hidden');
        footerContainer.classList.remove(footerMobileClass, `${footerMobileClass}-fluid`);
        adClose.classList.remove('fbs-ad--mobile-close');
    };

    if (size[0] !== 7) {
        if (footerContainer) {
            footerContainer.classList.add(footerMobileClass);
        }

        if (size[1] === 0) {
            if (!document.querySelector(`.${fbsAdMobileClass}-close`)) {
                document.querySelector(`.${fbsAdMobileClass}-wrapper`).append(adClose);

                ad.classList.add(`${fbsAdMobileClass}-fluid`);
                footerContainer.classList.add(`${footerMobileClass}-fluid`);

                setTimeout(() => {
                    adClose.classList.add(`${fbsAdMobileClass}-close`);
                }, 5000);
            }
        } else {
            ad.classList.add(fbsAdMobileClass);
        }
    } else if (size[0] === 7) {
        const adWrapper = document.querySelector('.fbs-ad--top-wrapper');
        if (adWrapper) {
            adWrapper.classList.add('fbs-ad--top-wrapper--mobile');
        }
    }
}

/**
 * Maps ad positions to their render callback
 */
const renderCallbackMap = {
    top: topAdRenderCallback,
    'spon-logo': sponLogoRenderCallback,
    mobile: mobileStickyRenderCallback,
    'mobile-sticky': mobileStickyRenderCallback,
};

/**
 * Adds render listener to ads that have render event callbacks
 * @param {FbsAd} ad
 * @param {string} position
 */
function addRenderEventCallback(ad, position) {
    if (renderCallbackMap[position] && ad) {
        ad.addEventListener('render', renderCallbackMap[position]);
    }
}

/**
 * Injects all ads of a type into the page.
 * You can optionally pass in a context.
 * @param {String} position The ad position name.
 * @param {Object} [context]  Optional DOM node to narrow scope.
 * @param {String} customAdId ID to pass to component child
 */
export function insertAd(position, context = document, customAdId) {
    const {
        classList
    } = context;
    const isArticleAdRail = classList && classList.contains('ad-rail');
    const wrapperName = isArticleAdRail ? customAdId : position;
    const wrappers = context.querySelectorAll(`.fbs-ad--${wrapperName}-wrapper`);

    for (let i = 0; i < wrappers.length; i++) {
        const ad = document.createElement('fbs-ad');

        ['progressive', 'batched'].forEach((type) => {
            if (wrappers[i].classList.contains(`fbs-ad--${type}`)) {
                ad.setAttribute(type, true);
            }
        });

        // Give ads that are already in view a chance to load before displaying
        // Batched ad calls will be handled by their respective pages
        if (ad.getAttribute('progressive') && !ad.getAttribute('batched')) {
            setTimeout(() => {
                insertProgressiveAd(ad);
            }, 100);
        }

        ad.setAttribute('position', position);

        if (wrappers[i].dataset.customTargeting) {
            ad.setAttribute('custom-targeting', wrappers[i].dataset.customTargeting);
        }

        if (customAdId) {
            ad.setAttribute('ad-id', customAdId);
        }

        addTabindex(ad, position);
        // Add aria-hidden attribute to the wrapper - Accessibility
        if (!position === 'ntv-home' && !position === 'ntv-deskchannel') {
            if (!wrappers[i].hasAttribute('aria-hidden')) {
                wrappers[i].setAttribute('aria-hidden', 'true');
                wrappers[i].setAttribute('role', 'presentation');
            }
        }

        addRenderEventCallback(ad, position);

        wrappers[i].appendChild(ad);
    }
}

function init() {
    // TODO: This will go away somehow
    if (isMobile) {
        // this is mainly for AMP Plus, when landing on an AMP Plus article with a relativeVideo,
        // we cannot insert a sticky ad at the bottom of the article. Super specific use case but
        // I don't know where else to put it. **shrug**.
        if (!relativeVideo) {
            insertAd('mobile', document, 'mobile-sticky');
        }
        insertAd('mobilex');
        insertAd('mobilerec');
        insertAd('spon-logo');
        insertAd('ntv-mobhome');
        insertAd('ntv-mobchannel');
        insertAd('mobsearch');
        insertMedianet('mobile-medianet');
    } else {
        insertAd('top');
        insertAd('rec');
        insertAd('recx');
        insertAd('text');
        insertAd('topx');
        insertAd('spon-logo');
        insertAd('ntv-home');
        insertAd('ntv-deskchannel');
        insertAd('bottom');
        insertAd('moreon');
        insertMedianet('body-medianet');
    }
}

if (!retracted) {
    init();
}



// WEBPACK FOOTER //
// ./src/assets/js/shared/adInsertion.js