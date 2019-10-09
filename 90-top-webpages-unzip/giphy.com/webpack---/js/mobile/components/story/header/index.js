import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import styled, { css } from 'styled-components'
import { giphyGrey } from 'shared/css/colors.css'
import { relativeUrl } from 'shared/util/url'
import { setIsShareOpen } from '../../../shared/reducers/story'
import * as selectors from '../../../shared/reducers'
import ProgressBar from '../progress-bar'
import Close from 'shared/components/icons/close'
import Share from './share'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    height: ${props => props.theme.headerHeight}px;
    left: 0;
    position: absolute;
    text-transform: uppercase;
    transform: translateY(${props => (props.hidden ? -100 : 0)}%);
    transition: transform 0.2s ease-out;
    width: 100%;
    z-index: 10;
`

const CloseContainer = styled.div``

const ContainerInner = styled.div`
    width: ${props => props.theme.cardWidth}px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.div`
    ${props =>
        !props.theme.isOnCover &&
        css`
            display: none;
        `};
    color: ${giphyGrey};
    font-size: 14px;
    font-weight: bold;
    left: 0;
    line-height: ${props => props.theme.headerHeight}px;
    position: absolute;
    text-align: center;
    top: 0;
    width: 100%;
    pointer-events: none;
`

const enhance = compose(
    withRouter,
    connect(
        state => ({
            info: selectors.getStoryInfo(state),
            currentCardIndex: selectors.getStoryCurrentCardIndex(state),
        }),
        { setIsShareOpen },
    ),
)

const Header = ({
    color,
    history,
    info,
    progress,
    peek,
    isHidden,
    location: {
        state: { returnRoute },
    },
    setIsShareOpen,
    opacity = 1,
    isDragging,
}) => {
    return (
        <Container hidden={isHidden}>
            <ContainerInner>
                <Title style={{ transform: `translate3d(0, ${peek}px, 0)` }}>GIPHY Stories</Title>
                <CloseContainer
                    onClick={() => {
                        if (returnRoute) {
                            history.push(returnRoute.pathname, returnRoute.state)
                        } else {
                            const {
                                user: { profile_url },
                            } = info
                            const url = relativeUrl(profile_url)
                            location.href = url
                        }
                    }}
                >
                    <Close />
                </CloseContainer>
                {!isDragging && <ProgressBar color={color} progress={progress} style={{ opacity }} />}
                <Share peek={peek} onClick={() => setIsShareOpen(true)} />
            </ContainerInner>
        </Container>
    )
}

export default enhance(Header)
