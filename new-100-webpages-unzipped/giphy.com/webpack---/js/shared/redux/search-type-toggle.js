// Action Type
export const SEARCH_TYPE = 'SEARCH_TYPE'
// Action
export const searchType = searchType => ({
    type: SEARCH_TYPE,
    searchType
})
// Selector
export const getSearchType = state => state
// Reducer

export default (state = 'gif', action = {}) => {
    switch (action.type) {
        case SEARCH_TYPE:
            return action.searchType
        default:
            return state
    }
}