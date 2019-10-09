
            window.adobeGlobalnavConfig = {
                target: document.querySelector('#dexter-Header-global-nav'),
                locale: 'us',
                disableSticky: false,
                progressiveEnhancement: false,
                theme: {},
                profile: {
                    theme: 'white'
                },
                subnav: {},
                callbacks: {
                    ims_ready: function () {
                        window.adobeGlobalNav = window.adobeGlobalNav || {};
                        window.adobeGlobalNav.imsReady = true;
                    },
                    globalnav_ready: function () {
                        window.adobeGlobalNav = window.adobeGlobalNav || {};
                        window.adobeGlobalNav.globalNavReady = true;
                        window.dispatchEvent(new Event('dexter:globalNavReady'));
                    }
                }
            };
        