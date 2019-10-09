import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Flag from 'shared/components/flags/flag'
import * as selectors from 'shared/redux/reducers'
import { togglePowerGlove } from 'shared/redux/power-glove'

export default connect(
    state => ({
        user: selectors.getUser(state),
    }),
    { togglePowerGlove },
)(Flag)
