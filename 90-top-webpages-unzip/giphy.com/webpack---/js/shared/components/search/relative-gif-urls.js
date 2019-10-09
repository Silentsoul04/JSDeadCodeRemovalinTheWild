import withPropsOnChange from 'recompose/withPropsOnChange'
import { relativeUrl } from 'shared/util/url'

const makeRelative = gifs => gifs.map(gif => ({ ...gif, url: relativeUrl(gif.url) }))

export default () => {
    return withPropsOnChange(['gifs'], ({ gifs }) => ({
        gifs: makeRelative(gifs),
    }))
}
