
        window.dexter.Analytics.adobeLaunchEnabled = true;
        window.dexter.Analytics.environment = ('production' !== '') ? 'production' : 'production';
        window.dexter.Analytics.launchLoaded = 'true' === 'true';
        window.dexter.Analytics.targetEnabled = '' !== 'disabled';
        window.dexter.Analytics.audienceManagerEnabled = '' !== 'disabled';
        window.marketingtech = window.marketingtech || {};
        window.marketingtech.adobe = {
            target: window.dexter.Analytics.targetEnabled,
            audienceManager: window.dexter.Analytics.audienceManagerEnabled,
            launch: {
                property: 'global',
                environment: window.dexter.Analytics.environment,
                controlPageLoad: true
            }
        };
    