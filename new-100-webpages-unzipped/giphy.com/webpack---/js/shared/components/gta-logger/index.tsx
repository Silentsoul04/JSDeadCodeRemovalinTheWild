import { withRouter, RouteComponentProps } from 'react-router'
import routes, { getRouteFromPathname } from 'shared/routes'
import { CREATE } from '../../../site/gif-maker/components/route'
import { setGTADataLayer } from 'shared/util/analytics'

type GTALoggerProps = RouteComponentProps

const GTALogger = withRouter(({ location: { pathname } }: GTALoggerProps) => {
    let value
    const isStickerDetail = pathname.indexOf('/stickers/') >= 0
    const isStickerSearch = pathname.indexOf('-sticker') >= 0
    const route = getRouteFromPathname(pathname)
    const CREATEROUTE = { path: CREATE }

    switch (route) {
        case routes.GIF_DETAIL:
            value = isStickerDetail ? 'StickerDetail' : 'GIFDetail'
            break
        case routes.UPLOAD:
            value = 'Upload'
            break
        case routes.CATEGORIES:
            value = 'Categories'
            break
        case CREATEROUTE:
            value = 'Create'
            break
        case routes.SEARCH:
            value = isStickerSearch ? 'StickerSearch' : 'GIFSearch'
            break
        case routes.SETTINGS:
            value = 'Settings'
            break
        case routes.FAVORITES:
            value = 'Favorites'
            break
        case routes.CHANNEL:
            value = 'Channel'
            break
        case routes.HOME:
            value = 'Home'
            break
        case routes.TEAM:
            value = 'Team'
            break
        case routes.EXPLORE:
            value = 'Explore'
            break
        default:
            value = '404'
            break
    }
    setGTADataLayer({ dimension: 'PageCategory', value })
    return null
})

export default GTALogger
