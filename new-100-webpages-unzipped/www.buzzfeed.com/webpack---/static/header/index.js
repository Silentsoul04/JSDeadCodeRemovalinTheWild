import {
    h,
    Component
} from 'preact';
import {
    throttle
} from 'lodash-es';
import auth from '@buzzfeed/buzzblocks/js/services/auth';
import styles from './header.scss';
import {
    PageOverlay
} from './more-nav';
import DestinationNav from './destination-nav';
import {
    I18n,
    Config,
    Theme
} from './context';
import {
    ThemedMainNav
} from './main-nav';
import {
    SkipNav
} from './skip-nav';
import {
    breakpointSticky
} from '../sass/variables.scss';

function getUserInfo() {
    if (!auth.isLoggedIn()) {
        return null;
    }
    const userInfo = auth.getUserInfo();
    return {
        id: userInfo.userid,
        displayName: userInfo.display_name,
        image: userInfo.image,
        username: userInfo.username,
        isCommunityUser: !auth.userCan('general_admin') && !auth.userCan('freelance_contributors')
    };
}

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            showMoreNav: false,
            showNotifMenu: false,
            isSticking: false,
            userInfo: null
        };
        this.toggleMoreNav = this.toggleMoreNav.bind(this);
        this.toggleNotifMenu = this.toggleNotifMenu.bind(this);
        this.onLogout = this.onLogout.bind(this);
        this.onScroll = throttle(this.onScroll.bind(this), 50);
    }

    overlayTopOffset() {
        const containerHeight = this.stickyContainer.clientHeight;
        const {
            y: containerY
        } = this.stickyContainer.getBoundingClientRect();
        return this.state.isSticking ?
            containerHeight :
            containerHeight + containerY;
    }

    toggleMoreNav({
        forceVisible = !this.state.showMoreNav
    }) {
        this.setState({
            ...this.state,
            showMoreNav: forceVisible
        });
    }

    toggleNotifMenu({
        forceVisible = !this.state.showNotifMenu
    }) {
        this.setState({
            ...this.state,
            showNotifMenu: forceVisible
        });
    }

    onLogout() {
        auth.signout()
            .then(() => window.location.reload());
    }

    /**
     * Listener for updating the sticky behavior when header is being scrolled into or out of view
     */
    onScroll() {
        const {
            top
        } = this.stickyContainer.getBoundingClientRect();
        const nextIsSticking = top <= 0;
        if (this.state.isSticking === nextIsSticking) {
            return;
        }

        this.setState({
            ...this.state,
            isSticking: nextIsSticking
        });
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            userInfo: getUserInfo()
        });

        // don't sticky the nav if we are zoomed in very closely or the nav will block a lot of the page
        if (window.innerWidth >= parseInt(breakpointSticky, 10) && window.innerHeight > this.stickyContainer.clientHeight * 3) {
            window.addEventListener('scroll', this.onScroll);
            this.stickyContainer.style.height = `${this.stickyContainer.clientHeight}px`;
            this.onScroll();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    render({
            navItems,
            config,
            i18n,
            theme,
            ...props
        }, state) {
            const {
                destinations = []
            } = navItems;

            return ( <
                I18n.Provider value = {
                    i18n
                } >
                <
                Config.Provider value = {
                    config
                } >
                <
                Theme.Provider value = {
                    theme
                } >
                <
                header className = {
                    styles.header
                } >
                <
                SkipNav / >
                <
                DestinationNav destinations = {
                    destinations
                }
                /> <
                div className = "js-sticky-container"
                ref = {
                    el => this.stickyContainer = el
                } >
                <
                ThemedMainNav navItems = {
                    navItems
                }
                userInfo = {
                    state.userInfo
                }
                showMoreNav = {
                    state.showMoreNav
                }
                showNotifMenu = {
                    state.showNotifMenu
                }
                isSticking = {
                    state.isSticking
                }
                onNavToggleClicked = {
                    this.toggleMoreNav
                }
                onUserMenuClicked = {
                    this.toggleNotifMenu
                }
                onLogoutClicked = {
                    this.onLogout
                }
                bfURL = {
                    config.bf_url
                } { ...props
                }
                /> <
                /div> {
                    state.showMoreNav && < PageOverlay top = {
                        this.overlayTopOffset()
                    }
                    onHide = {
                        this.toggleMoreNav
                    }
                    /> } {
                        state.showNotifMenu && < PageOverlay top = {
                            this.overlayTopOffset()
                        }
                        onHide = {
                            this.toggleNotifMenu
                        }
                        /> } <
                        /header> <
                        /Theme.Provider> <
                        /Config.Provider> <
                        /I18n.Provider>
                    );
                }
            }