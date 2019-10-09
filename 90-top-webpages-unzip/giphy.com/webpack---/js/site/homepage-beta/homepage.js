import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getStoriesGroupedByDate, getAutoPlay, getStoryPaginationUrl } from 'shared/redux/reducers'
import { fetchTrendingStories, fetchMoreStories } from 'shared/redux/fetch-stories'
import { trackPageView } from 'shared/util/analytics'
import { googleAnalyticsEvent } from 'shared/util/analytics'
import Day from './components/day'
import GifGrid from './components/gif-grid'
import { Loader } from 'shared/components/preloader-animation'
import ClickAndScrollCarousel from 'shared/components/click-and-scroll-carousel'
import appendQuery from 'append-query'
import { WEB_API_KEY, API_URL } from 'shared/api'
import Banner from 'shared/components/banner'
import withLocationState from 'shared/components/with-location-state'
import { trendingFetchUrl } from 'shared/components/video-prototype/utils'
import { processModerationGifs } from 'shared/util/gif-process'

const Container = styled.div`
    padding-top: 4px;
    text-align: left;
`

const BannerContainer = styled.div`
    height: 96px;
    margin-bottom: 20px;
`

@withRouter
@withLocationState(['banner', 'pingback_id'])
@connect(
    state => ({
        autoPlay: getAutoPlay(state),
        storyGroups: getStoriesGroupedByDate(state, 'trending'),
        hasMoreStories: !!getStoryPaginationUrl(state, 'trending'),
        user: state.user,
    }),
    { fetchTrendingStories, fetchMoreStories },
)
export default class HomepageBeta extends PureComponent {
    static propTypes = {
        storyGroups: PropTypes.object,
        fetchTrendingStories: PropTypes.func.isRequired,
        fetchMoreStories: PropTypes.func.isRequired,
    }
    state = {
        dates: [],
        page: 1,
        isFetching: false,
    }
    componentDidMount() {
        const { fetchTrendingStories } = this.props
        fetchTrendingStories()
    }
    static getDerivedStateFromProps({ storyGroups: newStoryGroups }, { dates: prevDates }) {
        const newDates = Object.keys(newStoryGroups)
        if (newDates.length !== prevDates.length) {
            return {
                dates: newDates.sort((a, b) => new Date(b) - new Date(a)),
            }
        }
        return null
    }
    onLoadMore = async () => {
        const { page, isFetching } = this.state
        if (isFetching) return
        const { fetchMoreStories } = this.props
        this.setState({ isFetching: true })
        await fetchMoreStories('trending')
        trackPageView(`/homepage/page/${page + 1}`)
        this.setState({
            page: page + 1,
            isFetching: false,
        })
    }
    render() {
        const { storyGroups, autoPlay, hasMoreStories, banner, user, pingbackId } = this.props
        const { dates, isFetching } = this.state
        const isAllOutOfStories = dates.length > 0 && !isFetching && !hasMoreStories
        return (
            <Container>
                {banner && (
                    <BannerContainer>
                        <Banner {...banner} />
                    </BannerContainer>
                )}
                <ClickAndScrollCarousel
                    fetchUrl={appendQuery(`${API_URL}gifs/trending`, {
                        api_key: WEB_API_KEY,
                        limit: 25,
                        pingback_id: pingbackId,
                    })}
                    groupId={`trending`}
                    title={`Trending Gifs`}
                    path={`/trending-gifs`}
                    height={140}
                    styles={{ margin: `25px 0 50px` }}
                    user={user}
                    isTracking
                    onClick={() => {
                        googleAnalyticsEvent({
                            category: 'Homepage',
                            action: 'Click',
                            label: 'Trending Carousel',
                        })
                    }}
                />
                {user.isStaff && location.search.indexOf('video=1') > -1 && (
                    <ClickAndScrollCarousel
                        fetchUrl={appendQuery(trendingFetchUrl(0), { api_key: WEB_API_KEY })}
                        groupId={`trendingvideos`}
                        title={`Trending Videos`}
                        path={`/trending-videos`}
                        processor={processModerationGifs}
                        height={140}
                        styles={{ margin: `25px 0 50px` }}
                        user={user}
                        isVideo
                    />
                )}
                {dates.map((date, i) => (
                    <Day
                        key={i}
                        autoPlay={autoPlay}
                        date={new Date(date)}
                        stories={storyGroups[date]}
                        onLoadMore={i === dates.length - 1 && !isAllOutOfStories ? this.onLoadMore : null}
                    />
                ))}
                {isAllOutOfStories && <GifGrid />}
                <Loader isFetching={isFetching} />
            </Container>
        )
    }
}
