import cookie from 'cookie'
import { relativeUrl } from '../util/url'
import { toggleFavorite as favorite } from '../api'
import { getGif, receivedGifs } from './gifs'

export const FAVORITES = 'FAVORITES'

/**
 * Toggle a favorite
 * @param {String} the id of the gif
 */
export default ({ id, url }, user) => {
    return function(dispatch, getState) {
        if ((user && user.loggedIn) || window.LOGGED_IN) {
            return favorite(id).then(({ has_favorited }) => {
                const {
                    gifs,
                    pagination: { nextUrl },
                } = getState()
                const gif = getGif(gifs, id)
                if (gif) {
                    const favoritedGif = JSON.parse(JSON.stringify(gif))
                    favoritedGif.is_favorite = has_favorited
                    dispatch(
                        receivedGifs({
                            gifs: [favoritedGif],
                            nextUrl,
                        }),
                    )
                }
            })
        } else {
            document.cookie = cookie.serialize('fave', id, { path: '/' })
            location.href = `/login?next=${relativeUrl(url)}`
            return Promise.resolve()
        }
    }
}
