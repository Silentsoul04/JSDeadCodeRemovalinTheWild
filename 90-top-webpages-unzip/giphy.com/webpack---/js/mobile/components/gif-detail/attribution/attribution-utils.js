import { avatarSize } from './attribution.css'

const ATTRIBUTION_HEIGHT = parseInt(avatarSize, 10)

// calculate the swipe width/translate
export const getSwipeStyles = (current, next, progress) => {
    const { changeIndicator = '' } = current || {}
    const isChanging = next && next.changeIndicator !== changeIndicator
    return {
        transform: isChanging ? `translateY(${progress * ATTRIBUTION_HEIGHT}px)` : null,
    }
}
