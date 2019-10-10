import {
    PureComponent
} from 'react'
import PropTypes from 'prop-types'
import {
    isEmpty
} from 'lodash'
import {
    connect
} from 'react-redux'
import InputWrapper from 'shared/components/inputs/file-input'
import FileAccept from 'shared/components/file-portal/file-accept'
import {
    trackEvent,
    trackFileList,
    trackUrls
} from 'shared/util/gif-maker-ga-events'
import {
    getError
} from '../../../redux/error'
import {
    UrlInputWrapperUpload
} from './url-input/url-input'
import css from './upload.css'
import {
    withUploadContext
} from '../../upload-context'
import getPreview from '../../finalize/upload/preview/get-preview'
import {
    getUserLoggedIn
} from 'shared/redux/reducers'
import Button from './button/button'

const BROWSE = {
    title: 'Browse Your Files',
    icon: 'browse',
    description: 'Upload one or more GIFs',
}

const DRAGNDROP = {
    title: 'Drag and drop GIFs',
    icon: 'drag',
    description: 'Drop them right here, right now.',
}

@withUploadContext
@FileAccept
@connect(({
    error,
    ...state
}) => ({
    error: getError(error),
    isLoggedIn: getUserLoggedIn(state)
}))
class FilePortal extends PureComponent {
    state = {
        urlAccepted: false,
    }
    static propTypes = {
        fileTypes: PropTypes.array.isRequired,
        mimeTypes: PropTypes.array.isRequired,
        isCameraSupported: PropTypes.bool,
        isLoggedIn: PropTypes.bool,
        maxFilesize: PropTypes.number,
        maxDuration: PropTypes.number,
        onError: PropTypes.func,
        onFileAccepted: PropTypes.func.isRequired,
    }
    componentWillReceiveProps({
        error
    }) {
        if (!isEmpty(error)) {
            this.setState({
                urlAccepted: false
            })
        }
    }
    render() {
        const {
            fileTypes,
            maxDuration,
            maxFilesize,
            onError,
            onFileAccepted: doFileAccept,
            onPreviewReady,
            mimeTypes,
        } = this.props
        const inputProps = {
            maxDuration,
            maxFilesize,
            onError,
            allowMultipleVideos: true,
            allowMix: true,
            onFileAccepted: (...args) => {
                trackEvent('Input', 'Browse Files')
                trackFileList(...args)
                doFileAccept(...args)
            },
            className: css.fileButton,
        }
        const {
            urlAccepted
        } = this.state
        return ( <
            div className = {
                css.filePortal
            } >
            <
            div className = {
                css.fileContainer
            } >
            <
            InputWrapper { ...inputProps
            }
            mimeTypes = {
                mimeTypes
            }
            acceptMultiple = {
                true
            } >
            <
            Button label = {
                BROWSE.title
            }
            description = {
                BROWSE.description
            }
            icon = {
                BROWSE.icon
            }
            isVertical = {
                false
            }
            /> <
            /InputWrapper> <
            div className = {
                css.fileButton
            } >
            <
            Button label = {
                DRAGNDROP.title
            }
            description = {
                DRAGNDROP.description
            }
            icon = {
                DRAGNDROP.icon
            }
            isVertical = {
                false
            }
            /> <
            /div> <
            /div> <
            div className = {
                css.ctaWrapper
            } >
            <
            UrlInputWrapperUpload { ...{
                    urlAccepted,
                    fileTypes,
                    onError,
                    onFileAccepted: async ([file], ...args) => {
                        this.setState({
                            urlAccepted: true
                        })
                        // url input doesn't need preview for upload
                        const preview = await getPreview(file)
                        onPreviewReady([{ ...file,
                            ...preview
                        }])
                        trackUrls([file], ...args)
                        trackFileList([file], ...args)
                    },
                }
            }
            /> <
            /div> <
            /div>
        )
    }
}

export default FilePortal