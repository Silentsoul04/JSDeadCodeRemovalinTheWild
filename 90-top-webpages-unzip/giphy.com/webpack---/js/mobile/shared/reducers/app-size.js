import { APP_SIZE } from '../actions'

export default (
    dims = {
        width: 0,
        height: 0,
    },
    action = {},
) => {
    switch (action.type) {
        case APP_SIZE:
            return {
                width: action.width,
                height: action.height,
            }
        default:
            return dims
    }
}
