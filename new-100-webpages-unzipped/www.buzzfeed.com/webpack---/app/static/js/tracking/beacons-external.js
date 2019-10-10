import gdpr from '@buzzfeed/buzzblocks/js/services/gdpr';
import {
    loadScript
} from '@buzzfeed/bf-utils/lib/load-script';

async function withConsent(...callbacks) {
    const {
        success,
        data: consentData
    } = await gdpr.getVendorConsents();
    // User consented to:
    // 1 - Information storage and access
    // 5 - Measurement
    if (
        // User is not from EU
        (typeof consentData.purposeConsents[1] === 'undefined' && typeof consentData.purposeConsents[5] === 'undefined') ||
        // User approved tracking
        (success && consentData.purposeConsents[1] && consentData.purposeConsents[5])
    ) {
        callbacks.forEach(cb => cb());
    }
}

async function comscoreBeacon() {
    await loadScript('https://sb.scorecardresearch.com/beacon.js');
    if (window.COMSCORE) {
        window.COMSCORE.beacon({
            c1: 2,
            c2: 6768151,
            c3: 'buzzfeed.com',
            c4: '',
            c5: '',
            c6: '',
            c15: '',
        });
    }
}

async function pinterestBeacon() {
    window.pintrk = window.pintrk || function(...args) {
        window.pintrk.queue.push(args);
    };
    window.pintrk.queue = [];
    window.pintrk.version = '3.0';

    window.pintrk('load', '2615790681679');

    const path = document.location.pathname.slice(1); // remove leading '/'
    window.pintrk('page', {
        page_name: path || 'Home',
        page_category: path
    });
    await loadScript('https://s.pinimg.com/ct/core.js');
}

async function quantcastBeacon() {
    await loadScript('https://secure.quantserve.com/quant.js');
    if (window._qevents) {
        window._qevents.push({
            qacct: 'p-3aud4J6uA4Z6Y',
        });
    }
}

async function sailthruBeacon() {
    await loadScript('https://ak.sail-horizon.com/spm/spm.v1.min.js');
    if (window.Sailthru && window.Sailthru.init) {
        window.Sailthru.init({
            customerId: window.BZFD.Config.env === 'prod' ?
                'ccaf2e718aa7ed087167fca028bca7d1' :
                'baf0cdb4355c5f1f77236b0103c7a258'
        });
    }
}

withConsent(
    comscoreBeacon,
    pinterestBeacon,
    quantcastBeacon,
    sailthruBeacon
);