import { compose } from 'recompose'
import { withRouter } from 'react-router'
import * as selectors from '../../shared/reducers'
import { connect } from 'react-redux'
import GifDetail from './gif-detail'

const mapStateToProps = (state, { gif: { id } }) => {
    const {
        appSize: { width: appWidth, height: appHeight },
    } = state
    return {
        isFavorite: selectors.isFavorite(state, id),
        appWidth,
        appHeight,
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps),
)(GifDetail)
