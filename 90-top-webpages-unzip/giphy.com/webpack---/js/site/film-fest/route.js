import { lazy } from 'react'

const FilmFest = lazy(() => import(/* webpackChunkName: "filmFest" */ './film-fest'))

const FilmFestRoute = () => <FilmFest />

export default FilmFestRoute
