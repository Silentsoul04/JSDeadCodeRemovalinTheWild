import PropTypes from 'prop-types'
import {
    PureComponent
} from 'react'
import {
    uniqueId,
    debounce
} from 'lodash'
import urlUtils from 'shared/util/url-utils'
import {
    isYoutubeUrl,
    isVimeoUrl
} from 'shared/util/gif-maker-util'

export const URL_TYPE = {
    YOUTUBE: 'youtube',
    VIMEO: 'vimeo',
    VIDEO: 'video',
    GIPHY: 'Giphy URL',
    GIPHY_STARTER: 'Giphy Starter URL',
    UNKNOWN: 'Media URL',
}

const normalizeGiphyUrls = url => {
    const urlMatch = url.match(/giphy\.com\/(gifs|stickers)\/.*|gph\.is\/.*/i)
    if (urlMatch) {
        const bits = urlMatch[0].replace(/\/+$/, '').split('/')
        const id = bits
            .pop()
            .split('-')
            .pop()
        return `https://media.giphy.com/media/${id}/giphy.gif`
    } else {
        return url
    }
}

/**
 * File Portal - Url Input: Controls the url input in the FilePortal.
 * This view handles validating input text and returning only accepted
 * urls, based on file type.
 *
 * @class FilePortalUrlInput
 * @param {Array} fileTypes List of accepted file type extensions.
 * @param {String} placeholder Placeholder text for input.
 * @param {String} className class name for the input.
 * @param {Function} onError Callback function to trigger when url
 * validation fails.
 * @param {Function} onFileAccepted Accepted url callback. This is fired
 * when a url is successfully validated.
 */
export default class FilePortalUrlInput extends PureComponent {
    static propTypes = {
        fileTypes: PropTypes.array,
        className: PropTypes.string,
        placeholder: PropTypes.string,
        onFileAccepted: PropTypes.func.isRequired,
        clearOnAcceptTimeout: PropTypes.number,
        onError: PropTypes.func.isRequired,
        disabled: PropTypes.bool,
        needsCORS: PropTypes.bool, // GifMaker requires previews, Upload no
    }
    static defaultProps = {
        disabled: false,
        needsCORS: true,
    }
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    resetInput() {
        const {
            clearOnAcceptTimeout
        } = this.props
        if (clearOnAcceptTimeout) {
            this.timeout = setTimeout(() => {
                if (this.input) {
                    this.input.value = ''
                }
            }, clearOnAcceptTimeout)
        }
    }
    /**
     * Triggered when the url input is changed. This handler validates the
     * input text to verify that it is an acceptable url.
     *
     * @param {String} url Url input text value.
     * @private
     */
    __urlChange = debounce(url => {
        const {
            fileTypes,
            onError,
            onFileAccepted,
            needsCORS
        } = this.props

        if (!url) return

        if (!urlUtils.validate(url)) {
            onError('INVALID_URL', 'Invalid url')
            return
        }

        // Convert any giphy urls to reference
        // giphy.gif. This works for gif detail
        // urls as well as any asset url.
        url = normalizeGiphyUrls(url)

        // Video Embeds
        const isYoutube = fileTypes.indexOf(URL_TYPE.YOUTUBE) > -1 && isYoutubeUrl(url)
        const isVimeo = fileTypes.indexOf(URL_TYPE.VIMEO) > -1 && isVimeoUrl(url)
        if (isYoutube || isVimeo) {
            onFileAccepted([{
                type: 'url',
                fileType: isVimeo ? URL_TYPE.VIMEO : URL_TYPE.YOUTUBE,
                urlType: isVimeo ? URL_TYPE.VIMEO : URL_TYPE.YOUTUBE,
                sourceUrl: url,
                file: url,
                id: uniqueId('url'),
            }, ])
            this.resetInput()
            return
        }

        if (!urlUtils.endsWith(url, fileTypes)) {
            onError('INVALID_URL', 'Invalid url')
            return
        }

        const fileType = urlUtils.mediaType(url)
        onFileAccepted([{
            type: 'url',
            fileType,
            urlType: url.indexOf('giphy.com') !== -1 ? URL_TYPE.GIPHY : URL_TYPE.UNKNOWN,
            sourceUrl: url,
            file: needsCORS && fileType === 'image' ? '//p.giphy.com/fetch?gif=' + url.replace(/.*?:\/\//g, '') : url,
            preview: url,
            id: uniqueId('url'),
        }, ])
        this.resetInput()
    }, 200)

    render() {
        const {
            className,
            placeholder = '',
            disabled
        } = this.props
        return ( <
            input type = "url"
            ref = {
                c => (this.input = c)
            }
            className = {
                className
            }
            placeholder = {
                placeholder
            }
            disabled = {
                disabled
            }
            onChange = {
                e => this.__urlChange(e.target.value)
            }
            />
        )
    }
}