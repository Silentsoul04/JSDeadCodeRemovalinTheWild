
        var adobeid = {
            env: '//ims-na1.adobelogin.com',
            jumpToken: {
                api: '/ims/jumptoken/v1',
            },
            client_id: 'adobedotcom2',
            scope: 'creative_cloud,AdobeID,openid,gnav,read_organizations,additional_info.projectedProductContext,sao.ACOM_CLOUD_STORAGE,sao.stock,sao.cce_private,additional_info.roles',
            uses_redirect_mode: true,
            locale: 'en_US',
            uses_modal_mode: false,
            api_parameters: {
                authorize: {
                    state: {
                        ac: '',
                    }
                }
            },
            optimizations: {
                fastEvents: true
            },
            onAccessToken: function(accessToken, info) {
                // cancel redirection to logged-in homepage
                if (document.location.hash === "#noredirect" || typeof CQ !== "undefined") {
                    return;
                }
                if (info && (info.expiresAtMilliseconds > 0) && (Date.now() < info.expiresAtMilliseconds) &&
                    window.location.pathname != "/index2.html") {
                    window.location.assign(adobeid.redirect_uri);
                }
            },
            onReady: function() {
                if (window.adobeIMS && !window.adobeIMS.isSignedInUser() && window.location.pathname == "/index2.html") {
                    window.location.assign('/');
                } else {
                    window.dispatchEvent(new Event('dexter:IMSReady'));
                    var head = document.querySelector('head');
                    var dxfBodyStyle = document.getElementById('dxf-body-style');
                    var imsBodyStyle = document.getElementById('ims-body-style');

                    if (dxfBodyStyle) {
                        head.removeChild(dxfBodyStyle);
                    }
                    if (window.adobeIMS.isSignedInUser() && window.location.pathname == "/index2.html" && imsBodyStyle) {
                        head.removeChild(imsBodyStyle);
                    }
                }
            }
        };

        var redirectTargetUrl = '/index2.html';
        try {
            redirectTargetUrl = dexter.geoRouting.localeMap
                .locales[dexter.geoRouting.localeMap.currentLocale].root + 'index2.html';
        } catch (e) {}

        if (false) {
            adobeid.redirect_uri = window.location.href;
        } else {
            adobeid.redirect_uri = window.location.origin + redirectTargetUrl;
        }
    