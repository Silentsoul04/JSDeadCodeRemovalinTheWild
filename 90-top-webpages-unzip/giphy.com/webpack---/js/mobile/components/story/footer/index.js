import { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import * as selectors from '../../../shared/reducers'
import { setIsShareOpen, setIsGifMenuOpen } from '../../../shared/reducers/story'
import { giphyWhite } from 'shared/css/colors.css'
import Attribution from './attribution'
import Caption from './caption'
import { getFavorites } from '../../../shared/actions'
import Favorite from 'shared/components/favorite/favorite'
import { googleAnalyticsEvent } from 'shared/util/analytics'

const Container = styled.div`
    color: ${giphyWhite};
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px 10px 10px;
    bottom: 0;
    left: 0;
    position: absolute;
    transform: translateY(${props => (props.hidden ? 100 : 0)}%);
    transition: transform 0.2s ease-out;
    z-index: 9999;

    &:before {
        background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
        bottom: 0;
        content: '';
        height: 20vh;
        left: 0;
        pointer-events: none;
        position: absolute;
        width: 100%;
        z-index: -1;
    }
`

const Button = styled.div`
    font-size: 18px;
    height: 36px;
    flex-shrink: 0;
    line-height: 40px;
    margin-right: 6px;
    text-align: center;
    width: 36px;
    position: relative;
`

const FavoriteWrapper = styled.div`
    transform: scale(1.2) translate(-4px, -2px);
`

const More = styled(Button)`
    transform: rotate(90deg);
`

@connect(
    state => {
        const currentCard = selectors.getStoryCurrentCard(state)
        return {
            currentCard,
            currentCardIndex: selectors.getStoryCurrentCardIndex(state),
            favorites: selectors.getFavorites(state),
            currentGif: selectors.getGifById(state, currentCard.gifId),
        }
    },
    { setIsShareOpen, setIsGifMenuOpen, getFavorites },
)
export default class Footer extends PureComponent {
    state = {
        lastCardIndex: -1,
        isPrevious: false,
    }
    static getDerivedStateFromProps({ currentCardIndex }, prevState) {
        const { lastCardIndex } = prevState
        if (currentCardIndex !== lastCardIndex) {
            return {
                lastCardIndex: currentCardIndex,
                isPrevious: currentCardIndex < lastCardIndex,
            }
        }
        return null
    }
    render() {
        const {
            currentCard,
            isHidden,
            setIsShareOpen,
            setIsGifMenuOpen,
            currentGif: { id, is_favorite: isFavorite = false, url },
        } = this.props
        const { isPrevious } = this.state
        const { caption, gifId } = currentCard

        return (
            <Container hidden={isHidden}>
                <Attribution />
                <Button>
                    <FavoriteWrapper>
                        <Favorite
                            id={id}
                            isFavorite={isFavorite}
                            url={url}
                            showLabel={false}
                            onClick={gif =>
                                googleAnalyticsEvent({ category: `Story`, action: `Story Gif Heart`, label: gif.id })
                            }
                        />
                    </FavoriteWrapper>
                </Button>
                <Button className={`ss-send`} onClick={() => setIsShareOpen(true)} />
                <More className={`ss-ellipsis`} onClick={() => setIsGifMenuOpen(true)} />
                {caption && (
                    <Caption key={gifId} isPrevious={isPrevious}>
                        {caption}
                    </Caption>
                )}
            </Container>
        )
    }
}
