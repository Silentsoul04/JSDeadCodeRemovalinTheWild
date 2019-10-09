import dom from '@buzzfeed/buzzblocks/js/services/dom';
import storage from '@buzzfeed/buzzblocks/js/services/storage';
import util from '@buzzfeed/buzzblocks/js/services/util';
import client from '@buzzfeed/buzzblocks/js/services/client';
import sharing from './sharing';

//-----------------------------------------------------------
// Private
//-----------------------------------------------------------
var _fbAppId = window.BZFD.Config.facebookApi.appId || null;
var _FB_API_VERSION = window.BZFD.Config.facebookApi.version;

function getDefaultShareParams() {
  /*eslint-disable */
  //Needs to disable linting because app_id and iframe_test are not camelcase
  return {
    method: 'share',
    app_id: _fbAppId,
    href: sharing.getUrl(),
    caption: sharing.getCaption(),
    description: sharing.getDescription(),
    name: sharing.getTitle(),
    picture: sharing.getPicture(),
    ref: "mobile_share",
    iframe_test: true,
  };
  /*eslint-enable */
}
var _fb;
var _initializing;

/**
 * Loads Facebook JS SDK.
 * @memberOf service:facebook
 * @return {Promise} - promise object. Resolved when SDK is ready to use.
 */
function _init() {
  if (!_initializing) {
    _initializing = new Promise(resolve => {
      /**
       * Retrieves global SDK variable and resolves initialization promise.
       * @memberOf service:facebook
       * @return {void}
       */
      window.fbAsyncInit = function() {
        _fb = window.FB;
        _fb.init({
          version: _FB_API_VERSION,
          appId: _fbAppId,
          // check login status
          status: true,
          // enable cookies to allow the server to access the session
          cookie: true,
          // parse XFBML
          xfbml: true,
        });

        resolve(_fb);
      };
    });

    util.createScript('//connect.facebook.net/en_US/sdk.js');
  }

  return _initializing;
}

/**
 * Return to stored offset after share
 * @memberOf service:facebook
 * @return {void}
 */
function _restoreScrollPosition() {
  var shareOffset = storage.sessionGet('offset');
  if (shareOffset) {
    window.scrollTo(0, shareOffset);
  }
}

/**
 * Get scroll offset for returning after share
 * @memberOf service:facebook
 * @return {void}
 */
function _saveScrollPosition() {
  storage.sessionSet({
    key: 'offset',
    value: window.scrollY,
  });
}

//-----------------------------------------------------------
// Public
//-----------------------------------------------------------

/**
 * Service for working with Facebook.
 * @exports service:facebook
 */
var service = {};

/**
 * Parses XFBML markup on a target element.
 * @param {HTMLElement} targetNode - target element.
 * @return {void}
 */
service.parse = function(targetNode) {
  return _init().then((fb) => fb.XFBML.parse(targetNode));
};

/**
 * Subscribes to the Facebook event.
 * @param {String} ev - event name.
 * @param {Function} cb - event handler.
 * @return {void}
 */
service.subscribe = function(ev, cb) {
  return _init().then((fb) => fb.Event.subscribe(ev, cb));
};

/**
 * Unsubscribes from the Facebook event.
 * @param {String} ev - event name.
 * @param {String} cb - event handler.
 * @return {void}
 */
service.unsubscribe = function(ev, cb) {
  return _init().then((fb) => fb.Event.unsubscribe(ev, cb));
};

/**
 * Wrapper for FB.ui method.
 * @param {Object} data - options for FB.ui.
 * @param {Function} callback - callback.
 * @return {void}
 */
service.ui = function(data, callback) {
  _fb.ui(data, callback);
};

/**
 * Opens Facebook Feed Dialog.
 * @param {Object} data - parameters for the dialog.
 * @return {void}
 */
service.openFeedDialog = function(data) {
  var params = util.extend({}, getDefaultShareParams(), data);

  /*eslint-disable camelcase*/
  params.app_id = _fbAppId;
  data.redirect_uri = data.redirectUri || data.url;
  /*eslint-enable camelcase*/

  if (_fb) {
    _saveScrollPosition();
    service.ui(params, _restoreScrollPosition);
    // Prevents hash removal, when loader is closed before modal appears
    const dialogCloseBtn = dom.findOne(document, '#fb_dialog_loader_close');
    if (dialogCloseBtn) {
      dom.one(dialogCloseBtn, 'click', ev => ev.preventDefault());
    }
  } else {
    // Fallback to URL method
    util.openPopup(util.prepareUrl('https://www.facebook.com/dialog/' + params.method + '/?', params));
  }
};

/**
 * Share via Facebook Feed dialog.
 * @param {Object} data - share data.
 * @param {Event} ev - original event.
 * @return {void}
 */
service.share = function(data, ev) {
  /*
  * Temporary change due to bug with FB Feed Dialog SDK
  * TODO: Resolve this situation
  */
  if (client.os === 'android') {
    data.display = 'popup';
    /*eslint-disable */
    data.iframe_test = false;
    /*eslint-enable */
  }

  if (ev) {
    ev.preventDefault();
  }
  service.openFeedDialog(data);
};

service.init = _init;

export default service;
