/**
 * A method to normalize a unit for css
 * - If the value is a string make sure the value has a unit associated
 *   with it (default px if none provided)
 * - If the value is a number we can just use that
 *
 * @method normalizeUnit
 * @param {String|Number} value Value for a css property
 * @return {String|Number} value Returns the number as a number is no
 *                               suffix or as a string with suffix
 */
const normalizeUnit = value => {
    const defaultUnit = 'px';
    if (typeof value === 'string') {
        value =
            value.indexOf('%') === -1 && value.indexOf('px') === -1 ?
            [value, defaultUnit].join('') :
            value;
    }
    return value;
};

export default normalizeUnit;



// WEBPACK FOOTER //
// ./src/util/normalize-unit.js