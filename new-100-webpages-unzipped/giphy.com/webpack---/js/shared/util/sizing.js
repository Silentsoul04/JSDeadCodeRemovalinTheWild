import getData from './gif-extract'

export const fitToSize = (width, height, fitWidth, fitHeight, scale = 'contain') => {
    const noScale = !scale || scale === 'none'
    const ratio = width / height
    const maxWidth = noScale ? Math.min(width, fitWidth) : fitWidth
    const maxHeight = noScale ? Math.min(height, fitHeight) : fitHeight
    let newWidth = maxWidth
    let newHeight = newWidth / ratio
    if ((scale === 'cover' && newHeight < maxHeight) || (scale !== 'cover' && newHeight > maxHeight)) {
        newHeight = maxHeight
        newWidth = newHeight * ratio
    }
    return {
        width: newWidth,
        height: newHeight,
        left: (fitWidth - newWidth) / 2,
        top: (fitHeight - newHeight) / 2,
    }
}

export const fitGifToSize = (gif, fitWidth, fitHeight, scale) => {
    const {
        width,
        height
    } = getData(gif)
    return fitToSize(width, height, fitWidth, fitHeight, scale)
}

export default {
    fitToSize,
    fitGifToSize,
}