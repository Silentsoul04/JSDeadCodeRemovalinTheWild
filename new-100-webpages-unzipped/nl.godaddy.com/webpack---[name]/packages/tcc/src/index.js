const windowHelper = require('@exp/exp-utils/helper/window');
const browserHelper = require('@exp/exp-utils/helper/browser');
const logger = require('@exp/exp-utils/helper/logger');
const envHelper = require('@exp/exp-utils/helper/environment');
const loadHelper = require('@tcc/shared/src/helpers/load');
const configHelper = require('@tcc/shared/src/helpers/config');
const splitIo = require('./splitio/splitio');
const eventSink = require('@tcc/shared/src/traffic/eventSend');
const tealium = require('./tealium/tealium');
const performance = require('@tcc/shared/src/performance/performance');
import trackingValues from '@tcc/shared/src/traffic/trackingValues';

const VisitHelper = require('./helpers/visitHelperTcc');

// Initialize the whole shootin match.  Note that order is important for data layer init
let initialized = false;

function _tccInit() {
    if (!initialized) {
        initialized = true;

        if (!envHelper.isProduction()) {
            // Registers an XMLHttpRequest intercepter, we want that early.
            performance.init();
        }

        // Load order below is *IMPORTANT*

        // Delay push to GA, Traffic, and Tealium sinks until load event
        loadHelper.init(
            browserHelper.getDocument().readyState === 'complete',
            (triggerOnLoad) => {
                browserHelper.getWindow().addEventListener('load', triggerOnLoad);
            }
        );

        // Load GA first so that traffic events can be pushed to the local GA datalyer
        const ga = require('./ga/ga');

        // GA will only be initialized after the document has loaded and
        // will not be loaded for pass (productivity) pages
        if (configHelper.get('tcc.realm') !== 'pass') {
            loadHelper.registerOnLoadFn(ga.init);
        }

        // Populates visit GUIDs immediately if missing
        const visitHelper = new VisitHelper();

        // Traffic events will only be sent after the document has loaded.
        loadHelper.registerOnLoadFn(() => {
            eventSink.init(visitHelper);
        });

        // Tealium events will only be sent after the document has loaded.
        loadHelper.registerOnLoadFn(tealium.init);

        // Applications can force SplitIO to initialize immediately
        if (configHelper.get('tcc.loadSplitIO')) {
            splitIo.init();
        }

        // Expose tracking values on the window
        browserHelper.getWindow()._tccTrackingValues = trackingValues.properties;

        // Load Exp first as trfq commands will push to the ExperimentDataLayer
        const SchemaHelper = require('@exp/exp-utils/schema/schemaHelper');
        const experimentSchema = require('./experiments/experimentSchema');
        require('../../shared/src/experiments/experimentDataLayer').init(
            new SchemaHelper(experimentSchema.commandSchemaDefinitions),
            visitHelper);
        require('../../shared/src/traffic/trafficDataLayer').init();
        require('../../shared/src/events/eventListener').init();
        require('./helpers/ecomm').handleOrderConfirmation();

        if (!configHelper.get('tcc.manualPagePerf')) {
            // Only send performance data after the document has loaded
            loadHelper.registerOnLoadFn(() => {
                require('../../shared/src/performance/performance').getPerformanceData('auto');
            });
        }

        logger.log('TCC STARTED', configHelper.getProperties());
    }
}

// Only load if the browser is supported
if (browserHelper.isSupported()) {
    // Load library only once on page... Throw an error if attempted to load more then once
    if (windowHelper.libraryLoaded()) {
        logger.error('TCC Library has already been loaded on page');
    } else {
        // Initialize configs so that we can determine if the library was disabled
        require('../../shared/src/configManager').init();

        // Set the policy cookie
        require('./helpers/policy').writePolicyCookie();

        // Do not init if turned off
        if (configHelper.get('tcc.status') !== 'off') {
            // We should init only when visible
            const doc = browserHelper.getDocument();
            if (doc.visibilityState !== 'prerender') {
                _tccInit();
            } else {
                doc.addEventListener('visibilitychange', () => {
                    if (doc.visibilityState !== 'prerender' && doc.visibilityState !== 'unloaded') {
                        _tccInit();
                    }
                });
            }
        }
    }
}