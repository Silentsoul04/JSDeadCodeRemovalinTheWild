import getData from 'shared/util/gif-extract'
import createGif from 'shared/util/gif-create'
import {
    parseUrl
} from 'shared/util/gif-parse'
import {
    fitGifToSize
} from 'shared/util/sizing'
import {
    removeProtocol
} from 'shared/util/url'
import {
    giphyWhite
} from 'shared/css/colors.css'
import {
    wrappedText
} from 'shared/util/canvas-text'

const MAX_FRAMES = 20
const INSTA_WIDTH = 1080
const INSTA_HEIGHT = 1920
const PADDING = 80
const TITLE_SIZE = 90
const DESCRIPTION_SIZE = 45
const AVATAR_SIZE = 140
let CANVAS = null
let CONTEXT = null
let TEXT_OFFSET = 0

const drawGradient = ({
    color,
    secondary_color
}) => {
    const gradientFill = CONTEXT.createLinearGradient(0, INSTA_HEIGHT, INSTA_WIDTH, 0)
    gradientFill.addColorStop(0, color)
    gradientFill.addColorStop(1, secondary_color || color)
    CONTEXT.fillStyle = gradientFill
    CONTEXT.fillRect(0, 0, CANVAS.width, CANVAS.height)
}

const drawGif = ({
    cover_gif: {
        gif
    }
}, frame) => {
    const size = fitGifToSize(gif, INSTA_WIDTH, INSTA_HEIGHT, 'cover')
    CONTEXT.globalAlpha = 0.2
    CONTEXT.drawImage(frame, size.left, size.top, size.width, size.height)
}

const drawTitle = ({
    title
}) => {
    if (!title) return

    CONTEXT.globalAlpha = 1
    CONTEXT.fillStyle = giphyWhite
    CONTEXT.font = `${TITLE_SIZE}px nexablack`

    const titleText = wrappedText(CANVAS, title, {
        height: INSTA_HEIGHT,
        width: INSTA_WIDTH - PADDING,
        fontSize: TITLE_SIZE,
        charWidth: TITLE_SIZE * 0.65,
        doNotFit: true,
    })

    titleText.lines.forEach(line => {
        CONTEXT.fillText(line, PADDING, TEXT_OFFSET)
        TEXT_OFFSET += titleText.charHeight
    })
}

const drawDescription = ({
    description
}) => {
    if (!description) return

    CONTEXT.globalAlpha = 1
    CONTEXT.fillStyle = 'rgba(255, 255, 255, 0.8)'
    CONTEXT.font = `bold ${DESCRIPTION_SIZE}px interface`

    const descriptionText = wrappedText(CANVAS, description, {
        height: INSTA_HEIGHT,
        width: INSTA_WIDTH - PADDING,
        fontSize: DESCRIPTION_SIZE,
        charWidth: DESCRIPTION_SIZE * 0.5,
        doNotFit: true,
    })

    descriptionText.lines.forEach(line => {
        CONTEXT.fillText(line, PADDING, TEXT_OFFSET)
        TEXT_OFFSET += DESCRIPTION_SIZE * 1.4
    })

    TEXT_OFFSET += 40
}

const drawAttribution = ({
    user
}, avatar) => {
    if (!user) return

    const {
        username,
        display_name
    } = user
    const width = avatar.naturalWidth || avatar.width
    const height = avatar.naturalHeight || avatar.height
    const size = Math.min(width, height)
    const left = (width - size) / 2
    const top = (height - size) / 2

    // avatar
    CONTEXT.drawImage(avatar, left, top, size, size, PADDING, TEXT_OFFSET, AVATAR_SIZE, AVATAR_SIZE)

    // display name
    CONTEXT.fillStyle = '#fff'
    CONTEXT.textBaseline = 'top'
    CONTEXT.font = `bold ${DESCRIPTION_SIZE * 1.2}px interface`
    CONTEXT.fillText(display_name || username, PADDING + AVATAR_SIZE + 40, TEXT_OFFSET + 5)
    TEXT_OFFSET += 75

    // username
    CONTEXT.font = `bold ${DESCRIPTION_SIZE}px interface`
    CONTEXT.fillStyle = 'rgba(255, 255, 255, 0.8)'
    CONTEXT.fillText(`@${username}`, PADDING + AVATAR_SIZE + 40, TEXT_OFFSET)
    TEXT_OFFSET += DESCRIPTION_SIZE
}

const parseAvatar = url =>
    new Promise(resolve => {
        const isGif = url.indexOf('.gif') > -1
        if (isGif) {
            parseUrl(url, MAX_FRAMES).then(resolve)
        } else {
            const avatar = document.createElement('img')
            avatar.crossOrigin = 'Anonymous'
            avatar.onload = () => {
                resolve([avatar])
            }
            avatar.src = `https://p.giphy.com/fetch?gif=${removeProtocol(url, true)}`
        }
    })

export default function(story) {
    return new Promise(async (resolve, reject) => {
        const {
            cover_gif: {
                gif
            },
            user: {
                avatar_url
            },
        } = story
        const {
            url
        } = getData(gif)

        CANVAS = document.createElement('canvas')
        CONTEXT = CANVAS.getContext('2d')

        const avatarFrames = await parseAvatar(avatar_url)
        parseUrl(url, MAX_FRAMES)
            .then(frames => {
                const coverFrames = []
                frames.forEach((frame, i) => {
                    TEXT_OFFSET = INSTA_HEIGHT * 0.25
                    CANVAS.width = INSTA_WIDTH
                    CANVAS.height = INSTA_HEIGHT

                    drawGradient(story)
                    drawGif(story, frame)
                    drawTitle(story)
                    drawDescription(story)
                    drawAttribution(story, avatarFrames[i % avatarFrames.length])

                    coverFrames.push({
                        data: CONTEXT.getImageData(0, 0, INSTA_WIDTH, INSTA_HEIGHT),
                        delay: 100,
                    })
                })

                createGif(coverFrames, INSTA_WIDTH, INSTA_HEIGHT)
                    .then(resolve)
                    .catch(reject)
            })
            .catch(reject)
    })
}