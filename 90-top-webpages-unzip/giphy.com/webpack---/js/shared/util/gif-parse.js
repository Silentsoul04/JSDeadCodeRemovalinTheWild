import { GifReader } from 'omggif'

const CHILL_ZONE = {}
const LOAD_ZONE = []
const FPS = 15

const downsample = (array, newLength) =>
    !newLength || array.length <= newLength
        ? array
        : array.filter((data, i, arr) => {
              return i === 0 || i % Math.ceil(arr.length / newLength) === 0
          })

const getFrames = reader => {
    let frames = []
    const count = reader.numFrames()
    for (let i = 0; i < count; i++) {
        const info = reader.frameInfo(i)
        const delay = Math.max(1, info.delay || 10)
        frames.push({ ...info, delay, frameIndex: i })
    }
    return frames
}

const getDownsampledFrames = (frames, frameCanvases, maxFrames) => {
    const canvases = []
    const canvasIdx = []

    frames.forEach(({ delay }, i) => {
        for (let d = 0; d < delay; d++) {
            canvasIdx.push(i)
        }
    })

    const totalFrames = (canvasIdx.length / 100) * FPS
    const downsampledIdx = downsample(canvasIdx, Math.min(totalFrames, maxFrames || totalFrames))
    for (let i = 0; i < downsampledIdx.length; i++) {
        canvases.push(frameCanvases[downsampledIdx[i]])
    }
    return canvases
}

export const parseUrl = (url, maxFrames) =>
    new Promise((resolve, reject) => {
        if (CHILL_ZONE[url]) {
            resolve(CHILL_ZONE[url])
        } else if (LOAD_ZONE.indexOf(url) < 0) {
            LOAD_ZONE.push(url)

            const xhr = new XMLHttpRequest()
            xhr.open('GET', url, true)
            xhr.responseType = 'arraybuffer'
            xhr.onload = () => {
                const buffer = new Uint8Array(xhr.response)
                const reader = new GifReader(buffer)
                const frames = getFrames(reader)
                const frameData = []
                const frameCanvas = document.createElement('canvas')
                const frameContext = frameCanvas.getContext('2d')
                let lastDisposalIndex = 0

                frameCanvas.width = reader.width
                frameCanvas.height = reader.height

                frames.forEach(({ x, y, width, height, frameIndex }, i) => {
                    const canvas = document.createElement('canvas')
                    const context = canvas.getContext('2d')

                    canvas.width = reader.width
                    canvas.height = reader.height

                    /*
                    Disposal method indicates the way in which the graphic is to
                    be treated after being displayed.
                    Values :
                      0 - No disposal specified. The decoder is not required to take any action.
                      1 - Do not dispose. The graphic is to be left in place.
                      2 - Restore to background color. The area used by the graphic must be
                          restored to the background color.
                      3 - Restore to previous. The decoder is required to restore the area
                          overwritten by the graphic with what was there prior to rendering the
                          graphic. Importantly, "previous" means the frame state after the last disposal of method 0, 1, or 2.
                    */
                    const imageData = context.getImageData(0, 0, canvas.width, canvas.height)
                    const lastFrameInfo = i > 0 ? frames[i - 1] : {}

                    try {
                        reader.decodeAndBlitFrameRGBA(frameIndex, imageData.data)
                    } catch (err) {
                        reject(err)
                    }

                    if (i > 0) {
                        if (lastFrameInfo.disposal === 3) {
                            frameContext.drawImage(frameData[lastDisposalIndex], 0, 0)
                        } else {
                            lastDisposalIndex = i
                        }

                        if (lastFrameInfo.disposal === 2) {
                            frameContext.clearRect(
                                lastFrameInfo.x,
                                lastFrameInfo.y,
                                lastFrameInfo.width,
                                lastFrameInfo.height,
                            )
                        }
                    }

                    context.putImageData(imageData, 0, 0, x, y, width, height)
                    frameContext.drawImage(canvas, 0, 0)
                    context.clearRect(0, 0, canvas.width, canvas.height)
                    context.drawImage(frameCanvas, 0, 0)
                    frameData.push(canvas)
                })

                const downsampledFrames = getDownsampledFrames(frames, frameData, maxFrames)
                CHILL_ZONE[url] = downsampledFrames
                resolve(downsampledFrames)
            }
            xhr.send()
        } else {
            reject()
        }
    })
