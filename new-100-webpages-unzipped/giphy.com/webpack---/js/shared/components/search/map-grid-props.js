import loadable from '@loadable/component'
import withPropsOnChange from 'recompose/withPropsOnChange'
import {
    map
} from 'lodash'
import withProps from 'recompose/withProps'
import {
    matchPath
} from 'react-router'
import {
    averageRatio
} from 'shared/util/average-gif-size'
import routes, {
    getRouteFromPathname
} from 'shared/routes'

const GiphyTV = loadable(() =>
    import ( /* webpackChunkName: "reactGiphyTV" */ '@giphy/react-giphy-tv'))

const getMatch = () => {
    const {
        pathname
    } = location
    const route = getRouteFromPathname(pathname)
    return matchPath(pathname, route) || {}
}

// creates map {routes.GIF_DETAIL: gif detail}
const categories = new Map(map(routes, (route, key) => [route, key.toLowerCase().replace(/_/g, ' ')]))

const getGroupId = (match = {}) => {
    // we need to use match from the router, but just be safe with the check
    return match.url || location.pathname
}

const getGridProps = ({
    gifs = [],
    category,
    groupId,
    location,
    match
}) => {
    // use match if available until everything uses the router
    const {
        params = {
            term: ''
        }
    } = match || getMatch()
    const {
        pathname
    } = location || window.location
    const route = getRouteFromPathname(pathname)
    let noEditMode = false

    const tvDefaults = {
        columnSpan: 2,
        align: 'right',
        aspectRatio: gifs.length >= 5 ? averageRatio(gifs.slice(0, 5)) : 16 / 9,
    }
    let tvConfig = null
    switch (route) {
        case routes.HOME:
            tvConfig = { ...tvDefaults,
                aspectRatio: 16 / 9,
                align: 'center',
                channel: '@trending'
            }
            break
        case routes.SEARCH:
            tvConfig = { ...tvDefaults,
                channel: `#${decodeURIComponent(params.term.replace(/-/g, ' '))}`
            }
            break
        case routes.CHANNEL:
            // ready for when routing is ready on desktop
            tvConfig = { ...tvDefaults,
                align: 'left',
                channel: groupId.split(' - ')[1]
            }
            break
        case routes.GIF_DETAIL:
            tvConfig = null
            break
    }

    // this is here until channels uses the router and
    // can work with the above switch statement.
    if (category === 'channel') {
        tvConfig = { ...tvDefaults,
            align: 'left',
            channel: groupId.split(' - ')[1]
        }
    }

    return {
        category: category || categories.get(route),
        tvConfig: tvConfig ? { ...tvConfig,
            GiphyTV
        } : null,
        noEditMode,
    }
}

export const mapGroupId = () =>
    withProps(({
        groupId,
        allGifs,
        match
    }) => ({
        groupId: allGifs ? null : groupId || getGroupId(match),
    }))

export const mapGridProps = () =>
    withPropsOnChange(['match', 'location', 'category', 'searchType'], props => getGridProps(props))