import { INIT } from '../actions'

export default (categories = [], action = {}) => {
    switch (action.type) {
        case INIT: {
            return action.data.categories || []
        }
        default:
            return categories
    }
}
