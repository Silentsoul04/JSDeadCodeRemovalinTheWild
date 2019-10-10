import 'isomorphic-fetch';
import cookies from './cookies';
import {
    CONVERT_DAY_TO_MINUTES,
    DO_NOT_TRACK,
    OVERLAY_PARAM_DEBUG
} from './constants';
import overlayInit from './overlays/overlay';
import trackInit from './track';
import urlUtil from './urlUtil';
import sessionOverlayInit from './overlays/sessionOverlay';

// NOTE: This adds closest support for IE and Edge browsers
if (window.Element && !Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        let matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i,
            el = this;
        do {
            i = matches.length;
            while (--i >= 0 && matches.item(i) !== el) {}
        } while ((i < 0) && (el = el.parentElement));
        return el;
    };
}

let config;
let track;
let overlay;
let urlUtility;
let sessionOverlay;

function appendClickListener(section) {
    const {
        selector,
        sectionId
    } = section;
    const element = document.querySelectorAll(`${selector}`)[0];

    if (element) {
        element.addEventListener('click', (event) => {
            event.preventDefault();

            const target = event.target;
            const anchor = target.closest('a');
            if (target.tagName === 'A' || anchor) {
                const url = target.getAttribute('href') || anchor.getAttribute('href');
                track.click(sectionId, url, {
                    onSuccess: (response) => {
                        cookies.updatePCCookie(response, section);
                        window.location.href = url;
                    },
                    onError: (response) => {
                        console.error(`Click error: ${response.error}`);
                        window.location.href = url;
                    },
                }).catch((response) => {
                    console.error(`Error: ${response}`);
                    window.location.href = url;
                });
            }
        });
    }
}

function stopImpressionCheck(key) {
    if (config.impressions[key]) {
        delete config.impressions[key];
    }
}

function onTrackImpressionSuccess(section) {
    const key = section.elementId;
    stopImpressionCheck(key);
}

function onTrackImpressionFailure(section) {
    const maxTrackFailures = 5;
    const {
        elementId
    } = section;
    const impression = config.impressions[elementId];

    if (impression) {
        impression.failures += 1;

        if (impression.failures >= maxTrackFailures) {
            // if impression has too many failures, then stop trying to get impression
            stopImpressionCheck(elementId);
        } else {
            // otherwise, try to get impression again
            const {
                section: {
                    sectionId
                },
                urls
            } = impression;

            track.impression(sectionId, urls, {
                sectionId,
                elementId,
                userIdKey: config.userIdKey,
                userIdValue: config.userIdValue,
                onSuccess: onTrackImpressionSuccess,
                onError: onTrackImpressionFailure,
            });
        }
        return impression;
    }
}

function isElementVisible(el) {
    const element = document.querySelector(el);

    if (!element) {
        return false;
    }

    const rect = element.getBoundingClientRect();
    const vWidth = window.innerWidth || document.documentElement.clientWidth;
    const vHeight = window.innerHeight || document.documentElement.clientHeight;

    // Return false if it's not in the viewport
    return (!(rect.right < 0 || rect.bottom < 0 || rect.left > vWidth || rect.top > vHeight));
}

function trackImpression() {
    const {
        impressions
    } = config;

    // loop through all elementIds and check if seen in viewport
    // pop the item if it is seen and call success.
    Object.keys(impressions).forEach((selector) => {
        const impression = impressions[selector];

        if (isElementVisible(selector) && impression.status === 'unseen') {
            const {
                section: {
                    sectionId
                },
                urls
            } = impression;

            impression.status = 'seen';
            track.impression(sectionId, urls, {
                elementId: selector,
                userIdKey: config.userIdKey,
                userIdValue: config.userIdValue,
                onSuccess: onTrackImpressionSuccess,
                onError: onTrackImpressionFailure,
            });
            return impression;
        }
    });
}

function addImpression(section) {
    const {
        selector
    } = section;
    const urls = [];
    const links = document.querySelectorAll(`${selector} a[href]`);

    for (const link of links) {
        urls.push(link.href);
    }

    config.impressions[selector] = {
        section,
        urls,
        failures: 0,
        status: 'unseen',
    };

    window.addEventListener('scroll', trackImpression);
    return trackImpression();
}

function clean(section) {
    const {
        sectionId,
        selector,
        list,
        json,
        html,
        error,
        errorMessage
    } = section;

    if (error) {
        return {
            error
        };
    }

    if (errorMessage) {
        return {
            errorMessage
        };
    }

    const cleanSection = {
        sectionId,
        selector,
        list
    };
    if (json) {
        cleanSection.json = json;
    } else if (html) {
        cleanSection.html = html;
    }
    return cleanSection;
}

function displaySectionHTML(section) {
    const {
        selector,
        html
    } = section;
    const element = document.querySelectorAll(selector);
    const hasElement = element.length > 0;

    if (hasElement) {
        for (const node of element) {
            const newElement = node.cloneNode(false);
            newElement.innerHTML = html;
            node.parentNode.replaceChild(newElement, node);
        }
    } else {
        console.error(`Unknown selector '${selector}' for section ${section.sectionId}`);
    }
}

function renderSections(sections) {
    const {
        requestedSections
    } = config;

    for (const section in sections) {
        const currentSection = sections[section];
        const requestedSection = requestedSections[currentSection.requestedSectionId];
        const hasRequestedSection = typeof requestedSection !== 'undefined';

        currentSection.sectionId = section;

        if (config.isCustom) {
            currentSection.selector = requestedSection.selector || '';
        }

        if (currentSection.html && !currentSection.control) {
            displaySectionHTML(currentSection);
        }

        if (currentSection.selector) {
            addImpression(currentSection);
            appendClickListener(currentSection);
        }

        sections[section] = clean(currentSection);

        if (currentSection.error || currentSection.errorMessage) {
            if (hasRequestedSection &&
                typeof requestedSection.onError === 'function') {
                requestedSection.onError(sections[section]);
            }
        } else if (hasRequestedSection &&
            typeof requestedSection.onSuccess === 'function') {
            requestedSection.onSuccess(sections[section]);
        }
    }
    return sections;
}

function fetchPersonalizeError(response, onError) {
    if (typeof onError === 'function') {
        return onError(response);
    } else if (config && typeof config.onError === 'function') {
        return config.onError(response);
    }
    return console.error(`Personalize call failed. ${response}`);
}

function fetchPersonalizeSuccess(response, onSuccess) {
    const {
        testId,
        customerId,
        sections = {},
        overlays = {}
    } = response;
    const doNotTrack = response.doNotTrack;

    if (typeof testId !== 'undefined') {
        cookies.delete('sailthru_test_id');
        cookies.create('sailthru_test_id', testId, 365 * CONVERT_DAY_TO_MINUTES);
    }

    if (typeof response.pageview !== 'undefined') {
        const pageviewError = response.pageview.error || response.pageview.message;
        const sailthruContent = response.pageview.contentHash;
        const sailthruVisitor = response.pageview.visitorId;

        if (typeof pageviewError !== 'undefined') {
            console.error(`Pageview error ${pageviewError}`);
        } else {
            cookies.updateSailthruContentCookie(sailthruContent);
            if (sailthruVisitor) {
                cookies.delete('sailthru_visitor');
                cookies.create('sailthru_visitor', sailthruVisitor, 365 * CONVERT_DAY_TO_MINUTES);
            }
        }
    }

    config.customerId = customerId || config.customerId;

    config.sections = renderSections(sections);
    if (overlay.setPreview()) {
        const overlayId = Object.keys(overlays)[0];
        if (overlayId !== undefined) {
            config.overlay = overlay.renderOverlay(overlays[overlayId]);
        } else {
            console.warn("No overlay to preview. put a valid overlay id!");
        }
    } else {
        config.overlay = overlay.renderOverlays(overlays);
    }

    if (doNotTrack) {
        cookies.setSailthruHid(DO_NOT_TRACK);
        cookies.handleGDPR();
    }

    if (typeof onSuccess === 'function') {
        onSuccess(config.sections);
    }

    if (typeof config.onSuccess === 'function') {
        config.onSuccess(config.sections);
    }
}

function checkPersonalizeResponse(response, referrerUrl) {
    if (window.location != referrerUrl) {
        if (urlUtility.urlFragmentParams[OVERLAY_PARAM_DEBUG]) {
            console.log('window.location', window.location);
            console.log('referrerUrl', referrerUrl);
        }
        throw Error('Response for different page.');
    }
    if (!response) {
        throw Error('No personalize response.');
    }
    return response.json();
}

function getPageUrl() {
    let url = window.location.toString();
    if (!!url) {
        const fragmentIx = url.indexOf('#');
        if (fragmentIx >= 0) {
            url = url.slice(0, fragmentIx);
        }
    }
    return url;
}

const defaultFn = (options) => {
    config = options;
    overlay = overlayInit(config);
    track = trackInit(config);
    urlUtility = urlUtil();
    sessionOverlay = sessionOverlayInit();

    return {
        fetchPersonalize(url, referrerUrl, callbacks = {}) {
            if (!referrerUrl) {
                throw Error('Missing referrerUrl from personalize call');
            }

            const headers = new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-Lib-Version': config.VERSION,
                Authorization: `Bearer ${config.customerId}`,
                'X-Referring-URL': getPageUrl(),
            });

            return fetch(url, {
                credentials: 'same-origin',
                headers,
            }).then(response =>
                checkPersonalizeResponse(response, referrerUrl),
            ).then((json) => {
                if (json && (json.error || json.message)) {
                    return fetchPersonalizeError(json, callbacks.onError);
                }
                return fetchPersonalizeSuccess(json, callbacks.onSuccess);
            }).catch(response => fetchPersonalizeError(response, callbacks.onError));
        },
    };
};

export default defaultFn;



// WEBPACK FOOTER //
// ./v1/src/js/modules/utility.js