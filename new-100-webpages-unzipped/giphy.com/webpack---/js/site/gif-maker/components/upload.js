import {
    isEmpty
} from 'lodash'
import qs from 'query-string'
import {
    PureComponent,
    lazy
} from 'react'
import {
    connect
} from 'react-redux'
import {
    Route,
    Switch,
    withRouter
} from 'react-router'
import withStorageContext from 'react-storage-context'
import {
    previewWidth
} from 'shared/css/creation-tool.css'
import {
    resetCreationTool,
    setCreationUploadInfo,
    updateCreationTool
} from 'shared/redux/creation-tool'
import {
    getUser
} from 'shared/redux/reducers'
import {
    getMimeTypes
} from 'shared/util/gif-maker-util'
import log from 'shared/util/log'
import HTML5Backend from 'shared/util/react-dnd-html5-backend'
import {
    fitToSize
} from 'shared/util/sizing'
import {
    clearError
} from '../redux/error'
import {
    getError
} from '../redux/selectors'
import BackButton from './back-button/back-button'
import {
    UPLOAD_FINALIZE
} from './route'
import {
    UploadContext
} from './upload-context'
import Welcome from './welcome/upload-welcome'

const {
    next
} = qs.parse(location.search)
// import UploadFinalize from './finalize/upload/upload'

const UploadFinalize = lazy(() =>
    import ( /* webpackChunkName: "desktopUploadFinalize" */ './finalize/upload/upload'))

export const VIDEO_TYPES = ['video', 'youtube', 'vimeo']

// on safari, you need to be explicit and can't use only video/*
export const VIDEO_MIME_TYPES = [
    ...[`mp4`, `mpg`, `mpeg`, `m4v`, `x-m4v`, `mov`, `quicktime`].map(t => `video/${t}`),
    `video/*`,
]

const move = (items, fromIndex, toIndex) => {
    var element = items[fromIndex]
    items.splice(fromIndex, 1)
    items.splice(toIndex, 0, element)
    return items
}

const MIN_FILE_WIDTH = parseInt(previewWidth)
export const IMAGE_TYPES = ['.gif']

const fileTypes = ['.mov', '.mp4', '.gif', 'youtube', 'vimeo']
const mimeTypes = getMimeTypes(fileTypes)

@withRouter
@HTML5Backend
@withStorageContext(`giphy-upload`)
class Upload extends PureComponent {
    state = {
        files: [],
    }
    static defaultProps = {
        maxFilesize: 100,
        maxDuration: 60,
    }
    setCreationUploadInfo() {
        const {
            apiKey,
            submitUrl,
            setCreationUploadInfo
        } = this.props
        setCreationUploadInfo(submitUrl, apiKey)
    }
    componentWillMount() {
        this.setCreationUploadInfo()
    }
    onError = (errorType, message) => {
        log.error(`GifMaker error: ${errorType}`)
        if (message) global.showError(message)
    }
    removeFile = removeId => {
        const {
            files
        } = this.state
        this.setState({
            files: files.filter(({
                id
            }) => id !== removeId),
        })
    }
    addFiles = newFiles => {
        const {
            files
        } = this.state
        this.setState({
            files: [...files, ...newFiles],
        })
    }
    moveFile = (fromIndex, toIndex) => {
        const {
            files
        } = this.state
        const newFiles = move([...files], fromIndex, toIndex)
        this.setState({
            files: newFiles
        })
    }
    onPreviewReady = files => {
        const {
            history: {
                push
            },
            updateCreationTool,
            resetCreationTool,
            user: {
                isStaff
            },
            defaultTags = [],
        } = this.props
        resetCreationTool()
        this.setCreationUploadInfo()
        updateCreationTool({
            defaultTags
        })
        files = files.map(({ ...f
        }) => {
            const {
                width,
                height
            } = fitToSize(f.width, f.height, MIN_FILE_WIDTH)
            f.width = width
            f.height = height
            return f
        })
        const [file] = files
        let sourceUrl = ''
        const {
            USER
        } = global
        if (file.type === 'url') {
            sourceUrl = file.sourceUrl
        } else if (!isStaff && USER && USER.website_url) {
            sourceUrl = USER.website_url
        }
        this.setState({
            files
        })
        updateCreationTool({
            file,
            sourceUrl
        })
        push(UPLOAD_FINALIZE)
    }
    componentWillReceiveProps({
        error
    }) {
        if (this.props.error !== error && !isEmpty(error)) {
            this.onError(error.errorType, error.message)
            // let the error propagate before clearing
            setTimeout(() => this.props.clearError(), 0)
        }
    }
    render() {
        const {
            files
        } = this.state
        return ( <
            div style = {
                {
                    paddingTop: 15
                }
            } >
            <
            BackButton / >
            <
            UploadContext.Provider value = {
                {
                    removeFile: this.removeFile,
                    moveFile: this.moveFile,
                    addFiles: this.addFiles,
                    onError: this.onError,
                    onPreviewReady: this.onPreviewReady,
                    fileTypes,
                    mimeTypes,
                    files,
                    next,
                }
            } >
            <
            Switch >
            <
            Route path = {
                UPLOAD_FINALIZE
            }
            component = {
                UploadFinalize
            }
            /> <
            Route render = {
                () => < Welcome { ...this.props
                }
                onPreviewReady = {
                    this.onPreviewReady
                }
                />} / >
                <
                /Switch> <
                /UploadContext.Provider> <
                /div>
            )
        }
    }

    export default connect(
        state => ({
            error: getError(state),
            user: getUser(state)
        }), {
            clearError,
            setCreationUploadInfo,
            resetCreationTool,
            updateCreationTool,
        },
    )(Upload)