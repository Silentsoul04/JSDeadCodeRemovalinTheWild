import { isArray } from 'lodash'
export default {
    /**
     * Preload one or multiple images and wait until they
     * are all done loading.
     *
     * @param {Array} images Array or single image.
     * @return {Promise} Promise which is resolved when all images
     * are completely loaded.
     */
    load(images) {
        if (isArray(images)) {
            return Promise.all(images.map(image => this.load(image)))
        }

        return new Promise((resolve, reject) => {
            const img = new Image()
            // Ignore crossOrigin for base64 image strings.
            // This was causing an error in Safari.
            if (images && images.indexOf('data:image') !== 0) {
                img.crossOrigin = 'anonymous'
            }
            if (!images) {
                reject()
            } else {
                img.onload = () => resolve(img)
                img.onerror = () => reject()
                img.src = images
            }
        })
    },
}
