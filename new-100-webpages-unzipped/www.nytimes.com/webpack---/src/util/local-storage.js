import Logger from 'src/util/logger';

const logger = new Logger('vhs:util:local-storage');
const storageKey = 'nytvhs';
const errorReasons = {
    default: 'there was an error',
    quotaExceeded: 'storage is full',
    notSupported: 'localStorage is not supported in this browser'
};

function isQuotaExceeded(e) {
    let quotaExceeded;
    if (e) {
        if (e.code) {
            switch (e.code) {
                case 22:
                    quotaExceeded = true;
                    break;
                case 1014:
                    // Firefox
                    if (e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                        quotaExceeded = true;
                    }
                    break;
                default:
                    quotaExceeded = false;
            }
        } else if (e.number === -2147024882) {
            // Internet Explorer 8
            quotaExceeded = true;
        }
    }
    return quotaExceeded;
}

function deserializeStorage() {
    let message;
    const couldNotGetItemBecause = `Could not get item "${storageKey}" because`;
    try {
        if (
            'localStorage' in window &&
            typeof window.localStorage.getItem === 'function'
        ) {
            return JSON.parse(window.localStorage.getItem(storageKey)) || {};
        }
        message = `${couldNotGetItemBecause} ${errorReasons.notSupported}.`;
    } catch (e) {
        message = `${couldNotGetItemBecause} ${errorReasons.default}: ${e}.`;
    }
    if (message) {
        logger.warn(message);
    }
    return null;
}

function serializeStorage(deserialized) {
    let message;
    const couldNotSaveItemBecause = `Could not save item "${storageKey}" because`;
    try {
        if (
            'localStorage' in window &&
            typeof window.localStorage.setItem === 'function'
        ) {
            window.localStorage.setItem(storageKey, JSON.stringify(deserialized));
        } else {
            message = `${couldNotSaveItemBecause} ${errorReasons.notSupported}.`;
        }
    } catch (e) {
        if (isQuotaExceeded(e)) {
            message = `${couldNotSaveItemBecause} ${errorReasons.quotaExceeded}.`;
        } else {
            message = `${couldNotSaveItemBecause} ${errorReasons.default}: ${e}.`;
        }
    }
    if (message) {
        logger.warn(message);
    }
}

export default {
    storageKey,
    errorReasons,
    setItem(key, value) {
        const deserialized = deserializeStorage();
        if (deserialized && typeof deserialized === 'object') {
            deserialized[key] = value;
            serializeStorage(deserialized);
        }
    },

    getItem(key, fallback) {
        const deserialized = deserializeStorage();
        if (deserialized && typeof deserialized === 'object') {
            return deserialized[key];
        }
        return fallback;
    }
};



// WEBPACK FOOTER //
// ./src/util/local-storage.js