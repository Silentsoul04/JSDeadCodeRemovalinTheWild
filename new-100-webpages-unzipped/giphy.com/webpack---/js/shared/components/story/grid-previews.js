import {
    PureComponent
} from 'react'
import {
    withStorageContext
} from 'react-storage-context'
import {
    withRouter
} from 'react-router'
import {
    uniq,
    throttle
} from 'lodash'
import {
    googleAnalyticsEvent
} from 'shared/util/analytics'
import TrendStoryModal from 'shared/components/story/trend-story/add-modal'
import MasonryGrid from './masonry-grid'
import StoryItem from './story-item'
import {
    compose
} from 'recompose'

const enhance = compose(
    withStorageContext,
    withRouter,
)

class Previews extends PureComponent {
    static defaultProps = {
        stories: [],
        columns: 0,
        noFeatured: false,
        isFixedHeight: false,
        width: 0,
        showEditMenu: false,
        showTrendStory: false,
        showUsername: false,
        openMenuDown: false,
        onStoryClick: null,
    }
    state = {
        trendingStoryUrl: '',
        isTrendingModal: false,
    }
    onClick = (e, {
        slug,
        story_id
    }) => {
        const {
            history,
            location,
            returnRoute
        } = this.props
        // TODO setting the story as watched probably won't end up here
        const {
            saveLocal,
            local: {
                watchedStories = []
            },
        } = this.props

        saveLocal({
            watchedStories: uniq([...watchedStories, story_id])
        })

        googleAnalyticsEvent({
            category: `Story`,
            action: `Next Story`,
            label: slug,
        })

        if (!e.metaKey) {
            e.preventDefault()
            history.push(`/stories/${slug}`, {
                returnRoute: returnRoute || location,
            })
        }
    }

    scroll = throttle(() => {
        if (!this.el) return
        const {
            onLoadMore
        } = this.props
        const {
            bottom
        } = this.el.getBoundingClientRect()
        if (bottom <= window.innerHeight * 1.5) {
            onLoadMore && onLoadMore()
        }
    }, 250)

    componentDidMount() {
        const {
            onLoadMore
        } = this.props
        if (onLoadMore) {
            this.bindScrolling()
        }
    }

    componentWillUnmount() {
        this.unbindScrolling()
    }

    componentDidUpdate(prevProps) {
        const {
            stories,
            onLoadMore
        } = this.props
        if (prevProps.stories !== stories) {
            if (onLoadMore) {
                // let state changes propagate
                setTimeout(this.scroll, 0)
            }
        }
        if (prevProps.onLoadMore !== onLoadMore) {
            onLoadMore ? this.bindScrolling() : this.unbindScrolling()
        }
    }

    bindScrolling() {
        this.unbindScrolling()
        window.addEventListener('scroll', this.scroll, false)
    }

    unbindScrolling() {
        window.removeEventListener('scroll', this.scroll, false)
    }

    openTrendingModal = ({
        url
    }) => {
        this.setState({
            trendingStoryUrl: url,
            isTrendingModal: true,
        })
    }
    closeTrendingModal = () => {
        this.setState({
            trendingStoryUrl: '',
            isTrendingModal: false,
        })
    }

    render() {
        const {
            stories,
            columns,
            width,
            noFeatured,
            autoPlay,
            isFixedHeight,
            showEditMenu,
            showTrendStory,
            showUsername,
            openMenuDown,
            onStoryClick,
        } = this.props
        const {
            trendingStoryUrl,
            isTrendingModal
        } = this.state
        return ( <
            div ref = {
                el => (this.el = el)
            }
            style = {
                {
                    textAlign: 'left'
                }
            } >
            <
            MasonryGrid columns = {
                columns
            }
            width = {
                width
            }
            noFeatured = {
                noFeatured
            }
            isFixedHeight = {
                isFixedHeight
            } > {
                stories.map(story => ( <
                    StoryItem key = {
                        `${story.trending_id || '0'}-${story.story_id}`
                    }
                    hasWatched = {
                        false
                    }
                    autoPlay = {
                        autoPlay
                    }
                    story = {
                        story
                    }
                    showEditMenu = {
                        showEditMenu
                    }
                    showUsername = {
                        showUsername
                    }
                    openMenuDown = {
                        openMenuDown
                    }
                    onTrendingClick = {
                        showEditMenu && showTrendStory ? () => this.openTrendingModal(story) : null
                    }
                    useStoryLink = {
                        true
                    }
                    onClick = {
                        onStoryClick || this.onClick
                    }
                    />
                ))
            } <
            /MasonryGrid> {
                isTrendingModal && < TrendStoryModal url = {
                    trendingStoryUrl
                }
                onClose = {
                    this.closeTrendingModal
                }
                />} <
                /div>
            )
        }
    }

    export default enhance(Previews)