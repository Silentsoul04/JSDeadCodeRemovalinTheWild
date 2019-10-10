import {
    filter,
    without,
    isNumber,
    isString
} from 'lodash'
import log from './log'

const STATUS_PENDING = 0,
    STATUS_LOADING = 1,
    STATUS_COMPLETE = 2,
    STATUS_ERROR = 3

const AFTER_LOAD_REQUEST_DELAY = 0 // This was a 100, not sure why

let maxRequests = 25, // the total number of requests allowed
    maxGifRequests = 5, // the totl number of gif requests allowed
    preloadStatus = {}, // a map for img info
    gifLoadingSet = new Set(), // The set of gifs loading
    loadingSet = new Set(), // All images that are loading, including gifs
    preloadQueue = [], // An Array of URLs in the order we want to load
    queueing = false, // We'll only start the loading from preload if queueing is false
    pausedSet = new Set()

export function setMaxRequests(max, maxGifs = maxGifRequests) {
    // TODO, need to think of a better way to configure
    log.warn(`gif-preload set max requests:${max} and maxGifRequests:${maxGifRequests}`)
    maxRequests = max
    maxGifRequests = maxGifs
}

const STILL_SUFFIX = '_s.gif' // Identify stills by this string
const isGif = img => img.toLowerCase().indexOf(STILL_SUFFIX) === -1

// called onImageComplete since invoked when loading complete, error, or canceled
function onImageComplete(img) {
    loadingSet.delete(img)
    gifLoadingSet.delete(img)
    setTimeout(loadNextImage, AFTER_LOAD_REQUEST_DELAY)
}

function isLoadingPriority() {
    let foundIndex = false
    loadingSet.forEach(img => {
        if (preloadStatus[img].index < 0) {
            foundIndex = true
        }
    })
    return foundIndex
}

function updateOrder() {
    // we pass an index to maintain a sort,
    // first grab all the indexed images
    const withOrder = filter(preloadQueue, img => isNumber(preloadStatus[img].index))
    // sort them
    withOrder.sort((a, b) => preloadStatus[a].index - preloadStatus[b].index)
    // recreate the queue with the ordered indexes first
    preloadQueue = withOrder.concat(without(preloadQueue, ...withOrder))
}

export default function preload(img, callback = () => {}, prioritize, index) {
    if (!isString(img)) {
        throw `gif-preload: img must must be String but is ${img}`
    }
    const imgInfo = preloadStatus[img]
    if (imgInfo && imgInfo.status === STATUS_COMPLETE) {
        callback()
    } else if (!imgInfo && preloadQueue.indexOf(img) === -1) {
        // img isn't in the queue
        preloadStatus[img] = {
            status: STATUS_PENDING,
            index,
            callback,
        }
        if (prioritize) {
            preloadQueue.unshift(img)
            updateOrder()
        } else {
            preloadQueue.push(img)
        }
    } else if (imgInfo) {
        // img is in the queue already
        // override the callback
        imgInfo.callback = callback
        if (imgInfo.index !== index) {
            imgInfo.index = index
            updateOrder()
        }
    }

    if (!queueing) {
        queueing = true
        setTimeout(loadNextImage, 5)
    }
}

export function pause(pauseId) {
    if (!pauseId) {
        throw 'gif-preload: An id is required for pause method'
    }
    log.info(`gif-preload: pause for ${pauseId}`)
    pausedSet.add(pauseId)
}
export function resume(pauseId) {
    if (!pauseId) {
        throw 'gif-preload: An id is required for resume method'
    }
    pausedSet.delete(pauseId)
    if (pausedSet.size === 0) {
        log.info(`gif-preload: resumed`)
        loadNextImage()
    }
}

export function cancel(img) {
    const imgInfo = preloadStatus[img]
    if (imgInfo) {
        if (imgInfo.status === STATUS_PENDING) {
            // we haven't requested the image yet, so remove it from the queue
            preloadQueue = without(preloadQueue, img)
            delete preloadStatus[img]
        } else {
            if (imgInfo.status === STATUS_LOADING) {
                // we requested the image, mark it as canceled
                imgInfo.canceled = true
                onImageComplete(img)
            }
            imgInfo.callback = () => {}
        }
    }
}

function canLoad(img) {
    // block loading if there's a negative priority currently loading
    if (isLoadingPriority()) {
        return false
    }
    // if this is a gif,
    if (isGif(img)) {
        // check to see if we're loading a lot of gifs
        if (gifLoadingSet.size >= maxGifRequests) {
            return false
        }
    } else if (loadingSet.size >= maxRequests) {
        // else don't load more than the maxRequests
        return false
    }
    return true
}

function loadNextImage() {
    if (pausedSet.size > 0) {
        log.info(`gif-preload: loadNextImage is paused`)
        return
    }

    const img = preloadQueue.shift()
    if (img === undefined) {
        queueing = false
        // do not preload base64 images
    } else if (img.indexOf('data:') === 0) {
        onImageComplete(img)
    } else if (canLoad(img)) {
        let image = new Image()
        const imgInfo = preloadStatus[img]

        image.onload = function() {
            if (image.width < 1) {
                imgInfo.status = STATUS_ERROR
            } else {
                imgInfo.status = STATUS_COMPLETE
                imgInfo.callback()
                delete imgInfo.callback
            }
            image = null
            if (!imgInfo.canceled) {
                // if we canceled, we already invoked onImageComplete
                onImageComplete(img)
            }
        }

        image.onerror = function() {
            imgInfo.status = STATUS_ERROR
            onImageComplete(img)
        }

        imgInfo.status = STATUS_LOADING
        loadingSet.add(img)
        if (isGif(img)) {
            // put gifs in their own set so we know how many we're loading
            gifLoadingSet.add(img)
        }
        image.src = img
        loadNextImage()
    } else {
        // we couldn't load it right now, put it back
        preloadQueue.unshift(img)
    }
}