import {
    get
} from 'lodash';
import bfa from '@buzzfeed/bf-analytics';
import permutiveService from '@buzzfeed/buzzblocks/js/services/permutive';
import util from '@buzzfeed/buzzblocks/js/services/util/standalone';
import dataBinder from '@buzzfeed/bf-analytics/lib/plugins/dataBinder';
import debugTracker from '@buzzfeed/bf-analytics/lib/plugins/debugTracker';
import domi from '@buzzfeed/bf-analytics/lib/plugins/domi';
import facebook from '@buzzfeed/bf-analytics/lib/modules/facebook';
import facebookMapping from './common/facebookMapping';
import ga from './modules/ga';
import gaMapping from './common/gaMapping';
import generalSettings from '@buzzfeed/bf-analytics/lib/plugins/generalSettings';
import globalBfaEndpoint from '@buzzfeed/bf-analytics/lib/plugins/globalBfaEndpoint';
import logger from '@buzzfeed/bf-analytics/lib/plugins/logger';
import mapper from '@buzzfeed/bf-analytics/lib/plugins/mapper';
import nielsen from '@buzzfeed/bf-analytics/lib/modules/nielsen';
import nielsenMapping from './common/nielsenMapping';
import pageInfo from '@buzzfeed/bf-analytics/lib/plugins/pageInfo';
import permutive from '@buzzfeed/bf-analytics/lib/modules/permutive';
import pixiedust from '@buzzfeed/bf-analytics/lib/modules/pixiedust';
import pixiedustMapping from './common/pixiedustMapping';
import pixiedustV2 from '@buzzfeed/bf-analytics/lib/modules/pixiedust_v2';
import pixiedustV2Mapping from './common/pixiedustV2Mapping';
import testMode from '@buzzfeed/bf-analytics/lib/plugins/testMode';
import trackingUtils from '@buzzfeed/bf-analytics/lib/plugins/trackingUtils';
import userInfo from '@buzzfeed/bf-analytics/lib/plugins/userInfo';

const queryParams = util.getQueryParams();

function setup() {
    const bfaCore = new bfa.Core();
    const {
        Config,
        Context
    } = window.BZFD;
    const hasDebugFlag = queryParams.bfadebug === 'true';

    const settings = {
        mode: Config.env === 'dev' || hasDebugFlag ?
            bfaCore.defs.bfaMode.develop :
            bfaCore.defs.bfaMode.prod,
        webRoot: Config.webRoot,
        staticRoot: Config.staticRoot,
        env: Config.env,
        isConsentRequired: queryParams.bfadebug === 'quantcast' || Config.isConsentRequired,
        logLevel: hasDebugFlag ? 3 : 1,
        debug: hasDebugFlag,
        source: 'feedpager',
    };
    const page = {
        id: get(Context, 'page.id'),
        country: get(Context, 'page.localization.country'),
        type: 'feed',
        language: get(Context, 'page.localization.language'),
        name: get(Context, 'page.name'),
        category: '',
        platform: 'feedpager',
        uri: {
            cleanedPath: document.location.pathname,
        },
    };
    const userData = {
        referrer: document.referrer,
    };

    bfaCore
        .plugin(generalSettings, settings)
        .plugin(logger)
        .plugin(domi)
        .plugin(globalBfaEndpoint)
        .plugin(mapper)
        .plugin(pageInfo)
        .plugin(userInfo)
        .plugin(trackingUtils)
        .plugin(testMode)
        .plugin(debugTracker)
        .plugin(dataBinder, {
            bfaFunctionName: 'bfa',
            domBinder: {
                delegatedMapping: {
                    click: [{
                            event: 'click',
                            selector: 'a',
                            options: {
                                handlers: ['ATagWithExternalLinkHandler', 'ATagWithInternalLinkHandler', 'ATagDefaultHandler', ],
                            },
                        },
                        {
                            event: 'click',
                            selector: 'input',
                        },
                        {
                            event: 'click',
                            selector: 'button',
                        },
                    ],
                    'right-click': [{
                        event: 'contextmenu',
                        selector: 'a',
                        options: {
                            handlers: ['ATagWithExternalLinkHandler', 'ATagWithInternalLinkHandler', 'ATagDefaultHandler', ],
                        }
                    }]
                },
            },
            inViewImpressionBinder: {
                enabled: true,
                locators: ['[data-bfa-impressions=true]', ],
            },
        });

    bfaCore
        .registerModule(ga, {
            extFilePath: '//www.google-analytics.com/analytics.js',
            googleAnalyticsId: get(Config, 'tracking.googleAnalytics.id'),
            configMapsDelegate: gaMapping,
        })
        .registerModule(nielsen, {
            extFilesPaths: ['https://cdn-gl.imrworldwide.com/novms/js/2/ggcmb510.js', ],
            configMapsDelegate: nielsenMapping,
        })
        .registerModule(pixiedust, {
            samplingRate: '1',
            configMapsDelegate: pixiedustMapping,
            impressionsSamplingRate: get(Config, 'tracking.pixiedust.impression_sampling_rate'),
            instrumentationSamplingRate: get(Config, 'tracking.pixiedust.instrumentation_sampling_rate'),
            performanceSamplingRate: get(Config, 'tracking.pixiedust.performance_sampling_rate')
        })
        .registerModule(pixiedustV2, {
            mapping: pixiedustV2Mapping
        })
        .registerModule(facebook, {
            extFilesPaths: ['https://connect.facebook.net/en_US/fbevents.js', ],
            configMapsDelegate: facebookMapping,
        })
        .registerModule(permutive, {
            enabled: permutiveService.checkIsOn()
        });

    bfaCore.activatePlugins();
    bfaCore.push('general/page/update', page);
    bfaCore.push('general/user/update', userData);
    bfaCore.domi.onDomReady(function() {
        bfaCore.push('plugin/binder/activate');
    });

    bfaCore.activate();
    return bfaCore;
}
setup();

export {
    setup
};