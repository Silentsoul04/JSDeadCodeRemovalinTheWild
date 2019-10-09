import tsml from 'tsml'
import appendQuery from 'append-query'
import { omitBy, isBoolean, isEmpty } from 'lodash'
import { fitGifToSize } from './sizing'
import { removeProtocol } from './url'

const EMBED_SIZE = 480
const JS_EMBED_PATH = '/static/js/widgets/embed.js'

export const getEmbedUrl = ({ embed_url }, options = {}) => {
    const url = removeProtocol(embed_url)
    const params = omitBy(options, option => (isBoolean(option) ? !option : option))
    return isEmpty(params) ? url : appendQuery(url, params)
}

export const getEmbedCode = (gif, options = {}, isResponsive = false) => {
    const { url } = gif
    const { width, height } = fitGifToSize(gif, EMBED_SIZE, EMBED_SIZE)
    const ratio = height / width
    const params = {
        src: `https:${getEmbedUrl(gif, options)}`,
        width: isResponsive ? '100%' : Math.round(width),
        height: isResponsive ? '100%' : Math.round(height),
        style: isResponsive ? 'position:absolute' : '',
        frameBorder: '0',
        class: 'giphy-embed',
    }

    let code = isResponsive
        ? `<div style="width:100%;height:0;padding-bottom:${Math.round(ratio * 100)}%;position:relative;">`
        : ''
    code += '<iframe'
    for (let param in params) {
        const value = params[param]
        code += value ? ` ${param}="${value}"` : ''
    }
    code += ' allowFullScreen></iframe>'
    code += isResponsive ? '</div>' : ''
    code += `<p><a href="${url}">via GIPHY</a></p>`

    return code
}

export const getJavascriptEmbedCode = (gif, options = {}) => {
    const { id, url, user } = gif
    const { width, height } = fitGifToSize(gif, EMBED_SIZE, EMBED_SIZE)
    let code = tsml`
        <div style="max-width:${EMBED_SIZE}px" id="_giphy_${id}"></div>
        <script>
        ${user && user.username ? `var _gif_artist="${user.username}";` : ''}
        ${user && user.avatar_url ? `var _gif_artist_avatar="${user.avatar_url}";` : ''}
        ${user && user.suppress_chrome ? 'var _suppress_chrome=true;' : ''}
        ${options.playOnHover ? 'var _giphy_play_on_hover=true;' : ''}
        var _giphy = _giphy || [];
        _giphy.push({ id:"${id}", w:${width}, h:${height}, clickthrough_url: "${url}" });
        var g = document.createElement("script");
        g.type = "text/javascript";
        g.async = true;
        g.src = ("https:" == document.location.protocol ? "https://" : "http://") + "${
            window.location.host
        }${JS_EMBED_PATH}";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(g, s);
        </script>`

    return code
}
