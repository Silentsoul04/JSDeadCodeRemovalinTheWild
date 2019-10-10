import {
    PureComponent,
    lazy
} from 'react'
import {
    connect
} from 'react-redux'
import {
    Switch,
    Route,
    withRouter
} from 'react-router'
import HTML5Backend from 'shared/util/react-dnd-html5-backend'
import {
    isEmpty,
    some
} from 'lodash'
import log from 'shared/util/log'
import {
    previewWidth
} from 'shared/css/creation-tool.css'
import {
    fitToSize
} from 'shared/util/sizing'
import {
    getUser
} from 'shared/redux/reducers'
import {
    setCurrentFilter
} from 'shared/redux/creation-filters'
import Welcome from './welcome/welcome'
import BackButton from './back-button/back-button'
import {
    setSlideshow
} from '../redux/slideshow'
import {
    clearError
} from '../redux/error'
import {
    getError
} from '../redux/selectors'
import {
    SLIDESHOW,
    VIDEO_TRIM,
    CAPTION,
    FINALIZE,
    STICKERS
} from './route'
import LoadMedia from '../components/load-media'
import {
    updateCreationTool,
    setCreationUploadInfo,
    resetCreationTool
} from 'shared/redux/creation-tool'
import {
    GifMakerContext
} from './gif-maker-context'
export const VIDEO_TYPES = ['video', 'youtube', 'vimeo']

// on safari, you need to be explicit and can't use only video/*
export const VIDEO_MIME_TYPES = [
    ...[`mp4`, `mpg`, `mpeg`, `m4v`, `x-m4v`, `mov`, `quicktime`].map(t => `video/${t}`),
    `video/*`,
]

const MIN_FILE_WIDTH = parseInt(previewWidth)
export const IMAGE_TYPES = ['.png', '.jpeg', '.jpg', '.gif']

const Slideshow = lazy(() =>
    import ( /* webpackChunkName: "gifMakerSlideshow" */ './slideshow/slideshow'))
const VideoTrim = lazy(() =>
    import ( /* webpackChunkName: "gifMakerVideoTrim" */ './video-trim/video-trim'))
const Finalize = lazy(() =>
    import ( /* webpackChunkName: "gifMakerFinalize" */ './finalize/finalize'))

@withRouter
@HTML5Backend
class GifMaker extends PureComponent {
    state = {}
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
        const {
            startUrl
        } = this.props
        if (startUrl) {
            this.setState({
                startUrl
            })
        }
        const {
            featuredStickers,
            campaignName,
            stickerChannel
        } = this.props
        // apppend a sticker channel for an ad campaign
        const campaignStickers = stickerChannel ?
            [{
                title: campaignName,
                channelId: stickerChannel,
                tag: campaignName
            }] :
            []
        this.setState({
            featuredStickers: [...campaignStickers, ...featuredStickers]
        })
    }
    onError = (errorType, message) => {
        log.error(`GifMaker error: ${errorType}`)
        if (message) global.showError(message)
    }
    onPreviewReady = files => {
        const {
            history: {
                push
            },
            updateCreationTool,
            setSlideshow,
            resetCreationTool,
            setCurrentFilter,
            campaignName,
            defaultTags = [],
            user: {
                isStaff
            },
        } = this.props
        // clear the start url, we may not have had one
        this.setState({
            startUrl: ''
        })
        resetCreationTool()
        setCurrentFilter({})
        this.setCreationUploadInfo()
        updateCreationTool({
            defaultTags
        })
        this.hasCampaignCanvas = some(files, file => file.isCampaign)
        this.updateDefaultTags()
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

        // videos can sneak through here into the state,
        // but you can't nav to slideshow so it's okay
        setSlideshow(files)
        if (files.length > 1) {
            push(SLIDESHOW)
        } else {
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
            updateCreationTool({
                file,
                sourceUrl
            })
            if (VIDEO_TYPES.indexOf(file.fileType) > -1) {
                push(VIDEO_TRIM)
            } else {
                campaignName ? push(STICKERS) : push(CAPTION)
            }
        }
    }
    getCampaignChannelId = () => this.props.stickerChannel
    updateDefaultTags = hasCampaignStickers => {
        const {
            updateCreationTool,
            campaignTags,
            defaultTags
        } = this.props
        if (this.hasCampaignCanvas || hasCampaignStickers) {
            updateCreationTool({
                defaultTags: [...defaultTags, ...campaignTags]
            })
        } else {
            updateCreationTool({
                defaultTags
            })
        }
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
                location,
                campaignName
            } = this.props
            const {
                startUrl,
                featuredStickers
            } = this.state
            return ( <
                    GifMakerContext.Provider value = {
                        {
                            updateDefaultTags: this.updateDefaultTags,
                            getCampaignChannelId: this.getCampaignChannelId,
                        }
                    } >
                    <
                    div style = {
                        {
                            paddingTop: 15
                        }
                    } >
                    <
                    BackButton / > {
                        startUrl ? ( <
                            LoadMedia url = {
                                startUrl
                            }
                            onPreviewReady = {
                                this.onPreviewReady
                            }
                            onError = {
                                this.onError
                            }
                            />
                        ) : ( <
                            Switch >
                            <
                            Route exact path = {
                                VIDEO_TRIM
                            }
                            render = {
                                () => < VideoTrim path = {
                                    location.pathname
                                }
                                campaignName = {
                                    campaignName
                                }
                                />} /
                                >
                                <
                                Route exact path = {
                                    SLIDESHOW
                                }
                                render = {
                                    () => < Slideshow / >
                                }
                                /> <
                                Route
                                path = {
                                    FINALIZE
                                }
                                render = {
                                    () => < Finalize featuredStickers = {
                                        featuredStickers
                                    }
                                    path = {
                                        location.pathname
                                    }
                                    />} /
                                    >
                                    <
                                    Route render = {
                                        () => < Welcome { ...this.props
                                        }
                                        onPreviewReady = {
                                            this.onPreviewReady
                                        }
                                        />} / >
                                        <
                                        /Switch>
                                    )
                                } <
                                /div> <
                                /GifMakerContext.Provider>
                            )
                        }
                    }

                    export default connect(
                        state => ({
                            error: getError(state),
                            user: getUser(state)
                        }), {
                            updateCreationTool,
                            setSlideshow,
                            clearError,
                            setCreationUploadInfo,
                            resetCreationTool,
                            setCurrentFilter,
                        },
                    )(GifMaker)