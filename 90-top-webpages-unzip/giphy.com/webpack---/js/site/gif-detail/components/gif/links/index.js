import { getUrl, getShareUrl } from 'shared/util/gif-extract'
import CopyableInput from 'shared/components/inputs/copyable'
import gifProps from 'shared/prop-types/gif'
import { removeAllQueryParams } from 'shared/util/url-utils'
import css from './links.css'

const getLinks = gif => {
    const { bitly_url, id } = gif
    return [
        {
            id: 'short',
            url: bitly_url,
            label: 'Short Link',
            description: 'A url with a minimal number of characters',
        },
        {
            id: 'gif',
            url: getShareUrl(getUrl(gif)),
            label: 'GIF Link',
            description: 'A link to the GIF image itself',
        },
        {
            id: 'html5',
            url: `https://giphy.com/gifs/${id}/html5`,
            label: 'HTML5 Video',
            description: 'A video that loads a smaller and faster version of the GIF',
        },
    ]
}

/**
 * GIF Detail - Links: Controls the links section
 * of the GIF Detail page. This shows different
 * links and allows you to easily copy/paste.
 *
 * @class GifLinks
 */
const GifLinks = ({ gif }) => {
    const links = getLinks(gif)
    return (
        <div>
            {links.map(({ url, label, id, description }) => (
                <div className={css.link} key={id}>
                    <span className={css.label}>{label}</span>
                    <CopyableInput
                        className={css.input}
                        value={removeAllQueryParams(url)}
                        onCopy={() => {
                            global.showSuccess(`Link copied to clipboard!`)
                        }}
                    />
                    <div className={css.info}>
                        <span className={css.description}>{description}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

GifLinks.propTypes = {
    gif: gifProps.isRequired,
}

export default GifLinks
