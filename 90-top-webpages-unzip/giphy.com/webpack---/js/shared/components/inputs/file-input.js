import PropTypes from 'prop-types'
import { PureComponent } from 'react'
import { autobind } from 'core-decorators'
import { isVideo, mimeTypeToFileType } from 'shared/util/gif-maker-util'
import log from 'shared/util/log'

export const Errors = {
    NO_FILE: 'NO_FILE',
    INVALID_FILE: 'INVALID_FILE',
    FILE_TOO_BIG: 'FILE_TOO_BIG',
    FILE_TOO_LONG: 'FILE_TOO_LONG',
    ONLY_ONE_VIDEO: 'ONLY_ONE_VIDEO',
    COMBINED_VIDEO_AND_IMAGE: 'COMBINED_VIDEO_AND_IMAGE',
    ONLY_ONE_FILE: 'ONLY_ONE_FILE',
}

const validateFile = (file, mimeTypes, maxDuration, maxFilesize) =>
    new Promise((resolve, reject) => {
        if (!file || !file.type) {
            // TODO how do we handle this
            reject(Errors.NO_FILE)
            return
        }

        if (!checkIfValid(file.type, mimeTypes)) {
            reject(Errors.INVALID_FILE)
            return
        }
        const size = file.size ? (file.size / (1024 * 1024)).toFixed(2) : 0

        // check file size. if too big, show error
        // and reset the input value so that the
        // error shows again if the same file is
        // selected.
        if (size > maxFilesize) {
            reject(Errors.FILE_TOO_BIG)
            return
        }

        // check file type
        const fileType = mimeTypeToFileType(file.type)
        if (!fileType) {
            reject(Errors.INVALID_FILE)
            return
        }

        const result = { file, fileType, type: 'file' }

        if (maxDuration && fileType === 'video') {
            const video = document.createElement('video')
            video.onerror = e => {
                log.info(`Reject file:`, e)
                reject(Errors.INVALID_FILE)
            }
            video.onloadedmetadata = () => {
                if (video.duration > maxDuration) {
                    reject(Errors.FILE_TOO_LONG)
                } else {
                    resolve(result)
                }
            }
            video.src = URL.createObjectURL(file)
        } else {
            resolve(result)
        }
    })

class Input extends PureComponent {
    static propTypes = {
        mimeTypes: PropTypes.array.isRequired,
        multiple: PropTypes.bool,
        isCamera: PropTypes.bool,
        className: PropTypes.string,
        name: PropTypes.string,
        dropOnly: PropTypes.bool,
        onFileChange: PropTypes.func.isRequired,
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.hasError) {
            this.input.value = ''
        }
    }
    onClick = e => {
        const { dropOnly } = this.props
        if (dropOnly) e.preventDefault()
    }
    render() {
        const { mimeTypes, children, isCamera, onFileChange, className, multiple, dropOnly, name } = this.props
        // if multiple false, there's no error message on drag and drop
        // allow it and then throw an error
        const acceptMultiple = multiple || dropOnly
        return (
            <div className={className}>
                {children}
                <input
                    name={name}
                    multiple={acceptMultiple}
                    onClick={this.onClick}
                    ref={c => (this.input = c)}
                    type="file"
                    accept={mimeTypes.join(',')}
                    capture={isCamera ? 'camcorder' : false}
                    onChange={e => onFileChange(e.target.files)}
                />
            </div>
        )
    }
}

const checkIfValid = (fileType, mimeTypes) =>
    mimeTypes.some(mimeType => {
        const [type, subtype] = mimeType.split('/')
        const compare = subtype === '*' ? type : mimeType
        if (fileType.indexOf(compare) > -1) {
            return true
        }
    })

/**
 * File Portal - File Input: Controls the file browse input
 * in the FilePortal. This view handles validating and
 * returning only accepted files.
 *
 * @class FilePortalFileInput
 * @param {Array} mimeTypes List of accepted file type extensions.
 * @param {String} className Class name for the div that contains the input field
 * @param {Number} maxFilesize Maximum allowed filesize in megabytes.
 * @param {Function} onError Callback function to trigger when file
 * validation fails.
 * @param {Function} onFileAccepted Accepted file callback. This is fired
 * when a file is successfully validated.
 */
export default class FilePortalFileInput extends PureComponent {
    static propTypes = {
        mimeTypes: PropTypes.array,
        isCamera: PropTypes.bool,
        maxFilesize: PropTypes.number,
        acceptMultiple: PropTypes.bool,
        maxDuration: PropTypes.number,
        onError: PropTypes.func.isRequired,
        onFileAccepted: PropTypes.func.isRequired,
        className: PropTypes.string,
        allowMultipleVideos: PropTypes.bool,
        allowMix: PropTypes.bool,
    }

    state = {
        hasError: false,
    }

    // vars
    maxFilesize = this.props.maxFilesize || 100 // MBs

    /**
     * Triggered when the file input is changed. This handler validates the
     * file and verfies that it is acceptable.
     *
     * @param {FileList} files List of File objects added to input.
     * @private
     */
    @autobind
    async __fileChange(fileList) {
        this.setState({ hasError: false })
        const {
            mimeTypes,
            maxDuration,
            onError,
            onFileAccepted,
            maxFilesize,
            acceptMultiple,
            allowMultipleVideos,
            allowMix,
        } = this.props
        const promises = []
        let videos = 0
        let images = 0

        // the only way to iterate over files:
        for (var i = 0; i < fileList.length; i++) {
            const file = fileList.item(i)

            if (isVideo(file.type)) {
                videos++
            } else {
                images++
            }
            promises.push(validateFile(file, mimeTypes, maxDuration, this.maxFilesize))
        }
        try {
            if (!acceptMultiple && fileList.length > 1) throw Errors.ONLY_ONE_FILE
            // only one video is allowed
            if (!allowMultipleVideos && videos > 1) throw Errors.ONLY_ONE_VIDEO
            // can't combine videos and images
            if (!allowMix && videos === 1 && images > 0) throw Errors.COMBINED_VIDEO_AND_IMAGE
            onFileAccepted(await Promise.all(promises))
        } catch (e) {
            let message = ''
            switch (e) {
                case Errors.FILE_TOO_LONG:
                    message = `Uh oh! This video needs to be ${maxDuration} seconds or less.`
                    break
                case Errors.INVALID_FILE:
                    message = (
                        <>
                            Bad file format: Whoops! We don&apos;t support this file type. Please enter a valid file
                            format or{' '}
                            <a href="https://support.giphy.com" target="_blank">
                                visit our Help Center
                            </a>
                        </>
                    )
                    break
                case Errors.FILE_TOO_BIG:
                    message = `Uh-oh! This file is too big. Please add files under ${maxFilesize} MBs.`
                    break
                case Errors.ONLY_ONE_VIDEO:
                    message = `Uh oh! You can only enter one video at a time. Please try again!`
                    break
                case Errors.COMBINED_VIDEO_AND_IMAGE:
                    message = `Uh oh! We can't combine videos and images right now. Please try again with one video or with just images!`
                    break
                case Errors.ONLY_ONE_FILE:
                    message = `To upload multiple GIFs at once you must be logged in. If you don't log in, you can upload one by one.`
                    break
                default:
                    break
            }
            this.setState({ hasError: true })
            onError(e, message)
        }
    }

    render() {
        const {
            mimeTypes,
            label,
            isCamera,
            children,
            className,
            dropOnly,
            acceptMultiple,
            allowMultipleVideos,
            allowMix,
            name,
        } = this.props
        const { hasError } = this.state
        return (
            <Input
                {...{
                    name,
                    mimeTypes,
                    label,
                    isCamera,
                    hasError,
                    children,
                    className,
                    dropOnly,
                    allowMultipleVideos,
                    allowMix,
                    multiple: acceptMultiple,
                    onFileChange: this.__fileChange,
                }}
            />
        )
    }
}
