import {
    compact
} from 'lodash'
import {
    createReducer
} from 'shared/redux/redux-util'

export const ADD_CHANNEL = 'ADD_CHANNEL'
export const ADD_CHANNELS = 'ADD_CHANNELS'

export const defaulChannelState = {}
export const addChannel = channel => ({
    type: ADD_CHANNEL,
    channel
})
export const addChannels = channels => ({
    type: ADD_CHANNELS,
    channels
})
const addById = (state, item) => ({ ...state,
    [item.id]: item
})
export const channels = createReducer(defaulChannelState, {
    [ADD_CHANNEL]: (state, {
        channel
    }) => addById(state, channel),
    [ADD_CHANNELS]: (state, {
        channels
    }) => channels.reduce(addById, { ...state
    }),
})
export const getChannels = state => state
export const getChannel = (state, id) => ({ ...getChannels(state)[id]
})
export const getChildren = (state, id) => {
    const {
        children = []
    } = getChannel(state, id) || {}
    return compact(children.map(({
        id
    }) => getChannel(state, id)))
}

// Reducer
export default channels