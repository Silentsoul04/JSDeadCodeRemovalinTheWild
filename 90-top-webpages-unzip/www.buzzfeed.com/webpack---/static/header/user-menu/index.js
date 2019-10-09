import { h, Component } from 'preact';
import styles from './styles.scss';
import { I18n, Config } from '../context';
import { UseSettingsIcon } from '../svg/icons/settings';
import { UseDefaultUserIcon } from '../svg/icons/default-user';
import { Flyout, FlyoutToggle } from '../flyout';
import { Link } from '../link';
import { Button } from '../button';

const Avatar = ({ image, username, ...props }) => (
  image
    ? (
      <Config.Consumer>
        {config => <img className={styles.userAvatar} src={config.image_service_url + image} alt={username} {...props} />}
      </Config.Consumer>
    )
    : <UseDefaultUserIcon className={styles.userAvatar} {...props} />
);

const UserOptions = ({ image, displayName, username, isCommunityUser, onLogoutClicked }) => {
  const baseUrl = config => isCommunityUser ? config.community_url : config.cms_url;
  const dashbirdUrl = config => isCommunityUser ? config.dashbird_community_url : config.dashbird_url;

  return (
    <Config.Consumer>
      {config => (
        <div>
          <div className={styles.userOptionsProfile}>
            <Link
              className={styles.userProfileLink}
              href={baseUrl(config)}
              location={'userMenu'}
              label={'profile'}
            >
              <Avatar image={image} username={username} />
              <p className={styles.userProfileName}>
                <span className={styles.userProfileNameText}>
                  {displayName}
                </span>
                <I18n.Consumer>
                  {i18n => (
                    <span className={styles.userProfileView}>
                      {i18n.view_profile}
                    </span>
                  )}
                </I18n.Consumer>
              </p>
            </Link>
            <Link
              className={styles.settingsLink}
              href={config.settings_path}
              location={'userMenu'}
              label={'settings'}
            >
              <UseSettingsIcon />
            </Link>
          </div>
          <I18n.Consumer>
            {i18n => (
              <ul className={styles.userOptionsLinks}>
                <li>
                  <Link
                    href={baseUrl(config) + config.new_post_path}
                    location={'userMenu'}
                    label={'new post'}
                  >
                    {i18n.new_post}
                  </Link>
                </li>
                <li>
                  <Link
                    href={baseUrl(config)}
                    location={'userMenu'}
                    label={'drafts'}
                  >
                    {i18n.my_drafts}
                  </Link>
                </li>
                <li>
                  <Link
                    href={dashbirdUrl(config)}
                    location={'userMenu'}
                    label={'dashboard'}
                  >
                    {i18n.dashboard}
                  </Link>
                </li>
                <li>
                  <Button
                    onClick={onLogoutClicked}
                    location={'userMenu'}
                    label={'logout'}
                  >
                    {i18n.logout}
                  </Button>
                </li>
              </ul>
            )}
          </I18n.Consumer>
        </div>
      )}
    </Config.Consumer>
  );
};

class UserMenu extends Component {
  render({ userInfo, onLogoutClicked }) {
    return (
      <div className={styles.userMenu}>
        <Flyout width={255} location={'topicBar'} label={'user'}>
          <FlyoutToggle>
            <Avatar image={userInfo.image} username={userInfo.username} onTouchStart={this.onTouchStart} />
          </FlyoutToggle>
          <UserOptions {...userInfo} onLogoutClicked={onLogoutClicked} />
        </Flyout>
      </div>
    );

  }
}

export default UserMenu;
