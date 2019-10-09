import sharing from '../services/sharing';
import dom from '@buzzfeed/buzzblocks/js/services/dom';
import util from '@buzzfeed/buzzblocks/js/services/util';

var _initializing;

/**
 * Prevents non-post images from displaying on pin modal.
 * @param {HTMLImageElement[]} includedImages - post images.
 * @memberOf service:pinterest
 * @return {void}
 */
function _excludeUnpinnableImages(includedImages) {
  var excludedImages;
  var allImages = dom.find(document.body, 'img');

  if (allImages.length) {
    // Reset all images to be pinnable
    util.each(allImages, function(i, imgEl) {
      dom.setData(imgEl, 'pin-nopin', '');
    });

    // Find all images that are not included
    excludedImages = allImages.filter(img => includedImages.indexOf(img) === -1);

    // Prevent excluded images from being pinned
    util.each(excludedImages, function(i, imgEl) {
      dom.setData(imgEl, 'pin-nopin', 'true');
    });
  }
}

/**
 * Gets images from post subbuzzes.
 * @memberOf service:pinterest
 * @return {HTMLImageElement[]} - subbuzz images.
function _getSubBuzzImages() {
  return _dom.find(_d.getElementById('js-post-container'), '.subbuzz__media-image');
}
*/

/**
 * Fallback for sharing via SDK. Opens url with params from `data`
 * @param {Object} data - sharing data
 * @returns {void}
 */
function _fallback(data) {
  var url = util.prepareUrl('https://www.pinterest.com/pin/create/button/?', data);
  util.openPopup(url);
}


//-----------------------------------------------------------
// Public
//-----------------------------------------------------------

/**
 * Service for working with Pinterest.
 * @exports service:pinterest
 */
var service = {};

/**
 * Opens pinterest modal with post images.
 * Defaults to URL sharing if no images specified.
 * @param {Object} data - share data.
 * @param {HTMLImageElement[]} data.images - post images.
 * @return {void}
 */
service.pinAny = function(data) {
  if (typeof data === 'undefined') {
    data = {};
  }
  if (data.images && data.images.length && window.PinUtils) {
    _excludeUnpinnableImages(data.images);
    window.PinUtils.pinAny(data.href);
  } else {
    _fallback(data);
  }
};

/**
 * Opens pineterst Create form.
 * Do not relies on sdk since we have a proper fallback
 * @param {Object} data - share data.
 * @param {String} data.media - the url of the image to Pin.
 * @param {String} [data.url] - he url that the Pin will link to.
 *  This defaults to the url the user saves the Pin from.
 * @param {String} [data.description] - the Pin's description.
 * This defaults to the document title.
 * @see https://developers.pinterest.com/docs/widgets/pin-it/#if-you-re-using-javascript
 * @return {void}
 */
service.pinOne = function(data) {
  if (typeof data === 'undefined') {
    data = {};
  }
  data.media = data.media || sharing.getPicture();
  data.description = data.description || sharing.getDescription();

  if (window.PinUtils) {
    window.PinUtils.pinOne(data);
  } else {
    _fallback(data);
  }
};

/**
 * Share via Pinterset.
 * @param {Object} data - share data.
 * @param {Event} ev - original event.
 * @return {void}
 */
service.share = function(data, ev) {
  if (ev) {
    ev.preventDefault();
  }
  if (data.media) {
    service.pinOne(data);
  }
  //If media was set - use pinOne to share single image
  /* Commented out for now - may need multi image sharing soon with packages - PC
  data.images = [];

  subbuzzImages = _getSubBuzzImages();
  if (subbuzzImages.length) {
    data.images = data.images.concat(subbuzzImages);
  }
  service.pinAny(data);
  */
};

service.init = () => {
  if (!_initializing) {
    util.createScript('//assets.pinterest.com/js/pinit_main.js?' + Math.random());
    _initializing = true;
  }
};

export default service;
