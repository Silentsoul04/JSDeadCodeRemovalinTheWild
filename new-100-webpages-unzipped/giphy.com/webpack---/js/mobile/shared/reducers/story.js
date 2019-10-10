import {
    omit
} from 'lodash'

export const RESET_STORY = 'RESET_STORY'
export const STORY_NEXT = 'STORY_NEXT'
export const STORY_PREVIOUS = 'STORY_PREVIOUS'
export const STORY_CURRENT_CARD = 'STORY_CURRENT_CARD'
export const STORY_FOCUS = 'STORY_FOCUS'
export const STORY_SHARE_OPEN = 'STORY_SHARE_OPEN'
export const STORY_GIF_MENU_OPEN = 'STORY_GIF_MENU_OPEN'
export const STORY_CLOSE_OVERLAY = 'STORY_CLOSE_OVERLAY'
export const STORY_INFO = 'STORY_INFO'

const DEFAULTS = {
    info: {},
    currentCardIndex: 0,
    currentCard: null,
    nextStory: null,
    previousStory: null,
    progress: 0,
    isFocused: false,
    isShareOpen: false,
    isGifMenuOpen: false,
    returnRoute: null,
    cards: [],
}

export default function(state = DEFAULTS, action = {}) {
    switch (action.type) {
        case RESET_STORY:
            return { ...DEFAULTS
            }
        case STORY_NEXT:
            return { ...state,
                nextStory: action.story
            }
        case STORY_PREVIOUS:
            return { ...state,
                previousStory: action.story
            }
        case STORY_CURRENT_CARD:
            const {
                cards
            } = state
            const {
                index
            } = action
            const currentCard = index > 0 && index <= cards.length ? cards[index - 1] : null
            return {
                ...state,
                currentCardIndex: index,
                currentCard,
                progress: index / (cards.length + 1),
            }
        case STORY_INFO:
            const {
                story
            } = action
            return {
                ...state,
                cards: story.cards,
                info: omit(story, ['cards']),
            }
        case STORY_FOCUS:
            return { ...state,
                isFocused: action.isFocused
            }
        case STORY_SHARE_OPEN:
            return { ...state,
                isShareOpen: action.isOpen
            }
        case STORY_GIF_MENU_OPEN:
            return { ...state,
                isGifMenuOpen: action.isOpen
            }
        case STORY_CLOSE_OVERLAY:
            return { ...state,
                isShareOpen: false,
                isGifMenuOpen: false
            }
        default:
            return state
    }
}

export const setNextStory = story => ({
    type: STORY_NEXT,
    story
})
export const setPreviousStory = story => ({
    type: STORY_PREVIOUS,
    story
})
export const setInfo = story => ({
    type: STORY_INFO,
    story
})
export const setCurrentCardIndex = index => ({
    type: STORY_CURRENT_CARD,
    index
})
export const setIsFocused = isFocused => ({
    type: STORY_FOCUS,
    isFocused
})
export const setIsShareOpen = isOpen => ({
    type: STORY_SHARE_OPEN,
    isOpen
})
export const setIsGifMenuOpen = isOpen => ({
    type: STORY_GIF_MENU_OPEN,
    isOpen
})
export const resetStory = () => ({
    type: RESET_STORY
})
export const closeOverlay = () => ({
    type: STORY_CLOSE_OVERLAY
})

export const getNextStory = state => state.nextStory
export const getPreviousStory = state => state.previousStory
export const getCurrentCardIndex = state => state.currentCardIndex
export const getCurrentCard = state => state.currentCard
export const getProgress = state => state.progress
export const getCards = state => state.cards
export const getInfo = state => state.info
export const getIsFocused = state => state.isFocused
export const getIsShareOpen = state => state.isShareOpen
export const getIsGifMenuOpen = state => state.isGifMenuOpen
export const getIsOverlayOpen = state => state.isShareOpen || state.isGifMenuOpen
export const getReturnRoute = state => state.returnRoute