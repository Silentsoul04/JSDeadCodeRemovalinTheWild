import { getChannelById } from '../api'
import { isFetchingChannels, initChannelSelector, updateChannelSection, showChannelSection } from './channel-selector'

export default function fetchChannels(channelId) {
    return function(dispatch) {
        dispatch(isFetchingChannels(true))
        return getChannelById(channelId).then(data => {
            dispatch(isFetchingChannels(false))
            if (channelId) {
                dispatch(updateChannelSection(channelId, data))
                dispatch(showChannelSection(channelId))
            } else {
                dispatch(initChannelSelector(data.results))
                dispatch(showChannelSection())
            }
        })
    }
}
