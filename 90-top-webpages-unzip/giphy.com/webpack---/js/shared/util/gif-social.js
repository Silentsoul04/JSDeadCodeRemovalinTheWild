import cookie from 'cookie'
import { getUrl } from './gif-extract'

const getScrollbarWidth = () => {
    let sw = 0
    const el = document.createElement('div')
    el.style.height = 100
    el.style.width = 100
    el.style.overflow = 'scroll'

    document.body.appendChild(el)
    sw = el.offsetWidth - el.clientWidth
    document.body.removeChild(el)

    return sw
}

export function getSocialUrls(gif, isMobile) {
    /**
     * Utility function which will return
     * an array with social share objects including channel & url.
     *
     * @param {String} url - the main gif url
     * @return {Object} contains channel names as properties
     * with their corresponding share urls
     */
    const { url, bitly_url, tags, tags_string, id } = gif
    const { origin } = document.location
    const imageUrl = getUrl(gif)
    const tumblrImageUrl = getUrl(gif, 'downsized')
    const hasTwitterCookie = cookie.parse(document.cookie)['giphy-twitter-upload']
    const tagString = tags ? tags.join(',') : tags_string ? tags_string.replace(/\r?\n|\r/g, ',') : ''

    if (!url) return

    let twitterUrl = ''

    if (isMobile) {
        twitterUrl = `http://twitter.com/share?url=${encodeURIComponent(bitly_url)}?tc=1&via=giphy`
    } else {
        twitterUrl = hasTwitterCookie ? '' : `${origin}/login/twitter?next=${origin}/login/twitter/finalize?next=`
        twitterUrl += `${origin}/gifs/${id}/tweet`
    }

    return {
        facebook: `http://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        twitter: twitterUrl,
        // instagram: '',
        tumblr: `http://www.tumblr.com/widgets/share/tool?canonicalUrl=${encodeURIComponent(
            url,
        )}&content=${encodeURIComponent(
            tumblrImageUrl,
        )}&caption=(via <a href='${bitly_url}'>GIPHY</a>)&clickthroughUrl=${encodeURIComponent(
            bitly_url,
        )}&posttype=photo&tags=giphy,${tagString}`,
        pinterest: `http://www.pinterest.com/pin/create/link/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(
            imageUrl,
        )}&description=via GIPHY`,
        reddit: `http://www.reddit.com/submit?url=${encodeURIComponent(url)}`,
    }
}

export function openPopup(url, type, width, height, left, top) {
    if (!url) return

    switch (type) {
        case 'twitter':
            height = 350
            width = 750
            break
        default:
            height = height || 480
            width = width || 480
            break
    }

    let options = ''
    const scrollbarWidth = getScrollbarWidth()
    const defaults = {
        height: height,
        left: left ? left - scrollbarWidth / 2 : 0,
        location: 0,
        menubar: 0,
        resizable: 1,
        status: 0,
        toolbar: 0,
        top: top ? top + 25 : 0,
        width: width + scrollbarWidth,
    }

    for (let option in defaults) {
        options += option + '=' + defaults[option] + ','
    }

    window.open(url, '_blank', options)
}

export const socialClick = {
    mobile: (url, fb, gif) => (window.FB && fb ? fb.share({ href: gif.url }) : window.open(url)),
    desktop: (url, type, e) => {
        e && e.preventDefault()
        openPopup(url, type)
    },
}

export default {
    getSocialUrls,
    openPopup,
    socialClick,
}
