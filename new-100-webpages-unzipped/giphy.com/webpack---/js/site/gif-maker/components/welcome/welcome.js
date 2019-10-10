import PropTypes from 'prop-types'
import {
    PureComponent
} from 'react'
import {
    isEmpty
} from 'lodash'
import FilePortal from './file-portal/file-portal'
import {
    connect
} from 'react-redux'
import {
    setError,
    getError,
    clearError
} from '../../redux/error'
// import Modernizr from 'modernizr'
import {
    autobind
} from 'core-decorators'
import css from './welcome.css'
import {
    getMimeTypes
} from 'shared/util/gif-maker-util'
import FullscreenInput from './file-portal/full-screen/full-screen-input'
import PowerGlove from './file-portal/power-glove/power-glove'
import StartImage from './start-image/start-image'
import {
    START_IMAGE,
    GIF_MAKER
} from '../route'
import Footer from './footer/footer'

@connect(
    ({
        error
    }) => ({
        error: getError(error)
    }), {
        clearError,
        onError: setError
    },
)
class Welcome extends PureComponent {
    static defaultProps = {
        isCameraSupported: false, // Modernizr.getusermedia,
    }
    fileTypes = ['.mov', '.mp4', '.png', '.jpeg', '.jpg', '.gif', 'youtube', 'vimeo']
    mimeTypes = getMimeTypes(this.fileTypes)
    state = {
        dragX: 0,
        dragY: 0,
        isDragging: false,
        isFileInvalid: false,
        isProcessing: false,
        // when landing directly on starter image, there's no animation
        hasSeenWelcomeScreen: false,
    }
    static propTypes = {
        meta: PropTypes.object,
        uploadData: PropTypes.object,
        backgroundAssetUrls: PropTypes.array,
        maxDuration: PropTypes.number,
        maxFilesize: PropTypes.number,
        clearError: PropTypes.func.isRequired,
        onError: PropTypes.func.isRequired,
        onPreviewReady: PropTypes.func.isRequired,
    }
    static getDerivedStateFromProps({
        error,
        location: {
            pathname
        },
    }, {
        hasSeenWelcomeScreen
    }, ) {
        if (!isEmpty(error)) {
            return {
                isProcessing: false
            }
        }
        if (pathname === GIF_MAKER && !hasSeenWelcomeScreen) {
            return {
                hasSeenWelcomeScreen: true
            }
        }
        return null
    }

    @autobind
    __processing() {
        this.props.clearError()
        this.setState({
            isProcessing: true
        })
    }
    onFullscreenError = (type, message) => {
        this.setState({
            isFileInvalid: type === 'INVALID_FILE'
        })
        this.props.onError(type, message)
    }

    render() {
        const {
            fileTypes,
            mimeTypes
        } = this
        const {
            dragX,
            dragY,
            isDragging,
            isProcessing,
            isFileInvalid,
            hasSeenWelcomeScreen
        } = this.state
        const {
            error,
            isCameraSupported,
            onPreviewReady,
            maxDuration,
            maxFilesize,
            onError,
            location: {
                pathname
            },
            canvasChannel,
        } = this.props
        const sharedProps = {
            mimeTypes,
            maxFilesize,
            onError,
            maxDuration,
            onPreviewReady,
            onProcessing: this.__processing,
        }
        this.wasChooseStartImage = this.isChooseStartImage
        this.isChooseStartImage = pathname === START_IMAGE
        const isOnStartImageRoute = this.isChooseStartImage || this.wasChooseStartImage
        return ( <
            div >
            <
            FullscreenInput { ...sharedProps
            }
            onError = {
                this.onFullscreenError
            }
            onDrag = {
                (x, y) => this.setState({
                    dragX: x,
                    dragY: y,
                    isDragging: true
                })
            }
            onDragStop = {
                () => this.setState({
                    isDragging: false
                })
            } >
            <
            div className = {
                css.boxContainer
            } >
            <
            div className = {
                isProcessing && isEmpty(error) ?
                css.fadeAway :
                    this.isChooseStartImage ?
                    css.hideMain :
                    this.wasChooseStartImage ?
                    css.showMain :
                    css.container
            } >
            <
            div className = {
                css.content
            } >
            <
            h3 className = {
                css.title
            } > GIF MAKER < /h3> <
            div className = {
                css.description
            } > Creating GIFs is fast, easy, and fun! < /div> <
            FilePortal { ...sharedProps
            } { ...{
                    fileTypes,
                    isCameraSupported,
                }
            }
            /> <
            Footer / >
            <
            /div> <
            /div> {
                isOnStartImageRoute && ( <
                    div className = {
                        hasSeenWelcomeScreen ?
                        this.isChooseStartImage ?
                        css.showStartImage :
                        css.hideStartImage :
                            css.container
                    } >
                    <
                    StartImage canvasChannel = {
                        canvasChannel
                    }
                    onPreviewReady = {
                        onPreviewReady
                    }
                    onError = {
                        this.onFullscreenError
                    }
                    /> <
                    /div>
                )
            } <
            /div> <
            /FullscreenInput> <
            PowerGlove x = {
                dragX
            }
            y = {
                dragY
            }
            isDragging = {
                isDragging
            }
            isInvalid = {
                isFileInvalid
            }
            onHidden = {
                () => this.setState({
                    isFileInvalid: false,
                    isDragging: false
                })
            }
            /> <
            /div>
        )
    }
}
export default Welcome