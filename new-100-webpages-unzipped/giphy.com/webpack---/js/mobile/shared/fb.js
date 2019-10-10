import {
    once as _once
} from 'lodash'
import appendQuery from 'append-query'
import {
    autobind
} from 'core-decorators'
import {
    isiOSChrome
} from '../shared/environment'
import log from 'shared/util/log'
import qs from 'query-string'

class FBUtil {
    @autobind
    _doInit(store, statusChangeCallback) {
        log.info('FB SDK requested')
        this.store = store // TODO, this was implemented before redux, clean up
        const initFB = () => {
            const {
                settings
            } = store.getState()
            if (!settings.facebookAppID) {
                log.warn('No facebookAppID specified on the window')
            }
            log.info('FB.init, appId:', settings.facebookAppID)
            window.FB.init({
                appId: settings.facebookAppID,
                status: true,
                xfbml: true,
                version: 'v3.3',
            })
            window.FB.Event.subscribe('auth.authResponseChange', statusChangeCallback)
            if (!store.getState().user.loggedIn) {
                window.FB.getLoginStatus(statusChangeCallback, true)
            }
        }
        window.fbAsyncInit = (function(existing) {
            return function() {
                if (existing) {
                    existing()
                }
                initFB()
            }
        })(window.fbAsyncInit);
        (function(d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0]
            if (d.getElementById(id)) {
                return
            }
            js = d.createElement(s)
            js.id = id
            js.src = '//connect.facebook.net/en_US/sdk.js'
            fjs.parentNode.insertBefore(js, fjs)
        })(document, 'script', 'facebook-jssdk')
    }
    init = _once(this._doInit)
    login() {
        // Facebook SDK doesn't work on iOS Chrome
        if (isiOSChrome()) {
            let {
                next,
                ref
            } = qs.parse(location.search)
            if (next) {
                // append the ref to the next
                next = appendQuery(next, {
                    ref
                })
                // append the next to the login url
                location.href = appendQuery('/login/facebook/', {
                    next
                })
            } else {
                location.href = '/login/facebook/'
            }
        } else if (window.FB) {
            window.FB.login()
        }
    }
    @autobind
    share(options, callback, shareUrl) {
        const {
            settings
        } = this.store.getState()
        const url = shareUrl || window.location.href
        window.FB.ui({
            app_id: settings.facebookAppID,
            iframe_test: true,
            method: 'share',
            href: appendQuery(url, {
                ref: 'fbt',
            }),
            ...options,
        })
    }
}

export default new FBUtil()