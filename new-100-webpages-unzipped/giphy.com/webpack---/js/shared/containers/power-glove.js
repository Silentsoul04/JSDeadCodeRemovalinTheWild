import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import {
    connect
} from 'react-redux'
import {
    togglePowerGlove
} from 'shared/redux/power-glove'
import PowerGlove from 'shared/components/power-glove/power-glove'

@connect(
    ({
        powerGlove
    }) => ({
        powerGlove,
    }), {
        togglePowerGlove
    },
)
export default class Container extends PowerGlove {}