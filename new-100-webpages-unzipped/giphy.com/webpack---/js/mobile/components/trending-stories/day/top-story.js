import styled from 'styled-components'
import {
    withRouter
} from 'react-router'
import {
    StoryPreview
} from '@giphy/react-giphy-brand'
import {
    BREAKPOINT_3_COLUMN,
    STORY_HEIGHT_SMALL,
    STORY_HEIGHT_LARGE,
} from 'shared/components/story/masonry-grid-layout'

const FeaturedStory = styled.div `
    margin-bottom: 30px;
`

const TopStory = ({
    story,
    width,
    children,
    history: {
        push
    },
    autoPlay
}) => ( <
    FeaturedStory > {
        children
    } <
    StoryPreview autoPlay = {
        autoPlay
    }
    story = {
        story
    }
    width = {
        width
    }
    height = {
        width > BREAKPOINT_3_COLUMN ? STORY_HEIGHT_LARGE : STORY_HEIGHT_SMALL
    }
    onClick = {
        () => push(`/stories/${story.slug}`, {
            returnRoute: {
                pathname: location.pathname
            }
        })
    }
    /> <
    /FeaturedStory>
)

export default withRouter(TopStory)