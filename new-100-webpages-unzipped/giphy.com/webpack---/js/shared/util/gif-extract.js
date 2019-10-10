import withPropsOnChange from 'recompose/withPropsOnChange'
import {
    endsWith,
    isString
} from 'lodash'

const getGifObject = (gif, rendition) => {
    if (gif && gif.images && gif.images[rendition]) {
        return gif.images[rendition]
    }
    return {}
}

/**
 * GIF Extract - Data: Utility function which will return
 * a GIF rendition data object.
 *
 * @param {Object} gif GIF data object.
 * @param {String} [rendition=original] GIF rendition to return.
 * @return {Object} GIF rendition data object.
 * @example
 *     getData({}, 'fixed_height') // returns fixed_height rendition
 */
export default function getData(gif, rendition = 'original') {
    return getGifObject(gif, rendition)
}

/**
 * GIF Extract - Url: Utility function which will return
 * a GIF rendition url.
 *
 * @param {Object} gif GIF data object.
 * @param {String} [rendition=original] GIF rendition to return.
 * @return {Object} GIF rendition image url.
 * @example
 *     getUrl({}, 'fixed_height') // returns fixed_height gif url
 */
export function getUrl(gif, rendition = 'original') {
    const gifObject = getGifObject(gif, rendition)
    return gifObject.url || ''
}

/**
 * GIF Extract - MP4: Utility function which will return
 * a GIF rendition mp4 url.
 *
 * @param {Object} gif GIF data object.
 * @param {String} [rendition=original] GIF rendition to return.
 * @return {Object} GIF rendition mp4 url.
 * @example
 *     getMp4({}, 'fixed_height') // returns fixed_height gif url
 */
export function getMp4(gif, rendition = 'original') {
    const gifObject = getGifObject(gif, rendition)
    return gifObject.mp4 || ''
}

export function getWebp(gif, rendition = 'original') {
    const gifObject = getGifObject(gif, rendition)
    return gifObject.webp || ''
}

export const imageProps = (still, animated) => {
    return withPropsOnChange(['gif'], ({
        gif
    }) => ({
        // set the animated and still properties on gif.images
        still: getData(gif, still),
        animated: getData(gif, animated),
    }))
}

export const findHighestVideo = ({
    hd,
    original
}) => {
    if (hd && hd.url && endsWith(hd.url, '.mp4')) {
        return hd.url
    }

    return original.mp4
}

export const getHighestAnimatedRes = (stillProp = 'original_still') =>
    withPropsOnChange(['gif'], ({
        gif: {
            images = {}
        }
    }) => ({
        stillUrl: images[stillProp].url,
        gifUrl: images.original.url,
        videoUrl: findHighestVideo(images),
    }))

export const getShareUrl = url => (isString(url) ? url.replace(/media\d+\.giphy\.com/, 'media.giphy.com') : '')