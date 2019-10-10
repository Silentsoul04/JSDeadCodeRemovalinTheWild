define(['idcta-v2/idCookie', 'idcta-v2/id-config', 'idcta-v2/logger'], function(
    idCookie,
    idConfig,
    logger
) {
    var exports = {};

    /**
     * Statusbar - an instance object for representing the ORB statusbar on a page.
     *
     * @param options an object with:
     *        id string required
     *        states object required
     *        locale string optional
     *        policyname string optional
     *        publiclyCacheable string optional
     *        useOverlay boolean optional
     */
    function Statusbar(options) {
        try {
            this.id = null;
            this.element = null;
            this.ctaLink = null;
            this.ctaName = null;

            if (_statusbarExists(options)) {
                this.id = options.id;
                this.element = document.getElementById(options.id);

                if (!options.blq) {
                    this.ctaLink = document.getElementById('idcta-link');
                    this.ctaName = this.element.getElementsByTagName('span')[0];
                } else {
                    this.ctaLink = document.getElementById(options['link-id']) ?
                        document.getElementById(options['link-id']) :
                        this.element.getElementsByTagName('a')[0];
                    this.ctaName = options['name-id'] ?
                        document.getElementById(options['name-id']) :
                        this.element.getElementsByTagName('span')[1];
                }

                var self = this;
                if (options.publiclyCacheable === true) {
                    if (idCookie.getInstance().hasCookie()) {
                        idConfig.getConfigAsync().then(function(config) {
                            if (
                                config.status_url &&
                                self.ctaLink.href !== config.status_url
                            ) {
                                self.ctaLink.href = config.status_url;
                            }
                            updateForAuthorisedState(
                                self,
                                idCookie.getInstance()
                            );
                        });
                    } else {
                        idConfig.getConfigAsync().then(function(config) {
                            if (config.signin_url) {
                                self.ctaLink.href = config.signin_url;
                            }

                            self.ctaName.innerText =
                                config.translation_signedout;
                        });
                    }
                }
            }
        } catch (err) {
            logger.logCaughtError(err);
        }
    }

    /**
     * Enhances the Statusbar markup
     *
     * @param cta the call to action being updated.
     */
    function updateForAuthorisedState(statusbar, cookie) {
        return idConfig
            .getConfigAsync()
            .then(function(config) {
                var name =
                    cookie.getNameFromCookie() || config.translation_signedin;
                var newMarkup = config.translation_signedin;

                if (name) {
                    newMarkup = shorten(name, 14);
                }

                statusbar.element.className =
                    statusbar.element.className + ' idcta-signedin';
                statusbar.ctaName.innerText = newMarkup;
            })
            .catch(function(err) {
                logger.logCaughtError(err);
            });
    }

    /**
     * @description Returns a substring of text of the specified length followed by an ellipsis.
     * @param {string} text The text to be truncated.
     * @param {int} length The desired length of the resulting substring.
     */
    function shorten(text, length) {
        if (text.length > length) {
            return text.substring(0, length - 1) + '…';
        }
        return text;
    }

    /**
     * @description Checks if correct statusbar HTML exists in the page so that the module can fail silently if it does not
     * @param {object} options passed to the module constructor
     */
    function _statusbarExists(options) {
        if (!document.getElementById(options.id)) {
            return false;
        }
        if (!options.blq && !document.getElementById('idcta-link')) {
            return false;
        }
        if (options.blq && !document.getElementById(options['link-id'])) {
            return false;
        }

        return true;
    }

    exports.Statusbar = Statusbar;
    exports.updateForAuthorisedState = updateForAuthorisedState;
    return exports;
});