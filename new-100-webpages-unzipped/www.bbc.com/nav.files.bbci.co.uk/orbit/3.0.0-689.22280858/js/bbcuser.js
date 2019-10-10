(function() {
    /**
     * Service providing logic around the BBCUser API.
     * @module orb/bbcuser
     */
    'use strict';

    var ukCountryCodes = ["GB", "IM", "JE", "GG"],
        euCountryCodes = ["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "ES", "EU", "FI", "FR", "GB", "GR", "HU", "HR", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"];

    var countryMatches = function(validCountries, country) {
        return validCountries.indexOf(country.toUpperCase()) !== -1;
    }

    var service = {
        isUKCombined: function(country) {
            return country ? countryMatches(ukCountryCodes, country) : false;
        },
        isEU: function(country) {
            return country ? countryMatches(euCountryCodes, country) : false;
        }
    };

    if (typeof define === 'function' && define.amd) {
        define('orb/bbcuser', function() {
            return service;
        });
    }
})();