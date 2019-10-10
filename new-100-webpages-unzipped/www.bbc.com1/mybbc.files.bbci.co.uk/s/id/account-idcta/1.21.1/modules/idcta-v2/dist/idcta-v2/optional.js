/**
 * @overview Plugin 'optional' allows idcta to fail gracefully
 *  if a module is not available, returning a null dependency
 *  e.g. it has been blocked by networks or adblockers.
 *  Does not interfere with global requireJS namespace.
 * @namespace idcta
 */
define('idcta-v2/optional', ['idcta-v2/logger'], function(logger) {
    var DEFAULT = null;
    var exports = {};

    exports.load = function(moduleName, parentRequire, onload) {
        parentRequire([moduleName], onload, function(error) {
            var failedModule = error.requireModules && error.requireModules[0];
            logger.logCaughtError(
                'Could not load optional module: ' + failedModule
            );

            onload(DEFAULT);
        });
    };

    return exports;
});