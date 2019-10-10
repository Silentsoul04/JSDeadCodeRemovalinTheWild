/* tslint:disable */

/**
 * Polyfill Support
 * this function checks if browser needs polyfill support
 * and return only the polyfill needed by the browser
 *
 * P.S: it needs to run at first thing on your app, before every import
 * it will auto detect and require the package.
 */

/*******************************************************************************************************
 * Promise
 * as the app need at least Promise to start running (code by react-app-polyfill)
 *******************************************************************************************************/

import DetectOsBrowser from './DetectOsBrowser';

if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  require('promise/lib/rejection-tracking').enable();
  (window as any).Promise = require('promise/lib/es6-extensions.js');
}

/*******************************************************************************************************
 * Checker
 *******************************************************************************************************/

const withPolyfill = (callback: () => void) => {
  const browser = DetectOsBrowser.browser;
  if (browser === 'IE') {
    import('../../polyfills').then(callback);
    return;
  }

  // Skip, no polyfill needed
  callback();
};

export default withPolyfill;
