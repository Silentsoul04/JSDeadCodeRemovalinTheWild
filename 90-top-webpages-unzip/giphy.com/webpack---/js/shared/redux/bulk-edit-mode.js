// Action Type
export const BULK_EDIT_MODE = 'BULK_EDIT_MODE'
export const TOGGLE_BULK_EDIT_MODE = 'TOGGLE_BULK_EDIT_MODE'
// Action
export const bulkEditMode = isOn => ({ type: BULK_EDIT_MODE, isOn })
export const toggleBulkEditMode = () => ({ type: TOGGLE_BULK_EDIT_MODE })
// Selector
export const getIsBulkEditMode = state => state
// Reducer

export default (state = false, action = {}) => {
    switch (action.type) {
        case TOGGLE_BULK_EDIT_MODE:
            return !state
        case BULK_EDIT_MODE:
            return !!action.isOn
        default:
            return state
    }
}
