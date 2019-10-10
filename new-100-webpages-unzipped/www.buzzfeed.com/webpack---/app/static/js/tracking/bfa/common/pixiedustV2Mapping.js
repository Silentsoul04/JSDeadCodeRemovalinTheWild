import {
    pageView,
    webClick,
    webImpression,
    webRightClick
} from '@buzzfeed/bf-analytics/lib/modules/pixiedust_v2/events';
import {
    contentLayer
} from '@buzzfeed/bf-analytics/lib/modules/pixiedust_v2/layers';
import {
    GLOBAL_DEFAULTS
} from '@buzzfeed/site-tracking/common/global-defaults';

const isFirstPage = ({
    data: {
        url
    }
}) => !url || !url.match(/\?p=\d+/);

const eventIsFromFeed = ({
    n: name,
    l: location
}) => {
    // Don't track any ads as part of feed tracking
    // filter out names like 'video-dfp' and 'ad-click|dfp'
    if (name.match(/(-|\|)dfp$/) || name === 'Nav-Link' || name === 'Exit-Link') {
        return false;
    }
    return name === 'FeedItem' || location === 'Feed' || location === 'Package' || location === 'buzzblocks/Package';
};

const feedPageContentLayer = contentLayer({
    pageType: 'feed'
});
const environmentLayer = () => [
    ['os', GLOBAL_DEFAULTS.os],
    ['mode', GLOBAL_DEFAULTS.mode]
];

export default function(mapper) {
    pageView({
        mapper,
        layers: [
            feedPageContentLayer,
            environmentLayer
        ],
        shouldTrack: isFirstPage,
    });

    webClick({
        mapper,
        layers: [
            feedPageContentLayer,
            environmentLayer
        ],
        shouldTrack: eventIsFromFeed,
    });

    webRightClick({
        mapper,
        layers: [
            feedPageContentLayer,
            environmentLayer
        ],
        shouldTrack: eventIsFromFeed,
    });

    webImpression({
        mapper,
        layers: [
            feedPageContentLayer,
            environmentLayer
        ],
        shouldTrack: eventIsFromFeed,
    });
}