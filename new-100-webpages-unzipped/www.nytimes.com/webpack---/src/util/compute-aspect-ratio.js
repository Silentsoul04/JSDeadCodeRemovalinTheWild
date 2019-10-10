/**
 * Compute the bottom-padding percentage for an aspect ratio string "w:h" i.e. "16:9"
 * bottom_percentage = height / width * 100;
 * typical ratios: 16:9, 4:3, 3:2, 1:1
 *
 * @method computeAspectRatio
 * @param {String} ratio a colon delimited string of the aspect ratio
 * @return {Number} Returns Numeric float of the aspect ratio
 */
const computeAspectRatio = ratio => {
    let ratioPercentage = 56.25; // default for 16:9
    if (ratio === 'none') return 0;
    if (typeof ratio !== 'string') return ratioPercentage;
    const ratioParts = ratio.split(':');
    if (ratioParts.length === 2) {
        ratioPercentage = Math.round(ratioParts[1] / ratioParts[0] * 10000) / 100;
    }
    return ratioPercentage;
};

export default computeAspectRatio;



// WEBPACK FOOTER //
// ./src/util/compute-aspect-ratio.js