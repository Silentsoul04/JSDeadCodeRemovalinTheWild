import {
    h
} from 'preact';
import {
    BuzzFeedOriginalsLogo,
    UseBuzzFeedOriginalsLogo
} from './bfo';
import {
    AsIsLogo,
    UseAsIsLogo
} from './as-is';
import {
    BuzzFeedReviewsLogo,
    UseBuzzFeedReviewsLogo
} from './bf-reviews';
import {
    BuzzFeedNewsLogo,
    UseBuzzFeedNewsLogo
} from './bfn';
import {
    GoodfulLogo,
    UseGoodfulLogo
} from './goodful';
import {
    TastyLogo,
    UseTastyLogo
} from './tasty';
import {
    BringMeLogo,
    UseBringMeLogo
} from './bringme';

export const createDestinationLogoByName = destinationName => ({
    bfo: < BuzzFeedOriginalsLogo / > ,
    asis: < AsIsLogo / > ,
    bfreviews: < BuzzFeedReviewsLogo / > ,
    bfn: < BuzzFeedNewsLogo / > ,
    goodful: < GoodfulLogo / > ,
    tasty: < TastyLogo / > ,
    bringme: < BringMeLogo / > ,
}[destinationName]);

export const DestinationLogo = ({
    destinationName,
    ...props
}) => {
    switch (destinationName) {
        case 'bfo':
            return <UseBuzzFeedOriginalsLogo { ...props
            }
            />;
        case 'asis':
            return <UseAsIsLogo { ...props
            }
            />;
        case 'bfreviews':
            return <UseBuzzFeedReviewsLogo { ...props
            }
            />;
        case 'bfn':
            return <UseBuzzFeedNewsLogo { ...props
            }
            />;
        case 'goodful':
            return <UseGoodfulLogo { ...props
            }
            />;
        case 'tasty':
            return <UseTastyLogo { ...props
            }
            />;
        case 'bringme':
            return <UseBringMeLogo { ...props
            }
            />;
    }

    return null;
};