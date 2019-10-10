// #if process.env.NODE_ENV !== 'production'
// import stubbable from 'stubbable-decorator';
// #endif
import getWindow from 'src/util/get-window';

/**
 * Poller class
 *
 * Needed for analytics to test for availability of:
 *    window.TAGX
 *    window.NYTD.EventTracker
 *
 * Usage:
 * Try to get tagx for 30 seconds onces a second
 * var tagxPoller = new Poller('TAGX', 1000, 30, this.sendTrackingQueue);
 * tagxPoller.poll();
 *
 * Try to get Event Tracker for 30 seconds once a second
 * var etPoller = new Poller(['NYTD', 'EventTracker'], 1000, 30, this.sendTrackingQueue);
 * etPoller.poll();
 *
 * @class Poller
 * @param {String|Array} objectName The object name on the window or a list of names in a hierarchy
 * @param {Number} interval Time in milleseconds for poll
 * @param {Number} maxTries Max number of attempts
 * @param {Function} callback Function to execute if object becomes available
 * @return {Object} Returns {poll, cancel}
 */

// #if process.env.NODE_ENV !== 'production'
// @stubbable
// #endif
class Poller {
    constructor(objectName, interval, maxTries, callback) {
        this._id = null;
        this._polling = false;
        this._tryCount = 0;

        this._maxTries = maxTries;
        this._interval = interval;
        this._callback = callback;
        this._objectName = objectName;
    }

    /**
     * Initiate polling
     *
     * @public
     * @method start
     */
    start() {
        if (this._polling) return;
        this._poll();
    }

    /**
     * Cancel polling
     *
     * @public
     * @method cancel
     */
    cancel() {
        window.clearTimeout(this._id);
        this._polling = false;
    }

    /**
     * getter for polling
     *
     * @public
     * @method isPolling
     */
    isPolling() {
        return this._polling;
    }

    /**
     * Poll for object
     *
     * @private
     * @method poll
     */
    _poll() {
        this._polling = true;
        this._id = window.setTimeout(this._check.bind(this), this._interval);
    }

    /**
     * Check that object
     *
     * @private
     * @method check
     */
    _check() {
        this.cancel();
        if (this._getObjectToCheck(this._objectName)) {
            this._callback();
        } else if (this._tryCount < this._maxTries) {
            this._poll();
        }
        this._tryCount += 1;
    }

    /**
     * Get object to check from window
     *
     * @private
     * @method _getObjectToCheck
     * @param {String|Array} obj The name of the object on the window or a list of names in hierarchy
     * @return {Object} Returns objectToCheck
     */
    // eslint-disable-next-line class-methods-use-this
    _getObjectToCheck(obj) {
        let objectToCheck;
        const win = getWindow();

        if (typeof obj === 'string') {
            objectToCheck = win[obj];
        } else if (Array.isArray(obj)) {
            // i.e. for checking window.NYTD.EventTracker existance
            objectToCheck = win;
            for (let i = 0, len = obj.length; i < len; i += 1) {
                if (objectToCheck[obj[i]]) {
                    objectToCheck = objectToCheck[obj[i]];
                } else {
                    objectToCheck = null;
                    break;
                }
            }
        }

        return objectToCheck;
    }
}

export default Poller;



// WEBPACK FOOTER //
// ./src/util/poller.js