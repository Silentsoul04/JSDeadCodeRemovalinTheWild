import { INIT, SETTINGS } from '../actions'

export default (settings = {}, action = {}) => {
    switch (action.type) {
        case SETTINGS:
        case INIT: {
            const updates = {}
            if (action.data) {
                // Maybe just pass an object in? This approach seems tedious
                const { facebook_app_id } = action.data
                if (facebook_app_id) {
                    updates.facebookAppID = facebook_app_id
                }
            }
            if (action.cookies) {
                const { csrftoken } = action.cookies
                if (csrftoken) {
                    updates.csrftoken = csrftoken
                }
            }
            return { ...settings, ...updates }
        }
        default:
            return settings
    }
}
