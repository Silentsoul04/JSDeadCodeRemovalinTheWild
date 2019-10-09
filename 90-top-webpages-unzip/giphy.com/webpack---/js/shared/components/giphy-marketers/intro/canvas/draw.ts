const SCALE: number = 0.5
const CANVAS_WIDTH: number = 2400 * SCALE
const CANVAS_HEIGHT: number = 1200 * SCALE

const buffer = document.createElement('canvas')
const bufferContext = buffer.getContext('2d')

export const video = document.createElement('video')
video.autoplay = false
video.loop = true
video.muted = true

export const loadVideo = () =>
    new Promise((resolve, reject) => {
        video.oncanplay = () => {
            resolve()
        }
        video.onerror = reject
        video.src = '/static/img/giphy-marketers/intro/intro.mp4'
    })

export const drawCanvas = canvas => {
    if (!canvas || !bufferContext) return

    const context = canvas.getContext('2d')

    canvas.width = CANVAS_WIDTH
    canvas.height = CANVAS_HEIGHT
    buffer.width = CANVAS_WIDTH
    buffer.height = CANVAS_WIDTH

    if (video.paused) {
        video.play()
    }

    bufferContext.drawImage(video, 0, 0, CANVAS_WIDTH, CANVAS_WIDTH)

    // draw alpha video buffer pixels into canvas
    const image = bufferContext.getImageData(0, CANVAS_HEIGHT, buffer.width, CANVAS_HEIGHT)
    const alphaData = bufferContext.getImageData(0, 0, buffer.width, CANVAS_HEIGHT).data
    for (let i = 3, len = image.data.length; i < len; i += 4) {
        image.data[i] = alphaData[i - 1]
    }
    context.putImageData(image, 0, 0, 0, 0, canvas.width, canvas.height)
}
