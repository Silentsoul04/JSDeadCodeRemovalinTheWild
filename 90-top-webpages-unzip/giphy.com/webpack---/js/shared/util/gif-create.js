import GIF from 'gif.js.optimized'

export default function(frames, width, height) {
    return new Promise((resolve, reject) => {
        const gif = new GIF({
            background: '#000',
            workers: 4,
            workerScript: '/static/dist/workers/gif.worker.js',
            quality: 4,
            dither: true,
            height,
            width,
        })

        frames.forEach(({ data, delay }) => gif.addFrame(data, { delay }))

        gif.on('finished', blob => {
            // format as file object
            blob.lastModifiedDate = new Date()
            blob.name = 'gifmaker.gif'
            blob.accepted = true
            resolve(blob)
        })
        gif.on('error', () => reject())
        gif.render()
    })
}
