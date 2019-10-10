import {
    defaultsDeep,
    bind,
    keys,
    isString,
    isFunction
} from 'lodash';

function GoogleAnalyticsIntegration(sb) {
    var defaultSettings = {
        trackingBehavior: sb.defs.trackingBehavior.byDefault,
        extTrackerGlobalName: 'ga',
        googleAnalyticsId: '',
        tracker: null,
        extFilePath: '//www.google-analytics.com/analytics.js',
        configMapsDelegate: null,
    };
    this._inited = false;
    this._active = false;
    this.settings = defaultsDeep(sb.settings || {}, defaultSettings);
    this.generalSettings = sb.getGeneralSettings();

    var _this = this;
    this.activate = function() {
        if (this._active || !this._inited) {
            return;
        }
        if (!this.tracker && this.generalSettings.mode === sb.defs.bfaMode.prod) {
            if (!window[this.settings.extTrackerGlobalName]) {
                return;
            } else {
                this.tracker = window[this.settings.extTrackerGlobalName];
                this.tracker('create', this.settings.googleAnalyticsId, 'auto');
            }
        }

        if (this.page && this.user) {
            this._active = true;
            sb.moduleActive.dispatch();
        }
    };

    sb.onGeneralSettingsChange(function() {
        this.generalSettings = sb.getGeneralSettings();
    }, this);
    sb.onPageReady(function() {
        this.page = sb.getPageInfo();
        this.activate();
    }, this);
    sb.onUserReady(function() {
        this.user = sb.getUserInfo();
        this.activate();
    }, this);

    this._trackDefault = function(dataObj, eventType, eventName) {
        if (!this._active) {
            sb.moduleActive.addOnce(bind(this._trackDefault, this, dataObj, eventType, eventName), this);
            return;
        }

        // don't track if we don't have everything
        if (!dataObj && !eventType && !eventName) {
            return;
        }

        if (eventType === 'videoplayer' && !dataObj) {
            dataObj = {};
        }

        var eventInfo = sb.tryConvertToEventInfo(dataObj, eventType, eventName);
        if (!sb.canTrackEvent(sb.moduleId, this.settings.trackingBehavior, eventInfo)) {
            return;
        }
        eventInfo.data.page = this.page;
        eventInfo.data.user = this.user;

        if (!sb.mapper.isExists('track/' + eventType)) {
            sb.log.error('Mapping for `track/' + eventType + '` doesn\'t exist');
            return;
        }
        var mappedEvent = sb.mapper.map('track/' + eventType, eventInfo, {
            label: '(no label)',
            value: (function(opt) {
                if (screen && screen.orientation && screen.orientation.type && opt) {
                    opt.dimension5 = screen.orientation.type.replace('-primary', '');
                }
                return opt || '';
            }(dataObj.opt)),
        });

        switch (this.generalSettings.mode) {
            case sb.defs.bfaMode.prod:
                this.tracker('send', 'event', mappedEvent.category,
                    mappedEvent.action, mappedEvent.label, mappedEvent.value);
                break;
            default:
                sb.debugTracker.trackEvent(eventInfo, mappedEvent);
                break;
        }
    };

    this._trackPage = function(dataObj) {
        var pageNumber = '';
        if (!this._active) {
            sb.moduleActive.addOnce(bind(this._trackPage, this, dataObj), this);
            return;
        }
        var eventInfo = sb.tryConvertToEventInfo(dataObj, 'page', 'view');

        if (!sb.canTrackEvent(sb.moduleId, this.settings.trackingBehavior, eventInfo)) {
            return;
        }

        if (!sb.mapper.isExists('track/page/view')) {
            sb.log.error('Mapping for `track/page/view` doesn\'t exist');
            return;
        }

        var mappedEvent = sb.mapper.map('track/page/view', eventInfo);

        if (mappedEvent.page.match(/p=\d+/)) {
            pageNumber = '?' + mappedEvent.page.match(/p=\d+/)[0];
        }

        if (keys(mappedEvent).length > 0) {
            if (this.generalSettings.mode === sb.defs.bfaMode.prod) {
                this.tracker('set', 'page', window.location.pathname);
                this.tracker('send', 'pageview', window.location.pathname + pageNumber, {
                    'dimension1': 'feedpager'
                });
            }
            sb.debugTracker.trackEvent(eventInfo, mappedEvent);
        } else {
            sb.log.warn('Event won\'t be tracked to GA, because object is empty after mapping. Type: ' +
                eventInfo.t + '; Name: ' + eventInfo.n + ';');
        }
    };
    sb.subOn('track/page/view', this._trackPage, this);

    this._trackClick = function(dataObj, routeVars) {
        if (dataObj.n.match('|')) {
            dataObj.n = dataObj.n.replace(/\|/g, '/');
        }

        if (routeVars.eventName.match('|')) {
            routeVars.eventName = routeVars.eventName.replace(/\|/g, '/');
        }

        this._trackDefault(dataObj, 'click', routeVars.eventName);
    };
    sb.subOn('track/click/{eventName}', this._trackClick, this);

    this._trackPageExit = function(dataObj, routeVars) {
        dataObj = {
            n: 'Page-Exit',
            data: {
                scrolledDistance: Math.round(window.scrollY /
                    (document.documentElement.offsetHeight - window.innerHeight) * 100),
            },
        };

        this._trackDefault(dataObj, 'page', routeVars.eventName);
        this._trackDefault({
            l: 'Feed',
            n: 'last-cell-visible',
            d: _this.feedIndex,
        }, 'update/feedindex');
    };

    this._trackGDPR = function(dataObj, routeVars) {
        this._trackDefault(dataObj, 'gdpr', routeVars.eventName);
    };

    this._trackNewsletter = function(dataObj, routeVars) {
        this._trackDefault(dataObj, 'signup', routeVars.eventName);
    };

    this._trackVideo = function(dataObj, routeVars) {
        if (routeVars.eventName === 'share') {
            return;
        }
        this._trackDefault(dataObj, 'video', routeVars.eventName);
    };

    this._updateFeedIndex = function(dataObj) {
        if (dataObj.feedItemTrack && dataObj.cardIndex) {
            _this.feedIndex = dataObj.cardIndex;
        }
    };

    this._trackAbVariation = function(dataObj, routeVars) {
        this._trackDefault(dataObj, 'abtest', routeVars.abTestName);
    };

    this._trackScroll = function(dataObj, routeVars) {
        if (typeof dataObj.data !== 'undefined' &&
            typeof dataObj.d !== 'undefined' &&
            (dataObj.d === '1' || dataObj.d === '0') &&
            typeof dataObj.data.type !== 'undefined' &&
            dataObj.data.type === 'package/hp-shopping') {
            this._trackDefault(dataObj, 'scroll', routeVars.eventName);
        } else if (dataObj.l === 'NewsletterPromo') {
            this._trackDefault(dataObj, 'scroll', routeVars.eventName);
        } else if (dataObj.l === 'welcome-message') {
            this._trackDefault(dataObj, 'scroll', routeVars.eventName);
        } else if (dataObj.l.indexOf('Package') === 0 || dataObj.l.indexOf('mega-package') === 0) {
            this._trackDefault(dataObj, 'scroll', routeVars.eventName);
        } else if (dataObj.l === 'Nav') {
            this._trackDefault(dataObj, 'scroll', routeVars.eventName);
        } else if (dataObj.l.indexOf('Feed:package') !== -1) {
            this._trackDefault(dataObj, 'scroll', routeVars.eventName);
        } else if (dataObj.l.indexOf('buzzblocks/Package') !== -1) {
            this._trackDefault(dataObj, 'scroll', routeVars.eventName);
        }
    };
    sb.subOn('track/scroll/{eventName}', this._trackScroll, this);

    sb.subOn('track/video/{eventName}', this._trackVideo, this);
    sb.subOn('track/page/exit', this._trackPageExit, this);
    sb.subOn('track/signup/{eventName}', this._trackNewsletter, this);
    sb.subOn('track/gdpr/{eventName}', this._trackGDPR, this);
    sb.subOn('track/update/feedindex', this._updateFeedIndex, this);
    sb.subOn('track/abtest/{abTestName}', this._trackAbVariation, this);

    this._trackVideoPlayer = function(dataObj, routeVars) {
        this._trackDefault(dataObj, 'videoplayer', routeVars.eventName);
    };
    sb.subOn('track/videoplayer/{eventName}', this._trackVideoPlayer, this);

    this._trackRawEvent = function(dataObj) {
        if (!this._active) {
            sb.moduleActive.addOnce(bind(this._trackRawEvent, this, dataObj), this);
            return;
        }
        const eventInfo = sb.tryConvertToEventInfo(dataObj, 'raw', 'ga');
        if (!sb.canTrackEvent(sb.moduleId, this.settings.trackingBehavior, eventInfo)) {
            return;
        }
        const {
            category,
            action,
            label = '(no label)',
            value = null
        } = eventInfo.data;
        switch (this.generalSettings.mode) {
            case sb.defs.bfaMode.prod:
                this.tracker('send', 'event', category, action, label, value);
                break;
            default:
                /* eslint-disable no-console */
                console.groupCollapsed('GA tracked raw event');
                console.table({
                    category,
                    action,
                    label,
                    value
                });
                console.groupEnd();
                /* eslint-enable no-console */
                break;
        }
    };
    sb.subOn('track/raw/ga', this._trackRawEvent, this);

    return {
        init: function() {
            if (!isString(_this.settings.googleAnalyticsId)) {
                sb.log.error('Must set googleAnalyticsId');
                return;
            }

            if (!isFunction(_this.settings.configMapsDelegate)) {
                sb.log.error('Value of configMapsDelegate (in settings) property must be a `function`' +
                    ' that have to set up mapping');
                return;
            }

            _this.settings.configMapsDelegate(sb.mapper);

            if (_this.generalSettings.mode === sb.defs.bfaMode.prod) {
                _this.tracker = _this.settings.tracker;
                if (!_this.tracker && !window[_this.settings.extTrackerGlobalName] &&
                    _this.settings.extFilePath) {
                    sb.domi.loadScript({
                        src: _this.settings.extFilePath,
                    }, _this.activate, null, _this);
                }
            } else {
                _this.tracker = {};
            }

            _this._inited = true;
            sb.moduleInited.dispatch();
            _this.activate();
        },
    };
}

GoogleAnalyticsIntegration.defaultId = 'GAIntegration';
GoogleAnalyticsIntegration.require = ['logger', 'domi', 'trackingUtils', 'generalSettings', 'mapper', 'debugTracker',
    'pageInfo', 'userInfo',
];
export default GoogleAnalyticsIntegration;