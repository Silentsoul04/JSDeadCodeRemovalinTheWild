// Action Type
export const FEATURED_CHANNELS = 'FEATURED_CHANNELS'

// Action
export const setFeaturedChannels = featuredChannels => ({ type: FEATURED_CHANNELS, featuredChannels })
// Selector
export const getFeaturedChannels = state => state

// Reducer
export default (state = [], action = {}) => {
    switch (action.type) {
        case FEATURED_CHANNELS:
            return [...state, ...action.featuredChannels]
        default:
            return state
    }
}
