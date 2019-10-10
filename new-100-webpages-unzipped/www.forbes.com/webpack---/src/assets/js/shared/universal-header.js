import {
    isMobile,
    isTablet
} from './is-mobile';
import {
    adObservable
} from './adInsertion';
import {
    channelName,
    channelColor,
    premiumPage,
} from './clientConfigService';

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const headerNav = document.querySelector('.header__nav');
    const hamburgerIcon = header.querySelector('.icon--hamburger');
    const closeIcon = header.querySelector('.icon--close');
    const headerNavOpenClass = 'header__nav--is-open';
    const headerNavCloseClass = 'header__nav--is-closed';

    const channelLiElements = [...document.querySelectorAll('.header__channel')];
    const sectionLiElements = [...document.querySelectorAll('.header__section')];
    const channelAnchorSpanElements = [...document.querySelectorAll('.header__title')];

    const subnav = document.querySelector('.header__subnav');

    const searchIcon = header.querySelector('.icon--search');
    const lastChannel = document.querySelector('.header__channels').lastChild;

    const headerChannelLinkOpen = 'header__channel--is-open';
    const headerChannelLinkClose = 'header__channel--is-closed';

    const body = document.querySelector('body');
    const bodyPreventScrolling = 'body__prevent-scrolling';
    let scrollPosition;

    function handleOpenHamburger() {
        headerNav.classList.remove(headerNavCloseClass);
        headerNav.classList.add(headerNavOpenClass);
        body.classList.add(bodyPreventScrolling);
        scrollPosition = window.pageYOffset;
    }

    if (hamburgerIcon) {
        hamburgerIcon.addEventListener('click', () => {
            handleOpenHamburger();
        });

        hamburgerIcon.addEventListener('keyup', (e) => {
            if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
                handleOpenHamburger();
            }
        });
    }

    function handleCloseIcon() {
        headerNav.classList.remove(headerNavOpenClass);
        headerNav.classList.add(headerNavCloseClass);
        body.classList.remove(bodyPreventScrolling);
        window.scrollTo(0, scrollPosition);
    }

    if (closeIcon) {
        closeIcon.addEventListener('click', () => {
            handleCloseIcon();
        });

        closeIcon.addEventListener('keyup', (e) => {
            if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
                handleCloseIcon();
            }
        });
    }

    function handleChannelLinkClick(e) {
        const openItem = document.querySelector(`.${headerChannelLinkOpen}`);
        const link = e.target.classList.contains('header__title') ? e.target.parentNode : e.target;
        const isChannel = link.classList.contains('header__channel');

        if (openItem && isChannel && !openItem.isSameNode(link)) {
            openItem.classList.remove(headerChannelLinkOpen);
        }

        if (link.classList.contains(headerChannelLinkOpen)) {
            link.classList.remove(headerChannelLinkOpen);
            link.classList.add(headerChannelLinkClose);
            link.setAttribute('data-ga-track', `U18 - Channel: ${link.dataset.title} - Position ${link.dataset.position} - Channel Expanded`);
            subnav.setAttribute('aria-hidden', 'true');
        } else {
            link.classList.remove(headerChannelLinkClose);

            // hide divider and subnav if there are no section links for channel
            if ([...link.querySelectorAll('.header__section')].length > 1) {
                link.classList.add(headerChannelLinkOpen);
            } else {
                link.classList.add('header__channel--no-sections');
            }

            link.removeAttribute('data-ga-track');
            subnav.setAttribute('aria-hidden', 'false');
        }
    }

    if (isMobile || isTablet) {
        channelLiElements.forEach((link) => {
            // handles tapping channels on mobile
            link.setAttribute('data-ga-track', `U18 - Channel: ${link.dataset.title} - Position ${link.dataset.position} - Channel Expanded`);
            link.addEventListener('click', (e) => {
                handleChannelLinkClick(e);
            });
        });
    } else {
        /**
         * trigger hover states only on desktop using a class
         * so that click events don't trigger hover styles on devices
         */
        [...channelLiElements, ...sectionLiElements].forEach((link) => {
            // hide divider and subnav if there are no section links for channel
            if (link.classList.contains('header__channel')) {
                if ([...link.querySelectorAll('.header__section')].length > 1) {
                    link.classList.add('header__hoverable');
                } else {
                    link.classList.add('header__channel--no-sections');
                }
            } else {
                link.classList.add('header__hoverable');
            }

            // handles case when user is tabbing and then hovers on different item
            link.addEventListener('mouseenter', () => {
                const openItem = document.querySelector(`.${headerChannelLinkOpen}`);
                if (openItem) {
                    openItem.classList.remove(headerChannelLinkOpen);
                    document.activeElement.blur();
                }
            });
        });

        channelAnchorSpanElements.forEach((link) => {
            // handles focus events/tabbing for accessibility on non devices
            link.addEventListener('focus', (e) => {
                handleChannelLinkClick(e);
            });
        });

        if (searchIcon) {
            searchIcon.addEventListener('focus', () => {
                lastChannel.classList.remove(headerChannelLinkOpen);
            });
        }
    }

    let lastScrollTop = 0;

    const topAdWrapper = document.querySelector('.fbs-ad--top-wrapper');
    const topAdUpClass = 'fbs-ad--top-wrapper--up';
    const topAdStickyClass = 'fbs-ad--top-wrapper--sticky';
    const headerNavUp = 'header__nav--up';
    const mainContentBodyBlock = document.querySelector('.main-content--body');

    function handleScrollingDown() {
        header.classList.add(headerNavUp);
        if (topAdWrapper && !premiumPage) {
            topAdWrapper.classList.add(topAdUpClass);
        }
    }

    function handleScrollingUp() {
        header.classList.remove(headerNavUp);
        if (topAdWrapper && !premiumPage) {
            topAdWrapper.classList.remove(topAdUpClass);
        }
    }

    function onScroll() {
        const currentScrollTop = window.pageYOffset;
        if (currentScrollTop > lastScrollTop && currentScrollTop > header.clientHeight) {
            handleScrollingDown();
        } else {
            handleScrollingUp();
        }

        // stores previous scrollTop value
        lastScrollTop = currentScrollTop;
    }

    function unstickyAd() {
        mainContentBodyBlock.classList.remove('main-content__body--animating');
        mainContentBodyBlock.style.paddingTop = 0;
        if (topAdWrapper && !premiumPage) {
            topAdWrapper.classList.remove(topAdStickyClass);
            topAdWrapper.style.height = 'auto';
        }
    }

    function updateNormalAndFluidAds(height) {
        if (topAdWrapper && !premiumPage) {
            mainContentBodyBlock.classList.add('main-content__body--animating');
            mainContentBodyBlock.style.paddingTop = `${height}px`;
            topAdWrapper.classList.add(topAdStickyClass);
            topAdWrapper.style.height = `${height}px`;
        }
    }

    const takeOverAdHeight = 7;
    let firstRun = true;

    function updateAdHeight(height) {
        if (height !== takeOverAdHeight && firstRun) {
            firstRun = false;
            updateNormalAndFluidAds(height);
            setTimeout(() => {
                unstickyAd();
                window.addEventListener('scroll', onScroll);
            }, 5000);
        }
    }

    adObservable.subscribe(updateAdHeight);

    if (isMobile) {
        mainContentBodyBlock.style.paddingTop = 0;
    } else if (topAdWrapper && !premiumPage) {
        topAdWrapper.classList.add('fbs-ad--top-wrapper--desktop');
    } else {
        window.addEventListener('scroll', onScroll);
    }

    /**
     * Applies channel color to header.
     * @param {Object} headerChannelItems querySelector of header items.
     */
    function applyColor(headerChannelItems) {
        headerChannelItems.forEach((channel) => {
            if (channel.querySelector('.header__title').innerText === channelName) {
                channel.classList.add('header__current');
            }
        });
    }

    /**
     * Highlight current channel color and removes color on hover and re-applies it on hover out.
     */
    function handleHeaderHighlight() {
        if (!(channelName && channelColor)) {
            return;
        }

        const headerChannelItems = document.querySelectorAll('.header__channels .header__channel');

        document.querySelector('.channel__indicator').classList.add(`channel__indicator--${channelColor}`);
        headerChannelItems.forEach((channel) => {
            channel.addEventListener('mouseover', () => {
                const headerCurrentElement = document.querySelector('.header__current');
                const sectionList = channel.querySelectorAll('.header__subnav .header__section');
                if (sectionList.length > 1 && headerCurrentElement) {
                    headerCurrentElement.classList.remove('header__current');
                }
            });
            channel.addEventListener('mouseout', () => applyColor(headerChannelItems));
        });

        applyColor(headerChannelItems);
    }

    handleHeaderHighlight();
});



// WEBPACK FOOTER //
// ./src/assets/js/shared/universal-header.js