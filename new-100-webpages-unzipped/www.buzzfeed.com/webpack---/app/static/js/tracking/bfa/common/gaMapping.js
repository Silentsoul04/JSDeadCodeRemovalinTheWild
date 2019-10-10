import {
    gaMap as videoPlayerMapping
} from '@buzzfeed/buzzblocks/js/services/video-player-analytics/bfa-ga';
import {
    gaMap as gdprMapping
} from '@buzzfeed/buzzblocks/components/gdpr-consent/bfa-ga';
import {
    gaFeedTrackingMapper
} from '@buzzfeed/site-tracking/feed';
import {
    gaMap as gaBFReviewsPackageMapper
} from '@buzzfeed/buzzblocks/components/bf-reviews-package/bfa-ga';
import {
    gaMap as gaBBPackageMapper
} from '@buzzfeed/buzzblocks/components/package/bfa-ga';
import {
    gaMap as feedHeaderMapper
} from '@buzzfeed/buzzblocks/components/feed-header/bfa-ga';


export default function(mapper) {
    mapper.addUtility('capitalize', function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    });
    mapper.addUtility('cleanLink', function(str) {
        return str.replace('http://', '').replace('https://', '').replace('www.', '');
    });

    mapper.addUtility('getIdFromObjectId', function(objId) {
        if (typeof objId === 'string' && objId.indexOf(':') > -1) {
            objId = objId.split(':')[1];
        }
        return objId;
    });

    mapper.addUtility('isNumeric', function(str) {
        return !isNaN(parseFloat(str)) && isFinite(str);
    });

    var clickRouter = mapper.getOrCreateRouter('track/click');
    var videoRouter = mapper.getOrCreateRouter('track/video');

    var gaTemplate = mapper.createMapTemplate('gaTemplate');
    gaTemplate.addMapTo('category', '').mapFrom(function(src) {
        var category;
        // map category value for video due to pixiedust
        if (src.l === 'in_feed') {
            src.l = 'Feed';
        }

        if (src.data.type) {
            if (src.data.type.match('news-package')) {
                src.data.type = 'news';
            }
            category = src.l + ':' + src.data.type;
        } else {
            category = src.l;
        }
        return category;
    });

    var dfpAdsConfig = clickRouter.createConfigForRoute(function(src) {
        return src.n.indexOf('dfp') !== -1;
    });
    dfpAdsConfig.applyTemplateByName('gaTemplate');
    dfpAdsConfig.addMapTo('action', '').mapFrom(function(src) {
        var action = src.n;
        if (src.n.match('|')) {
            action = src.n.replace(/\|/g, '/');
        }
        return action;
    });
    dfpAdsConfig.addMapTo('label', '').mapFrom(function(src) {
        return src.d;
    });

    // Advertise Link Config
    var advertiseLinkConfig = clickRouter.createConfigForRoute(function(src) {
        return src.n === 'Advertise';
    });
    advertiseLinkConfig.applyTemplateByName('gaTemplate');
    advertiseLinkConfig.addMapTo('action', '').mapFrom('t');
    advertiseLinkConfig.addMapTo('category', '').mapFrom('l');
    advertiseLinkConfig.addMapTo('label', '').mapFrom('d');

    // Awareness ads

    var awarenessClick = clickRouter.createConfigForRoute(function(src) {
        return src.l === 'awareness';
    });
    awarenessClick.applyTemplateByName('gaTemplate');
    awarenessClick.addMapTo('action', '').mapFrom('t');
    awarenessClick.addMapTo('category', '').mapFrom('l');
    awarenessClick.addMapTo('label', '').mapFrom('d');

    // Videos

    var videoConfig = videoRouter.createConfigForRoute(function(src) {
        return src.l === 'in_feed';
    });

    videoConfig.applyTemplateByName('gaTemplate');

    videoConfig.addMapTo('action', '').mapFrom('n');

    videoConfig.addMapTo('label', '').mapFrom('d');

    var mainFeedConfig = clickRouter.createConfigForRoute(
        src => src.l === 'Feed' && src.n !== 'FeedItem');
    mainFeedConfig.addMapTo('action', 'click');
    mainFeedConfig.addMapTo('category').mapFrom(src => {
        const source = src.l === 'in_feed' ? 'Feed' : src.l;
        if (src.data.type) {
            const dataType = src.data.type.match('news-package') ? 'news' : src.data.type;
            return `list:${source}/${dataType}`;
        }
        return `list:${source}`;
    });
    mainFeedConfig.addMapTo('label').mapFrom(src => `${src.data.obj_type || 'buzz'}:${src.data.obj_id}`);
    mainFeedConfig.addMapTo('value').mapFrom(src => parseInt(src.d, 10) || 0);

    var sharingConfig = clickRouter.createConfigForRoute(function(src) {
        return src.l === 'Share';
    });

    sharingConfig.addMapTo('category', '').mapFrom(function() {
        return 'Share';
    });
    sharingConfig.addMapTo('action', '').mapFrom(function(src) {
        var action;

        if (src.d === 'facebook') {
            action = 'click:feed-module';
        } else if (src.n === 'open-share-sheet') {
            action = 'click:open-share-sheet';
        } else {
            action = 'click:feed-module/share-sheet';
        }
        return action;
    });

    sharingConfig.addMapTo('label', '').mapFrom(function(src) {
        return src.d;
    });

    var pageViewMapper = mapper.getOrCreateMap('track/page/view');
    pageViewMapper.addMapTo('page', '').mapFrom('data.url');

    var pageRouter = mapper.getOrCreateRouter('track/page');
    var pageExitConfig = pageRouter.createConfigForRoute(function(src) {
        return src.n === 'Page-Exit';
    });
    pageExitConfig.applyTemplateByName('gaTemplate');
    pageExitConfig.addMapTo('action', '').mapFrom('n', [mapper.formatters.strToLowerCase, ]);
    pageExitConfig.addMapTo('label', '').mapFrom(function(src) {
        return src.data.scrolledDistance + '%';
    });

    var feedUpdateRouter = mapper.getOrCreateRouter('track/update/feedindex');
    var feedUpdateConfig = feedUpdateRouter.createConfigForRoute(function(src) {
        return src.l === 'Feed';
    });
    feedUpdateConfig.applyTemplateByName('gaTemplate');
    feedUpdateConfig.addMapTo('action', 'last-cell-visible');
    feedUpdateConfig.addMapTo('label', '').mapFrom(function(src) {
        return src.d;
    });

    var abTestMap = mapper.getOrCreateMap('track/abtest');
    abTestMap.addMapTo('category', 'ABTestRegister');
    abTestMap.addMapTo('action', '').mapFrom('n');
    abTestMap.addMapTo('label', '').mapFrom('data.variation.value');
    abTestMap.addMapTo('value', null);

    // ========================== FEED FITLERS
    var filterConfig = clickRouter.createConfigForRoute(function(src) {
        return src.l === 'feed-filters';
    });
    filterConfig.addMapTo('category', '').mapFrom(function(src) {
        if (typeof src.data.page_name !== 'undefined' && src.data.page_name) {
            return 'Feed/' + src.data.page_name;
        }
        return src.l;
    });
    filterConfig.addMapTo('action', '').mapFrom('n');
    filterConfig.addMapTo('label', '').mapFrom('d');
    filterConfig.addMapTo('value', null);

    var scrollRouter = mapper.getOrCreateRouter('track/scroll');
    var newsletterRouter = mapper.getOrCreateRouter('track/signup');

    var newsletterConfig = newsletterRouter.createConfigForRoute(function(src) {
        return src.l === 'NewsletterPromo';
    });

    newsletterConfig.addMapTo('action', '').mapFrom('n');
    newsletterConfig.addMapTo('category', '').mapFrom('l');
    newsletterConfig.addMapTo('label', '').mapFrom(function(src) {
        return src.d || '(no label)';
    });

    var newsletterClickConfig = clickRouter.createConfigForRoute(function(src) {
        return src.l === 'NewsletterPromo';
    });
    newsletterClickConfig.addMapTo('category', '').mapFrom('l');
    newsletterClickConfig.addMapTo('action', '').mapFrom(function(src) {
        return 'click:' + src.n;
    });
    newsletterClickConfig.addMapTo('label', '').mapFrom('d');

    // newsletter impression
    var newsletterImpressionConfig = scrollRouter.createConfigForRoute(function(src) {
        return src.l === 'NewsletterPromo';
    });
    newsletterImpressionConfig.addMapTo('action', 'impression');
    newsletterImpressionConfig.addMapTo('category', '').mapFrom('l');
    newsletterImpressionConfig.addMapTo('label', '').mapFrom('d');

    // Feed Post Search unit
    var searchConfig = clickRouter.createConfigForRoute(function(src) {
        return src.l === 'FeedSearch';
    });
    searchConfig.addMapTo('action', '').mapFrom('n');
    searchConfig.addMapTo('label', '').mapFrom('data.d');
    searchConfig.addMapTo('category', '').mapFrom(function(src) {
        if (typeof src.data.page_name !== 'undefined' && src.data.page_name) {
            return 'Feed/' + src.data.page_name;
        }
        return src.l;
    });
    searchConfig.addMapTo('value', null);
    // END Feed Post Search unit

    gaFeedTrackingMapper(mapper);
    videoPlayerMapping(mapper);
    gdprMapping(mapper);
    gaBFReviewsPackageMapper(mapper);
    gaBBPackageMapper(mapper);
    feedHeaderMapper(mapper);

    var footerConfig = clickRouter.createConfigForRoute(function(src) {
        return src.l === 'Footer';
    });
    footerConfig.addMapTo('category', '').mapFrom('l');
    footerConfig.addMapTo('action', '').mapFrom('n');
    footerConfig.addMapTo('label', '').mapFrom('d');

    // Package
    var packageClickConfig = clickRouter.createConfigForRoute(function(src) {
        return src.l === 'Package' || src.l === 'mega-package';
    });
    packageClickConfig.addMapTo('category', 'Feed').mapFrom(function(src) {
        var category = src.l;
        if (src.n.match('|')) {
            category = ':' + category.replace(/\|/g, '/');
        }
        return 'Feed' + category.toLowerCase();
    });
    packageClickConfig.addMapTo('action', '').mapFrom(function(src) {
        //BFA does not like / in the markup, use | and this will replace.
        if (src.n.match('|')) {
            src.n = src.n.replace(/\|/g, '/');
        }
        return 'click:' + src.n;
    });
    packageClickConfig.addMapTo('label', '').mapFrom('d');

    var packageImpression = scrollRouter.createConfigForRoute(function(src) {
        return src.l === 'Package' || src.l === 'mega-package';
    });
    packageImpression.addMapTo('category', 'Feed').mapFrom(function(src) {
        var category = src.l;
        if (src.n.match('|')) {
            category = ':' + category.replace(/\|/g, '/');
        }
        return 'Feed' + category.toLowerCase();
    });
    packageImpression.addMapTo('action', 'impression');
    packageImpression.addMapTo('label', '').mapFrom(function(src) {
        var label = src.d;
        // For determinate tracking for each post in package
        if (src.n.indexOf('post|package') === 0) {
            label += src.n.replace('post|package|', '/');
        }
        return label;
    });
    packageImpression.addMapTo('value', null).mapFrom(function(src) {
        var opt = null;
        if (this.isNumeric(this.getIdFromObjectId(src.data.obj_id))) {
            opt = {
                dimension2: this.getIdFromObjectId(src.data.obj_id)
            };
        }
        if (typeof src.opt !== 'undefined') {
            opt = Object.assign(opt || {}, src.opt);
        }
        return opt;
    });
}