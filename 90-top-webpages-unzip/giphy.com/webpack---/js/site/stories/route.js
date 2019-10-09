import { lazy } from 'react'

const ChannelStories = lazy(() => import(/* webpackChunkName: "desktopChannelStories" */ './channel-stories'))

const ChannelStoriesRoute = ({
    match: {
        params: { username = '' },
    },
}) => <ChannelStories username={username} />

export default ChannelStoriesRoute
