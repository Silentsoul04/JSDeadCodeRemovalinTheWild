import { PureComponent } from 'react'
import styled from 'styled-components'
import { StoryPreview } from '@giphy/react-giphy-brand'
import { withStorageContext } from 'react-storage-context'
import { withRouter } from 'react-router'
import { googleAnalyticsEvent } from 'shared/util/analytics'
import { uniq } from 'lodash'
import { SMALL_PORTRAIT, SLIM } from './dimensions'

const Container = styled.div`
    display: flex;
    overflow-x: auto;
    margin-bottom: ${props => (props.theme.isShort ? 12 : 25)}px;
    text-align: left;
    width: 100%;
    -webkit-overflow-scrolling: touch;
`
const StoryWrapper = styled.div`
    margin-right: 5px;
`

@withStorageContext
@withRouter
class Previews extends PureComponent {
    static defaultProps = {
        stories: [],
        onInteraction: () => {},
    }
    onClick = id => {
        const {
            stories,
            history,
            location,
            location: {
                state: { returnRoute },
            },
        } = this.props
        // TODO setting the story as watched probably won't end up here
        const {
            saveLocal,
            local: { watchedStories = [] },
        } = this.props
        saveLocal({ watchedStories: uniq([...watchedStories, id]) })

        const { slug } = stories.find(({ story_id }) => story_id === id)

        googleAnalyticsEvent({
            category: `Story`,
            action: `Next Story`,
            label: slug,
        })
        history.push(`/stories/${slug}`, {
            returnRoute: returnRoute || location,
        })
    }
    render() {
        const { stories, autoPlay, isShort, onInteraction } = this.props
        return (
            <Container onTouchStart={onInteraction}>
                {stories.map((story, index) => {
                    return (
                        <StoryWrapper key={index}>
                            <StoryPreview
                                {...(isShort ? SLIM : SMALL_PORTRAIT)}
                                hasWatched={false}
                                story={story}
                                onClick={this.onClick}
                                autoPlay={autoPlay}
                            />
                        </StoryWrapper>
                    )
                })}
            </Container>
        )
    }
}

export default Previews
