import {
    h
} from 'preact';
import Header from './header';
import {
    createDestinationLogoByName
} from './header/svg/logos';
import {
    HamburgerIcon
} from './header/svg/icons/hamburger';
import {
    SearchIcon
} from './header/svg/icons/search';
import {
    SettingsIcon
} from './header/svg/icons/settings';
import {
    createBadgeSVGByName
} from './header/svg/badges';
import {
    BuzzFeedOriginalsLogo
} from './header/svg/logos/bfo';
import {
    CloseIcon
} from './header/svg/icons/close';
import {
    CaretIcon
} from './header/svg/icons/caret';
import {
    DefaultUserIcon
} from './header/svg/icons/default-user';
import {
    createBrandLogoByName,
    createBrandTaglineByName
} from './header/svg/brands';

export const headerContainerId = 'js-header-container';

const SVGDefs = ({
    children
}) => ( <
    svg style = "display: none;" >
    <
    defs > {
        children
    } < /defs> <
    /svg>
);

/**
 * This container is used by the client to remount the application instance.
 * It is diffed against shadow DOM tree reconstructed on the client side.
 * Be wary of changing its contents as it may affect initialisation process.
 */
const HeaderContainer = ({ ...props
}) => ( <
    div id = {
        headerContainerId
    } >
    <
    Header { ...props
    }
    /> <
    /div>
);

/**
 * Provides a shell for the header component, which is only rendered on the server.
 * Any static data referenced from the client code belongs here (i.e. JS globals or SVG definitions)
 */
const HeaderShell = (props) => {
    const {
        navItems = {}
    } = props;
    const {
        destinations = [], badges = []
    } = navItems;
    return ( <
        div >
        <
        SVGDefs > {
            destinations.map(({
                name
            }) => createDestinationLogoByName(name))
        } {
            badges.map(({
                name
            }) => createBadgeSVGByName(name))
        } {
            createBrandLogoByName(props.brand)
        } {
            createBrandTaglineByName(props.brand)
        } <
        HamburgerIcon / >
        <
        SearchIcon / >
        <
        CloseIcon / >
        <
        CaretIcon / >
        <
        SettingsIcon / >
        <
        BuzzFeedOriginalsLogo / >
        <
        DefaultUserIcon / >
        <
        /SVGDefs> <
        HeaderContainer { ...props
        }
        /> <
        script dangerouslySetInnerHTML = {
            {
                __html: `
      window.BZFD = window.BZFD || {};
      window.BZFD.__HEADER_STATE__ = ${JSON.stringify(props)};
    `
            }
        }
        /> <
        /div>
    );
};

export default HeaderShell;