import {
    h,
    Component
} from 'preact';
import styles from './styles.scss';
import {
    I18n,
    Config
} from '../context';
import {
    UseDefaultUserIcon
} from '../svg/icons/default-user';
import {
    Link
} from '../link';
import {
    Button
} from '../button';
import {
    Notifications
} from '../notifications';
import {
    UseCloseIcon
} from '../svg/icons/close';
import {
    ThemedToggle
} from '../more-nav';
import {
    withTheme
} from '../withTheme';
import {
    breakpointSticky
} from '../../sass/variables.scss';


let FocusTrap;
if (typeof window !== 'undefined') {
    FocusTrap = require('focus-trap-react');
}
const userMenuId = 'js-user-menu';

const isStickyEnabled = () => {
    return window.innerWidth >= parseInt(breakpointSticky, 10);
};

const Avatar = ({
        image,
        username,
        unreadNotificationsCount,
        ...props
    }) => ( <
        div className = {
            styles.userAvatarContainer
        } > {
            image ?
            ( <
                Config.Consumer > {
                    config => < img className = {
                        styles.userAvatar
                    }
                    src = {
                        config.image_service_url + image
                    }
                    alt = {
                        username
                    } { ...props
                    }
                    />} <
                    /Config.Consumer>
                ): ( < UseDefaultUserIcon className = {
                        styles.userAvatar
                    } { ...props
                    }
                    />)} {
                        unreadNotificationsCount > 0 && ( < span className = {
                                styles.userAvatarUnread
                            }
                            />)} <
                            /div>
                        );

                        const UserOptions = ({
                            image,
                            displayName,
                            username,
                            isCommunityUser,
                            onLogoutClicked,
                            onUserMenuClicked,
                            unreadNotifications,
                            readNotifications,
                            isVisible
                        }) => {
                            const baseUrl = config => isCommunityUser ? config.community_url : config.cms_url;
                            const dashbirdUrl = config => isCommunityUser ? config.dashbird_community_url : config.dashbird_url;

                            return ( <
                                Config.Consumer > {
                                    config => ( <
                                        div >
                                        <
                                        div className = {
                                            styles.userMenu
                                        } >
                                        <
                                        div className = {
                                            styles.userOptionsProfile
                                        } >
                                        <
                                        Link className = {
                                            styles.userProfileLink
                                        }
                                        href = {
                                            baseUrl(config)
                                        }
                                        location = {
                                            'userMenu'
                                        }
                                        label = {
                                            'profile'
                                        } >
                                        <
                                        Avatar image = {
                                            image
                                        }
                                        username = {
                                            username
                                        }
                                        /> <
                                        p className = {
                                            styles.userProfileName
                                        } >
                                        <
                                        span className = {
                                            styles.userProfileNameText
                                        } > {
                                            displayName
                                        } <
                                        /span> <
                                        /p> <
                                        /Link> <
                                        ThemedToggle onClick = {
                                            onUserMenuClicked
                                        }
                                        aria - expanded = {
                                            String(isVisible)
                                        }
                                        aria - label = {
                                            'close'
                                        } >
                                        <
                                        UseCloseIcon width = {
                                            22
                                        }
                                        height = {
                                            22
                                        }
                                        aria - hidden = {
                                            true
                                        }
                                        /> <
                                        /ThemedToggle> <
                                        /div> <
                                        I18n.Consumer > {
                                            i18n => ( <
                                                ul className = {
                                                    styles.userOptionsLinks
                                                } >
                                                <
                                                li >
                                                <
                                                Link href = {
                                                    baseUrl(config) + config.new_post_path
                                                }
                                                location = {
                                                    'userMenu'
                                                }
                                                label = {
                                                    'new post'
                                                } >
                                                {
                                                    i18n.new_post
                                                } <
                                                /Link> <
                                                /li> <
                                                li >
                                                <
                                                Link href = {
                                                    baseUrl(config)
                                                }
                                                location = {
                                                    'userMenu'
                                                }
                                                label = {
                                                    'drafts'
                                                } >
                                                {
                                                    i18n.my_drafts
                                                } <
                                                /Link> <
                                                /li> <
                                                li >
                                                <
                                                Link href = {
                                                    dashbirdUrl(config)
                                                }
                                                location = {
                                                    'userMenu'
                                                }
                                                label = {
                                                    'dashboard'
                                                } >
                                                {
                                                    i18n.dashboard
                                                } <
                                                /Link> <
                                                /li> <
                                                li >
                                                <
                                                Link href = {
                                                    config.settings_path
                                                }
                                                location = {
                                                    'userMenu'
                                                }
                                                label = {
                                                    'settings'
                                                } >
                                                Account Settings <
                                                /Link> <
                                                /li> <
                                                li >
                                                <
                                                Button onClick = {
                                                    onLogoutClicked
                                                }
                                                location = {
                                                    'userMenu'
                                                }
                                                label = {
                                                    'logout'
                                                } >
                                                {
                                                    i18n.logout
                                                } <
                                                /Button> <
                                                /li> <
                                                /ul>
                                            )
                                        } <
                                        /I18n.Consumer> <
                                        /div> <
                                        Notifications unreadNotifications = {
                                            unreadNotifications
                                        }
                                        readNotifications = {
                                            readNotifications
                                        }
                                        /> <
                                        /div>
                                    )
                                } <
                                /Config.Consumer>
                            );
                        };

                        /*
                          NotifUserMenuContainer duplicates the logic found in the MoreNav component
                          customized to pass more props into UserOptions component
                        */
                        class NotifUserMenuContainer extends Component {
                            /**
                             * Limits the height of the component to viewport height
                             */
                            componentDidUpdate() {
                                if (!this.props.isVisible || !isStickyEnabled()) {
                                    return;
                                }

                                const {
                                    top
                                } = this.container.getBoundingClientRect();
                                this.container.style.maxHeight = `${document.documentElement.clientHeight - top}px`;
                            }

                            render({
                                isVisible,
                                userInfo,
                                ...props
                            }) {
                                return ( <
                                    section className = {
                                        `${styles.userMenuContainer}  ${this.props.isVisible ? styles.visible : ''}`
                                    }
                                    id = {
                                        userMenuId
                                    }
                                    ref = {
                                        container => this.container = container
                                    } > {
                                        this.props.isVisible && ( <
                                            FocusTrap focusTrapOptions = {
                                                {
                                                    clickOutsideDeactivates: true
                                                }
                                            } >
                                            <
                                            UserOptions { ...userInfo
                                            } { ...props
                                            }
                                            isVisible = {
                                                isVisible
                                            }
                                            /> <
                                            /FocusTrap>
                                        )
                                    } <
                                    /section>
                                );
                            }
                        }


                        class NotifUserMenu extends Component {
                            constructor(props) {
                                super(props);
                                this.state = {
                                    unreadNotifications: [],
                                    readNotifications: []
                                };
                            }

                            componentDidMount() {
                                this.fetchNotifications(this.props.userInfo.id).then(response => {
                                    this.updateNotificationsState(response);
                                }).catch(error => {
                                    console.log(error);
                                });
                            }

                            fetchNotifications(userID) {
                                return fetch(`${this.props.bfURL}/notification-api/v1/notifications?user_id=${userID}`, {
                                        credentials: 'include'
                                    })
                                    .then(response => response.json())
                                    .then(notifications => {
                                        return notifications.results;
                                    });
                            }

                            // TODO: implement mark as read button
                            // markNotificationsAsRead(notifications) {
                            //   const id = notifications[0].id; // grab first ID
                            //   return fetch(`https://stage.buzzfeed.com/notification-api/v1/notifications/${id}`,{
                            //     method: 'PATCH',
                            //     body: JSON.stringify({
                            //       'read': true,
                            //       'mark_previous_read': true
                            //     }),
                            //     credentials: 'include'
                            //   })
                            //     .then(response => response.json())
                            //     .then(notifications => {
                            //       return notifications.results;
                            //     })
                            // }

                            updateNotificationsState(notifications) {
                                const unread = notifications.filter(notification => notification.read_at === null);
                                const read = notifications.filter(notification => notification.read_at !== null);
                                this.setState({
                                    unreadNotifications: unread,
                                    readNotifications: read
                                });
                            }


                            render({
                                isVisible,
                                userInfo,
                                onLogoutClicked,
                                onUserMenuClicked
                            }) {
                                return ( <
                                    div >
                                    <
                                    ThemedToggle onClick = {
                                        onUserMenuClicked
                                    }
                                    aria - expanded = {
                                        String(isVisible)
                                    }
                                    aria - label = {
                                        'avatar'
                                    } >
                                    <
                                    Avatar image = {
                                        userInfo.image
                                    }
                                    username = {
                                        userInfo.username
                                    }
                                    onTouchStart = {
                                        this.onTouchStart
                                    }
                                    unreadNotificationsCount = {
                                        this.state.unreadNotifications.length
                                    }
                                    /> <
                                    /ThemedToggle> <
                                    NotifUserMenuContainer isVisible = {
                                        isVisible
                                    }
                                    userInfo = {
                                        userInfo
                                    }
                                    onLogoutClicked = {
                                        onLogoutClicked
                                    }
                                    onUserMenuClicked = {
                                        onUserMenuClicked
                                    }
                                    unreadNotifications = {
                                        this.state.unreadNotifications
                                    }
                                    readNotifications = {
                                        this.state.readNotifications
                                    }
                                    /> <
                                    /div>
                                );
                            }
                        }

                        export default withTheme(NotifUserMenu);