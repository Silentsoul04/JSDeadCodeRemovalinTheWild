import {
    h
} from 'preact';
import styles from './styles.scss';
import {
    BadgeSVG
} from '../svg/badges';
import {
    Link
} from '../link';
import {
    I18n
} from '../context';

const badgePropsByName = {
    trending: {
        className: styles.trendingBadge
    }
};

const badgeTitleId = name => `js-badge-feed-title-${name}`;

const Badge = ({
    name,
    label,
    url,
    zIndex
}) => {
    return ( <
        li className = {
            styles.badgeBarItem
        }
        style = {
            {
                'z-index': zIndex
            }
        } >
        <
        Link href = {
            url
        }
        label = {
            label || name
        }
        location = {
            'badgeBar'
        } >
        <
        BadgeSVG badgeName = {
            name
        }
        role = "img"
        aria - labelledby = {
            badgeTitleId(name)
        } { ...badgePropsByName[name]
        } >
        <
        title id = {
            badgeTitleId(name)
        } > {
            name
        }
        Badge Feed < /title> <
        /BadgeSVG> <
        /Link> <
        /li>
    );
};

const BadgeBar = ({
        badges,
        withOffset = false
    }) => ( <
        I18n.Consumer > {
            i18n =>
            <
            ul className = {
                `${styles.badgeBar} ${withOffset ? styles.badgeBarWithOffset : ''}`
            }
            aria - label = {
                i18n.buzzfeed_badges
            } > { /* We use z-index so the badges stack left->right rather than by dom order */ } {
                badges.map((badge, idx, arr) => < Badge zIndex = {
                            arr.length - idx
                        } { ...badge
                        }
                        />) } <
                        /ul>
                    } <
                    /I18n.Consumer>
            );

            export default BadgeBar;