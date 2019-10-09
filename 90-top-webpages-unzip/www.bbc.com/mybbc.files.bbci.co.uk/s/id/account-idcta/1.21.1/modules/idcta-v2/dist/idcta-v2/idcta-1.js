/**
   @overview The iD CTA JS module requires the iD JS module when the user clicks on a CTA.
   @namespace idcta
   @private
 */
define('idcta-v2/idcta-1',[
    'idcta-v2/idCookie',
    'idcta-v2/apiUtils',
    'idcta-v2/tokenRefresh',
    'idcta-v2/logger',
], function(idCookie, apiUtils, tokenRefresh, logger) {
    var exports = {
        signals: {},
        ctas: {},
    };

    /**
     * Cta - an instance object for representing each CTA on a page.
     *
     * @param options an object with:
     *        id string required
     *        states object required
     *        locale string optional
     *        policyname string optional
     *        publiclyCacheable string optional
     *        useOverlay boolean optional
     */
    function Cta(options) {
        try {
            this.id = options.id;
            this.element = document.getElementById(options.id);
            this.states = options.states;
            var self = this;
            exports.ctas[self.id] = self;

            if (options.publiclyCacheable === true) {
                if (idCookie.getInstance().hasCookie()) {
                    updateForAuthorisedState(self);
                } else {
                    self.element.getElementsByTagName('span')[0].innerText =
                        self.states.unauthorised.signedout;
                }
            }
        } catch (err) {
            logger.logCaughtError(err);
        }
    }

    /** Called in view to assign addition of userOrigin param upon cta click */
    function addUserOrigin(id) {
        var elements = document.querySelectorAll('#' + id);

        var fn = function() {
            apiUtils.appendProductToCtaElement(this);
        };
        //no cta's found return
        if (!elements.length) {
            return;
        }

        for (var i = 0; i < elements.length; i++) {
            var anchors = elements[i].getElementsByTagName('a');

            for (var j = 0; j < anchors.length; j++) {
                apiUtils.addEventListenerTo(anchors[j], 'click', fn, false);
            }
        }
    }

    /**
     * Injects CTA markup if opted in to render authorised state else removes entire CTA markup.
     *
     * @param cta the call to action being updated.
     */
    function updateForAuthorisedState(cta) {
        if (cta.states.authorised) {
            var name = idCookie.getInstance().getNameFromCookie();
            var newMarkup = cta.states.authorised.anonymous;
            if (name) {
                newMarkup = cta.states.authorised.name.replace('{name}', name);
            }
            cta.element.getElementsByTagName('span')[0].innerText = newMarkup;
        } else {
            if (cta.element.parentNode) {
                cta.element.parentNode.removeChild(cta.element);
            }
        }
    }

    /*
     * Initiates a ckns_atkn access token refresh
     * It will only refresh if the token is expired, unless forced to
     *
     * It returns a Promise that is:
     *  resolved if token does not need refreshing or token was successfully refreshed
     *  rejected if there is an error or there was a previous error but not allowed
     *      to retry until the retryAfter has passed
     *
     * V5 Status flagpole.
     *  It will first check if V5 has been enabled and if it hasn't, it will fallback to using
     *  the old V4 initiateUserUplift() function, for backwards compatibility, if once all apps use this method
     *  but bbc id is rolled back to V4 after launch.
     *
     * Example:
     *
     *  require(['idcta-v2/idcta-1'], function(idcta) {
     *
     *      idcta.initiateTokenRefresh(false)
     *          .then(function() {
     *              console.log('token refresh successful!');
     *          })
     *          .catch(function(error) {
     *              console.log('token refresh failed!');
     *              console.log(
     *                  'error code: ', error.code, ', '
     *                  'message: ', error.message, ', '
     *                  'retryAfter: ', error.retryAfter
     *              );
     *          });
     *  });
     *
     *  Example:
     *
     *  perform a token refresh on bbc.com instead of bbc.co.uk
     *
     *  require(['idcta-v2/idcta-1'], function(idcta) {
     *
     *      idcta.initiateTokenRefresh(false, 'bbc.com')
     *          .then(function() {
     *              ...
     *          });
     *  });
     *
     * @param {boolean} [forceRefresh] default: false - force token refresh even if access token not expired
     * @param {string} [hostname] - overrides usual tld of the tokenRefresh_url, aligning it with this specified hostname
     * @param {boolean} [noV4Calls] - prevents delegating call to initiateUserUplift when v5 is disabled
     * @returns {Promise} - catch (error: {code: int, message: string, retryAfter: timestamp})
     */
    function initiateTokenRefresh(forceRefresh, hostname) {
        try {
            forceRefresh = forceRefresh === true;

            return tokenRefresh.refreshAccessToken(forceRefresh, hostname);
        } catch (err) {
            logger.logCaughtError(err);
        }
    }

    /**
     * userupLift - checks if user has access token if not promotes for uplift
     *
     * V5 Status flagpole.
     * It will first check if V5 has been enabled and if it has, it will instead start using
     * the new V5 initiateTokenRefresh() function, for backwards compatibility.
     *
     * @return {boolean}
     */
    function initiateUserUplift() {
        try {
            return exports.initiateTokenRefresh().then(
                function() {
                    return true; //initiateUserUplift's promise resolve callback expects boolean parameter
                },
                function() {
                    throw false; //initiateUserUplift's promise reject callback expects boolean parameter
                }
            );
        } catch (err) {
            logger.logCaughtError(err);
        }
    }

    function modifyCta(ctaId, size, colour) {
        try {
            var cta = document.querySelector('#' + ctaId + ' span');
            var sizes = ['small', 'medium', 'large'];
            var colours = ['blue', 'white'];

            if (sizes.indexOf(size) > -1) {
                cta.className = cta.className.replace(
                    /small|medium|large/g,
                    size
                );
            }
            if (colours.indexOf(colour) > -1) {
                cta.className = cta.className.replace(/blue|white/g, colour);
            }

            var anchors = document.querySelectorAll('#' + ctaId + ' span a');

            for (var anchorIndex in anchors) {
                if (anchors.hasOwnProperty(anchorIndex)) {
                    // add context and product in case this is onclick generated idcta
                    apiUtils.appendProductToCtaElement(anchors[anchorIndex]);
                }
            }
        } catch (err) {
            logger.logCaughtError(err);
        }
    }

    function modifyPtrt(ctaId, newPtrt) {
        try {
            var ctaAnchors = document.querySelectorAll('#' + ctaId + ' a');

            if (!ctaAnchors.length) {
                throw 'No cta elements found with provided Id';
            }

            for (var anchorIndex in ctaAnchors) {
                if (ctaAnchors.hasOwnProperty(anchorIndex)) {
                    var currentHref = ctaAnchors[anchorIndex].getAttribute(
                        'href'
                    );

                    var oldPtrt = decodeURIComponent(currentHref) //decode
                        .match(/ptrt\=([a-zA-Z:\/\/\_\\0-9.-]*)&?/) //find
                        .pop(); //extract

                    oldPtrt = encodeURIComponent(oldPtrt);

                    var first = currentHref.substring(
                        0,
                        currentHref.indexOf(oldPtrt)
                    );
                    var last = currentHref.substring(
                        currentHref.indexOf(oldPtrt) + oldPtrt.length
                    );

                    ctaAnchors[anchorIndex].setAttribute(
                        'href',
                        first + newPtrt + last
                    );

                    apiUtils.appendProductToCtaElement(ctaAnchors[anchorIndex]);
                }
            }
        } catch (err) {
            logger.logCaughtError(err);
        }
    }

    /**
     * Returns any labels that idcta wish to have set in istats.
     * It is called by the nav-analytics project to retrieve the labels and then set them just before invoking istats.
     * https://github.com/bbc/nav-analytics/blob/master/app/templates-source/body-last.hbs
     *
     * Example return:
     *
     *      {
     *          "bbc_identity": "1",
     *          "bbc_hid": "someV5Hid"
     *      }
     *
     * @returns {{}}
     */
    function getIStatsLabels() {
        try {
            var labels = {};
            var idCookieInstance = idCookie.getInstance();

            if (!idCookieInstance.hasCookie()) {
                return labels;
            }

            labels['bbc_identity'] = '1';

            if (!idCookieInstance.isPersonalisationEnabled()) {
                return labels;
            }

            var hid = idCookieInstance.getHidFromCookie();

            if (hid) {
                labels['bbc_hid'] = hid;
            }

            return labels;
        } catch (err) {
            logger.logCaughtError(err);
            return {};
        }
    }

    exports.Cta = Cta;
    exports.modifyCta = modifyCta;
    exports.modifyPtrt = modifyPtrt;
    exports.addUserOrigin = addUserOrigin;

    exports.initiateTokenRefresh = initiateTokenRefresh;
    exports.initiateUserUplift = initiateUserUplift;
    exports.getIStatsLabels = getIStatsLabels;

    exports.hasCookie = function() {
        return idCookie.getInstance().hasCookie();
    };
    exports.getCookieInstance = function() {
        return idCookie.getInstance();
    };
    exports.getIdFromCookie = function() {
        return idCookie.getInstance().getIdFromCookie();
    };
    exports.getUserDetailsFromCookie = function() {
        return idCookie.getInstance().getUserDetailsFromCookie();
    };
    exports.getNameFromCookie = function() {
        return idCookie.getInstance().getNameFromCookie();
    };
    exports.getAccessToken = function(protocol) {
        return idCookie.getInstance().getAccessToken(protocol);
    };

    return exports;
});

