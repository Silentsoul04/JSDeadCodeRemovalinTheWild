import { connect } from 'react-redux'
import { getGifDetailHasSeenAppPlug, getUserEmail, getAppSize } from '../../../../../shared/reducers'
import { setHasSeenAppPlug } from '../../../../../shared/reducers/misc-local-storage'
import InstagramModal from 'shared/components/instagram-share/modal'

export default connect(
    state => ({
        appHeight: getAppSize(state).height,
        userEmail: getUserEmail(state),
        hasSeenAppPlug: getGifDetailHasSeenAppPlug(state),
    }),
    { setHasSeenAppPlug },
)(InstagramModal)
