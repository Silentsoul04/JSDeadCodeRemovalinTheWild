import { capitalize } from 'lodash'
import { removeWords } from 'shared/util/string'
import { getTitle } from 'shared/util/gif-text'
const IMAGE_TYPES = ['gif', 'gifs', 'sticker', 'stickers']
const getHelmetTitle = (gif, search, pageType) => {
    let title

    if (gif) {
        title = `${getTitle(gif)} - Find & Share on GIPHY`
    } else if (pageType === 'EXPLORE') {
        title = `${capitalize(removeWords(search.term, IMAGE_TYPES))} GIFs - Get the best GIF on GIPHY`
    } else if (search && search.term) {
        title = `${capitalize(removeWords(search.term, IMAGE_TYPES))} ${
            search.isSticker ? 'Stickers' : 'GIFs'
        } - Find & Share on GIPHY`
    } else {
        title = `GIPHY | Search All the GIFs & Make Your Own Animated GIF`
    }
    return title
}

export default getHelmetTitle
