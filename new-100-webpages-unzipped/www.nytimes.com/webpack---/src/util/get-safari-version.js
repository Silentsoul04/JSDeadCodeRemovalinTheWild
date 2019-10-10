/* eslint-disable no-restricted-globals */

import Logger from 'src/util/logger';
import getUserAgent from './get-user-agent';
import isSafari from './is-safari';

const logger = new Logger('vhs:util:get-safari-version');

const getSafariVersion = (userAgent = getUserAgent()) => {
    let majorVersion;
    let match;

    try {
        // eslint-disable-next-line no-useless-escape
        match = /(?:iPhone|iPad|iPod|Macintosh).* Version\/(\d+)/i.exec(userAgent);
        if (match && isSafari(userAgent)) {
            majorVersion = Number(match[1].split('.')[0]);
        }

        // If no version on UA string, guesses by OS version.
        // Needed for NYT iOS app.
        if (!majorVersion) {
            match = /CPU (?:iPhone|iPad|iPod) OS (\d+)_\d+/i.exec(userAgent);
            majorVersion = Number(match[1]);
        }

        if (isNaN(majorVersion)) {
            throw new Error('No version on User Agent string');
        }

        return majorVersion;
    } catch (error) {
        logger.error('Not a valid Safari User Agent string', userAgent, error);

        return undefined;
    }
};

export default getSafariVersion;



// WEBPACK FOOTER //
// ./src/util/get-safari-version.js