import PropTypes from 'prop-types'
import { PureComponent } from 'react'
import { autobind } from 'core-decorators'
import { uniqueId, groupBy, isEmpty } from 'lodash'
import FilePortalUtils from '../../util/file-portal-utils'

/**
 * File Portal: Controls adding files to creation tools.
 * When onFileAccepted is triggered the processed file is
 * relayed to the creation tools view.
 *
 * @function FileAccept
 * @param {Function} onProcessing Callback triggered when a file
 * is validated and preview begins loading.
 * @param {Function} onPreviewReady Callback triggered when a file
 * or url preview is ready to be displayed.
 */
export default WrappedComponent =>
    class FileAccept extends PureComponent {
        static propTypes = {
            onProcessing: PropTypes.func,
            onError: PropTypes.func.isRequired,
            onPreviewReady: PropTypes.func.isRequired,
        }

        fileObjects = []
        processingDelay = null

        /**
         * Triggered when a file or url is validated and accepted.
         * This handler sets the processing state, shows a loader,
         * and generates a preview based on the file type.
         *
         * @param {Array} fileObjects Array of fileObjects
         * @param {Object} fileObject File data.
         * @param {String} fileObject.type Type of file. ('url' or 'file')
         * @param {File|String} fileObject.file Either a File object or a url string.
         * @private
         **/
        @autobind
        async __filesAccepted(fileObjects) {
            fileObjects.forEach(o => (o.id = uniqueId('file')))
            // setting it as a prop helps make the timeout and the promises work together
            this.fileObjects = fileObjects
            const { onProcessing } = this.props
            const promise = fileObject =>
                new Promise((resolve, reject) => {
                    if (!fileObject || !fileObject.file) reject('no file object')

                    if (onProcessing) {
                        onProcessing(fileObject)
                    }

                    // generate preview
                    FilePortalUtils.generatePreview(fileObject)
                        .then((previewData = {}) => {
                            resolve({ ...fileObject, ...previewData })
                        })
                        .catch(error => {
                            this.props.onError('ERROR', error)
                        })
                })
            this.fileObjects = await Promise.all(fileObjects.map(fileObject => promise(fileObject)))
            this.ready()
        }

        /**
         * Called when the preview image/video is fully loaded and ready to go.
         * This function will wait for both the image/video preview image to be
         * fully loaded, as well as the minimum time to show the processing state
         * to pass. Once both of these occurs, this function triggers an
         * onPreviewReady callback and relays all the file object data back to
         * the parent component.
         *
         * @fires onPreviewReady
         */
        ready() {
            // only send file objects that have a preview
            const { noPreview, hasPreview } = groupBy(this.fileObjects, o => (o.preview ? 'hasPreview' : 'noPreview'))

            // if there are no fileObjects with previews don't send
            if (isEmpty(hasPreview)) {
                return
            }
            // and only send it once, by removing it from this.fileObjects
            this.fileObjects = noPreview
            // send the array off files with previews
            this.props.onPreviewReady(hasPreview)
        }

        render() {
            return <WrappedComponent {...{ ...this.props, onFileAccepted: this.__filesAccepted }} />
        }
    }
