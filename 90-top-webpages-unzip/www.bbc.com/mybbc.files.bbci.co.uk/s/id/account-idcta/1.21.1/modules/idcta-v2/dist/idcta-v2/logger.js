/**
 * @overview Module 'logger' provides logging utils
 *  shared between idcta modules
 * @namespace idcta
 */
define('idcta-v2/logger',[], function() {
    var exports = {};

    exports.logCaughtError = function(err) {
        if (window.console && err.message) {
            console.log(err);
        }
    };

    exports.logMessage = function(message) {
        var debugCookieName = 'ckns_debugtoken';
        var debugCookieMatch = document.cookie.match(
            new RegExp(debugCookieName + '=([^;]+)')
        );
        if (debugCookieMatch) {
            window.tokenRefeshLog = window.tokenRefeshLog || [];
            window.tokenRefeshLog.push(message);
        }
    };

    return exports;
});

