import PropTypes from 'prop-types'
import { PureComponent } from 'react'
import { isEmpty } from 'lodash'
import FilePortal from './file-portal/upload-file-portal'
import { connect } from 'react-redux'
import { setError, getError, clearError } from '../../redux/error'
import { autobind } from 'core-decorators'
import { getUserLoggedIn } from 'shared/redux/reducers'
import css from './welcome.css'
import FullscreenInput from './file-portal/full-screen/full-screen-input'
import PowerGlove from './file-portal/power-glove/power-glove'
import Footer from './footer/footer'
import { withUploadContext } from '../upload-context'

@withUploadContext
@connect(
    ({ error, ...state }) => ({ error: getError(error), isLoggedIn: getUserLoggedIn(state) }),
    {
        clearError,
        onError: setError,
    },
)
class Welcome extends PureComponent {
    state = {
        dragX: 0,
        dragY: 0,
        isDragging: false,
        isFileInvalid: false,
        isProcessing: false,
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
        isLoggedIn: PropTypes.bool,
    }

    @autobind
    __processing() {
        this.props.clearError()
        this.setState({ isProcessing: true })
    }
    componentWillReceiveProps({ error }) {
        if (!isEmpty(error)) {
            this.setState({ isProcessing: false })
        }
    }

    onFullscreenError(type, message) {
        this.setState({ isFileInvalid: type === 'INVALID_FILE' })
        this.props.onError(type, message)
    }

    render() {
        const { dragX, dragY, isDragging, isProcessing, isFileInvalid } = this.state
        const { error, mimeTypes, onPreviewReady, maxDuration, maxFilesize, onError, isLoggedIn } = this.props
        return (
            <div>
                <FullscreenInput
                    {...{
                        mimeTypes,
                        maxFilesize,
                        onError,
                        maxDuration,
                        onPreviewReady,
                        allowMultipleVideos: true,
                        allowMix: true,
                        acceptMultiple: isLoggedIn,
                        onProcessing: this.__processing,
                    }}
                    onError={(error, message) => this.onFullscreenError(error, message)}
                    onDrag={(x, y) => this.setState({ dragX: x, dragY: y, isDragging: true })}
                    onDragStop={() => this.setState({ isDragging: false })}
                >
                    <div className={css.boxContainer}>
                        <div className={isProcessing && isEmpty(error) ? css.fadeAway : css.container} data-upload>
                            <div className={css.content}>
                                <h3 className={css.title}>UPLOAD</h3>
                                <div className={css.description}>
                                    Upload your GIF collection to share on Facebook, Twitter, <br /> Instagram, text
                                    message, email, and everywhere else.
                                </div>
                                <FilePortal />
                                <Footer />
                            </div>
                        </div>
                    </div>
                </FullscreenInput>
                <PowerGlove
                    x={dragX}
                    y={dragY}
                    isDragging={isDragging}
                    isInvalid={isFileInvalid}
                    onHidden={() => this.setState({ isFileInvalid: false, isDragging: false })}
                />
            </div>
        )
    }
}
export default Welcome
