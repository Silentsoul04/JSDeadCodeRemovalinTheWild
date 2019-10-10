// Action Type
export const STORY_EDIT_MODE = 'STORY_EDIT_MODE'
export const TOGGLE_STORY_EDIT_MODE = 'TOGGLE_STORY_EDIT_MODE'
// Action
export const setStoryEditMode = isOn => ({
    type: STORY_EDIT_MODE,
    isOn
})
export const toggleStoryEditMode = () => ({
    type: TOGGLE_STORY_EDIT_MODE
})
// Selector
export const getIsStoryEditMode = state => state
// Reducer

export default (state = false, action = {}) => {
    switch (action.type) {
        case TOGGLE_STORY_EDIT_MODE:
            return !state
        case STORY_EDIT_MODE:
            return !!action.isOn
        default:
            return state
    }
}