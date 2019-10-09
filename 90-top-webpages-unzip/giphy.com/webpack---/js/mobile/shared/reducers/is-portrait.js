import { ORIENTATION } from '../actions'

export default (isPortrait = true, action = {}) => {
    switch (action.type) {
        case ORIENTATION:
            return action.isPortrait
        default:
            return isPortrait
    }
}
