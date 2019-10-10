import fb from './fb'
import {
    isiOS,
    isAndroid
} from './environment'

export default {
    twitter: function(shareUrl) {
        window.open('http://twitter.com/share?url=' + encodeURIComponent(shareUrl || location.href) + '?tc=1&via=giphy')
    },
    facebook: function(options, callback, shareUrl) {
        if (window.FB && !isAndroid()) {
            fb.share(options, callback, shareUrl)
        } else {
            window.open('http://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(shareUrl || location.href))
        }
    },
    pinterest: function(mediaUrl, shareUrl) {
        window.open(
            'http://pinterest.com/pin/create/bookmarklet/?media=' +
            mediaUrl +
            '&url=' +
            encodeURIComponent(shareUrl || location.href),
        )
    },
    reddit: function(shareUrl) {
        window.open(`//www.reddit.com/submit?url=${encodeURIComponent(shareUrl || location.href)}`)
    },
    sms: function(url) {
        location.href = `sms:${isiOS() ? '&' : '?'}body=${encodeURIComponent(url)}`
    },
    instagram: function() {
        location.href = `/login/?next=${encodeURIComponent(location.pathname)}&ref=auth_required`
    },
}