import { isVowel } from 'shared/util/string'
import { memoize } from 'lodash'

const LABELS = {
    '.gif': 'GIF',
    '.jpg': 'image',
    '.jpeg': 'image',
    '.png': 'image',
    '.mp4': 'video',
    '.mov': 'video',
}

export const MEDIA_TYPES = {
    VIDEO: 'video',
    IMAGE: 'image',
    GIF: 'gif',
}

export const fileSizeToMB = (size = 0) => size / (1024 * 1024)

export const getMediaType = file => {
    if (isFileGif(file)) {
        return MEDIA_TYPES.GIF
    }

    if (isVideo(file.type) || isVideo(file.file.type)) {
        return MEDIA_TYPES.VIDEO
    }

    return MEDIA_TYPES.IMAGE
}

export const isFileGif = ({ type, name, file }) => {
    if (type === 'url') {
        return file.indexOf('.gif') !== -1
    }
    if (file.type === 'image/gif') {
        return true
    }
    if (name && name.indexOf('.gif') !== -1) {
        return true
    }
}

export const isVideo = (type = '') => type.indexOf('video/') > -1
export const isImage = (type = '') => type.indexOf('image/') > -1

export const mimeTypeToFileType = mimeType => {
    if (isVideo(mimeType)) {
        return MEDIA_TYPES.VIDEO
    } else if (isImage(mimeType)) {
        return MEDIA_TYPES.IMAGE
    }
}

export const getTypes = fileTypes => {
    const types = []
    for (const ext in LABELS) {
        const label = LABELS[ext]
        if (fileTypes.indexOf(ext) > -1 && types.indexOf(label) < 0) {
            types.push(label)
        }
    }
    if (types.indexOf('GIF') > -1 && types.indexOf('image') > -1) {
        types.splice(types.indexOf('GIF'), 1)
    }
    return types
}

export const getMimeTypes = fileTypes => {
    const types = getTypes(fileTypes)
    const mimeTypes = []
    for (let i = 0; i < types.length; i++) {
        const type = types[i]
        switch (type.toLowerCase()) {
            case 'image':
                mimeTypes.push('image/*')
                break
            case 'gif':
                mimeTypes.push('image/gif')
                break
            case 'video':
                mimeTypes.push('video/*')
                break
        }
    }
    return mimeTypes
}

export const getCameraLabel = fileTypes => {
    let label = 'Take a '
    const types = getTypes(fileTypes)
    const hasVideo = types.indexOf('video') > -1
    const hasImage = types.indexOf('image') > -1
    if (hasVideo && hasImage) {
        label += 'photo or video'
    } else if (hasVideo) {
        label += 'video'
    } else {
        label += 'photo'
    }
    return label
}

export const getInputLabel = fileTypes => {
    const types = getTypes(fileTypes)
    if (!types) return ''

    const firstLetter = types[0].charAt(0)
    let label = 'Paste a'
    if (isVowel(firstLetter)) {
        label += 'n'
    }
    if (types.length > 1) {
        for (let i = 0; i < types.length; i++) {
            if (i > 0) {
                label += i === types.length - 1 ? ' or' : ','
            }
            label += ` ${types[i]}`
        }
    } else {
        label += ` ${types[0]}`
    }
    return label + ' URL'
}

export const isYoutubeUrl = url => {
    const match = url.match(
        /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,
    )
    return match && match.length > 1
}

export const isVimeoUrl = url => {
    return /^(http\:\/\/|https\:\/\/)?(www\.)?(vimeo\.com\/)([0-9]+)$/.test(url)
}

export const supportsWebGL = memoize(() => {
    const canvas = document.createElement('canvas')
    return ['webgl', 'experimental-webgl'].some(name => {
        try {
            const ctx = canvas.getContext(name)
            return !!ctx
        } catch (error) {}
    })
})
