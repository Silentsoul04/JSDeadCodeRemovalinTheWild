import {
    Route
} from 'react-router-dom'
import GifMaker from './gif-maker'
import Upload from './upload'
import {
    Helmet
} from 'react-helmet'
import pathToRegexp from 'path-to-regexp'

export const GIF_MAKER = '/create/gifmaker'
export const START_IMAGE = `${GIF_MAKER}/start-image`
export const SLIDESHOW = `${GIF_MAKER}/slideshow`
export const VIDEO_TRIM = `${GIF_MAKER}/video-trim`
export const DECORATE = `${GIF_MAKER}/decorate`
export const DECORATE_NAV = `${DECORATE}/:component`
export const CAPTION = `${DECORATE}/caption`
export const DRAW = `${DECORATE}/draw`
export const STICKERS = `${DECORATE}/stickers`
export const FILTERS = `${DECORATE}/filters`
export const CREATE = `${GIF_MAKER}/create`
export const FINALIZE = `${GIF_MAKER}/:component(decorate|create)/:tool?`

export const UPLOAD = '/upload'
export const UPLOAD_FINALIZE = `${UPLOAD}/finalize`

const gifMakerRouteRegEx = pathToRegexp(GIF_MAKER)

export const matchesRoute = pathname => gifMakerRouteRegEx.exec(pathname)

// Can be incorporated into other routes
export default props => ( <
        div >
        <
        Helmet >
        <
        title > GIF Maker - Create GIFs from Videos or Images | Giphy < /title> <
        /Helmet> <
        Route path = {
            GIF_MAKER
        }
        render = {
            ({
                match
            }) => < GifMaker { ...props
            }
            match = {
                match
            }
            />} / >
            <
            Route path = {
                UPLOAD
            }
            render = {
                ({
                    match
                }) => < Upload { ...props
                }
                match = {
                    match
                }
                />} / >
                <
                /div>
            )