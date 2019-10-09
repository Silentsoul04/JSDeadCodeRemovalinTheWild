// Action Type
export const TRENDING_TAGS = 'TRENDING_TAGS'

// Action
export const setTrendingTags = trendingTags => ({ type: TRENDING_TAGS, trendingTags })
// Selector
export const getTrendingTags = state => state

// Reducer
export default (state = [], action = {}) => {
    switch (action.type) {
        case TRENDING_TAGS:
            return [...state, ...action.trendingTags]
        default:
            return state
    }
}
