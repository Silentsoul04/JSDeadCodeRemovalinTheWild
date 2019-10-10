import $ from 'jquery';
import {
    getReferrer
} from 'analytics/util';

class GoogleAnalytics {
    constructor() {
        this.initialize.apply(this, arguments);
    }

    initialize(config) {
        this.config = config || {};
        this.extendConfigWithSession();
        this.addScript();
        this.setupTracker();
        this.setupCustomDimensions();
        this.trackPageView();
        this.setupClickTracking();
        this.setupSmartbannerTracking();
    }

    extendConfigWithSession() {
        var monster = window.monster || {
            get: function() {
                return null;
            }
        };

        this.config.session = $.extend({}, this.config.session, {
            ewp: monster.get('ewp'),
            wp_pid: monster.get('wp_pid')
        });
    }

    getConfig() {
        return this.config;
    }

    addScript() {
        (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            (i[r] =
                i[r] ||
                function() {
                    (i[r].q = i[r].q || []).push(arguments);
                }),
            (i[r].l = 1 * new Date());
            (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m);
        })(
            window,
            document,
            'script',
            '//www.google-analytics.com/analytics.js',
            'ga'
        );
    }

    setupTracker() {
        window.ga('create', this.config.ua_id, 'auto');
        window.ga('require', 'adfeatures');
        window.ga('set', 'referrer', getReferrer());
    }

    setupCustomDimensions() {
        var dimensions = {};
        var meta = this.getConfigWithDefaults();

        dimensions.dimension1 = meta.page.section;
        dimensions.dimension2 = meta.page.name;
        dimensions.dimension3 = meta.page.subsection;
        if (meta.page.serp_page_number !== undefined)
            dimensions.dimension4 = meta.page.serp_page_number;
        if (meta.page.total_result_count !== undefined)
            dimensions.dimension33 = meta.page.total_result_count;
        if (meta.page.total_exact_match !== undefined)
            dimensions.dimension31 = meta.page.total_exact_match;
        if (meta.page.spam_score !== undefined)
            dimensions.dimension34 = meta.page.spam_score;
        dimensions.dimension5 = meta.session.logged_in ? 'true' : 'false';
        if (meta.session.ewp !== undefined)
            dimensions.dimension23 = meta.session.ewp;
        dimensions.dimension25 = this.getLocationOrigin();

        if (typeof WP.usage !== 'undefined') {
            dimensions.dimension14 = (WP.usage.searchesThisWeek() || []).length;
            dimensions.dimension15 = (WP.usage.searchesLastWeek() || []).length;
            dimensions.dimension16 = (
                WP.usage.searchesThisWeek('phone search') || []
            ).length;
            dimensions.dimension17 = (
                WP.usage.searchesLastWeek('phone search') || []
            ).length;
            dimensions.dimension18 = (WP.usage.visitsThisWeek() || []).length;
            dimensions.dimension19 = (WP.usage.visitsLastWeek() || []).length;
            dimensions.dimension20 = (WP.usage.uniqSearchesThisWeek() || []).length;
            dimensions.dimension21 = (WP.usage.uniqSearchesLastWeek() || []).length;
            dimensions.dimension22 = (WP.usage.searchesThisMonth() || []).length;
        }

        // Set search term specific vars
        var collated, splitRexExp;
        var query = meta.page.query_terms || 'q=';
        var queryMatch = query.match(/q=([^&]*)(&|$)/);
        var queryParts = queryMatch[1].split(':');

        if (query.match('c=people')) {
            var nameParts = queryParts[0].split(/\*?-/);
            var firstName = nameParts[0] || '';
            var lastName = nameParts[1] || '';
            dimensions.dimension7 = firstName;
            dimensions.dimension8 = lastName;
            splitRexExp = '-';
            collated = nameParts.join(';');
        }
        if (query.match('c=business')) {
            var type = meta.page.type;
            var name = type == '.name' ? queryParts[0] : '';
            var category = type == '.category' ? queryParts[0] : '';
            dimensions.dimension7 = name;
            dimensions.dimension8 = category;
            splitRexExp = /,? /;
        }
        if (queryParts.length > 1) {
            var locationParts = queryParts[1].split(splitRexExp);
            var noZipCode = locationParts[locationParts.length - 1].match(/\D/);
            var zip = noZipCode ? '' : locationParts.pop();
            var state = locationParts.pop() || '';
            var city = locationParts.join(' ') || '';
            dimensions.dimension9 = city;
            dimensions.dimension10 = state;
            dimensions.dimension11 = zip;
            if (collated) collated += ['', city, state, zip].join(';');
        }
        if (collated) dimensions.dimension12 = collated || '';

        if (meta.session.wp_pid) dimensions.dimension13 = meta.session.wp_pid;
        dimensions.dimension27 = meta.box;
        dimensions.dimension28 = meta.ver;

        var jkid = this.trackJKID();
        if (jkid) {
            dimensions.dimension29 = jkid;
        }

        var certifiedPlatform = this.getParameterByName('certified_platform');
        if (certifiedPlatform) {
            dimensions.dimension36 = certifiedPlatform;
        }

        if (meta.page.phone_owner) dimensions.dimension60 = meta.page.phone_owner;

        // name of ab test or 'default'
        // Only for WP so far (might need a different dimesnion # with 411, dex, sb)
        dimensions.dimension61 = meta.page.ab_test;

        dimensions.dimension66 = meta.page.premium_user;
        if (meta.page.geographic_scope)
            dimensions.dimension67 = meta.page.geographic_scope;

        dimensions.dimension72 = meta.page.seo_ab_test;

        this.trackBoth('set', dimensions);
    }

    getLocationOrigin() {
        var location = document.location;
        var crossBrowserLocationOrigin =
            location.protocol +
            '//' +
            location.hostname +
            (location.port ? ':' + location.port : '');
        return crossBrowserLocationOrigin;
    }

    trackPageView(sectionOverride, subsectionOverride) {
        var meta = this.getConfigWithDefaults();
        var location = document.location;
        var actualPathname = this.prefixWithIfExists('/', location.pathname);
        var actualSearch = this.prefixWithIfExists('?', location.search);
        var actualHash = this.prefixWithIfExists('#', location.hash);
        var actualUrl = actualPathname + actualSearch + actualHash;
        var page = meta.page;
        var section = sectionOverride || page.section;
        var subsection = subsectionOverride || page.subsection;
        var virtualSection = [
            section || 'unnamed',
            subsection,
            page.type,
            page.serp_page_number
        ];
        var virtualPathname = this.prefixWithIfExists(
            '/',
            virtualSection.join('/').replace(/\/+/g, '/')
        );
        var virtualSearch = this.prefixWithIfExists('?', page.query_terms);
        var virtualUrl = virtualPathname + virtualSearch;
        var url = '/virtualURI=[' + virtualUrl + '],actualURI=[' + actualUrl + ']';
        this.trackBoth('send', 'pageview', url);
    }

    getConfigWithDefaults() {
        var defaults = {
            page: {
                section: 'unnamed',
                subsection: 'unnamed',
                type: '',
                serp_page_number: null,
                total_result_count: null,
                spam_score: null,
                query_terms: null,
                name: 'unnamed'
            },
            session: {
                usertype: '',
                logged_in: false
            },
            ver: '',
            box: ''
        };
        var config = $.extend(true, defaults, this.config);
        return config;
    }

    prefixWithIfExists(prefix, baseString) {
        var fixedString = '';
        if (baseString) {
            var endString = baseString.substr(0, prefix.length);
            fixedString = endString == prefix ? baseString : prefix + baseString;
        }
        return fixedString;
    }

    setupClickTracking() {
        var that = this;
        var trackClick = function(clickProperties) {
            var eventProperties = {
                category: clickProperties.gacategory,
                action: clickProperties.gaaction || 'action',
                label: clickProperties.galabel,
                value: clickProperties.gaval || 0,
                noBounce: clickProperties.gabounce || false
            };
            that.trackEvent(eventProperties);
        };

        $(document).on(
            'click',
            '.endemic a, .inline-endemic a, .endemic-block a, .endemic-people a, .endemic-click-tracking a, a.view-link, a .info-card',
            function() {
                var meta = that.getConfigWithDefaults();
                var category = meta && meta.page ? meta.page.name : 'error.error';
                var container = $(this).closest('.endemic-click-tracking');
                var line_item = '';
                if (container) {
                    line_item = container.data('line-item');
                }

                trackClick({
                    gacategory: category,
                    gaaction: 'Exit Click - Endemic',
                    galabel: line_item
                });
            }
        );

        $(document).on('click', '[data-gaevent]', function() {
            var $this = $(this);
            var eventProperties = {
                gacategory: $this.attr('data-gaevent'),
                gaaction: $this.attr('data-gaaction'),
                galabel: $this.attr('data-galabel'),
                gaval: $this.attr('data-gaval'),
                gabounce: $this.attr('data-gabounce')
            };
            trackClick(eventProperties);
        });

        $(document).on('click', '[data-gacategory]', function() {
            var $this = $(this);
            var eventProperties = {
                gacategory: $this.attr('data-gacategory'),
                gaaction: $this.attr('data-gaaction'),
                galabel: $this.attr('data-galabel'),
                gaval: $this.attr('data-gaval'),
                gabounce: $this.attr('data-gabounce')
            };
            trackClick(eventProperties);
            var href = $(this).attr('href');
            if (href && href.length && href[0] != '#') {
                // guard against href being blank or hash
                setTimeout('window.location="' + $(this).attr('href') + '"', 100);
                return false;
            }
        });

        $(document).on('click', '[data-gaoutbound]', function() {
            var p = $(this).data();
            var label = $(this).attr('href');
            trackClick({
                gacategory: p.gaoutbound,
                gaaction: 'outbound-' + p.gaaction || 'action',
                galabel: label,
                gaval: 0,
                gabounce: true
            });
        });
    }

    setupSmartbannerTracking() {
        $(document).on(
            'smartbanner.visible',
            $.proxy(function() {
                this.trackEvent({
                    category: 'event',
                    action: 'smartbanner',
                    label: 'impression',
                    noBounce: true
                });
            }, this)
        );
    }

    /* @public */
    trackEvent(eventProperties) {
        this.trackBoth('send', {
            hitType: 'event',
            eventCategory: eventProperties.category,
            eventAction: eventProperties.action,
            eventLabel: eventProperties.label,
            eventValue: eventProperties.value,
            nonInteraction: eventProperties.noBounce
        });
    }

    trackBoth(a, b, c, d) {
        window.ga(a, b, c, d);
    }

    /**
     * Stores JKID param in session storage for future page access, and returns
     * value.
     */
    trackJKID() {
        if (!sessionStorage.getItem('jkid')) {
            sessionStorage.setItem('jkid', this.getParameterByName('jkId'));
        }
        return sessionStorage.getItem('jkid');
    }

    getParameterByName(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
            results = regex.exec(location.search);
        return results === null ?
            '' :
            decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
}

// TODO: Replace and remove
window.WP.analytics = {
    GoogleAnalytics
};

export default GoogleAnalytics;