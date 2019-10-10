import {
    h,
    Component
} from 'preact';
import styles from './styles.scss';
import EditionSelect from '../edition-select';
import {
    Config,
    I18n
} from '../context';
import {
    DestinationLogo
} from '../svg/logos';
import {
    Link
} from '../link';
import {
    Button
} from '../button';
import {
    breakpointSticky
} from '../../sass/variables.scss';
import {
    withTheme
} from '../withTheme';
import DESTINATIONS from '../../constants/destinations';

let FocusTrap;
if (typeof window !== 'undefined') {
    FocusTrap = require('focus-trap-react');
}

const navMenuId = 'js-more-nav';

const isStickyEnabled = () => {
    return window.innerWidth >= parseInt(breakpointSticky, 10);
};

const destinationItemTitleId = name => `js-destination-item-${name}-more`;

class Toggle extends Component {
    render({
        children,
        theme,
        ...props
    }) {
        return ( <
            Button { ...props
            }
            className = {
                `${styles.menuToggle} ${theme.menuToggle}`
            }
            onClick = {
                this.props.onClick
            }
            aria - controls = {
                navMenuId
            }
            location = {
                'hamburger'
            } >
            <
            i > {
                children
            } < /i> <
            /Button>
        );
    }
}

export const ThemedToggle = withTheme(Toggle);

export class PageOverlay extends Component {
    constructor() {
        super();
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onKeyDown(evt) {
        // Escape key
        if (evt.keyCode === 27) {
            this.props.onHide(evt);
        }
    }

    componentDidMount() {
        if (isStickyEnabled()) {
            document.body.classList.add(styles.bodyWithMoreNav);
        }
        window.addEventListener('keydown', this.onKeyDown, true);
    }

    componentWillUnmount() {
        document.body.classList.remove(styles.bodyWithMoreNav);
        window.removeEventListener('keydown', this.onKeyDown, true);
    }

    render({
        top,
        onHide
    }) {
        if (!isStickyEnabled()) {
            return null;
        }

        return ( <
            div className = {
                styles.pageOverlay
            }
            style = {
                `top:${top}px`
            }
            onMouseDown = {
                onHide
            }
            role = "presentation" / >
        );
    }
}

const SectionItem = withTheme(({
    name,
    url,
    label,
    theme
}) => ( <
    li > < Link href = {
        url
    }
    className = {
        `${styles.link} ${theme.link}`
    }
    label = {
        label || name
    }
    location = {
        'moreMenu'
    } > {
        name
    } < /Link></li >
));

const MoreNavInner = ({
        navItems: {
            sections = [],
            about = [],
            footer = [],
            destinations = []
        },
        isUserLoggedIn,
        theme,
        edition
    }) => {
        return ( <
            div > {!isUserLoggedIn &&
                ( <
                    I18n.Consumer > {
                        i18n =>
                        <
                        div className = {
                            `${styles.section} ${styles.communitySection} ${theme.text}`
                        } >
                        <
                        Config.Consumer > {
                            config => < Link href = {
                                config.community_url
                            }
                            className = {
                                `${styles.link} ${theme.linkCta}`
                            }
                            location = {
                                'moreMenu'
                            }
                            label = {
                                'login'
                            } > {
                                i18n.log_in
                            } < /Link> } <
                            /Config.Consumer> &
                            nbsp; {
                                i18n.or
                            } & nbsp; <
                            Link href = "/signup"
                            className = {
                                `${styles.link} ${theme.linkCta}`
                            }
                            location = {
                                'moreMenu'
                            }
                            label = {
                                'signup'
                            } > {
                                i18n.sign_up
                            } < /Link> &
                            nbsp; {
                                i18n.to_post
                            } <
                            /div>
                        } <
                        /I18n.Consumer>
                    )
                } <
                I18n.Consumer > {
                    i18n =>
                    <
                    nav className = {
                        `${styles.section} ${styles.sectionLinksSection}`
                    }
                    aria - label = {
                        i18n.browse_sections
                    } >
                    <
                    h2 className = {
                        `${styles.sectionTitle} ${theme.text}`
                    } > {
                        i18n.browse_sections
                    } < /h2> <
                    ul className = {
                        styles.sectionItems
                    } > {
                        sections.map(SectionItem)
                    } < /ul> <
                    /nav>
                } <
                /I18n.Consumer> <
                I18n.Consumer > {
                    i18n =>
                    <
                    nav className = {
                        styles.section
                    }
                    aria - label = {
                        i18n.about
                    } >
                    <
                    h2 className = {
                        `${styles.sectionTitle} ${theme.text}`
                    } > {
                        i18n.about
                    } < /h2> <
                    ul className = {
                        styles.sectionItems
                    } > {
                        about.map(SectionItem)
                    } < /ul> <
                    /nav>
                } <
                /I18n.Consumer> <
                I18n.Consumer > {
                    i18n =>
                    <
                    nav className = {
                        `${styles.section} ${styles.otherLinksSection}`
                    }
                    aria - label = {
                        i18n.useful_information
                    } >
                    <
                    ul className = {
                        styles.sectionItems
                    } > {
                        footer.map(SectionItem)
                    } < /ul> <
                    /nav>
                } <
                /I18n.Consumer> <
                div className = {
                    `${styles.section} ${styles.footerSection}`
                } >
                <
                EditionSelect edition = {
                    edition
                }
                /> <
                div className = {
                    `${styles.copyright} ${theme.text}`
                } > ©{
                    new Date().getFullYear()
                }
                BuzzFeed,
                Inc <
                /div> <
                /div> <
                I18n.Consumer > {
                    i18n =>
                    <
                    nav className = {
                        `${styles.section} ${styles.destinationsSection}`
                    }
                    aria - label = {
                        i18n.more_buzzfeed_brands
                    } >
                    <
                    ul className = {
                        styles.sectionItems
                    } > {
                        destinations.map(({
                            url,
                            name,
                            description,
                            label
                        }) => ( <
                            li className = {
                                styles.destinationItem
                            } >
                            <
                            Link className = {
                                styles.destinationLink
                            }
                            href = {
                                url
                            }
                            location = {
                                'moreMenu'
                            }
                            label = {
                                label || name
                            } >
                            <
                            i className = {
                                styles[`${name}Logo`]
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
                            /i> <
                            span > {
                                description
                            } < /span> <
                            /Link> <
                            /li>
                        ))
                    } <
                    /ul> <
                    /nav>
                } <
                /I18n.Consumer> <
                /div>
            );
        };

        class MoreNav extends Component {
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
                ...props
            }) {
                return ( <
                    section className = {
                        `${styles.moreNav} ${props.theme.moreNav} ${isVisible ? styles.visible : ''}`
                    }
                    id = {
                        navMenuId
                    }
                    ref = {
                        container => this.container = container
                    } > {
                        isVisible ? < FocusTrap focusTrapOptions = {
                            {
                                clickOutsideDeactivates: true
                            }
                        } > < MoreNavInner { ...props
                        }
                        /></FocusTrap > : < MoreNavInner { ...props
                        }
                        /> } <
                        /section>
                    );
                }
            }

            export const ThemedMoreNav = withTheme(MoreNav);