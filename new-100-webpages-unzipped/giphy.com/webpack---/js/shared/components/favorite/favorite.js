import PropTypes from 'prop-types'
import {
    connect
} from 'react-redux'
import {
    PureComponent
} from 'react'
import * as selectors from 'shared/redux/reducers'
import toggleFavorite from 'shared/redux/favorites'
import css from './favorite.css'
const CLICK_WAIT_TIME = 400

@connect(
    state => ({
        user: selectors.getUser(state)
    }), {
        toggleFavorite
    },
)
/**
 * GIF Grid - Favorite: Favorite GIFs in the GIF grid!
 *
 * @class Favorite
 */
class Favorite extends PureComponent {
    static propTypes = {
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool.isRequired,
        className: PropTypes.string,
        showLabel: PropTypes.bool,
        onClick: PropTypes.func,
        scale: PropTypes.number,
    }
    state = {
        isActive: false,
    }
    callbackTimeout = null
    hasBeenClicked = false
    componentDidMount() {
        const {
            isFavorite
        } = this.props
        this.setState({
            isActive: !!isFavorite
        })
    }
    componentDidUpdate(prevProps) {
        if (prevProps.isFavorite !== this.props.isFavorite) {
            this.hasBeenClicked = false
            this.setState({
                isActive: !!this.props.isFavorite
            })
        }
        if (prevProps.id !== this.props.id) {
            this.hasBeenClicked = false
            this.setState({
                isActive: this.props.isFavorite || false
            })
        }
    }
    componentWillUnmount() {
        clearTimeout(this.callbackTimeout)
    }
    onClick() {
        const {
            onClick,
            user,
            toggleFavorite,
            id,
            url,
            isFavorite
        } = this.props
        const loggedIn = user.loggedIn || window.LOGGED_IN

        if (loggedIn) {
            // toggle active state
            this.hasBeenClicked = true
            this.setState(({
                isActive
            }) => {
                return {
                    isActive: !isActive
                }
            })
        }
        // wait to fire callback so you can hammer on the like
        // button without hammering the endpoint. ᕕ(⌐■_■)ᕗ
        clearTimeout(this.callbackTimeout)
        this.callbackTimeout = setTimeout(
            () => {
                toggleFavorite({
                    id,
                    url
                }, user)
                onClick && onClick({
                    id,
                    url,
                    is_favorite: isFavorite
                })
            },
            loggedIn ? CLICK_WAIT_TIME : 0,
        )
    }
    render() {
        const {
            isActive
        } = this.state
        const {
            showLabel,
            className,
            scale
        } = this.props
        const transform = `scale(${scale || 1})`
        const style = {
            WebkitTransform: transform,
            MozTransform: transform,
            Transform: transform,
        }
        return ( <
            div className = {
                className ? `${className} ${css.favorite}` : css.favorite
            }
            style = {
                style
            }
            onClick = {
                () => this.onClick()
            } >
            <
            div className = {
                isActive ? css.favoriteIconActive : css.favoriteIcon
            }
            data - animated = {
                this.hasBeenClicked
            }
            /> {
                showLabel && < span > Favorite < /span>} <
                    /div>
            )
        }
    }

    export default Favorite