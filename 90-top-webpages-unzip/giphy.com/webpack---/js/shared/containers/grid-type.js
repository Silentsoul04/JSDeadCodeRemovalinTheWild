import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import GridType from 'shared/components/grid-type/grid-type'
import { connect } from 'react-redux'
import { gridType as gridTypeAction } from 'shared/redux/grid-type'

@connect(
    state => ({
        gridType: state.userGridType === 'list' ? 'list' : state.userGridType,
    }),
    dispatch => ({
        onGridTypeClick: gridType => dispatch(gridTypeAction(gridType)),
    }),
)
export default class GridTypeToggle extends GridType {}
