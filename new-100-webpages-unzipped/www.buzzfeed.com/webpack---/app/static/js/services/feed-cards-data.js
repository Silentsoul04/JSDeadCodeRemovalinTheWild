import util from '@buzzfeed/buzzblocks/js/services/util';

/**
 * Service for get and set cards data to global object.
 * @exports service:covers-cards
 */
var _service = {};

var _cardsData = {};
/**
 * Add or update card data by id
 * @param {Object} data - card data
 * @return {Int} card id
 */
_service.set = function(data) {
    _cardsData[data.id] = util.extend({}, data);
    return data.id;

};

/**
 * Return card data by card id
 * @param {Int} id - card id
 * @return {Object} card data if it exist or false;
 */
_service.get = function(id) {
    if (typeof _cardsData[id] !== 'undefined') {
        return _cardsData[id];
    }
    return false;
};


export default _service;