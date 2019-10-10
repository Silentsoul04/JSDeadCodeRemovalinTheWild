import {
    Fragment
} from 'react'
import {
    connect
} from 'react-redux'
import styled from 'styled-components'
import * as selectors from '../../shared/reducers'
import Header from './header/index'
import Footer from './footer'
import Items from './items'
import Share from './share/index'
import Overlay from '../../shared/overlay'
import GifMenu from './gif-menu'
import {
    closeOverlay
} from '../../shared/reducers/story'

const Container = styled.div `
    box-sizing: border-box;
    filter: ${props => (props.isOverlay ? 'grayscale(100%)' : 'none')};
    overflow: hidden;
    perspective: 100px;
    position: relative;
    transition: ${props => (props.isOverlay ? 'filter 0.2s ease-out' : 'none')};
`

const Peek = styled.div `
    left: 0;
    position: absolute;
    top: 0;
    transform-style: preserve-3d;
    transition: ${props => (props.isPeeking ? `none` : `transform 0.4s ease-in-out`)};
    width: 100%;
`

const StoryContent = ({
        autoPlayProgress,
        size,
        horizontalPanProgress,
        cards,
        currentCardIndex,
        currentCard,
        user,
        peekY,
        translateX,
        translateY,
        itemsRef,
        isOverlay,
        isGifMenu,
        isGifFocus,
        isShare,
        onFavorite,
        onTransitionEnd,
        storiesIndex,
        minPeek,
        isNext,
        isPrevious,
        closeOverlay,
    }) => ( <
        Fragment >
        <
        Container style = {
            size
        }
        isOverlay = {
            isOverlay
        } >
        <
        Header peek = {
            translateY
        }
        progress = {
            (currentCardIndex + autoPlayProgress) / (cards.length + 1)
        }
        isHidden = {
            isGifFocus
        }
        opacity = {
            1 - horizontalPanProgress
        }
        isDragging = {
            horizontalPanProgress !== 0
        }
        /> <
        Peek isPeeking = {
            Math.abs(peekY) > 0
        }
        style = {
            {
                transform: `translateY(${translateY}px)`
            }
        }
        onTransitionEnd = {
            onTransitionEnd
        } >
        <
        Items ref = {
            itemsRef
        }
        storiesIndex = {
            storiesIndex
        }
        translateX = {
            translateX
        }
        horizontalPanProgress = {
            horizontalPanProgress
        }
        minPeek = {
            minPeek
        }
        isNext = {
            isNext
        }
        isPrevious = {
            isPrevious
        }
        progress = {
            (currentCardIndex + autoPlayProgress) / (cards.length + 1)
        }
        /> <
        /Peek> {
            currentCard && < Footer peek = {
                peekY
            }
            isHidden = {
                isOverlay || isGifFocus
            }
            onFavorite = {
                onFavorite
            }
            />} <
            /Container> {
                isOverlay && ( <
                        Overlay closeOverlay = {
                            closeOverlay
                        } > {
                            isShare && < Share user = {
                                user
                            }
                            />} {
                                isGifMenu && < GifMenu / >
                            } <
                            /Overlay>
                        )
                    } <
                    /Fragment>
            )

            export default connect(
                state => ({
                    size: selectors.getAppSize(state),
                    cards: selectors.getStoryCards(state),
                    currentCardIndex: selectors.getStoryCurrentCardIndex(state),
                    currentCard: selectors.getStoryCurrentCard(state),
                    isGifFocus: selectors.getStoryIsFocused(state),
                    isOverlay: selectors.getStoryIsOverlayOpen(state),
                    isShare: selectors.getStoryIsShareOpen(state),
                    isGifMenu: selectors.getStoryIsGifMenuOpen(state),
                }), {
                    closeOverlay
                },
            )(StoryContent)