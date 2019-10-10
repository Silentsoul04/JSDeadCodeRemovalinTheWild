import {
    h
} from 'preact';
import styles from './styles.scss';
import {
    UseBuzzFeedOriginalsLogo
} from '../svg/logos/bfo';
import {
    MicroBrandLogo
} from '../svg/brands';
import {
    UseBuzzFeedNewsBrandLogo,
    UseBuzzFeedNewsTagline
} from '../svg/brands/news';
import {
    Config
} from '../context';
import {
    Link
} from '../link';
import {
    withTheme
} from '../withTheme';

const titleIdentifiers = {
    buzzfeed: 'js-bfo-logo-title',
    news: 'js-bfn-logo-title',
    microbrand: 'js-microbrand-logo-title'
};

const BrandedLogo = withTheme(({
    brand,
    theme
}) => {
    const brandDelimiterClass = `delimiter-${brand}`;
    return ( <
        Config.Consumer > {
            config =>
            <
            div className = {
                styles.microBrandContainer
            } >
            <
            Link className = {
                styles.microBrandLink
            }
            href = {
                config.brand_urls[brand]
            }
            label = {
                brand
            }
            location = {
                'logo'
            } >
            <
            MicroBrandLogo className = {
                styles[brand]
            }
            brandName = {
                brand
            }
            role = "img"
            aria - labelledby = {
                titleIdentifiers.microbrand
            } >
            <
            title id = {
                titleIdentifiers.microbrand
            } > {
                brand
            }
            Feed < /title> <
            /MicroBrandLogo> <
            /Link> <
            span className = {
                `${styles.microBrandDelimiter} ${styles[brandDelimiterClass]}`
            } > on < /span> <
            Link href = {
                config.bf_url
            }
            className = {
                styles.logoContainer
            }
            label = {
                'bfo'
            }
            location = {
                'logo'
            } >
            <
            UseBuzzFeedOriginalsLogo className = {
                `${styles.bfo} ${styles.secondary} ${theme.bfoLogo}`
            }
            role = "img"
            aria - labelledby = {
                titleIdentifiers.buzzfeed
            } >
            <
            title id = {
                titleIdentifiers.buzzfeed
            } > Homepage < /title> <
            /UseBuzzFeedOriginalsLogo> <
            /Link> <
            /div>
        } <
        /Config.Consumer>
    );
});

const BfnLogo = (props) => ( <
    div className = {
        styles.newsLogoContainer
    } >
    <
    UseBuzzFeedNewsBrandLogo className = {
        styles.news
    } { ...props
    }
    role = "img"
    aria - labelledby = {
        titleIdentifiers.news
    } >
    <
    title id = {
        titleIdentifiers.news
    } > BuzzFeed News Homepage < /title> <
    /UseBuzzFeedNewsBrandLogo> <
    UseBuzzFeedNewsTagline className = {
        styles.newsTagline
    }
    aria - hidden = {
        true
    }
    /> <
    /div>
);

export const ThemedLogo = withTheme(({
    brand,
    theme,
    edition,
    ...props
}) => {
    if (brand === 'news') {
        return ( <
            Config.Consumer > {
                ({
                    brand_urls
                }) => {
                    let href = edition === 'us' ? brand_urls[brand] : brand_urls[`${brand}_alt`];
                    return ( <
                        Link href = {
                            href
                        }
                        className = {
                            styles.logoContainer
                        }
                        label = {
                            'bfnews'
                        }
                        location = {
                            'logo'
                        } >
                        <
                        BfnLogo className = {
                            styles[brand]
                        } { ...props
                        }
                        /> <
                        /Link>
                    );
                }
            } < /Config.Consumer>
        );
    }

    if (brand === 'bfo') {
        return ( <
            Config.Consumer > {
                ({
                    brand_urls
                }) => ( <
                    Link href = {
                        brand_urls[brand]
                    }
                    className = {
                        styles.logoContainer
                    }
                    label = {
                        'buzzfeed'
                    }
                    location = {
                        'logo'
                    } >
                    <
                    UseBuzzFeedOriginalsLogo className = {
                        `${styles[brand]} ${theme.bfoLogo}`
                    }
                    role = "img"
                    aria - labelledby = {
                        titleIdentifiers.buzzfeed
                    } { ...props
                    } >
                    <
                    title id = {
                        titleIdentifiers.buzzfeed
                    } > Homepage < /title> <
                    /UseBuzzFeedOriginalsLogo> <
                    /Link>
                )
            } < /Config.Consumer>
        );
    }

    return <BrandedLogo brand = {
        brand
    }
    />;
});