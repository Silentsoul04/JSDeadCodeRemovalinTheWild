import 'isomorphic-fetch';
import cookies from './cookies';
import urlUtil from './urlUtil';
import utility from './utility';
import overlayInit from './overlays/overlay';
import checkBlocked from './contentBlockedUtil';

let config;
let overlay;
let SPMUtility;
let urlUtility;

function buildPersonalizeUrl(isCustom) {
    let domainAndPath = `${config.personalizeDomain}/v1/personalize`;
    let params = [];

    if (isCustom) {
        domainAndPath += '?';
        params.push(`sections=${Object.keys(config.requestedSections).join()}`);

        if (config.userVars) {
            params.push(`vars=${encodeURIComponent(JSON.stringify(config.userVars))}`);
        }
    } else {
        domainAndPath += '/simple?';

        params = overlay.getUrlParameters();

        const visitorId = cookies.read('sailthru_visitor');
        if (visitorId) {
            params.push(`visitorId=${visitorId}`);
        }

        const messageId = cookies.read('sailthru_bid');
        if (messageId) {
            params.push(`messageId=${messageId}`);
        }
    }

    params = urlUtility.pushUserIdKeyAndUserIdValue(config, params);

    const content = cookies.read('sailthru_content');
    if (content) {
        params.push(`content=${content}`);
    }

    const testCookie = cookies.read('sailthru_test_id');
    if (testCookie) {
        params.push(`testId=${testCookie}`);
    }

    if (config.checkBlocked) {
        return checkBlocked(config.assetsPath)
            .then((isBlocked) => {
                if (isBlocked) {
                    params.push('blocked=true');
                }
                return domainAndPath + params.join('&');
            });
    }

    return Promise.resolve(domainAndPath + params.join('&'));
}

function personalize(options) {
    const {
        sections,
        onSuccess,
        onError
    } = options;
    const callbacks = {
        onSuccess,
        onError,
        sections,
    };

    if (!sections || !sections.length) {
        throw Error('Please add sections before personalize');
    }

    if (options && options.vars) {
        config.userVars = {
            vars: options.vars,
        };
    }

    sections.forEach((section) => {
        config.requestedSections[section.id] = { ...section
        };
    });
    return buildPersonalizeUrl(true).then(url => SPMUtility.fetchPersonalize(url, window.location, callbacks));
}

const defaultFn = (options) => {
    config = options;
    overlay = overlayInit(config);
    SPMUtility = utility(config);
    urlUtility = urlUtil();

    return {
        personalize,
        buildPersonalizeUrl,
        overlay,
    };
};

export default defaultFn;



// WEBPACK FOOTER //
// ./v1/src/js/modules/personalize.js