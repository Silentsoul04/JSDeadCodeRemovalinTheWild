import sharing from '../services/sharing';
import util from '@buzzfeed/buzzblocks/js/services/util';

var _defaultShareData = {
    url: sharing.getUrl(),
    text: sharing.getTitle(),
};

/**
 * Service for working with Twitter
 * @exports service:twitter
 */
var service = {};

/**
 * Opens url with tweet share data as parameters.
 * @param {Object} data - share data.
 * @param {Event} ev - original event.
 * @return {void}
 */
service.share = function(data, ev) {
    ev.preventDefault();
    var params = util.extend({}, _defaultShareData, data);
    util.openPopup(util.prepareUrl('https://twitter.com/intent/tweet/?', params), params);
};

export default service;