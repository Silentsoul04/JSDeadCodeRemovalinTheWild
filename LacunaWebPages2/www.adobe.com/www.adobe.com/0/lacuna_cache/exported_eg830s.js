
        window.adobeGlobalnavConfig = window.adobeGlobalnavConfig || {};
        window.adobeGlobalnavConfig.footer = {
            target: document.querySelector('#dexter-Footer-global-nav'),
            breadcrumbs: {
                showLogo: false,
                links: []
            },
            excludeNavigation: false,
            theme: {},
            regionModal: function() {
                window.location.hash = 'languageNavigation';
            }
        }
    