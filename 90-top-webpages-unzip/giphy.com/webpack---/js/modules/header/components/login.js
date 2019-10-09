import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import { Component } from 'react'
import routes from 'shared/routes'
import css from './login.css'
import appendNext from 'shared/components/form/get-next-url'

export default class Login extends Component {
    static propTypes = {
        user: PropTypes.object,
    }
    componentDidMount() {
        // dashboard legacy checks
        window.Giphy.UserEdit && window.Giphy.UserEdit.userSettingsInit()
    }
    render() {
        const { user } = this.props
        return (
            <div>
                <div className={css.defaultNav}>{user ? <LoggedIn user={user} /> : <LoggedOut />}</div>
            </div>
        )
    }
}

const LoggedIn = props => {
    const {
        user: {
            display_name: displayName,
            avatar,
            username,
            is_staff: isStaff,
            permissions: { dashboard_link, create_stories },
        },
    } = props
    return (
        <span className={css.user}>
            <a className={`${css.usernameButton} ${css.userUrl}`} href={`/channel/${username}`}>
                <span className={css.avatar} style={{ backgroundImage: `url(${avatar})` }} />
                <span className={css.username}>{displayName || username}</span>
            </a>
            <div className={css.caret}>
                <i className="ss-icon ss-dropdown" />
            </div>
            <ul className={css.partnerNavMenu}>
                {dashboard_link && (
                    <li>
                        <a href={routes.DASHBOARD.path}>Dashboard</a>
                    </li>
                )}
                <li>
                    <a href="/settings">Settings</a>
                </li>
                {create_stories && (
                    <li>
                        <a href={routes.STORYBOOK.path}>Storybook</a>
                    </li>
                )}
                <li>
                    <a href={routes.FAVORITES.path}>Favorites</a>
                </li>
                {isStaff && (
                    <li>
                        <a href="/edit/channels">Channels</a>
                    </li>
                )}
                <li>
                    <a href="/logout">Log Out</a>
                </li>
            </ul>
        </span>
    )
}

const LoggedOut = () => {
    const isLogin = location.pathname === routes.LOGIN.path
    return (
        <a
            id="login-button"
            className={css.loginJoinButton}
            rel="nofollow"
            href={appendNext(`/${isLogin ? 'join' : 'login'}`)}
        >
            <i className={`${css.userIcon} ss-user`} />
            <span className="nav-text">{isLogin ? 'Join' : 'Log In'}</span>
        </a>
    )
}
