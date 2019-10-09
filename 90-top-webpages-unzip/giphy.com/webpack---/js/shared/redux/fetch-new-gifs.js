import { isEmpty } from 'lodash'
import { checkNewGifs, foundNewGifs, noNewGifs } from './new-gifs'
import { channelGifs } from '../api'

export default function(channelId, currentGifIds) {
    return function(dispatch) {
        dispatch(checkNewGifs())
        return channelGifs(channelId, currentGifIds[0]).then(({ results = [] }) => {
            const newGifs = []

            // iterate through new GIFs until a
            // duplicate is reached. This is used to
            // fix the issue where 50 latest GIFs
            // return marked as new if the latest
            // GIF sent to the server has been
            // deleted.
            for (let i = 0; i < results.length; i++) {
                const { id } = results[i]
                if (currentGifIds.indexOf(id) < 0) {
                    newGifs.push(results[i])
                } else {
                    break
                }
            }

            if (isEmpty(newGifs)) {
                dispatch(noNewGifs())
            } else {
                dispatch(foundNewGifs(newGifs))
            }
            return newGifs
        })
    }
}
