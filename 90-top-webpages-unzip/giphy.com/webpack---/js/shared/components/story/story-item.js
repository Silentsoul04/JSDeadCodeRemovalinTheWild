import styled from 'styled-components'
import { connect } from 'react-redux'
import { StoryPreview } from '@giphy/react-giphy-brand'
import { getUser } from 'shared/redux/reducers'
import EditDropdown from 'shared/components/story/edit-dropdown'
import StoryBookContextProvider from './storybook/context'
import { compose } from 'recompose'
import { formatColors } from 'shared/redux/fetch-stories'

const Container = styled.div`
    position: relative;
`

const StoryLink = styled.a`
    display: block;
    height: 100%;
`

const enhance = compose(connect(state => ({ loggedInUser: getUser(state) })))

const StoryItem = ({
    autoPlay = true,
    hasWatched = false,
    story = {},
    width = 0,
    height = 0,
    showUsername = false,
    showEditMenu = false,
    openMenuDown = false,
    loggedInUser = {},
    onClick = null,
    onTrendingClick = null,
    onStoryPreviewClick,
    showPrivacyOption = true,
    useStoryLink = true,
    Wrapper = null,
    rendition,
    useSlug = false,
    className,
    children,
}) => {
    const { isCreateCard } = story
    const { username, isStaff } = loggedInUser
    // only show edit menu if user is staff or it is their story
    const shouldShowEditMenu = showEditMenu && (isStaff || (story.user && username === story.user.username))
    // on the update story action colors aren't formatted so must format here
    const formattedStory = { ...story, ...formatColors(story) }
    const storyPreview = (
        <StoryPreview
            {...{
                autoPlay,
                hasWatched,
                showUsername,
                story: formattedStory,
                width,
                height,
                rendition,
                onClick: onStoryPreviewClick,
            }}
        >
            {children}
        </StoryPreview>
    )
    const WrapperComponent = Wrapper || Container
    const containerStyles = Wrapper ? null : { width, height }
    return (
        <StoryBookContextProvider>
            <WrapperComponent style={containerStyles} className={className}>
                {shouldShowEditMenu && (
                    <EditDropdown
                        story={formattedStory}
                        isOpenDown={openMenuDown}
                        onTrendingClick={onTrendingClick}
                        showPrivacyOption={showPrivacyOption}
                    />
                )}
                {useStoryLink ? (
                    <StoryLink
                        slug={useSlug ? story.slug : null}
                        href={isCreateCard ? '/create/story' : `/stories/${story.slug}`}
                        onClick={onClick ? e => onClick(e, story) : null}
                    >
                        {storyPreview}
                    </StoryLink>
                ) : (
                    storyPreview
                )}
            </WrapperComponent>
        </StoryBookContextProvider>
    )
}

export default enhance(StoryItem)
