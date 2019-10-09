import { PureComponent } from 'react'
import { matchPath } from 'react-router'
import { setUser } from 'shared/redux/user'
import { receivedGifs } from 'shared/redux/gifs'
import { getRouteFromPathname } from 'shared/routes'
import { addLastSearchResponseId } from 'shared/util/get-last-search-id'
import { searchType } from 'shared/redux/search-type-toggle'
import { GET } from 'shared/util/fetch-methods'
import fetchChannels from 'shared/redux/fetch-channels'
import { setFeaturedChannels } from 'shared/redux/featured-channels'
import cookie from 'cookie'
import withStorageContextProvider from 'react-storage-context'
import { setTrendingTags } from 'shared/redux/trending-tags'
import DesktopGlobalCSS from '../../site/css/global-css'
import { ErrorBoundary } from 'shared/trackjs'

const EntryPointHoC = store => WrappedComponent =>
    withStorageContextProvider('giphy-desktop')(
        class EntryRoute extends PureComponent {
            state = {
                groupId: null,
            }
            componentWillMount() {
                const { csrftoken, giphy_pbid: pingbackId } = cookie.parse(document.cookie)

                const {
                    gifs,
                    nextUrl,
                    searchResponseId,
                    username,
                    search,
                    isStaff,
                    user,
                    pageData = {},
                    gif,
                } = this.props
                const { dispatch } = store
                const { pathname } = location
                const {
                    featured_channels: featuredChannels,
                    trending_tags: trendingTags,
                    pagination = {},
                    groupId: locationStateGroupId,
                } = pageData
                if (!pathname) return

                if (!csrftoken || !pingbackId) {
                    fetch('/login/check/', GET)
                }
                const route = getRouteFromPathname(pathname)
                const match = matchPath(pathname, route)
                const groupId = locationStateGroupId || (match ? match.url : null)

                if (featuredChannels) dispatch(setFeaturedChannels(featuredChannels))
                if (trendingTags) dispatch(setTrendingTags(trendingTags))
                if (gif) {
                    const { next_url: nextUrl } = pagination
                    dispatch(receivedGifs({ gifs: [gif], nextUrl, groupId }))
                }

                if (searchResponseId) {
                    addLastSearchResponseId(searchResponseId)
                }

                if (search) {
                    if (search.isSticker) {
                        dispatch(searchType('sticker'))
                    } else {
                        dispatch(searchType('gif'))
                    }
                }

                if (gifs && gifs.length) {
                    dispatch(
                        receivedGifs({
                            gifs,
                            url: location.pathname,
                            groupId,
                            nextUrl,
                            responseId: searchResponseId,
                        }),
                    )
                }
                if (user) {
                    dispatch(
                        setUser({
                            loggedIn: true,
                            id: user.id,
                            userToken: user.token,
                            isStaff: user.is_staff,
                            permissions: user.permissions,
                            username: username || user.username,
                            displayName: user.display_name,
                            avatar: user.avatar || user.avatar_url,
                            channelId: user.channel_id,
                            email: user.email,
                            primarySite: user.primary_site,
                        }),
                    )
                    isStaff && dispatch(fetchChannels())
                }

                this.setState({ groupId })
            }
            render() {
                const { groupId } = this.state
                return (
                    <ErrorBoundary>
                        <DesktopGlobalCSS />
                        <WrappedComponent {...this.props} groupId={groupId} />
                    </ErrorBoundary>
                )
            }
        },
    )

export default EntryPointHoC
