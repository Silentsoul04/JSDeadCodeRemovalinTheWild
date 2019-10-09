import { EllipsisDropdown } from '@giphy/react-giphy-brand'
import { connect } from 'react-redux'
import download from 'downloadjs'
import { PureComponent } from 'react'
import styled from 'styled-components'
import * as selectors from 'shared/redux/reducers'
import createCard from 'shared/util/story-card-create'
import { giphyIndigo, giphyMediumLightGrey } from 'shared/css/colors.css'
import Link from 'shared/components/router/link'
import { withStorybookContext } from './storybook/context'

const EllipsisContainer = styled.div`
    position: absolute;
    right: 5px;
    z-index: 1;
    top: 5px;
    cursor: pointer;
`

const StoryEditDeleteContainer = styled.div``

const StoryEditItemBase = styled.div`
    color: ${giphyMediumLightGrey};
    cursor: pointer;
    display: block;
    padding-top: 20px;
    margin: 0px;

    &:first-child {
        padding-top: 0;
    }

    &:hover {
        color: ${giphyIndigo};
    }
`

const StoryEditLink = StoryEditItemBase.withComponent(Link)

const StoryCardExport = styled(StoryEditItemBase)`
    cursor: ${props => (props.exporting ? 'default' : 'pointer')};
    pointer-events: ${props => (props.exporting ? 'none' : 'auto')};
`

@connect(state => ({
    user: selectors.getUser(state),
}))
@withStorybookContext
class Intro extends PureComponent {
    static defaultProps = {
        showPrivacyOption: false,
    }

    state = {
        isExporting: false,
    }

    onExportCover = () => {
        const { story } = this.props
        this.setState({ isExporting: true })
        createCard(story).then(blob => {
            download(blob, story.title.replace(/[^A-Za-z0-9]+/g, ''), 'image/gif')
            this.setState({ isExporting: false })
        })
    }
    onStoryEditItemBaseClick = () => {
        const { story, onPrivacyClick } = this.props
        // grabbing onPrivacyClick from Storybook context
        onPrivacyClick(story)
    }
    render() {
        const {
            story: { story_id, is_private: isPrivate },
            user: { permissions, isStaff },
            isOpenDown,
            onTrendingClick,
            showPrivacyOption,
        } = this.props
        const { isExporting } = this.state
        return permissions && !!permissions.create_stories ? (
            <EllipsisContainer>
                <EllipsisDropdown extendDirectionUp={!isOpenDown} isHover={true}>
                    <StoryEditDeleteContainer>
                        <StoryEditLink shouldUseLinkFallback={true} href={`/create/story/finalize/${story_id}`}>
                            Edit Story
                        </StoryEditLink>
                        {showPrivacyOption && (
                            <StoryEditItemBase onClick={this.onStoryEditItemBaseClick}>
                                {isPrivate ? 'Make Story Public' : 'Make Story Private'}
                            </StoryEditItemBase>
                        )}
                        <StoryEditLink shouldUseLinkFallback={true} href={`/create/story/delete/${story_id}`}>
                            Delete Story
                        </StoryEditLink>
                        <StoryCardExport padding exporting={isExporting} onClick={this.onExportCover}>
                            {isExporting ? 'Exporting...' : 'Export Cover'}
                        </StoryCardExport>
                        {isStaff && onTrendingClick && (
                            <StoryEditItemBase onClick={onTrendingClick}>Trend Story</StoryEditItemBase>
                        )}
                    </StoryEditDeleteContainer>
                </EllipsisDropdown>
            </EllipsisContainer>
        ) : null
    }
}

export default Intro
