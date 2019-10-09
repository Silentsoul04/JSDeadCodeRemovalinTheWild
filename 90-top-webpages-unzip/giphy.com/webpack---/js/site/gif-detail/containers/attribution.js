import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Attribution from '../components/attribution/'
import * as selectors from 'shared/redux/reducers'

export default connect(({ ...state }) => ({
    featuredChannels: selectors.getFeaturedChannels(state),
    trendingTags: selectors.getTrendingTags(state),
}))(Attribution)
