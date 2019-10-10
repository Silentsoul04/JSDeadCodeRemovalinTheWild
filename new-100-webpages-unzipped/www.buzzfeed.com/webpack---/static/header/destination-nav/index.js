import {
    h
} from 'preact';
import styles from './styles.scss';
import {
    wrapper
} from '../header.scss';
import {
    DestinationLogo
} from '../svg/logos';
import {
    Link
} from '../link';
import {
    I18n
} from '../context';
import DESTINATIONS from '../../constants/destinations';

const destinationItemTitleId = name => `js-destination-item-${name}-main`;

const DestinationNav = ({
    destinations
}) => ( <
    I18n.Consumer > {
        i18n =>
        <
        div className = {
            styles.destinationNavContainer
        } >
        <
        nav className = {
            wrapper
        }
        aria - label = {
            i18n.more_buzzfeed_brands
        } >
        <
        ul className = {
            styles.destinationNav
        } > {
            destinations.map(({
                url,
                name,
                label
            }) => ( <
                li className = {
                    styles.destinationNavItem
                } >
                <
                Link href = {
                    url
                }
                className = {
                    styles.link
                }
                label = {
                    label || name
                }
                location = {
                    'brandBar'
                } >
                <
                DestinationLogo destinationName = {
                    name
                }
                role = "img"
                aria - labelledby = {
                    destinationItemTitleId(name)
                } >
                <
                title id = {
                    destinationItemTitleId(name)
                } > {
                    DESTINATIONS[name].displayName
                } < /title> <
                /DestinationLogo> <
                /Link> <
                /li>
            ))
        } <
        /ul> <
        /nav> <
        /div>
    } <
    /I18n.Consumer>
);

export default DestinationNav;