import { isArray } from 'lodash'
import getData from './gif-extract'

export function averageRatio(gifs) {
    if (!isArray(gifs)) return 0

    let sum = 0

    for (let i = 0; i < gifs.length; i++) {
        const { width, height } = getData(gifs[i], 'original')
        sum += width / height
    }

    return sum / gifs.length
}

export function averageWidth(gifs) {
    if (!isArray(gifs)) return 0

    let sum = 0

    for (let i = 0; i < gifs.length; i++) {
        const { width } = getData(gifs[i], 'original')
        sum += width
    }

    return Math.round(sum / gifs.length)
}

export function averageHeight(gifs) {
    if (!isArray(gifs)) return 0

    let sum = 0

    for (let i = 0; i < gifs.length; i++) {
        const { height } = getData(gifs[i], 'original')
        sum += height
    }

    return Math.round(sum / gifs.length)
}

export default {
    averageRatio,
    averageHeight,
    averageWidth,
}
