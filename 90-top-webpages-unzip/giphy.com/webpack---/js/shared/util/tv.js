import { isNumber } from 'lodash'
import { withProps, compose } from 'recompose'
import { openPopup } from './gif-social'
import { grid6 } from '../css/grid.css'
import { AddIsUsernameSearchAsProp, AddIsGifSearchAsProp } from '../../modules/search/enhancers'

const CHANNEL_TV_WHITELIST = [679, 680, 681, 682]
const BASE_URL = 'http://tv.giphy.com'
const TV_POPUP_WIDTH = parseInt(grid6, 10)

const getTvPosition = () => {
    const tv = document.getElementById('_giphy_tv')
    const { screenX, screenY } = window

    if (!tv || !isNumber(screenX)) {
        return { left: 0, top: 0 }
    }

    const { left, top } = tv.getBoundingClientRect()
    return {
        left: left + screenX,
        top: top + screenY,
    }
}

const openTv = (url, ratio) => {
    const { left, top } = getTvPosition()
    const tvPopupHeight = TV_POPUP_WIDTH / ratio
    openPopup(url, null, TV_POPUP_WIDTH, tvPopupHeight, left, top)
}

export const getTvUrlFromChannel = ({ id, user = {}, slug = '' }) => {
    const isEditorialFeed = CHANNEL_TV_WHITELIST.indexOf(id) > -1
    const useUsername = isEditorialFeed ? false : user && user.username
    return `${BASE_URL}/${useUsername ? '?username=' + user.username.toLowerCase() : slug}`
}

export const openTvFromChannel = (channel, ratio = 16 / 9) => {
    openTv(getTvUrlFromChannel(channel), ratio)
}

export const getTvUrlFromGif = ({ user = {}, tags = [] }) => {
    const { username } = user
    const slug = username ? `?username=${username}` : tags[0]
    return `${BASE_URL}/${slug || 'giphytrending'}`
}

export const openTvFromGif = (gif, ratio = 16 / 9) => {
    openTv(getTvUrlFromGif(gif), ratio)
}

export const AddShowTvAsPropForSearchGrids = compose(
    AddIsUsernameSearchAsProp,
    AddIsGifSearchAsProp,
    withProps(props => ({
        ...props,
        showTV: [props.hasEnoughGifsForTV, props.isGifSearch, !props.isUsernameSearch].every(Boolean),
    })),
)

export default {
    getTvUrlFromChannel,
    getTvUrlFromGif,
    openTvFromChannel,
    openTvFromGif,
}
