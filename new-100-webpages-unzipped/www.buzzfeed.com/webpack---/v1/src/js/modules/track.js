import 'isomorphic-fetch';
import cookies from './cookies';
import pageview from './pageview';
import {
    CONVERT_DAY_TO_MINUTES,
    DO_NOT_TRACK
} from './constants';

export default (config) => {
    function getFullPathUrl(url) {
        const div = window.document.createElement('div');
        div.innerHTML = `<a href="${url}"></a>`;
        return div.firstChild.href;
    }

    function trackEvent(options) {
        let data = { ...options
        };

        delete data.apiUrl;

        if (data.onSuccess) {
            delete data.onSuccess;
        }

        if (data.onError) {
            delete data.onError;
        }

        if (data.elementId) {
            delete data.elementId;
        }

        if (data.pageview) {
            delete data.pageview;
        }

        if (options.userIdKey === undefined || options.userIdKey === '' || options.userIdKey.toUpperCase() === 'HID') {
            const horizonId = cookies.read('sailthru_hid');
            if (horizonId !== undefined && horizonId !== '') {
                data.userIdKey = 'hid';
                data.userIdValue = horizonId;
            }
        }

        data = JSON.stringify(data);

        return fetch(options.apiUrl, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'X-Lib-Version': config.VERSION,
                    Authorization: `Bearer ${config.customerId}`,
                },
                body: data,
            }).then(response => response.json())
            .then((json) => {
                if (json && (json.error || json.message)) {
                    throw json;
                }

                if (!options) {
                    return;
                }

                if (options.elementId) {
                    json.elementId = options.elementId;
                }

                if (json.doNotTrack) {
                    cookies.setSailthruHid(DO_NOT_TRACK);
                    cookies.handleGDPR();
                }

                if (options.pageview) {
                    cookies.updateSailthruContentCookie(json.contentHash);
                }

                if (options.onSuccess) {
                    options.onSuccess(json);
                }

                if (!options.visitorId && json.visitorId) {
                    cookies.create('sailthru_visitor', json.visitorId, 365 * CONVERT_DAY_TO_MINUTES);
                }
            })
            .catch((json) => {
                let responseText;

                if (json && json.responseText) {
                    responseText = JSON.parse(json.responseText);
                    console.log(`You have the following track error: ${responseText.message}`);
                }

                if (!options) return;

                if (options.elementId) {
                    json.elementId = options.elementId;
                }

                if (options.pageview) {
                    console.error(pageview.defaultPageviewOnError(json));
                }

                if (options.onError) {
                    options.onError(json);
                }
            });
    }

    return {
        click(sectionId, url, options) {
            const data = {
                ...options,
                sectionId,
                url: getFullPathUrl(url),
                apiUrl: `${config.trackDomain}/v1/track/event/click/`,
            };

            if (sectionId && url) {
                return trackEvent(data);
            }

            console.log('url, and sectionId are required for trackClick.', data);
            return false;
        },

        impression(sectionId, urls, options) {
            if (Array.isArray(urls)) {
                urls = urls.map(getFullPathUrl);
            } else if (typeof urls === 'object' && Object.keys(urls).length > 0) {
                options = urls;
                urls = undefined;
            }

            const data = {
                ...options,
                sectionId,
                apiUrl: `${config.trackDomain}/v1/track/event/impression/`,
            };

            if (sectionId) {
                if (urls && urls.length > 0) {
                    data.urls = urls;
                }

                return trackEvent(data);
            }

            console.log('sectionId are required for trackImpression.', data);
            return false;
        },

        pageview(url, options) {
            if (url) {
                const fullUrl = getFullPathUrl(url);
                const pageviewData = pageview.getData(fullUrl, options, config);
                return trackEvent(pageviewData);
            }
            console.log('url is required for trackPageView.', url, options);
            return false;
        },

        navigation(url, options) {
            if (url) {
                const data = {
                    ...options,
                    url: getFullPathUrl(url),
                    index: Date.now(),
                    type: 'navigation',
                    visitorId: cookies.read('sailthru_visitor'),
                    apiUrl: `${config.trackDomain}/v1/track/heartbeat`,
                };
                return trackEvent(data);
            }
            console.log('url is required for heartbeat navigation', url, options);
            return false;
        },

        heartbeat(url, options) {
            if (url) {
                const data = {
                    ...options,
                    url: getFullPathUrl(url),
                    index: Date.now(),
                    type: 'heartbeat',
                    visitorId: cookies.read('sailthru_visitor'),
                    apiUrl: `${config.trackDomain}/v1/track/heartbeat`,
                };
                return trackEvent(data);
            }
            console.log('url is required for heartbeat', url, options);
            return false;
        },

        gdprDoNotTrack(options) {
            const horizonId = cookies.read('sailthru_hid');
            if (!horizonId) {
                return;
            }
            cookies.setSailthruHid(DO_NOT_TRACK);
            cookies.handleGDPR();
            fetch(`${config.trackDomain}/v1/profile/${horizonId}`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'X-Lib-Version': config.VERSION,
                        Authorization: `Bearer ${config.customerId}`,
                    },
                    body: JSON.stringify({
                        doNotTrack: true
                    }),
                })
                .then(response => response.json())
                .then((json) => {
                    if (json && (json.error || json.message)) {
                        throw json;
                    }

                    if (options && options.onSuccess) {
                        options.onSuccess(json);
                    }
                })
                .catch((json) => {
                    if (options && options.onError) {
                        options.onError(json);
                    }
                });
        },

        cookiesDoNotTrack(options) {
            const apply = !options || options.set !== false;
            if (apply) {
                cookies.setCookiesDoNotTrack();
                cookies.handleGDPR();
            } else {
                cookies.unsetCookiesDoNotTrack();
            }
        },
    };
};



// WEBPACK FOOTER //
// ./v1/src/js/modules/track.js