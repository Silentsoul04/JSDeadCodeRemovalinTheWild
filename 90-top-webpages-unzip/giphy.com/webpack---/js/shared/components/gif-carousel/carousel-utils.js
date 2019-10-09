import { fitGifToSize } from 'shared/util/sizing'

const MIN_PEEKINESS = 20
const MIN_OPACITY = 0.5
const MIN_SCALE = 0.9

// get the position and dimesions of a GIF
// centered within the bounding rect.
const getStyle = (gif, maxWidth, maxHeight) => {
    const { width, height } = fitGifToSize(gif, maxWidth - MIN_PEEKINESS * 2, maxHeight)
    return {
        width,
        height,
        marginLeft: -width / 2,
        marginTop: -height / 2,
    }
}

// get the styles to apply to the container div.
// this is used for the height transitioning, as well
// as shifting side to side when swiping.
export const getContainerStyle = ({ current, next, previous }, carouselWidth, progress) => {
    const isPrevious = progress > 0
    const peek = isPrevious && previous ? (carouselWidth - previous.width) / 2 : 0
    let height = current.height

    if (next.height && progress < 0) {
        height = current.height + (next.height - current.height) * Math.abs(progress)
    }
    if (previous.height && progress > 0) {
        height = current.height + (previous.height - current.height) * progress
    }
    return {
        height,
        width: carouselWidth,
        transform: isPrevious ? `translateX(${peek * progress}px)` : null, // used to shift carousel to the right when swiping back
    }
}

// calculate the styles to add to each section.
// this will scale the individual GIFs and
// slowly fade them in/out as they move.
export const getSwipeStyles = ({ current: { width }, next, previous }, carouselWidth, progress) => {
    const isPrevious = progress > 0
    const peek = (carouselWidth - width) / 2
    const nextPeek = (carouselWidth - (isPrevious ? previous.width || 0 : next.width || 0)) / 2

    let growWidth = peek
    let shrinkWidth = peek
    let currentWidth = width

    progress = Math.abs(progress)

    const shrink = 1 - progress

    // calculate scaled styles
    if (progress > 0) {
        currentWidth = nextPeek + (width - nextPeek) * shrink
        shrinkWidth = peek * shrink

        // set grow width to whatever is left
        growWidth = carouselWidth - currentWidth - shrinkWidth - nextPeek * progress
    }

    const previousWidth = isPrevious ? growWidth : shrinkWidth
    const nextWidth = isPrevious ? shrinkWidth : growWidth
    const grow = 1 - MIN_SCALE

    return {
        previous: {
            opacity: Math.max(MIN_OPACITY, previousWidth / previous.width),
            transform: `scale(${MIN_SCALE + grow * (previousWidth / previous.width)})`,
            width: previousWidth,
        },
        current: {
            opacity: Math.max(MIN_OPACITY, currentWidth / width),
            transform: `scale(${MIN_SCALE + grow * (currentWidth / width)})`,
            width: currentWidth,
        },
        next: {
            opacity: Math.max(MIN_OPACITY, nextWidth / next.width),
            transform: `scale(${MIN_SCALE + grow * (nextWidth / next.width)})`,
            width: nextWidth,
        },
    }
}

export const getGifStyles = ({ currentGif, nextGif, previousGif, width, height }) => ({
    current: getStyle(currentGif, width, height),
    next: nextGif ? getStyle(nextGif, width, height) : { width: width / 2 },
    previous: previousGif ? getStyle(previousGif, width, height) : { width: width / 2 },
})
