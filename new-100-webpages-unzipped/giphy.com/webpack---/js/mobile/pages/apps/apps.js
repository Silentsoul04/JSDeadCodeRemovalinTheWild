import {
    omit
} from 'lodash'
import App from '../../components/apps/app'
import Header from 'containers/header'
import Page from '../page'
import locationState from 'shared/components/with-location-state'

const omitAppDetails = app => {
    return omit(app, ['video_embed', 'info_items'])
}
const AppsPage = ({
    apps
}) => ( <
    Page >
    <
    Header / > {
        apps.map(omitAppDetails).map((app, index) => ( <
            App key = {
                index
            } { ...app
            } { ...{
                    index,
                    is_landing: true
                }
            }
            />
        ))
    } <
    /Page>
)

export default locationState(['apps'])(AppsPage)