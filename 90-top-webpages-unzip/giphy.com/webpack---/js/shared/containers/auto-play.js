import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import Toggle from 'shared/components/toggle/toggle'
import { connect } from 'react-redux'
import { toggleAutoPlay } from 'shared/redux/auto-play'

@connect(
    state => ({
        isOn: state.autoPlay,
    }),
    { toggle: toggleAutoPlay },
)
export default class AutoPlay extends Toggle {}
AutoPlay.defaultProps = {
    onElement: <i className="ss-play" />,
    offElement: <i className="ss-pause" />,
}
