import { lazy } from 'react'
const ArtistList = lazy(() => import(/* webpackChunkName: "artists" */ './list'))

const ArtistsRoute = ({ location: { state }, match: { params } }) => {
    const { artists } = state
    const { letter } = params
    return <ArtistList artists={artists} filter={letter} />
}

export default ArtistsRoute
