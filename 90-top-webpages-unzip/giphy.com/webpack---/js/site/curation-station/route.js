import { lazy } from 'react'
import { Helmet } from 'react-helmet'

const CurationStation = lazy(() => import(/* webpackChunkName: "curationStation" */ './components/curation-station'))

const CurationStationRoute = props => (
    <>
        <Helmet>
            <title>GIPHY | Curation Station</title>
        </Helmet>
        <CurationStation {...props} />
    </>
)

export default CurationStationRoute
