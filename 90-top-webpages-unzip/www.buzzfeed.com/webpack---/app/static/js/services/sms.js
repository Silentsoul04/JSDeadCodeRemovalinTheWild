import sharing from '../services/sharing';
import util from '@buzzfeed/buzzblocks/js/services/util';

function _getDefaultShareData() {
  return {
    url: sharing.getUrl(),
    text: sharing.getTitle(),
  };
}

/**
 * Service for sending SMS messages.
 * @exports service:sms
 */
var service = {};

/**
 * Performs GET request to the sms: protocol.
 * @param {Object} data - share data.
 * @param {String} data.url - post url.
 * @param {Event} ev - original event.
 * @return {void}
 */
service.share = function(data, ev) {
  ev.preventDefault();
  var params = util.extend({}, _getDefaultShareData(), data);
  var text = encodeURIComponent(params.text || '');
  var ua = navigator.userAgent;
  var delimiter = ua.match(/Android/i) ? '?' : '&';
  var href = 'sms:' + delimiter + 'body=' + text + '%0A%0A' + encodeURIComponent(params.url);
  util.redirect(href);
};

export default service;
