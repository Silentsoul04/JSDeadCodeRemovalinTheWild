import { forEach, slice } from 'lodash'

export const INIT_CHANNEL_SELECTOR = 'INIT_CHANNEL_SELECTOR'
export const SHOW_CHANNEL_SECTION = 'SHOW_CHANNEL_SECTION'
export const UPDATE_CHANNEL_SECTION = 'UPDATE_CHANNEL_SECTION'
export const SAVE_CHANNEL_SELECTION = 'SAVE_CHANNEL_SELECTION'
export const IS_FETCHING_CHANNELS = 'FETCHING_CHANNEL_SECTIONS'
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS'
export const CLEAR_BREADCRUMBS = 'CLEAR_BREADCRUMBS'

export default (
    state = {
        channels: {},
        pagination: [],
        selectedItem: {},
        savedItem: {},
        isFetching: false,
    },
    action = {},
) => {
    switch (action.type) {
        case INIT_CHANNEL_SELECTOR: {
            // clone
            const newChannels = { ...state.channels }
            forEach(action.channels, channel => {
                newChannels[channel.id] = channel
            })
            return {
                ...state,
                breadcrumbs: [],
                channels: newChannels,
                rootChannels: action.channels,
            }
        }
        case UPDATE_CHANNEL_SECTION: {
            let channels = { ...state.channels }
            const channel = action.channel
            channels[action.id] = channel
            return {
                ...state,
                channels: channels,
            }
        }
        case SHOW_CHANNEL_SECTION: {
            const { id } = action
            if (!id) {
                // show root channel if no ID was passed
                return {
                    ...state,
                    breadcrumbs: [],
                    pagination: [
                        {
                            id: 0,
                            children: state.rootChannels,
                        },
                    ],
                    selectedItem: {
                        children: state.rootChannels,
                    },
                }
            }
            const selectedItem = { ...state.channels[id] }
            let breadcrumbs = selectedItem.ancestors ? [...selectedItem.ancestors] : []
            breadcrumbs = breadcrumbs.map(item => {
                if (state.channels[item.id]) {
                    return {
                        ...item,
                        children: state.channels[item.id].children,
                    }
                } else {
                    return item
                }
            })
            breadcrumbs.push(selectedItem)
            const pagination = slice(breadcrumbs, Math.max(breadcrumbs.length - 2, 0))

            return {
                ...state,
                selectedItem,
                pagination,
                breadcrumbs,
            }
        }
        case SAVE_CHANNEL_SELECTION: {
            const { id } = action
            return {
                ...state,
                savedItem: id ? state.channels[id] : {},
            }
        }
        case IS_FETCHING_CHANNELS:
            return {
                ...state,
                isFetching: action.fetching,
            }
        case SET_SEARCH_RESULTS: {
            let channels = { ...state.channels }
            action.results.forEach(item => {
                channels[item.id] = channels[item.id] || item
            })
            return {
                ...state,
                channels,
                breadcrumbs: [],
                pagination: [
                    {
                        id: 0,
                        children: action.results,
                    },
                ],
                selectedItem: {
                    children: action.results,
                },
            }
        }
        case CLEAR_BREADCRUMBS:
            return {
                ...state,
                breadcrumbs: [],
            }
        default:
            return state
    }
}

export const isFetchingChannels = fetching => ({ type: IS_FETCHING_CHANNELS, fetching })
export const initChannelSelector = channels => ({ type: INIT_CHANNEL_SELECTOR, channels })
export const updateChannelSection = (id, channel) => ({ type: UPDATE_CHANNEL_SECTION, id, channel })
export const showChannelSection = id => ({ type: SHOW_CHANNEL_SECTION, id })
export const saveChannelSelection = id => ({ type: SAVE_CHANNEL_SELECTION, id })
export const setSearchResults = results => ({ type: SET_SEARCH_RESULTS, results })
export const clearBreadcrumbs = () => ({ type: CLEAR_BREADCRUMBS })
