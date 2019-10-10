/**
 * @overview Module 'istats' provides a fallback to istats-1 if it is
 *  undefined, instead just returning empty values for the consumed
 *  functions
 * @namespace idcta
 */
define('idcta-v2/istats', ['idcta-v2/optional!istats-1'], function(istats) {
    if (istats) {
        return istats;
    }
    return {
        getSite: function() {
            return undefined;
        },
        _getLabels: function() {
            return {
                app_name: '',
                prod_name: '',
            };
        },
    };
});