import MobileDetect from 'mobile-detect';
import cookies from '../cookies';
import formElements from './overlayFormElements';
import urlUtil from '../urlUtil';
import trackOverlayInit from './trackOverlay';
import integrationInit from '../integration';
import sessionOverlayInit from './sessionOverlay';
import timeOverlayInit from './timeOverlay';
import uuidUtil from '../uuidUtil';
import {
    OVERLAY_PARAM_DEBUG,
    OVERLAY_PARAM_SHOW_OVERLAY,
    OVERLAY_PARAM_INLINE_STYLE_DELAY,
    OVERLAY_PARAM_PAGEVIEWS_OVERRIDE,
} from '../constants';

let config;
let trackOverlay;
let integration;
let urlUtility;
let isPreview = false;
let redirectUrl;
let currentOverlay = null;
let currentExitIntent = null;
let sessionOverlay;
let timeOverlay;

const ENTER_KEY = 13;
const ESC_KEY = 27;
const OVERLAY_TIMEOUT = 5000;

function disableBackground() {
    if (
        document.body &&
        document.body.classList
    ) {
        document.body.classList.add('sailthru-overlay-no-scroll');
    }
}

function enableBackground() {
    if (
        document.body &&
        document.body.classList
    ) {
        document.body.classList.remove('sailthru-overlay-no-scroll');
    }
}

function hideOverlay() {
    enableBackground();
    const overlayContainerElems = document.getElementsByClassName('sailthru-overlay-container');
    for (var ix = 0; ix < overlayContainerElems.length; ++ix) {
        var overlayContainerElem = overlayContainerElems[ix];
        overlayContainerElem.parentElement.removeChild(overlayContainerElem);
    }
    if (
        document.getElementsByTagName('body') &&
        document.getElementsByTagName('body')[0] &&
        document.getElementsByTagName('body')[0].classList
    ) {
        document.getElementsByTagName('body')[0].classList.remove('sailthru-pushdown');
        document.getElementsByTagName('body')[0].classList.remove('sailthru-pushdown-animation');
    }

    if (currentOverlay && currentOverlay.overlay_id && sessionOverlay.getStickyOverlayId() === currentOverlay.overlay_id) {
        sessionOverlay.dismiss(currentOverlay.overlay_id);
    }

    currentOverlay = null;
}

function hideOverlayWithDelay(milliseconds) {
    setTimeout(() => {
        hideOverlay();
    }, milliseconds);
}

function removeScriptTags(inputString) {
    return inputString.replace(/<\/*\s*script.*?>/ig, '');
}

function validateEmail(email) {
    // https://github.com/php/php-src/blob/250938e2d35fc54161a18167b7901c5e3b574371/ext/filter/logical_filters.c#L575-L627
    // Same regex used in the backend. See /dev/jvm/commons/src/main/java/com/sailthru/commons/util/Validate.java
    const emailRegex = /^(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){255,})(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){65,}@)(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22))(?:\.(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-[a-z0-9]+)*\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-[a-z0-9]+)*)|(?:\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\]))$/i;
    return emailRegex.test(email);
}

function showEmailValidationError() {
    document.getElementsByClassName('sailthru-overlay-validation-error')[0].style.display = 'block';
    const emailInput = document.querySelector('#sailthru-user-acquisition-email');
    let emailInputClasses = emailInput.className;
    if (emailInputClasses.indexOf('has-error') < 0) {
        if (!emailInputClasses.endsWith(' ')) {
            emailInputClasses += ' ';
        }
        emailInputClasses += 'has-error';
    }
    emailInput.className = emailInputClasses;
}

function hideEmailValidationError() {
    document.getElementsByClassName('sailthru-overlay-validation-error')[0].style.display = 'none';
    const emailInput = document.querySelector('#sailthru-user-acquisition-email');
    let emailInputClasses = emailInput.className;
    emailInputClasses = emailInputClasses.replace(/[^\s]has-error/g, '');
    emailInput.className = emailInputClasses;
}

function showPostClickMessage() {
    document.getElementsByClassName('sailthru-overlay')[0].style.display = 'none';
    document.getElementsByClassName('sailthru-overlay-post-click')[0].style.display = 'inherit';
}

function getSafeEmail() {
    const email = document.getElementById('sailthru-user-acquisition-email').value;
    return removeScriptTags(email);
}

function generateRedirectUrl(postClickUrl, email, vars) {
    let url = postClickUrl;
    const hasQuery = url.indexOf('?') !== -1;
    const hasHash = url.indexOf('#') !== -1;
    const encodedEmail = encodeURIComponent(email);

    let encodedVars = '';
    for (const key in vars) {
        encodedVars += `&${key}=${encodeURIComponent(vars[key])}`;
    }

    if (hasQuery && hasHash) {
        url = url.replace('#', `&em=${encodedEmail}${encodedVars}#`);
    } else if (hasQuery && !hasHash) {
        url = `${url}&em=${encodedEmail}${encodedVars}`;
    } else if (!hasQuery && hasHash) {
        url = url.replace('#', `?em=${encodedEmail}${encodedVars}#`);
    } else if (!hasQuery && !hasHash) {
        url = `${url}?em=${encodedEmail}${encodedVars}`;
    }
    return url;
}

function handlePostClick(postClick, email, vars) {
    if (postClick && postClick.redirect && postClick.redirect.active && postClick.redirect.url) {
        const url = generateRedirectUrl(postClick.redirect.url, email, vars);
        if (!postClick.redirect.new_tab) {
            window.location = url;
        }
        hideOverlay();
        return `Redirecting to ${url}`;
    } else if (postClick && postClick.message && postClick.message.active && postClick.message.text) {
        showPostClickMessage();
        hideOverlayWithDelay(OVERLAY_TIMEOUT);
        return `Display Message: ${postClick.message.text}`;
    }

    hideOverlay();
    return 'No Post-click Action';
}

function getOnSuccess(overlay, email, vars) {
    return function onSuccess(response) {
        if (urlUtility.urlFragmentParams[OVERLAY_PARAM_DEBUG]) {
            console.log('userSignUp SUCCESS', response);
        }

        trackOverlay.conversion(overlay, email);

        let onSignupResult = -1;
        if (typeof(config.onSignupSuccess) === 'function') {
            try {
                onSignupResult = config.onSignupSuccess({
                    email,
                    vars: {
                        ...vars,
                    },
                    response,
                });

                if (onSignupResult == 0) {
                    hideOverlay();
                    return 0;
                }
            } catch (callbackErr) {
                console.log('onSignupSuccess encountered an error:', callbackErr);
                onSignupResult = 0;
            }
        }

        const result = handlePostClick(overlay.post_click, email, vars);
        if (urlUtility.urlFragmentParams[OVERLAY_PARAM_DEBUG]) {
            console.log(`onSignupSuccess returned ${onSignupResult} with post-click: ${result}`);
        }
        return onSignupResult;
    };
}

function getOnError(email) {
    return function onError(response) {
        console.log('userSignUp ERROR', response);

        let onSignupResult = -1;
        if (typeof(config.onSignupError) === 'function') {
            try {
                onSignupResult = config.onSignupError({
                    email,
                    error: response.error || 'There was an error with your request',
                });
            } catch (callbackErr) {
                console.log('onSignupError encountered an error:', callbackErr);
                onSignupResult = 0;
            }
        }
        hideOverlay();
        console.log(`onSignupError returned ${onSignupResult}`);
        return onSignupResult;
    };
}

function getVars(overlay) {
    const userVars = formElements.getVars();
    return {
        ...userVars,
        source: overlay.acquisition_source || 'overlay',
    };
}

function onOverlayButtonClick(overlay) {
    const safeEmail = getSafeEmail();
    const destinationLists = overlay.destination_lists;

    if (safeEmail && validateEmail(safeEmail)) {
        hideEmailValidationError();

        const isConfirmOptIn = overlay.template !== '';
        const idAndKey = {
            id: safeEmail,
            key: 'email',
        };

        const vars = getVars(overlay);
        const onSuccess = getOnSuccess(overlay, safeEmail, vars);
        const onError = getOnError(safeEmail);

        if (isConfirmOptIn) {
            const template = {
                name: overlay.template,
                vars: {
                    signup_lists: destinationLists,
                },
            };

            return integration.userSignUpConfirmedOptIn(idAndKey, {
                vars,
                template,
                onSuccess,
                onError,
            });
        }
        const lists = {};
        if (destinationLists) {
            destinationLists.forEach((list) => {
                lists[list] = 1;
            });
        }
        return integration.userSignUp(idAndKey.id, {
            lists,
            vars,
            onSuccess,
            onError,
        });
    }
    showEmailValidationError();
    document.querySelector('#sailthru-user-acquisition-email').focus();
    console.error('Invalid Email');

    return false;
}

function isShowOverlaySet() {
    return urlUtility.urlFragmentParams[OVERLAY_PARAM_SHOW_OVERLAY] === '1';
}

function matchFrequency(frequency, overlayId, mockStorage) {
    const localStorage = (mockStorage) || window.localStorage;
    const overlayCookie = cookies.read('sailthru_overlays');

    if (isShowOverlaySet()) {
        return true;
    }

    switch (frequency) {
        case 'every-pageview':
            return true;
        case 'once-visit':
            if (overlayCookie.indexOf(overlayId) === -1) {
                cookies.create('sailthru_overlays', `${overlayId}${overlayCookie}`, 30);
                return true;
            }
            return false;
        case 'once-ever':
            if (localStorage.getItem('sailthruOverlay')) {
                if (localStorage.getItem('sailthruOverlay').indexOf(overlayId) === -1) {
                    try {
                        localStorage.setItem('sailthruOverlay', `${overlayId}${localStorage.getItem('sailthruOverlay')}`);
                    } catch (e) {
                        localStorage.setItem('sailthruOverlay', `${overlayId}${localStorage.getItem('sailthruOverlay').slice(0, -36)}`);
                    }
                    return true;
                }
                return false;
            }
            localStorage.setItem('sailthruOverlay', overlayId);
            return true;
        default:
            return false;
    }
}

function isDeviceMobile() {
    const md = new MobileDetect(window.navigator.userAgent);
    const isMobile = md.mobile() || md.phone() || md.tablet();
    return isMobile;
}

function matchTargetDevice(targetDevice) {
    const isMobile = isDeviceMobile();
    if (targetDevice === 'mobile-only' && !isMobile) {
        return false;
    }
    if (targetDevice === 'desktop-only' && isMobile) {
        return false;
    }
    return true;
}

function parseHtmlStringAndAddToDomBody(html) {
    const DOMParser = new window.DOMParser();
    document.body.appendChild(DOMParser.parseFromString(html, 'text/html').body.firstChild);
}

function onEmailInputFocus() {
    hideEmailValidationError();
}

function addCallToActionListeners(overlay) {
    const overlayButton = document.querySelector('#sailthru-overlay-call-to-action');
    const overlayEmailInput = document.querySelector('#sailthru-user-acquisition-email');

    if (overlayButton) {
        overlayButton.addEventListener('click', () => {
            onOverlayButtonClick(overlay);
        });
        // This listener is needed to prevent pop-up blockers for post_click open in new_tab option
        overlayEmailInput.addEventListener('input', function() {
            const postClick = overlay.post_click;
            if (postClick && postClick.redirect && postClick.redirect.active &&
                postClick.redirect.new_tab && validateEmail(this.value)) {
                const vars = getVars(overlay);
                const safeEmail = getSafeEmail();
                redirectUrl = generateRedirectUrl(postClick.redirect.url, safeEmail, vars);
                overlayButton.href = redirectUrl;
                overlayButton.target = '_blank';
            } else {
                overlayButton.removeAttribute('href');
                overlayButton.removeAttribute('target');
            }
        });
    }

    if (overlayEmailInput) {
        overlayEmailInput.addEventListener('keydown', (event) => {
            onEmailInputFocus();
            const key = event.which || event.keyCode;
            if (key === ENTER_KEY) {
                document.querySelector('#sailthru-overlay-call-to-action').click();
            }
        });
    }
}

function addPostClickCloseListeners() {
    const postClickContainer = document.querySelector('.sailthru-overlay-post-click');
    if (!postClickContainer) {
        return;
    }
    const postClickCloseButtons = postClickContainer.querySelectorAll('.sailthru-overlay-close');

    if (postClickCloseButtons) {
        for (let i = 0; i < postClickCloseButtons.length; i += 1) {
            postClickCloseButtons[i].addEventListener('click', () => {
                hideOverlay();
            });
        }
    }

    document.addEventListener('keydown', (event) => {
        const key = event.which || event.keyCode;
        const isVisible = window.getComputedStyle(postClickContainer).getPropertyValue('display') !== 'none';
        if (key === ESC_KEY && isVisible) {
            hideOverlay();
        }
    });
}

function addAllCloseListeners() {
    const overlayCloseButtons = document.querySelectorAll('.sailthru-overlay-close');
    if (overlayCloseButtons) {
        for (let i = 0; i < overlayCloseButtons.length; i += 1) {
            overlayCloseButtons[i].addEventListener('click', () => {
                hideOverlay();
            });
        }
    }

    document.addEventListener('keydown', (event) => {
        const key = event.which || event.keyCode;
        if (key === ESC_KEY) {
            hideOverlay();
        }
    });
}

function addLinkListeners(overlay) {
    const elements = document.getElementById('sailthru-overlay-container').getElementsByTagName('a');
    for (let i = 0, len = elements.length; i < len; i += 1) {
        if (!elements[i].id || (elements[i].id !== 'sailthru-overlay-call-to-action')) {
            elements[i].onclick = function() {
                trackOverlay.click(overlay);
                hideOverlay();
            };
        }
    }
}

function displayOverlayHTML(overlay, mouseLeaveHandler) {
    if (currentOverlay) {
        return;
    }
    currentOverlay = overlay;

    const prevOverlayElems = document.getElementsByClassName('sailthru-overlay');
    for (var ix = prevOverlayElems.length - 1; ix >= 0; --ix) {
        try {
            document.body.removeChild(prevOverlayElems[ix]);
        } catch (ex) {
            // Swallow this exception.
        }
    }

    parseHtmlStringAndAddToDomBody(overlay.html);
    disableBackground();

    if (overlay.allow_close === false) {
        addPostClickCloseListeners();
    } else {
        addAllCloseListeners();
    }
    addLinkListeners(overlay);
    addCallToActionListeners(overlay);

    if (!isPreview) {
        trackOverlay.view(overlay);
    }
    if (overlay.exit_intent) {
        document.getElementsByClassName('sailthru-overlay')[0].classList.add('sailthru-overlay-animation');
        document.documentElement.removeEventListener('mouseleave', mouseLeaveHandler);
    }

    const defaultTransition = overlay.bar_transition === 'Default';
    const noTransition = overlay.bar_transition === 'None';
    const inlineFlow = overlay.bar_flow === 'Inline';
    const fixedFlow = overlay.bar_flow === 'Fixed';
    const positionTop = overlay.position === 'top';

    if (defaultTransition && inlineFlow && positionTop) {
        document.getElementsByClassName('sailthru-overlay')[0].classList.add('sailthru-slidedown');
        document.getElementsByTagName('body')[0].classList.add('sailthru-pushdown-animation');
    } else if (defaultTransition && fixedFlow && positionTop) {
        document.getElementsByClassName('sailthru-overlay')[0].classList.add('sailthru-slidedown');
    } else if (defaultTransition && fixedFlow) {
        document.getElementsByClassName('sailthru-overlay')[0].classList.add('sailthru-slideup');
    } else if (noTransition && inlineFlow) {
        document.getElementsByTagName('body')[0].classList.add('sailthru-pushdown');
    }

    /*
    The following is a work-around to IE11 failing to display div background image
    that's specified via computed CSS.  Setting it explicitly as an inline style
    fixes the issue on Windows 8.1 and 10.  For extra safety, it's being done here
    both synchronously and asynchronously with a timeout.
    */
    const debug = urlUtility.urlFragmentParams[OVERLAY_PARAM_DEBUG];
    const inlineStyleDelayMsStr = urlUtility.urlFragmentParams[OVERLAY_PARAM_INLINE_STYLE_DELAY];
    const inlineStyleDelayMs = inlineStyleDelayMsStr && parseInt(inlineStyleDelayMsStr) || 50;
    const inlineStyleWorker = () => {
        // This will ensure we only apply this to IE 11.
        if (window.navigator.userAgent.indexOf('Trident') < 0) {
            return;
        }
        const overlayElem = document.getElementsByClassName('sailthru-overlay')[0];
        const computedBgImage = window.getComputedStyle(overlayElem, null)['background-image'];
        if (computedBgImage) {
            overlayElem.style['background-image'] = computedBgImage;
            if (debug) {
                console.log(`Setting background-image to ${computedBgImage}.`);
            }
        }

        const computedHeight = window.getComputedStyle(overlayElem, null)['height'];
        if (debug) {
            console.log(`Setting height to ${computedHeight}.`);
        }
        overlayElem.style['height'] = computedHeight;
    };
    inlineStyleWorker();
    if (debug) {
        console.log(`Scheduling inline CSS resets after ${inlineStyleDelayMs} ms.`);
    }
    setTimeout(inlineStyleWorker, inlineStyleDelayMs);
}

function isTargetMatch(overlay) {
    return matchTargetDevice(overlay.target_device) && matchFrequency(overlay.frequency, overlay.overlay_id);
}

function displayPersonalizedOverlayHTML(overlay, mouseLeaveHandler) {
    if (isPreview || isTargetMatch(overlay)) {
        displayOverlayHTML(overlay, mouseLeaveHandler);
    }
}

const addExitIntentListener = (overlay) => {
    currentExitIntent = overlay;
    const mouseLeaveHandler = (event) => {
        const sensitivity = 20;
        if (event.clientY > sensitivity || currentExitIntent != overlay) {
            return;
        }
        displayPersonalizedOverlayHTML(overlay, mouseLeaveHandler);
    };
    return mouseLeaveHandler;
};

function renderOverlay(overlay) {
    if (overlay.exit_intent) {
        const exitIntentHandler = addExitIntentListener(overlay);
        document.documentElement.addEventListener('mouseleave', exitIntentHandler);
    } else if (overlay.timer) {
        timeOverlay.renderTimeDelayedOverlay(overlay);
    } else {
        displayPersonalizedOverlayHTML(overlay);
    }
    return overlay;
}

function renderOverlays(overlays) {
    const newOverlays = {};
    Object.keys(overlays).forEach((key) => {
        const overlay = overlays[key];
        renderOverlay(overlay);
        newOverlays[key] = overlay;
    });
    return newOverlays;
}

function isPageviewsOverrideSet() {
    const anchor = `${OVERLAY_PARAM_PAGEVIEWS_OVERRIDE}=1`;
    const result = window.location.hash.indexOf(anchor) != -1;
    if (result) {
        console.log(`Overriding pageviews count with anchor "${anchor}".`);
    }
    return result;
}

function getOncePerVisitOverlayList() {
    const overlayCookie = cookies.read('sailthru_overlays');
    return uuidUtil.parseUuidsList(overlayCookie);
}

function getOnceEverOverlayList(mockStorage) {
    const localStorage = mockStorage || window.localStorage;
    const localStorageOverlays = localStorage.getItem('sailthruOverlay');
    return uuidUtil.parseUuidsList(localStorageOverlays);
}

function getUrlParameters() {
    let params = [];

    const previewId = urlUtility.getPreviewIdFromAnchor();
    if (previewId) {
        console.log(`previewing overlay ${previewId}`);
        params.push(`preview=${previewId}`);
    }

    const pageviewsCount = isPageviewsOverrideSet() ? '10000' : cookies.read('sailthru_pageviews');
    if (pageviewsCount) {
        params.push(`pageviews=${pageviewsCount}`);
    }

    const isMobile = isDeviceMobile() ? '1' : '0';
    params.push(`isMobile=${isMobile}`);

    const sessionOverlayId = sessionOverlay.triggerStickyOverlay();
    if (sessionOverlayId) {
        params.push(`echo=${sessionOverlayId}`);
    }

    params = urlUtility.pushLandingPageParams(params);

    for (const overlayId of getOncePerVisitOverlayList()) {
        params.push(`so=${overlayId}`);
    }
    for (const overlayId of getOnceEverOverlayList()) {
        params.push(`oo=${overlayId}`);
    }

    return params;
}

function buildOverlayUrl() {
    const domainAndPath = `${config.personalizeDomain}/v1/personalize/initialize?`;

    let params = getUrlParameters();

    params = urlUtility.pushUserIdKeyAndUserIdValue(config, params);

    return Promise.resolve(domainAndPath + params.join('&'));
}

function setPreview() {
    if (urlUtility.isPreview()) {
        isPreview = true;
    }
    return isPreview;
}

const defaultFn = (options) => {
    config = options;
    trackOverlay = trackOverlayInit(config);
    integration = integrationInit(config);
    urlUtility = urlUtil();
    sessionOverlay = sessionOverlayInit();
    timeOverlay = timeOverlayInit(displayPersonalizedOverlayHTML);

    return {
        hideOverlay,
        buildOverlayUrl,
        renderOverlays,
        renderOverlay,
        isShowOverlaySet,
        setPreview,
        getUrlParameters,
    };
};

export default defaultFn;



// WEBPACK FOOTER //
// ./v1/src/js/modules/overlays/overlay.js