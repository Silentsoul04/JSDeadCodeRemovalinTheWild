import { PureComponent } from 'react'
import { isEqual, findIndex } from 'lodash'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withStorageContext } from 'react-storage-context'
import { withRouter } from 'react-router'
import styled, { css } from 'styled-components'
import { getUrl } from 'shared/util/gif-extract'
import { giphyNewBlack, giphyWhite } from 'shared/css/colors.css'
import { setIsShareOpen } from '../../../shared/reducers/story'
import * as selectors from '../../../shared/reducers'
import { Button } from '@giphy/react-giphy-brand'
import Attribution from './attribution'
import Title from './title'
import Subtitle from './subtitle'
import MoreStories from './more'
import routes, { getRouteFromPathname } from 'shared/routes'
import { fetchUserStories, trendingUsername } from 'shared/redux/fetch-stories'

const Container = styled.div`
    align-items: center;
    background: no-repeat url(${props => props.gif && getUrl(props.gif)}) center center;
    background-size: cover;
    box-sizing: border-box;
    color: ${giphyWhite};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px 0 0;
    position: relative;
    width: 100%;

    &:before {
        background: ${giphyNewBlack};
        content: '';
        height: 100%;
        left: 0;
        opacity: ${props => (props.isActive ? 0.8 : 0)};
        position: absolute;
        top: 0;
        transition: opacity 0.3s ease-in-out;
        width: 100%;
    }
`

const SubtitleWrapper = styled(Subtitle)`
    ${props =>
        props.theme.isShort &&
        css`
            display: none;
        `};
`

const Info = styled.div`
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    margin: 0 auto ${props => (props.theme.isSmall ? 30 : 60)}px;
    max-width: 500px;
    padding: 0 30px;
    position: relative;
    text-align: left;
    width: 100%;
`

const ShareButton = styled(Button)`
    flex-shrink: 0;
`

const isFromTrending = (state = {}) => {
    const { returnRoute = {} } = state
    return returnRoute.pathname && getRouteFromPathname(returnRoute.pathname) === routes.HOME
}

const enhance = compose(
    withStorageContext,
    withRouter,
    connect(
        (
            state,
            {
                match: {
                    params: { slug },
                },
                local: { watchedStories },
            },
        ) => ({
            size: selectors.getAppSize(state),
            info: selectors.getStoryInfo(state),
            trendingStories: selectors.getStoriesByUsername(state, trendingUsername),
            usernameStories: selectors.getMoreStoriesBySlug(state, slug, watchedStories),
            isOverlayOpen: selectors.getStoryIsOverlayOpen(state),
        }),
        { setIsShareOpen, fetchUserStories },
    ),
)

class EndCard extends PureComponent {
    state = {}
    static getDerivedStateFromProps(
        {
            // when we integrate this we can load more
            // local: { watchedStories },
            match: {
                params: { slug },
            },
            location,
            usernameStories,
            trendingStories,
        },
        prevState,
    ) {
        let moreStories = usernameStories
        if (trendingStories.length && isFromTrending(location.state)) {
            moreStories = trendingStories
        }
        const currentIndex = findIndex(moreStories, s => s.slug === slug)
        const firstStories = moreStories.slice(0, currentIndex)
        const afterStories = moreStories.slice(currentIndex + 1)
        moreStories = [...afterStories, ...firstStories]
        return isEqual(moreStories, prevState.moreStories) ? null : { moreStories }
    }

    render() {
        const {
            location: {
                state: { returnRoute },
            },
            size,
            info,
            isActive,
            isOverlayOpen,
            setIsShareOpen,
        } = this.props
        const { moreStories } = this.state
        const { cover_gif, title, user } = info
        return (
            <Container gif={cover_gif ? cover_gif.gif : null} style={{ height: size.height }} isActive={isActive}>
                <Info>
                    <SubtitleWrapper>That&apos;s All!</SubtitleWrapper>
                    <Title>{title}</Title>
                    {user && <Attribution user={user} />}
                    <ShareButton onClick={() => setIsShareOpen(true)}>Share This Story</ShareButton>
                </Info>
                {moreStories.length > 0 && (
                    <MoreStories
                        stories={moreStories}
                        returnRoute={returnRoute}
                        isPaused={!isActive || isOverlayOpen}
                    />
                )}
            </Container>
        )
    }
}

export default enhance(EndCard)
