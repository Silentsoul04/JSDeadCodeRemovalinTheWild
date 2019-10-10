import {
    PureComponent
} from 'react'
import {
    isEmpty
} from 'lodash'
import {
    connect
} from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
    getStoriesGroupedByDate,
    getAutoPlay,
    getStoryPaginationUrl,
    getUser
} from 'shared/redux/reducers'
import {
    fetchTrendingStories,
    fetchMoreStories
} from 'shared/redux/fetch-stories'
import {
    trackPageView
} from 'shared/util/analytics'
import {
    processTrendingAPIGifs
} from 'shared/util/gif-process'
import {
    Loader
} from 'shared/components/preloader-animation'
import HeaderSubtitle from '../header/header-subtitle'
import GifGrid from 'shared/components/search/grid'
import {
    getContext
} from 'recompose'
import Day from './day'
import TrendingGifsCarousel from '../trending-gifs-carousel'
import {
    MOBILE_API_KEY
} from 'shared/api'

const Container = styled.div `
    text-align: left;
`

@getContext({
    isOffScreen: PropTypes.bool
})
@connect(
    state => ({
        appWidth: state.appSize.width,
        autoPlay: getAutoPlay(state),
        storyGroups: getStoriesGroupedByDate(state, 'trending'),
        hasMoreStories: !!getStoryPaginationUrl(state, 'trending'),
        hasCheckedLogin: (getUser(state) || {}).hasChecked || false,
    }), {
        fetchTrendingStories,
        fetchMoreStories
    },
)
export default class TrendingStories extends PureComponent {
    static propTypes = {
        username: PropTypes.string,
        showLatestLabel: PropTypes.bool,
        storyGroups: PropTypes.object,
        fetchTrendingStories: PropTypes.func.isRequired,
        showLatestStoryHeader: PropTypes.bool,
        hasCheckedLogin: PropTypes.bool,
    }
    static defaultProps = {
        storyGroups: {},
    }
    state = {
        dates: [],
        page: 1,
        isFetching: false,
    }
    componentDidMount() {
        const {
            hasCheckedLogin,
            fetchTrendingStories
        } = this.props
        hasCheckedLogin && fetchTrendingStories()
    }
    static getDerivedStateFromProps({
        storyGroups: newStoryGroups,
        isOffScreen
    }, {
        dates: prevDates
    }) {
        if (isOffScreen) {
            // TODO: lots of stories fetch while offscreen causing updates
            return null
        }
        const newDates = Object.keys(newStoryGroups)
        if (newDates.length !== prevDates.length) {
            return {
                dates: newDates.sort((a, b) => new Date(b) - new Date(a)),
            }
        }
        return null
    }
    componentDidUpdate({
        hasCheckedLogin: prevHasCheckedLogin
    }) {
        const {
            hasCheckedLogin,
            fetchTrendingStories
        } = this.props
        if (hasCheckedLogin && hasCheckedLogin !== prevHasCheckedLogin) {
            fetchTrendingStories()
        }
    }
    onLoadMore = async () => {
        const {
            isOffScreen
        } = this.props
        const {
            page,
            isFetching
        } = this.state
        if (isFetching || isOffScreen) return
        const {
            fetchMoreStories
        } = this.props
        this.setState({
            isFetching: true
        })
        await fetchMoreStories('trending')
        trackPageView(`/homepage/page/${page + 1}`)
        this.setState({
            page: page + 1,
            isFetching: false,
        })
    }
    render() {
        const {
            storyGroups,
            appWidth,
            autoPlay,
            pingbackId,
            hasMoreStories
        } = this.props
        const {
            dates,
            isFetching
        } = this.state
        const [firstDay] = dates
        const [mostRecentStory] = storyGroups[firstDay] || []
        const isAllOutOfStories = dates.length > 0 && !isFetching && !hasMoreStories

        return ( <
            Container > {!isEmpty(storyGroups) && < TrendingGifsCarousel pingbackId = {
                    pingbackId
                }
                limit = {
                    50
                }
                />} {
                    dates.map((date, i) => ( <
                        Day key = {
                            date
                        }
                        autoPlay = {
                            autoPlay
                        }
                        date = {
                            new Date(date)
                        }
                        appWidth = {
                            appWidth
                        }
                        stories = {
                            storyGroups[date]
                        }
                        hideFeatured = {
                            i === 0
                        }
                        onLoadMore = {
                            i === dates.length - 1 && !isAllOutOfStories ? this.onLoadMore : null
                        }
                        latestStory = {
                            mostRecentStory
                        }
                        />
                    ))
                } {
                    isAllOutOfStories ? ( <
                        div >
                        <
                        HeaderSubtitle subtitle = {
                            'Trending GIFs'
                        }
                        autoPlay = {
                            true
                        }
                        /> <
                        GifGrid groupId = {
                            `trending`
                        }
                        processor = {
                            processTrendingAPIGifs
                        }
                        pingback_id = {
                            pingbackId
                        }
                        apiKey = {
                            MOBILE_API_KEY
                        }
                        /> <
                        /div>
                    ) : ( <
                        Loader isFetching = {
                            isFetching
                        }
                        />
                    )
                } <
                /Container>
            )
        }
    }