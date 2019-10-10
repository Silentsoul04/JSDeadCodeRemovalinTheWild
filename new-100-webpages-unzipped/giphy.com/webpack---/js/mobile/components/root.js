import {
    PureComponent,
    Fragment,
    Suspense
} from 'react'
import {
    connect
} from 'react-redux'
import {
    withRouter,
    matchPath
} from 'react-router'
import {
    isEmpty
} from 'lodash'
import withStorageContextProvider from 'react-storage-context'
import 'shared/util/why-did-you-update'

import {
    categoryMenuVisible,
    userMenuVisible,
    checkedFavorites,
    settings,
    init,
    checkLogin,
    userStatus,
    setOrientation,
    setAppSize,
} from '../shared/actions'
import {
    receivedGifs
} from 'shared/redux/gifs'
import {
    gridType as gridTypeAction
} from 'shared/redux/grid-type'
import log from 'shared/util/log'
import FB from '../shared/fb'
import cookie from 'cookie'
import PropTypes from 'prop-types'
import qs from 'query-string'
import Routes, {
    getRouteFromPathname
} from './router'
import routes from '../../shared/routes'
import GDBootstrapper from 'shared/components/gd-bootstrapper'
import ToSMessage from 'shared/components/tos-message'
import Message from 'shared/components/message/flash-message'
import {
    ErrorBoundary
} from 'shared/trackjs'

// https://github.com/ReactTraining/react-router/issues/6072#issuecomment-379559532
const DefaultComponents = () => ( <
    Fragment >
    <
    Message / >
    <
    Routes / >
    <
    ToSMessage / >
    <
    /Fragment>
)

@withRouter
@withStorageContextProvider('giphy-mobile')
@connect(
    state => ({
        // TODO selectors
        menuVisibility: state.menuVisibility,
        userGridType: state.userGridType,
    }), {
        receivedGifs,
        setAppSize,
        setOrientation,
        settings,
        init,
        gridTypeAction,
        checkedFavorites,
        checkLogin,
        userStatus,
        userMenuVisible,
        categoryMenuVisible,
    },
)
@withRouter
class Root extends PureComponent {
    static propTypes = {
        gifs: PropTypes.array,
        pagination: PropTypes.object,
    }
    componentWillMount() {
        const {
            store, // temporary
            pagination,
            gifs,
            receivedGifs,
            setAppSize,
            setOrientation,
            init,
            gridTypeAction,
            checkedFavorites,
            checkLogin,
            userStatus,
            location: {
                pathname
            },
            view,
            search_id: responseId,
            count,
        } = this.props

        let mobilePagination = pagination || {}
        setAppSize(innerWidth, innerHeight)
        setOrientation(innerHeight > innerWidth)
        window.scrollTo(0, 0) // this sucks
        window.addEventListener('resize', () => {
            // timeout fixes a bug in chrome for iOS in which
            // changing orientation more than once wouldn't
            // properly update.
            setTimeout(() => {
                setAppSize(innerWidth, innerHeight)
                setOrientation(innerHeight > innerWidth)
            }, 20)
        })

        const cookies = cookie.parse(document.cookie)
        // data comes from global page data
        init(pathname, qs.parse(location.search), this.props, cookies)

        const route = getRouteFromPathname(pathname)
        if (gifs) {
            if (isEmpty(mobilePagination) && route === routes.GIF_DETAIL) {
                mobilePagination = {
                    next_url: '/page/2',
                }
            }
            const match = matchPath(pathname, route)
            receivedGifs({
                gifs,
                url: pathname, // not important for page load
                groupId: match.url, // e.g. /search/puppy-stickers
                nextUrl: mobilePagination.next_url,
                responseId,
                count,
            })
        }

        if (view && view !== 'list') {
            gridTypeAction(view)
        }

        if (route === routes.FAVORITES) {
            // if we land on the FAVORITES page we have favorites already
            checkedFavorites()
        }
        checkLogin()

        FB.init(
            store,
            // This is called with the results from from FB.getLoginStatus().
            ({
                status,
                authResponse = {}
            }) => {
                if (status === 'connected') {
                    log.info('Logged into facebook and Giphy')
                    userStatus(store.getState().user.loggedIn, authResponse.accessToken)
                } else if (status === 'not_authorized') {
                    log.info('Logged into Facebook, but not Giphy.')
                } else {
                    log.info("Not logged in to Facebook, so we don't know if logged in to Giphy, status:" + status)
                    userStatus(store.getState().user.loggedIn)
                }
            },
        )
    }

    render() {
        const {
            initData
        } = this.props
        return ( <
            Suspense fallback = {
                null
            } >
            <
            ErrorBoundary >
            <
            GDBootstrapper initData = {
                initData
            } >
            <
            DefaultComponents / >
            <
            /GDBootstrapper> <
            /ErrorBoundary> <
            /Suspense>
        )
    }
}

export default Root