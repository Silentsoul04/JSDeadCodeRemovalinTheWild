import Logger from 'src/util/logger';

const logger = new Logger('vhs:util:session-storage');

class PrefixSessionStorage {
    constructor(prefix = 'nytvhs') {
        this.prefix = prefix;
    }

    getItem(key) {
        try {
            const valueSerialized = sessionStorage.getItem(`${this.prefix}.${key}`);
            return JSON.parse(valueSerialized);
        } catch (error) {
            logger.error(error);
        }

        return null;
    }

    setItem(key, value) {
        try {
            sessionStorage.setItem(`${this.prefix}.${key}`, JSON.stringify(value));
        } catch (error) {
            logger.error(error);
        }
    }

    removeItem(key) {
        try {
            sessionStorage.removeItem(`${this.prefix}.${key}`);
        } catch (error) {
            logger.error(error);
        }
    }

    clear() {
        try {
            Object.keys(sessionStorage)
                .filter(key => key.indexOf(this.prefix) === 0)
                .forEach(key => sessionStorage.removeItem(key));
        } catch (error) {
            logger.error(error);
        }
    }
}

export default PrefixSessionStorage;



// WEBPACK FOOTER //
// ./src/util/prefixed-session-storage.js