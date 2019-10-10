import {
    h,
    Component
} from 'preact';
import styles from './styles.scss';

/**
 * Returns a formatted Date string in format 'Oct 4, 2019'
 * @param {String} string - ISO date
 * @returns {String} formatted string with date
 */
const getFormattedDate = string =>
    new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }).format(string);

class UnreadIcon extends Component {
    render({
        count
    }) {
        return ( <
            div className = {
                styles.unreadIcon
            } > {
                count
            } < /div>
        );
    }
}

class Notification extends Component {
    // timeAgo takes a unix timestamp and returns a formatted
    // string representing the "time ago"
    timeAgo(timestamp) {
        const nowUnix = Date.now();
        const timeDiffUnix = nowUnix - timestamp.valueOf();
        let timeAgo;

        // less than an hour
        if (timeDiffUnix < 3600000) {
            const timeDiffMin = Math.round(timeDiffUnix / 60);

            if (timeDiffMin < 2) {
                timeAgo = '1 minute ago';
            } else {
                timeAgo = timeDiffMin + ' minutes ago';
            }
        } else if (timeDiffUnix < 3600000 * 24) {
            // less than 24 hours
            const timeDiffHour = Math.round(timeDiffUnix / 3600000);

            if (timeDiffHour < 2) {
                timeAgo = '1 hour ago';
            } else {
                timeAgo = timeDiffHour + ' hours ago';
            }
        } else {
            // more than 24 hours
            timeAgo = 'on ' + getFormattedDate(timestamp);
        }

        return timeAgo;
    }

    render({
        body,
        triggered_at
    }) {
        return ( <
            li >
            <
            div className = {
                styles.notification
            } >
            <
            div > {
                body
            } < /div> <
            div > {
                this.timeAgo(new Date(triggered_at))
            } < /div> <
            /div> <
            /li>
        );
    }
}

export class Notifications extends Component {
    render({
            unreadNotifications = [],
            readNotifications = []
        }) {
            return ( <
                    div className = {
                        styles.notifications
                    } >
                    <
                    h2 className = {
                        styles.notificationsTitle
                    } > Notifications < /h2> <
                    div className = {
                        styles.unreadTitle
                    } >
                    <
                    h3 > Unread < /h3> {
                        unreadNotifications.length > 0 ? < UnreadIcon count = {
                            unreadNotifications.length
                        }
                        /> : ''} <
                        /div> {
                            unreadNotifications.length > 0 ?
                                ( <
                                    ul > {
                                        unreadNotifications.map(notification => < Notification { ...notification
                                            }
                                            />)
                                        } <
                                        /ul>
                                    ):
                                    ( <
                                        div > No unread notifications. < /div>
                                    )
                                } <
                                h3 > Read < /h3> {
                                    readNotifications.length > 0 ?
                                        ( <
                                            ul > {
                                                readNotifications.map(notification => < Notification { ...notification
                                                    }
                                                    />)
                                                } <
                                                /ul>
                                            ):
                                            ( <
                                                div > No read notifications. < /div>
                                            )
                                        } <
                                        /div>
                                );
                        }
                    }