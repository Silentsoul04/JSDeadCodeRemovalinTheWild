import { h, Component } from 'preact';
import { FlyoutContainer } from '../flyout';
import { ThemedMoreNav, ThemedToggle } from '../more-nav';
import { ThemedTopicNav } from '../topic-nav';
import { Search } from '../search';
import { ThemedLogo } from '../logo';
import { UseHamburgerIcon } from '../svg/icons/hamburger';
import { UseCloseIcon } from '../svg/icons/close';
import BadgeBar from '../badge-bar';
import UserMenu from '../user-menu';
import ThemedNotifUserMenu from '../notif-user-menu';
import styles from './styles.scss';
import { wrapper } from '../header.scss';
import { withTheme } from '../withTheme';
import { I18n } from '../context';

class NotificationsFeatureFlag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderDev: false
    };
  }
  componentDidMount() {
    if (window.BZFD.Config.env === 'dev' || window.BZFD.Config.env === 'stage') {
      this.setState({ renderDev: true });
    }
  }
  render() {
    // render user menu with notifications on dev/stage only
    return this.state.renderDev ? <div>{this.props.notifUserMenu}</div> : <div>{this.props.userMenu}</div>;
  }
}

class MainNav extends Component {
  render({
    navItems, brand, edition, theme, userInfo, showBadges, showMoreNav, showNotifMenu, isSticking,
    onNavToggleClicked, onUserMenuClicked, onLogoutClicked, bfURL, ...props
  }) {
    const { topics = [], badges = [], destinations = [] } = navItems;
    return (
      <div
        className={`${styles.mainNavContainer} ${theme.mainNavContainer} ${
          isSticking ? styles.stickyMainNav : ''
        }`}
      >
        <div className={wrapper}>
          <I18n.Consumer>
            {i18n => (
              <div className={styles.mainNav}>
                <ThemedToggle
                  onClick={onNavToggleClicked}
                  aria-expanded={String(showMoreNav)}
                  aria-label={i18n.hamburger}
                >
                  {showMoreNav ? (
                    <UseCloseIcon width={22} height={22} aria-hidden={true} />
                  ) : (
                    <UseHamburgerIcon
                      width={16}
                      height={12}
                      aria-hidden={true}
                    />
                  )}
                </ThemedToggle>
                <ThemedLogo brand={brand} edition={edition} />
                <ThemedTopicNav topics={topics} brand={brand} />
                <Search />
                {userInfo && (<NotificationsFeatureFlag
                  notifUserMenu={
                    <ThemedNotifUserMenu
                      isVisible={showNotifMenu}
                      userInfo={userInfo}
                      onUserMenuClicked={onUserMenuClicked}
                      onLogoutClicked={onLogoutClicked}
                      bfURL={bfURL}
                      {...props}
                    />
                  }
                  userMenu={
                    <UserMenu
                      userInfo={userInfo}
                      onLogoutClicked={onLogoutClicked}
                    />
                  }
                />)}
                {showBadges && (
                  <BadgeBar
                    badges={badges}
                    withOffset={!isSticking && destinations.length > 0}
                  />
                )}
              </div>
            )}
          </I18n.Consumer>
          <ThemedMoreNav
            navItems={navItems}
            isVisible={showMoreNav}
            isUserLoggedIn={!!userInfo}
            {...props}
          />
        </div>
        <FlyoutContainer />
      </div>
    );
  }
}

export const ThemedMainNav = withTheme(MainNav);
