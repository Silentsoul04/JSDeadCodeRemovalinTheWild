import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getContext } from 'recompose'
import PropTypes from 'prop-types'
import storyProps from 'shared/prop-types/story'
import { fetchStoryBySlug, fetchUserStories } from 'shared/redux/fetch-stories'
import { getStoryBySlug, getMoreStoriesBySlug } from '../shared/reducers'
import locationState from 'shared/components/with-location-state'
import Story from '../components/story'

@locationState(['returnRoute'])
@getContext({ isOffScreen: PropTypes.bool })
@connect(
    (
        state,
        {
            match: {
                params: { slug },
            },
        },
    ) => ({
        story: getStoryBySlug(state, slug),
        moreStories: getMoreStoriesBySlug(state, slug),
        hasCheckedLogin: state.user.hasChecked,
        slug,
    }),
    {
        fetchStoryBySlug,
        fetchUserStories,
    },
)
class StoryPage extends PureComponent {
    static propTypes = {
        story: storyProps,
        moreStories: PropTypes.arrayOf(storyProps),
        fetchStoryBySlug: PropTypes.func.isRequired,
        fetchUserStories: PropTypes.func.isRequired,
        returnRoute: PropTypes.object,
    }
    static defaultProps = {
        story: null,
        moreStories: [],
        returnRoute: null,
    }
    componentDidMount() {
        this.getStoryData()
    }
    componentDidUpdate({ hasCheckedLogin: prevHasCheckedLogin }) {
        const { hasCheckedLogin } = this.props
        if (hasCheckedLogin && prevHasCheckedLogin !== hasCheckedLogin) {
            this.getStoryData()
        }
    }
    getStoryData() {
        const { story, moreStories, slug, fetchStoryBySlug, fetchUserStories, hasCheckedLogin } = this.props
        if (!story && hasCheckedLogin) {
            fetchStoryBySlug(slug).then(({ data }) => {
                if (!moreStories.length && data && data.user) {
                    fetchUserStories(data.user.username)
                }
            })
        }
    }
    render() {
        const { story, isOffScreen, returnRoute } = this.props
        return story && !isOffScreen ? <Story story={story} returnRoute={returnRoute} /> : null
    }
}

export default StoryPage
