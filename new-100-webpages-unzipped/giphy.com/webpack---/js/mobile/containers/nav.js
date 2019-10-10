import {
    connect
} from 'react-redux'
import NavComponent from '../components/nav/nav'
import {
    categoryMenuVisible,
    userMenuVisible
} from '../shared/actions'
import {
    setIsSearchVisible
} from '../shared/reducers/search-bar'
import {
    getIsSearchVisible
} from '../shared/reducers'

const mapStateToProps = state => ({
    user: state.user,
    categoryMenuVisible: state.menuVisibility.categoryMenu,
    userMenuVisible: state.menuVisibility.userMenu,
    isSearchVisible: getIsSearchVisible(state),
})

const mapDispatchToProps = dispatch => ({
    setIsSearchVisible: isVisible => dispatch(setIsSearchVisible(isVisible)),
    hideUserMenu: () => {
        dispatch(userMenuVisible(false))
    },
    hideCategoryMenu: () => {
        dispatch(categoryMenuVisible(false))
    },
    userClick: (loggedIn, visible) => {
        if (loggedIn) {
            dispatch(userMenuVisible(visible))
        } else {
            location.href = '/login'
        }
    },
    navClick: visible => dispatch(categoryMenuVisible(visible)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NavComponent)