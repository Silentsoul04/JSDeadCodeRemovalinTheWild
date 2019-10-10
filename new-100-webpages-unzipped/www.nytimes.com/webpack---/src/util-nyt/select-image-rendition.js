/**
 * Generates the available poster images
 * with default placeholder backups

 * @method getAvailableImages
 * @param {Array} [renditions] [An array of img rendition objects]
 * @param {String} [playerRatio] [The aspect ratio of the player 'w:h', '16:9']
 * @return {Array} Returns array of image objects, including url, width, height and name
 */
const getAvailableImages = (renditions, playerRatio, staticBaseUrl) => {
    function withDomain(url) {
        return url.match(/^http/) ? url : `${staticBaseUrl}${url}`;
    }
    const images = renditions || [];
    let availableImages = [];
    const undesireableImages = []; // 2nd tier images that don't match the aspect ratio
    let defaultImage;
    const placeholderImages = [{
            url: `${staticBaseUrl}/video/static-timesvideo/img/video-default-16by9-96x54.png`,
            width: 96,
            height: 54,
            name: 'videoSixteenByNine96'
        },
        {
            url: `${staticBaseUrl}/video/static-timesvideo/img/video-default-16by9-225x126.png`,
            width: 225,
            height: 126,
            name: 'videoSixteenByNine225'
        },
        {
            url: `${staticBaseUrl}/video/static-timesvideo/img/video-default-16by9-310x174.png`,
            width: 310,
            height: 174,
            name: 'videoSixteenByNine310'
        },
        {
            url: `${staticBaseUrl}/video/static-timesvideo/img/video-default-16by9-500x281.png`,
            width: 500,
            height: 281,
            name: 'videoSixteenByNine500'
        },
        {
            url: `${staticBaseUrl}/video/static-timesvideo/img/video-default-16by9-1050x591.png`,
            width: 1050,
            height: 591,
            name: 'videoSixteenByNine1050'
        },
        {
            url: `${staticBaseUrl}/video/static-timesvideo/img/video-default-16by9-1920x1080.png`,
            width: 1920,
            height: 1080,
            name: 'videoSixteenByNine1920'
        }
    ];

    images.forEach(image => {
        const imageRatio = Math.floor(image.width / image.height * 100);
        let intPlayerRatio = Math.floor(16 / 9 * 100);

        if (
            playerRatio &&
            playerRatio !== 'none' &&
            playerRatio.indexOf(':') !== -1
        ) {
            const playerDimensions = playerRatio.split(':');
            if (
                parseInt(playerDimensions[0], 10) &&
                parseInt(playerDimensions[1], 10)
            ) {
                intPlayerRatio = Math.floor(
                    playerDimensions[0] / playerDimensions[1] * 100
                );
            }
        }
        if (
            intPlayerRatio === imageRatio ||
            Math.abs(intPlayerRatio - imageRatio) < 9
        ) {
            availableImages.push({
                url: withDomain(image.url),
                width: image.width,
                height: image.height,
                type: image.type || image.name
            });
        } else {
            undesireableImages.push({
                url: withDomain(image.url),
                width: image.width,
                height: image.height,
                type: image.type || image.name
            });
        }

        if (image.type === 'videoSmall' || image.name === 'videoSmall') {
            defaultImage = {
                url: withDomain(image.url),
                width: 500,
                height: 281,
                type: image.type || image.name
            };
        }
    }, this);

    if (availableImages.length === 0) {
        if (undesireableImages.length > 0) {
            availableImages = undesireableImages;
        } else if (defaultImage) {
            availableImages = [defaultImage];
        } else {
            availableImages = placeholderImages;
        }
    }

    return availableImages;
};

/**
 * Select the appropriate rendition for container size
 *
 * @method selectImageRendition
 * @param {Array} [renditions] An array of img rendition objects
 * @param {String} [ratio] The aspect ratio of the video 'w:h', '16:9'
 * @param {Number} [containerWidth] [The dom element container width]
 * @return {String} Returns String of selected rendition
 */
const selectImageRendition = (
    renditions,
    ratio,
    containerWidth,
    staticBaseUrl
) => {
    const availableImages = getAvailableImages(renditions, ratio, staticBaseUrl);
    const sizeTolerance = 0.1;
    let i;
    let bestMatch;
    let closestBelow;
    let closestAbove;

    const availableImagesLength = availableImages.length;

    if (availableImagesLength === 0) {
        return '';
    }

    if (availableImagesLength === 1) {
        return availableImages[0].url;
    }

    // find the closest match
    for (i = 0; i < availableImagesLength; i += 1) {
        // exact match
        if (availableImages[i].width === containerWidth) {
            bestMatch = availableImages[i];
            break;
        }

        // save the closest matching image below the player size
        if (
            availableImages[i].width <= containerWidth &&
            (closestBelow === undefined ||
                closestBelow.width < availableImages[i].width)
        ) {
            closestBelow = availableImages[i];
            closestBelow.widthDiff = Math.abs(closestBelow.width - containerWidth);
        }

        // save the closest matching image above the player size
        if (
            availableImages[i].width >= containerWidth &&
            (closestAbove === undefined ||
                closestAbove.width > availableImages[i].width)
        ) {
            closestAbove = availableImages[i];
            closestAbove.widthDiff = Math.abs(closestAbove.width - containerWidth);
        }
    }

    // determine if the smaller image is actually a better fit
    if (!bestMatch && closestBelow && closestAbove) {
        if (closestBelow.widthDiff < closestAbove.widthDiff) {
            if (closestBelow.widthDiff < containerWidth * sizeTolerance) {
                bestMatch = closestBelow;
            }
        }
    }

    // set a default value if bestMatch not set yet
    bestMatch = bestMatch || closestAbove || closestBelow;

    return bestMatch.url;
};

export default selectImageRendition;



// WEBPACK FOOTER //
// ./src/util-nyt/select-image-rendition.js