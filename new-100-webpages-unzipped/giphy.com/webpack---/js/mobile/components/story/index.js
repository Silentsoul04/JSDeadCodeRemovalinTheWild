import {
    PureComponent
} from 'react'
import {
    connect
} from 'react-redux'
import {
    compose
} from 'redux'
import {
    ThemeProvider
} from 'styled-components'
import {
    withStorageContext
} from 'react-storage-context'
import {
    withRouter
} from 'react-router'
import Hammer from 'react-hammerjs'
import {
    Tweenable
} from 'shifty'
import {
    googleAnalyticsEvent,
    trackPageView
} from 'shared/util/analytics'
import * as selectors from '../../shared/reducers'
import * as urlUtil from 'url'
import {
    resetStory,
    setInfo,
    setNextStory,
    setPreviousStory,
    setCurrentCardIndex,
    setIsFocused,
    setIsShareOpen,
    setIsGifMenuOpen,
} from '../../shared/reducers/story'
import Content from './content'
import withStoryContextManager, {
    withStoryContext
} from './context'

const AUTO_PLAY_DELAY = 6000
const MIN_PEEK = window.innerWidth * 0.05 // width of next & previous cover stories
const CARD_WIDTH = window.innerWidth - MIN_PEEK * 2
const COVERS_CAROUSEL_SHIFT = MIN_PEEK - CARD_WIDTH // horizontal distance card moves in a swipe
const MIN_TRANSLATE_X = COVERS_CAROUSEL_SHIFT - CARD_WIDTH // left most shifted value of covers carousel (negative)
const MAX_TRANSLATE_X = MIN_PEEK // right most shifted value of covers carousel (positive)
const DEBUG_DONT_AUTOPLAY = false
const HEADER_HEIGHT = 60
const enhance = compose(
    withStorageContext,
    withRouter,
    connect(
        state => {
            return {
                size: selectors.getAppSize(state),
                cards: selectors.getStoryCards(state),
                currentCardIndex: selectors.getStoryCurrentCardIndex(state),
                isGifFocus: selectors.getStoryIsFocused(state),
                isOverlay: selectors.getStoryIsOverlayOpen(state),
                stories: selectors.getAllStoriesByLoadOrder(state),
                nextStory: selectors.getNextStory(state),
                previousStory: selectors.getPreviousStory(state),
            }
        }, {
            resetStory,
            setInfo,
            setNextStory,
            setPreviousStory,
            setCurrentCardIndex,
            setIsShareOpen,
            setIsGifMenuOpen
        },
    ),
)
const {
    query
} = urlUtil.parse(window.location.search, true)

@withStoryContextManager
@withStoryContext
class Story extends PureComponent {
    state = {
        autoPlayProgress: 0,
        horizontalPanProgress: 0, // 0 to 1 value where 1 is a completed gesture
        horizontalDistanceRemaining: 0, // maximum X distance remaining that can be swiped based on starting position of gesture
        translateX: COVERS_CAROUSEL_SHIFT, // positions carousel of story covers horizontally
        translateY: 0, // positions each story cover vertically
        peekY: 0, // positions each gif card vertically
        isNext: false, // gesture left to next story
        isPrevious: false, // gesture right to previous story
    }
    autoPlayTween = null
    panTween = null
    componentDidMount() {
        this.updateStoryData()
        this.autoPlayTween = new Tweenable()
        this.autoPlayStart()
        this.panTween = new Tweenable()
        this.handleAmp()
    }
    componentWillUnmount() {
        this.autoPlayStop()
        this.panTweenStop()
        this.autoPlayTween.dispose()
        this.panTween.dispose()
    }
    componentDidUpdate({
        isOverlay: prevIsOverlay,
        isGifFocus: prevIsGifFocus,
        currentCardIndex: prevItem,
        story: prevStory,
    }) {
        const {
            isOverlay,
            isGifFocus,
            currentCardIndex,
            story
        } = this.props

        if (isOverlay !== prevIsOverlay) {
            isOverlay ? this.autoPlayStop() : this.autoPlayStart()
        }
        if (isGifFocus !== prevIsGifFocus) {
            isGifFocus ? this.autoPlayStop() : this.autoPlayStart()
        }
        if (currentCardIndex !== prevItem) {
            trackPageView(`/stories/${story.slug}/page/${currentCardIndex + 1}`)
            // scrolled vertically to new card
            const autoPlay = !(isOverlay || isGifFocus)
            this.scrollToItem(currentCardIndex, autoPlay)
        }
        if (prevStory && story) {
            if (prevStory.story_id !== story.story_id) {
                // scrolled horizontally to new story
                this.updateStoryData()
                this.resetCoversCarousel()
                this.autoPlayStart()
            }
        }
    }

    handleAmp() {
        const {
            setIsShareOpen,
            setIsGifMenuOpen
        } = this.props

        if (query && query.ampPage && query.ampAction) {
            const {
                ampPage,
                ampAction
            } = query

            this.onSwipe(parseInt(ampPage))
            this.autoPlayStop()

            if (ampAction === 'share') {
                setIsShareOpen(true)
            }
            if (ampAction === 'ellipsis') {
                setIsGifMenuOpen(true)
            }
        }
    }

    updateStoryData(newStory) {
        const {
            story,
            setInfo,
            resetStory,
            stories,
            setNextStory,
            setPreviousStory
        } = this.props
        const currentStoryIndex = stories.map(s => s.story_id).indexOf((newStory || story).story_id)
        const nextStory = stories[currentStoryIndex + 1] || null
        const previousStory = stories[currentStoryIndex - 1] || null

        resetStory()
        setInfo(newStory || story)
        setNextStory(nextStory)
        setPreviousStory(previousStory)
    }
    resetCoversCarousel() {
        this.setState({
            horizontalPanProgress: 0,
            horizontalDistanceRemaining: 0,
            translateX: COVERS_CAROUSEL_SHIFT,
            peekY: 0,
            isNext: false,
            isPrevious: false,
        })
    }
    hasMoreGifs(offsetDirection) {
        const {
            nextStory,
            previousStory,
            currentCardIndex,
            cards
        } = this.props
        const isNext = offsetDirection === 2
        const isPrev = offsetDirection === 4
        const isHorizontal = isNext || isPrev

        if (isHorizontal && currentCardIndex === cards.length + 1) return false
        if ((!isNext && !isPrev) || (isNext && !nextStory) || (isPrev && !previousStory)) return false
        return true
    }
    tween(options) {
        this[options.which]
            .tween({ ...options,
                easing: 'linear',
                step: state => this.setState(state)
            })
            .then(() => options.callback())
            .catch(() => {})
    }
    scrollToItem(item, autoPlay = true) {
        const {
            isGifFocus
        } = this.props
        let position = this.items.getWrappedInstance().getItemPosition(item) || 0

        this.autoPlayStop()
        this.setState({
                translateY: item < 1 ? 0 : position,
            },
            () => {
                item < 1 && isGifFocus && setIsFocused(false)
                autoPlay && this.autoPlayStart()
            },
        )
    }
    onSwipe = (increment = 0) => {
        const {
            currentCardIndex,
            story: {
                cards
            },
            setCurrentCardIndex,
        } = this.props
        const nextItem = Math.max(0, Math.min(currentCardIndex + increment, cards.length + 1))
        googleAnalyticsEvent({
            category: `Story`,
            action: `Story Progress`,
            label: `Progress ${nextItem / (cards.length + 1)}`,
        })
        setCurrentCardIndex(nextItem)
    }
    onPeekStop({
        offsetDirection,
        velocity
    }) {
        if (!this.hasMoreGifs(offsetDirection)) return
        this.panTweenStart(velocity)
    }
    onPeekStart(data) {
        const {
            offsetDirection,
            srcEvent: {
                pageX
            },
        } = data

        if (!this.hasMoreGifs(offsetDirection)) return
        this.panTweenStop()
        this.setState({
            horizontalDistanceRemaining: pageX,
            isNext: offsetDirection === 2,
            isPrevious: offsetDirection === 4,
        })
    }
    onPeek({
        deltaX,
        deltaY,
        offsetDirection,
        isFinal
    }) {
        const {
            peekY,
            horizontalDistanceRemaining
        } = this.state

        if (isFinal) return
        if (!this.hasMoreGifs(offsetDirection)) return
        this.autoPlayStop()

        switch (offsetDirection) {
            case 2:
            case 4:
                const progress = deltaX / horizontalDistanceRemaining

                this.setState({
                    peekY: 0,
                    translateX: Math.min(
                        Math.max(COVERS_CAROUSEL_SHIFT + progress * CARD_WIDTH, MIN_TRANSLATE_X),
                        MAX_TRANSLATE_X,
                    ),
                    horizontalPanProgress: Math.min(Math.abs(progress), 1),
                })
                break
            case 8:
            case 16:
                if (Math.abs(deltaY - peekY) < 200) {
                    this.setState({
                        peekY: deltaY / 5,
                        translateX: COVERS_CAROUSEL_SHIFT,
                        horizontalPanProgress: 0,
                    })
                }
                break
        }
    }
    autoPlayStop() {
        if (this.autoPlayTween.isPlaying()) {
            this.autoPlayTween.stop(false)
        }
        this.setState({
            autoPlayProgress: 0
        })
    }
    panTweenStop() {
        if (this.panTween.isPlaying()) {
            this.panTween.stop(false)
            this.resetCoversCarousel()
        }
    }
    doNext = () => this.onSwipe(1)
    autoPlayStart() {
        if (!DEBUG_DONT_AUTOPLAY) {
            const {
                cards,
                currentCardIndex,
                isGifFocus
            } = this.props
            this.autoPlayStop()
            if (!isGifFocus && currentCardIndex < cards.length + 1) {
                this.tween({
                    from: {
                        autoPlayProgress: 0
                    },
                    to: {
                        autoPlayProgress: 1
                    },
                    duration: AUTO_PLAY_DELAY * (currentCardIndex < 1 ? 2 : 1),
                    which: 'autoPlayTween',
                    callback: this.animateToNext,
                })
            }
        }
    }
    doSwipe = () => {
        const {
            isGifFocus
        } = this.props
        // when gif unfocused autoPlayStart will be called
        if (!isGifFocus) {
            this.onSwipe(1)
        }
    }
    animateToNext = () => {
        const {
            currentCardIndex,
            waitForMediaEnd
        } = this.props
        if (currentCardIndex === 0) {
            // no loops on the cover card
            this.doSwipe()
        } else {
            // wait for a loop, will immediately fire if we have looped
            waitForMediaEnd(this.doSwipe)
        }
    }
    panTweenStart(velocity) {
        const {
            translateX,
            horizontalPanProgress,
            isNext
        } = this.state
        const translateXEnd = isNext ? MIN_TRANSLATE_X : MAX_TRANSLATE_X

        this.panTweenStop()
        this.tween({
            from: {
                translateX,
                horizontalPanProgress
            },
            to: {
                translateX: translateXEnd,
                horizontalPanProgress: 1
            },
            duration: Math.min(1000 - Math.abs(velocity * 100), 200),
            which: 'panTween',
            callback: () => this.navigate(),
        })
    }
    navigate() {
        const {
            nextStory,
            previousStory,
            history,
            returnRoute
        } = this.props
        const {
            isNext
        } = this.state
        const newStory = isNext ? nextStory : previousStory
        this.updateStoryData(newStory)
        this.resetCoversCarousel()
        googleAnalyticsEvent({
            category: `Story`,
            action: `Story Swipe ${isNext ? `Left` : `Right`}`,
        })
        history.push(`/stories/${newStory.slug}`, {
            returnRoute,
        })
    }

    render() {
        const {
            user,
            size,
            currentCardIndex
        } = this.props
        const {
            autoPlayProgress,
            horizontalPanProgress,
            translateX,
            translateY,
            peekY,
            isNext,
            isPrevious,
        } = this.state
        const translate = (translateY - peekY) * -1
        return ( <
            Hammer direction = "DIRECTION_ALL"
            options = {
                {
                    touchAction: 'pan-x', // for scrolling childelements (carousel)
                    recognizers: {
                        pan: {
                            enable: currentCardIndex < 1,
                        },
                    },
                }
            }
            onPanStart = {
                data => this.onPeekStart(data)
            }
            onPan = {
                data => this.onPeek(data)
            }
            onPanEnd = {
                data => this.onPeekStop(data)
            }
            onSwipeUp = {
                () => this.onSwipe(1)
            }
            onSwipeDown = {
                () => this.onSwipe(-1)
            } >
            <
            div >
            <
            ThemeProvider theme = {
                {
                    isSmall: size.width <= 375,
                    isShort: size.height <= 550,
                    minPeek: MIN_PEEK,
                    cardWidth: CARD_WIDTH,
                    headerHeight: HEADER_HEIGHT,
                    isOnCover: currentCardIndex < 1,
                    closeMarginLeft: (size.width - CARD_WIDTH) / 2,
                }
            } >
            <
            Content itemsRef = {
                c => (this.items = c)
            }
            autoPlayProgress = {
                autoPlayProgress
            }
            horizontalPanProgress = {
                horizontalPanProgress
            }
            translateX = {
                translateX
            }
            translateY = {
                translate
            }
            peekY = {
                peekY
            }
            isNext = {
                isNext
            }
            isPrevious = {
                isPrevious
            }
            user = {
                user
            }
            minPeek = {
                MIN_PEEK
            }
            /> <
            /ThemeProvider> <
            /div> <
            /Hammer>
        )
    }
}

export default enhance(Story)