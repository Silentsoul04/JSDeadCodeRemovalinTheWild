
        if (CNN.UserConsent.inUserConsentState(["performance", "personalization"]) === false) {
            window.optimizely = window.optimizely || [];
            window.optimizely.push({
                'type': 'disable'
            });
            console.log('Optimizely disabled.');
        }
    