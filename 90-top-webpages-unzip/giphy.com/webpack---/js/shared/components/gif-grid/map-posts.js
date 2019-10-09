import withPropsOnChange from 'recompose/withPropsOnChange'
import getGifSkeleton from '../gif-skeleton'
import normalizeGif from '../../util/normalize-gif'
import Post from './post'
import { omit } from 'lodash'
export const mapPosts = gif => {
    const { type } = gif
    if (type === 'post') {
        const postGif = {
            post: omit(gif, 'gif'),
            ...gif.gif,
            id: gif.id,
            beforeGif: Post,
        }
        if (!postGif.images) {
            postGif.images = getGifSkeleton().images
        }
        return normalizeGif(postGif)
    } else {
        return gif
    }
}

export default () => {
    return withPropsOnChange(['gifs'], props => ({
        // set the animated and still properties on gif.images
        gifs: props.gifs.map(gif => mapPosts(gif)),
    }))
}
