import findOrientation from 'exif-orientation'
import {
    getVideoEmbedInfo
} from 'shared/api'
import imageUtils from './image-utils'

const MAX_IMAGE_WIDTH = 800

const videoUrlPreview = (url, resolve) => {
    const video = document.createElement('video')
    video.onloadedmetadata = () => {
        const width = video.videoWidth
        const height = video.videoHeight
        resolve({
            preview: url,
            width,
            height,
            duration: video.duration
        })
    }
    video.src = url
}

const imageUrlPreview = (url, resolve = () => {}) => {
    imageUtils.preloadImage(url).then(function(img) {
        const width = img.naturalWidth
        const height = img.naturalHeight
        resolve({
            preview: img.src,
            width,
            height
        })
    })
}

const filePreview = (file, resolve = () => {}) => {
    const preview = URL.createObjectURL(file)
    if (file.type === 'image/jpeg') {
        findOrientation(file, (error, exif = {}) => {
            const {
                scale,
                rotate
            } = exif
            const canvas = document.createElement('canvas')
            const context = canvas.getContext('2d')
            const isRotated = rotate && Math.abs(rotate) === 90

            // auto rotate/scale the preview based on exif data
            imageUtils.preloadImage(preview).then(img => {
                const scaleCanvas = document.createElement('canvas')
                const scaleContext = scaleCanvas.getContext('2d')
                const scaleSteps = Math.max(Math.floor(img.naturalWidth / MAX_IMAGE_WIDTH), 1)
                const imgWidth = img.naturalWidth
                const imgHeight = img.naturalHeight
                scaleCanvas.width = isRotated ? imgHeight : imgWidth
                scaleCanvas.height = isRotated ? imgWidth : imgHeight
                canvas.width = scaleCanvas.width / scaleSteps
                canvas.height = scaleCanvas.height / scaleSteps
                scaleContext.save()
                scaleContext.translate(scaleCanvas.width / 2, scaleCanvas.height / 2)
                scaleContext.scale(scale.x, scale.y)
                scaleContext.rotate(rotate * (Math.PI / 180))
                scaleContext.drawImage(img, -imgWidth / 2, -imgHeight / 2, imgWidth, imgHeight)
                scaleContext.restore()
                for (let i = 1; i < scaleSteps; i++) {
                    const w = scaleCanvas.width / i
                    const h = scaleCanvas.height / i
                    const lastScale = i + 1
                    scaleContext.drawImage(
                        scaleCanvas,
                        0,
                        0,
                        w,
                        h,
                        0,
                        0,
                        scaleCanvas.width / lastScale,
                        scaleCanvas.height / lastScale,
                    )
                }
                context.drawImage(scaleCanvas, 0, 0)
                resolve({
                    preview: canvas.toDataURL('image/jpeg', 1),
                    width: canvas.width,
                    height: canvas.height,
                })
            })
        })
        // get video dimensions
    } else if (file.type.indexOf('video') > -1) {
        videoUrlPreview(preview, resolve)
    } else {
        imageUtils.preloadImage(preview).then(function(img) {
            const width = img.naturalWidth
            const height = img.naturalHeight
            resolve({
                preview: img.src,
                width,
                height
            })
        })
    }
}

// Video Embeds (youtube, vimeo, etc.)
const videoEmbedPreview = async (url, resolve, reject) => {
    const {
        height,
        width,
        duration,
        privacy
    } = await getVideoEmbedInfo(url)
    // Vimeo privacy
    if (privacy && !privacy.download) {
        reject('Uh oh! The owner of this video doesn’t allow us to make GIFs :(')
    } else if (duration > 900) {
        reject('Uh oh! Videos must be 15 minutes or less.')
    } else if (duration <= 0) {
        reject('Uh oh! This video may be a live stream. These are not supported.')
    } else {
        resolve({
            preview: url,
            width,
            height,
            duration,
        })
    }
}

export default {
    generatePreview: function(fileObject) {
        let file = fileObject.file
        let type = ''

        if (fileObject.type === 'url') {
            type = 'url-' + fileObject.fileType
        } else if (fileObject.type === 'file') {
            type = 'file-' + fileObject.fileType
        }

        return new Promise((resolve, reject) => {
            switch (type) {
                case 'url-youtube':
                case 'url-vimeo':
                    videoEmbedPreview(file, resolve, reject)
                    break
                case 'url-image':
                    imageUrlPreview(file, resolve)
                    break
                case 'url-video':
                    videoUrlPreview(file, resolve)
                    break
                default:
                    filePreview(file, resolve)
            }
        })
    },
}