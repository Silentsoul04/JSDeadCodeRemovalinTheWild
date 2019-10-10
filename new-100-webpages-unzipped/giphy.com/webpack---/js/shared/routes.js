import {
    matchPath
} from 'react-router'
import {
    mapValues
} from 'lodash'

// the goal is for any component to be able to use:
// getRouteFromPathname(location.pathname) and figure out what
// route we're on to determine things like groupId, category, etc.

// we freeze the route objects,
// but for dynamic routes, their paths can change
const routes = Object.freeze(
    // I used `path` here because that's what `matchPath` uses :/
    // react router uses `pathname` so map'em for now (and refactor someday!)
    mapValues({
            CATEGORIES: {
                path: '/categories'
            },
            UPLOAD: {
                path: '/upload'
            },
            DASHBOARD: {
                path: '/dashboard'
            },
            EXPLORE: {
                path: '/explore/:term'
            },
            FAVORITES: {
                path: '/favorites'
            },
            // order matters here for mobile routing, GIF_VIDEO will be matched first for /html5
            GIF_VIDEO: {
                path: '/(gifs|stickers)/:id/html5',
                exact: true
            },
            GIF_DETAIL: {
                path: '/(gifs|stickers)/:id/:mode?',
                exact: true
            },
            VIDEO_DETAIL: {
                path: '/videos/:id/:mode?',
                exact: true
            },
            LOGIN: {
                path: '/login',
                state: {
                    headerSubtitle: 'Log In'
                }
            },
            APPLY: {
                path: '/apply',
                state: {
                    headerSubtitle: 'Brand and Artist Application'
                }
            },
            JOIN: {
                path: '/join/:step?',
                state: {
                    headerSubtitle: 'Sign Up'
                }
            },
            MARKETERS: {
                path: '/marketers',
                exact: true
            },
            PASSWORD_CHANGE: {
                path: `/password/change`
            },
            PASSWORD_RESET: {
                path: `/password/reset`
            },
            SEARCH: {
                path: '/search/:term'
            },
            STUDIOS: {
                path: '/studios'
            },
            TEAM: {
                path: '/team',
                exact: true
            },
            FILM_FEST: {
                path: '/giphytv'
            },
            EDIT_GIFS: {
                path: '/edit/gifs'
            },
            ARTISTS: {
                path: '/artists/:letter?'
            },
            APPS: {
                path: '/apps/:app?'
            },
            // CHANNEL: dynamic route, starts off empty,
            // but at some point will get a path
            CHANNEL: {
                path: '/dontmatchme',
                exact: true,
            },
            CHANNEL_STORIES: {
                path: '/:username/stories',
                exact: true,
            },
            // CHANNE_LEAF: {} // we maybe could use this, not sure
            STORY: {
                path: '/stories/:slug'
            },
            STORYBOOK: {
                path: '/create/story',
                exact: true
            },
            STORYBOOK_FINALISE: {
                path: '/create/story/finalize/:id?',
                exact: true
            },
            STORYBOOK_DELETE: {
                path: '/create/story/delete/:id?',
                exact: true
            },
            SETTINGS: {
                path: '/settings',
                exact: true
            },
            // HOMEBETA: { path: '/homebeta', exact: true },
            TRENDING: {
                path: '/trending-gifs',
                exact: true
            },
            TRENDING_VIDEOS: {
                path: '/trending-videos',
                exact: true
            },
            HOMEBASE: {
                path: '/edit/home',
                exact: true
            },
            // home needs to be last
            HOME: {
                path: '/(home|page)?/:page?',
                exact: true
            },
            ERROR_404: {
                path: '/404',
                exact: true
            },
        },
        obj => ({ ...obj,
            pathname: obj.path
        }),
    ),
)

export const getRouteFromPathname = pathname => Object.values(routes).find(location => matchPath(pathname, location))

export default routes