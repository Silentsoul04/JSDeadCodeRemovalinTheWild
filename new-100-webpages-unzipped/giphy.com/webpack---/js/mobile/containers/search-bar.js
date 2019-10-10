import PropTypes from 'prop-types'
import {
    PureComponent
} from 'react'
import styled from 'styled-components'
import {
    connect
} from 'react-redux'
import SearchBar from 'modules/search-bar/components/search-bar'
import {
    getContext,
    compose
} from 'recompose'
import {
    searchHeight as searchHeightPx,
    margin as marginPx,
    headerHeight as headerHeightPx,
    bodyContentMargin as bodyContentMarginPx,
} from '../shared/constants.css'
import {
    isiOS
} from '../shared/environment'
import withWindowScroll from 'shared/components/gif-grid/with-window-scroll'

const searchHeight = parseInt(searchHeightPx),
    bodyContentMargin = parseInt(bodyContentMarginPx),
    margin = parseInt(marginPx),
    searchWithMargins = searchHeight + margin * 2,
    headerHeight = parseInt(headerHeightPx) + margin + bodyContentMargin

const FakeEl = styled.div `
    height: ${searchWithMargins}px;
    visibility: hidden;
    display: ${props => (props.needsFixed ? 'block' : 'none')};
`

class HandleFixed extends PureComponent {
    static defaultProps = {
        isFixed: true
    }
    state = {
        needsFixed: false
    }
    static getDerivedStateFromProps({
        scrollTop,
        dontPosition
    }, prevState) {
        if (dontPosition) return null
        const needsFixed = scrollTop > headerHeight
        if (needsFixed !== prevState.needsFixed) {
            /**
             * For platforms where position:sticky is unsupported,
             * check as we scroll and toggle between static and fixed
             */
            return {
                needsFixed
            }
        }
        return null
    }
    render() {
        const {
            needsFixed
        } = this.state
        return ( <
            >
            <
            FakeEl needsFixed = {
                needsFixed
            }
            /> <
            SearchBar { ...this.props
            }
            needsFixed = {
                needsFixed
            }
            /> <
            />
        )
    }
}
const mapStateToProps = ({
    appSize: {
        height: appHeight
    },
    searchType
}) => ({
    appHeight,
    isSticker: searchType === 'sticker',
})
const Enhance = compose(
    connect(mapStateToProps),
    getContext({
        isOffScreen: PropTypes.bool
    }),
    withWindowScroll(0),
)
export default Enhance(isiOS() ? SearchBar : HandleFixed)