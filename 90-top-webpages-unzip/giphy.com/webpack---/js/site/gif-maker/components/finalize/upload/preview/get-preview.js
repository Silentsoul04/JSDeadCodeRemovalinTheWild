import util from 'shared/util/file-portal-utils'
export default file => {
    // we don't need the proxy, and we don't need CORS (required for canvas)
    // so just load an image directly
    if (file.fileType === 'image') {
        return new Promise((resolve, reject) => {
            const { file: url } = file
            const img = new Image()
            img.onload = () => {
                const height = img.naturalHeight
                const width = img.naturalWidth
                resolve({ preview: img.src, width, height })
            }
            img.onerror = e => reject(e)
            img.src = url
        })
    }
    return util.generatePreview(file)
}
