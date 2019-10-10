import PropTypes from 'prop-types'
import {
    isEmpty
} from 'lodash'
import {
    connect
} from 'react-redux'
import {
    getError
} from '../../../redux/error'
import {
    PureComponent
} from 'react'
import InputWrapper from 'shared/components/inputs/file-input'
import FileAccept from 'shared/components/file-portal/file-accept'
import {
    trackEvent,
    trackFileList,
    trackUrls
} from 'shared/util/gif-maker-ga-events'
import Button from './button/button'
import UrlInput from './url-input/url-input'
import css from './file-portal.css'
import {
    VIDEO_MIME_TYPES
} from '../../gif-maker'

const PHOTO = {
    title: 'Choose Photo or GIF',
    icon: 'photo',
    description: 'You can add multiple images to create a GIF slideshow',
}
const VIDEO = {
    title: 'Choose Video',
    icon: 'video',
    description: 'Trim your video into a GIF then add captions or stickers',
}

const WEBCAM = {
    title: 'WEBCAM',
    icon: 'video',
    description: 'Create and decorate GIFs from one of your videos',
}

@FileAccept
@connect(({
    error
}) => ({
    error: getError(error)
}))
class FilePortal extends PureComponent {
    state = {
        urlAccepted: false,
    }
    static propTypes = {
        fileTypes: PropTypes.array.isRequired,
        mimeTypes: PropTypes.array.isRequired,
        isCameraSupported: PropTypes.bool,
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
            isCameraSupported,
            onError,
            onFileAccepted: doFileAccept,
            mimeTypes,
        } = this.props
        const inputProps = {
            maxDuration,
            maxFilesize,
            onError,
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
                ['image/*']
            }
            acceptMultiple = {
                true
            } >
            <
            Button label = {
                PHOTO.title
            }
            description = {
                PHOTO.description
            }
            icon = {
                PHOTO.icon
            }
            isVertical = {
                isCameraSupported
            }
            /> <
            /InputWrapper> <
            InputWrapper { ...inputProps
            }
            mimeTypes = {
                VIDEO_MIME_TYPES
            } >
            <
            Button label = {
                VIDEO.title
            }
            description = {
                VIDEO.description
            }
            icon = {
                VIDEO.icon
            }
            isVertical = {
                isCameraSupported
            }
            /> <
            /InputWrapper> {
                isCameraSupported && ( <
                    InputWrapper { ...inputProps
                    }
                    isCamera = {
                        true
                    }
                    mimeTypes = {
                        mimeTypes
                    } >
                    <
                    Button label = {
                        WEBCAM.title
                    }
                    description = {
                        WEBCAM.description
                    }
                    icon = {
                        WEBCAM.icon
                    }
                    isVertical = {
                        isCameraSupported
                    }
                    /> <
                    /InputWrapper>
                )
            } <
            /div> <
            UrlInput { ...{
                    urlAccepted,
                    fileTypes,
                    onError,
                    onFileAccepted: (...args) => {
                        this.setState({
                            urlAccepted: true
                        })
                        doFileAccept(...args)
                        trackUrls(...args)
                        trackFileList(...args)
                    },
                }
            }
            /> <
            /div>
        )
    }
}

export default FilePortal