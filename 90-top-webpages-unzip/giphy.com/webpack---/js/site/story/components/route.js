import { lazy } from 'react'

const Story = lazy(() => import(/* webpackChunkName: "desktopStory" */ './story'))

const StoryRoute = ({
    match: {
        params: { slug },
    },
}) => <Story slug={slug} />

export default StoryRoute
