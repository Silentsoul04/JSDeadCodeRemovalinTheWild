import sharing from '../services/sharing';
import util from '@buzzfeed/buzzblocks/js/services/util';

var _defaultShareData = {
    url: sharing.getUrl()
};

/**
 * Service for working with Tumblr.
 * @exports service:tumblr
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
    util.openPopup(util.prepareUrl('http://www.tumblr.com/share/link?', params), params);
};

export default service;