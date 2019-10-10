/* eslint-disable no-restricted-globals */

/**
 * Takes a duration in seconds and formats it as a string
 * HH:MM:SS
 */
const formatDuration = duration => {
    const secNum = parseInt(duration, 10);

    if (isNaN(secNum)) return '0:00';

    const hours = Math.floor(secNum / 3600);
    const minutes = Math.floor((secNum - hours * 3600) / 60);
    const seconds = secNum - hours * 3600 - minutes * 60;
    let time = '';

    if (hours) {
        time = `${hours}:`;
        time += `${`0${minutes}`.slice(-2)}:`;
    } else if (minutes) {
        time += `${minutes}:`;
    } else {
        time = '0:';
    }

    time += `0${seconds}`.slice(-2);

    return time;
};

export default formatDuration;



// WEBPACK FOOTER //
// ./src/util/format-duration.js