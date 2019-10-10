import {
    h
} from 'preact';
import {
    BuzzFeedOriginalsLogo
} from '../logos/bfo';
import {
    BuzzFeedNewsBrandLogo,
    BuzzFeedNewsTagline
} from './news';
import {
    AsIsBrandLogo,
    UseAsIsBrandLogo
} from './as-is';
import {
    BringmeBrandLogo,
    UseBringmeBrandLogo
} from './bringme';
import {
    GoodfulBrandLogo,
    UseGoodfulBrandLogo
} from './goodful';
import {
    NiftyBrandLogo,
    UseNiftyBrandLogo
} from './nifty';
import {
    PlayfullBrandLogo,
    UsePlayfullBrandLogo
} from './playfull';

export const createBrandLogoByName = brandName => ({
    asis: < AsIsBrandLogo / > ,
    bfo: < BuzzFeedOriginalsLogo / > ,
    bringme: < BringmeBrandLogo / > ,
    goodful: < GoodfulBrandLogo / > ,
    news: < BuzzFeedNewsBrandLogo / > ,
    nifty: < NiftyBrandLogo / > ,
    playfull: < PlayfullBrandLogo / > ,
}[brandName]);

export const createBrandTaglineByName = brandName => ({
    news: < BuzzFeedNewsTagline / >
}[brandName]);

export const MicroBrandLogo = ({
    brandName,
    ...props
}) => {
    switch (brandName) {
        case 'asis':
            return <UseAsIsBrandLogo { ...props
            }
            />;
        case 'bringme':
            return <UseBringmeBrandLogo { ...props
            }
            />;
        case 'goodful':
            return <UseGoodfulBrandLogo { ...props
            }
            />;
        case 'nifty':
            return <UseNiftyBrandLogo { ...props
            }
            />;
        case 'playfull':
            return <UsePlayfullBrandLogo { ...props
            }
            />;
    }

    return null;
};