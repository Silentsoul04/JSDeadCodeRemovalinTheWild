import Grid from '@giphy/react-giphy-grid'
import loadable from '@loadable/component'
import PropTypes from 'prop-types'
import {
    PureComponent,
    createRef
} from 'react'
import {
    connect
} from 'react-redux'
import {
    withRouter
} from 'react-router'
import {
    compose,
    getContext
} from 'recompose'
import mapPosts from 'shared/components/gif-grid/map-posts'
import Post from 'shared/components/gif-grid/post'
import GifMenu from 'shared/components/gif-menu/gif-menu'
import {
    Loader
} from 'shared/components/preloader-animation'
import {
    gridSpacing
} from 'shared/css/grid.css'
import pingbackGridEnhancer from 'shared/pingbacks/pingback-grid-enhancer'
import {
    setBulkEditGifIds,
    toggleEditMode,
    updateEditMode
} from 'shared/redux/edit-mode'
import {
    fetchGifs
} from 'shared/redux/fetch-gifs'
import * as selectors from 'shared/redux/reducers'
import {
    setStoryEditMode
} from 'shared/redux/story-edit-mode'
import {
    addLastSearchResponseId
} from 'shared/util/get-last-search-id'
import {
    processDefaultGifs,
    PROCESSOR_MAP
} from 'shared/util/gif-process'
import isMobile from 'shared/util/is-mobile'
import {
    relativeUrl
} from 'shared/util/url'
import {
    Actions as GifDetailActions,
    trackEvent as trackGifDetailEvent
} from '../../util/gif-detail-ga-events'
import {
    trackEvent
} from '../gif-grid/track-grid-events'
import css from './grid.css'
import {
    mapGridProps,
    mapGroupId
} from './map-grid-props'
import relativeGifUrls from './relative-gif-urls'

const PINGBACK_RESPONSE_IDS = {}

const GifEditPanel = loadable(() =>
    import ( /* webpackChunkName: "gifEditPanel" */ 'shared/components/edit-panel/gif-modal'),
)

const BulkEditor = loadable(() =>
    import ( /* webpackChunkName: "bulkEditor" */ 'shared/components/bulk-editor'))

const Storybook = loadable(() =>
    import ( /* webpackChunkName: "storybookModal" */ 'shared/components/story/storybook'))

const OverlayElement = props => (props.gif.post ? < Post { ...props
    }
    /> : <GifMenu {...props} / > )

const defaultProps = isMobile() ?
    {
        showTags: false,
        showTV: false,
        showOverlay: false,
        columns: 2,
        gutter: 6,
        noEditMode: true,
    } :
    {
        showTags: true,
        showTV: true,
        showOverlay: true,
        columns: 4,
        gutter: parseInt(gridSpacing),
        noEditMode: false,
    }
@mapGroupId()
@connect(
    (state, {
        groupId,
        excludeGifIds
    }) => ({
        autoPlay: selectors.getAutoPlay(state),
        gifs: selectors.getGifs(state, groupId, excludeGifIds),
        editMode: selectors.getEditMode(state),
        searchType: selectors.getSearchType(state),
        searchResponseId: selectors.getResponseId(state),
        isFetching: selectors.getFetching(state, groupId),
        isBulkEditing: selectors.getIsBulkEditMode(state),
        isEditingStory: selectors.getIsStoryEditMode(state),
        user: selectors.getUser(state),
    }), {
        fetchGifs,
        toggleEditMode,
        updateEditMode,
        setBulkEditGifIds,
        setStoryEditMode
    },
)
@mapGridProps()
@mapPosts()
@relativeGifUrls()
@pingbackGridEnhancer()
class SearchGrid extends PureComponent {
    static contextTypes = {
        router: PropTypes.object,
    }
    static propTypes = {
        category: PropTypes.string.isRequired,
        // grab all the gifs, no groupId required
        allGifs: PropTypes.bool,
        // we want groupId to be required unless allGifs is specified
        groupId: ({
            allGifs,
            groupId
        }, propName, componentName) => {
            if (!allGifs && !groupId) {
                return new Error(
                    'groupId prop is required for `' +
                    componentName +
                    '`, or use prop `allGifs=true` to get all the gifs',
                )
            }
        },
        autoPlay: PropTypes.bool,
        gifs: PropTypes.array,
        editMode: PropTypes.object,
        searchResponseId: PropTypes.string,
        isFetching: PropTypes.bool,
        isBulkEditing: PropTypes.bool,
        isEditingStory: PropTypes.bool,
        columns: PropTypes.number,
        gutter: PropTypes.number,
        gridTemplate: PropTypes.string,
        searchType: PropTypes.string,
        showTags: PropTypes.bool,
        showTV: PropTypes.bool,
        showOverlay: PropTypes.bool,
        fetchGifs: PropTypes.func,
        toggleEditMode: PropTypes.func,
        updateEditMode: PropTypes.func,
        user: PropTypes.object,
        setBulkEditGifIds: PropTypes.func,
        noEditMode: PropTypes.bool,
        processor: PropTypes.func,
        onLoadMore: PropTypes.func,
        apiKey: PropTypes.string,
        showLoader: PropTypes.bool,
        isOwner: PropTypes.bool,
    }
    static defaultProps = {
        ...defaultProps,
        showLoader: true,
        isOwner: false,
        onGifSeen: () => {},
        onGifHover: () => {},
        onGifClick: () => {},
    }

    gridRef = createRef()

    componentWillMount() {
        this.mapPingbackResponseIds()
    }
    componentDidUpdate(prevProps) {
        if (prevProps.gifs !== this.props.gifs) {
            this.mapPingbackResponseIds()
        }
    }
    mapPingbackResponseIds() {
        const {
            gifs,
            searchResponseId
        } = this.props
        if (searchResponseId) {
            gifs.forEach(({
                id
            }) => (PINGBACK_RESPONSE_IDS[id] = PINGBACK_RESPONSE_IDS[id] || searchResponseId))
            addLastSearchResponseId(searchResponseId)
        }
    }
    trackGA(action, label) {
        const {
            category
        } = this.props
        trackEvent({
            category,
            action,
            label,
        })
    }
    onClick(e, gifObject, user) {
        const {
            id
        } = gifObject
        const {
            router
        } = this.context
        const {
            category,
            onGifClick,
            locationState
        } = this.props
        if (category === 'related') {
            // any grid on a gif detail is related
            trackGifDetailEvent(GifDetailActions.relatedClick, id)
        } else {
            this.trackGA('GIF Click', id)
        }
        onGifClick(gifObject, user, PINGBACK_RESPONSE_IDS[gifObject.id] || category, category)
        if (!e.metaKey && router) {
            const {
                history: {
                    push
                },
            } = router
            e.preventDefault()
            push(relativeUrl(e.currentTarget.href), locationState)
        }
    }
    render() {
            const {
                gifs,
                showTags,
                isFetching,
                fetchGifs,
                autoPlay,
                groupId,
                columns,
                category,
                gutter,
                editMode,
                setBulkEditGifIds,
                tvConfig,
                showOverlay,
                showTV,
                noEditMode,
                onGifSeen,
                onGifHover,
                isOffScreen,
                isBulkEditing,
                isEditingStory,
                user,
                processor = processDefaultGifs,
                pingback_id,
                onLoadMore,
                apiKey,
                showLoader,
                isOwner,
            } = this.props
            const hasBulkEditPermissions = user && user.loggedIn && user.permissions.bulk_edit && (user.isStaff || isOwner)
            const isEditMode = editMode && editMode.isEditing
            const showEditPanel = !noEditMode && (isEditMode || isBulkEditing)
            const showBulkEditor = !isMobile() && !noEditMode && hasBulkEditPermissions && !isBulkEditing && !isEditMode
            return ( <
                div className = {
                    css.grid
                }
                key = {
                    groupId
                } >
                <
                Grid ref = {
                    this.gridRef
                }
                gifs = {
                    gifs
                }
                autoPlay = {
                    autoPlay
                }
                showTags = {
                    showTags
                }
                columns = {
                    columns
                }
                gutter = {
                    gutter
                }
                overlayElement = {
                    showOverlay ? < OverlayElement category = {
                        category
                    }
                    /> : null}
                    selectionMode = {
                        isBulkEditing
                    }
                    onSelectionUpdate = {
                        setBulkEditGifIds
                    }
                    tvConfig = {
                        showTV ? tvConfig : null
                    }
                    onGifSeen = {
                        gifObject => {
                            if (!gifObject) return
                            onGifSeen(gifObject, user, PINGBACK_RESPONSE_IDS[gifObject.id] || category, category)
                        }
                    }
                    onGifHover = {
                        gifObject => {
                            if (!gifObject) return
                            onGifHover(gifObject, user, PINGBACK_RESPONSE_IDS[gifObject.id] || category, category)
                        }
                    }
                    onGifClick = {
                        (e, gifObject) => {
                            if (!gifObject) return
                            this.onClick(e, gifObject, user, PINGBACK_RESPONSE_IDS[gifObject.id] || category, category)
                        }
                    }
                    onGifRightClick = {
                        (e, {
                            id
                        }) => this.trackGA('GIF Right Click', id)
                    }
                    onGifTagClick = {
                        (e, tag) => this.trackGA('GIF Tag Click', encodeURI(tag))
                    }
                    onLoadMore = {
                        () => {
                            if (!isFetching && !isOffScreen) {
                                onLoadMore
                                    ?
                                    onLoadMore() :
                                    fetchGifs({
                                        groupId,
                                        processor: PROCESSOR_MAP[groupId] || processor,
                                        pingback_id,
                                        apiKey,
                                    })
                            }
                        }
                    }
                    /> {
                        showLoader && < Loader isFetching = {
                            isFetching
                        }
                        />} {
                            isEditingStory && < Storybook isModal / >
                        } {
                            showBulkEditor && < BulkEditor / >
                        } {
                            showEditPanel && ( <
                                GifEditPanel allowBulkEditMode = {
                                    hasBulkEditPermissions
                                }
                                onClearSelection = {
                                    () => {
                                        this.gridRef.current.setSelectedGifs([])
                                    }
                                }
                                onRestoreSelection = {
                                    gifs => this.gridRef.current.setSelectedGifs(gifs)
                                }
                                />
                            )
                        } <
                        /div>
                    )
                }
            }

            export default isMobile() ?
                compose(
                    withRouter,
                    getContext({
                        isOffScreen: PropTypes.bool
                    }),
                )(SearchGrid) :
                SearchGrid