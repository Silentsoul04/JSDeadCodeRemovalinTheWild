import Avatar from './avatar'
import UsernameBadge from './username-badge'
import styles from './avatar-badge.css'
import PropTypes from 'prop-types'
import {
    PureComponent
} from 'react'
import pingbackEnhancer from 'shared/pingbacks/pingback-enhancer'

@pingbackEnhancer()
export default class AvatarBadge extends PureComponent {
    static propTypes = {
        user: PropTypes.object,
        title: PropTypes.string,
        height: PropTypes.number,
        onClick: PropTypes.func,
        css: PropTypes.object,
    }

    static defaultProps = {
        user: {},
        css: {},
    }

    click() {
        this.props.pingBackFunctions && this.props.pingBackFunctions.onClick(this.props)
    }

    onHover() {
        this.props.pingBackFunctions && this.props.pingBackFunctions.onHover(this.props)
    }

    render() {
        const {
            user,
            title,
            height,
            onClick,
            css
        } = this.props
        const {
            titleStyle = styles.title, containerStyle = styles.container, profileStyle = styles.profileInfo
        } = css
        return ( <
            div ref = {
                el => {
                    this.el = el
                }
            }
            onMouseEnter = {
                () => this.onHover()
            }
            className = {
                containerStyle
            }
            onClick = {
                () => {
                    this.click()
                    onClick && onClick()
                }
            } >
            <
            Avatar user = {
                user
            }
            height = {
                height
            }
            /> <
            div className = {
                profileStyle
            } >
            <
            a href = {
                user.channelPageUrl
            } >
            <
            h1 className = {
                titleStyle
            } > {
                title
            } < /h1> <
            /a> <
            div className = {
                styles.usernameClass
            } >
            <
            UsernameBadge user = {
                user
            }
            tooltip = {
                false
            }
            /> <
            /div> <
            /div> <
            /div>
        )
    }
}