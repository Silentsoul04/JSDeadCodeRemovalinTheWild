import withPropsOnChange from 'recompose/withPropsOnChange'
import { maxBy, map, filter, compact, isEmpty } from 'lodash'
import log from '../../util/log'
import getGifSkeleton from '../gif-skeleton'

export const getLargestImage = (images, types, webpTypes = [], propToCompare = 'width') => {
    const getImage = type => images[type]
    // choose gifs.images
    const gifsToCheck = compact(map(types, getImage))
    // choose gif.images if they have webp
    const webpGifsToCheck = map(
        filter(webpTypes, type => {
            if (!images[type]) {
                log.warn(`Missing webp rendition for ${type}. Images:`, images)
                return false
            }
            return images[type].webp
        }),
        getImage,
    )
    // choose max value
    const result = maxBy([...webpGifsToCheck, ...gifsToCheck], image => {
        return parseInt(image[propToCompare])
    })
    return result || getGifSkeleton()
}

export const setProps = (gifProp, stillProp, webpProp, isWebPOkay) => ({ ...gif }) => {
    const images = { ...gif.images }

    if (isEmpty(images)) {
        log.error(`No images for ${gif.id}`, gif)
    }
    // we have to check if webp exists here on the gif.images object
    // otherwise the rendition choice could have been on a higher tier
    const animatedProp = isWebPOkay && images[webpProp] ? webpProp : gifProp
    images.animated = images[animatedProp]
    images.still = images[stillProp]
    if (!images.still) {
        log.error(`Gif ${gif.id} has no ${stillProp} prop`, gif)
    }
    if (!images.animated) {
        log.error(`Gif ${gif.id} has no ${animatedProp} prop`, gif)
    }
    return { ...gif, images }
}

export const setByLargest = ({ gif: gifProp, still, webp, maxBy }) => {
    return withPropsOnChange(['gifs', 'isWebPOkay'], ({ gifs, isWebPOkay }) => ({
        // set the animated and still properties on gif.images
        gifs: gifs.map(gif => ({
            ...gif,
            images: {
                ...gif.images,
                still: getLargestImage(gif.images, still, [], maxBy),
                animated: getLargestImage(gif.images, gifProp, isWebPOkay ? webp : [], maxBy),
            },
        })),
    }))
}

export default ({ gif, still, webp }) => {
    return withPropsOnChange(['gifs', 'isWebPOkay'], ({ gifs, isWebPOkay }) => ({
        // set the animated and still properties on gif.images
        gifs: gifs.map(setProps(gif, still, webp, isWebPOkay)),
    }))
}
