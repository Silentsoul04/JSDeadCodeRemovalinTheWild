import * as constants from './constants';
import * as errorsExports from './error';
import {
    FailRequest
} from './failrequest';
import {
    Location
} from './location';
import * as promiseimpl from './promise_external';
import {
    RequestMap
} from './requestmap';
import * as type from './type';
/**
 * @param app If null, getAuthToken always resolves with null.
 * @param service The storage service associated with this auth wrapper.
 *     Untyped to avoid circular type dependencies.
 * @struct
 */
var AuthWrapper = /** @class */ (function() {
    function AuthWrapper(app, maker, requestMaker, service, pool) {
        this.bucket_ = null;
        this.deleted_ = false;
        this.app_ = app;
        if (this.app_ !== null) {
            var options = this.app_.options;
            if (type.isDef(options)) {
                this.bucket_ = AuthWrapper.extractBucket_(options);
            }
        }
        this.storageRefMaker_ = maker;
        this.requestMaker_ = requestMaker;
        this.pool_ = pool;
        this.service_ = service;
        this.maxOperationRetryTime_ = constants.defaultMaxOperationRetryTime;
        this.maxUploadRetryTime_ = constants.defaultMaxUploadRetryTime;
        this.requestMap_ = new RequestMap();
    }
    AuthWrapper.extractBucket_ = function(config) {
        var bucketString = config[constants.configOption] || null;
        if (bucketString == null) {
            return null;
        }
        var loc = Location.makeFromBucketSpec(bucketString);
        return loc.bucket;
    };
    AuthWrapper.prototype.getAuthToken = function() {
        // TODO(andysoto): remove ifDef checks after firebase-app implements stubs
        // (b/28673818).
        if (this.app_ !== null &&
            type.isDef(this.app_.INTERNAL) &&
            type.isDef(this.app_.INTERNAL.getToken)) {
            return this.app_.INTERNAL.getToken().then(function(response) {
                if (response !== null) {
                    return response.accessToken;
                } else {
                    return null;
                }
            }, function(_error) {
                return null;
            });
        } else {
            return promiseimpl.resolve(null);
        }
    };
    AuthWrapper.prototype.bucket = function() {
        if (this.deleted_) {
            throw errorsExports.appDeleted();
        } else {
            return this.bucket_;
        }
    };
    /**
     * The service associated with this auth wrapper. Untyped to avoid circular
     * type dependencies.
     */
    AuthWrapper.prototype.service = function() {
        return this.service_;
    };
    /**
     * Returns a new firebaseStorage.Reference object referencing this AuthWrapper
     * at the given Location.
     * @param loc The Location.
     * @return Actually a firebaseStorage.Reference, typing not allowed
     *     because of circular dependency problems.
     */
    AuthWrapper.prototype.makeStorageReference = function(loc) {
        return this.storageRefMaker_(this, loc);
    };
    AuthWrapper.prototype.makeRequest = function(requestInfo, authToken) {
        if (!this.deleted_) {
            var request = this.requestMaker_(requestInfo, authToken, this.pool_);
            this.requestMap_.addRequest(request);
            return request;
        } else {
            return new FailRequest(errorsExports.appDeleted());
        }
    };
    /**
     * Stop running requests and prevent more from being created.
     */
    AuthWrapper.prototype.deleteApp = function() {
        this.deleted_ = true;
        this.app_ = null;
        this.requestMap_.clear();
    };
    AuthWrapper.prototype.maxUploadRetryTime = function() {
        return this.maxUploadRetryTime_;
    };
    AuthWrapper.prototype.setMaxUploadRetryTime = function(time) {
        this.maxUploadRetryTime_ = time;
    };
    AuthWrapper.prototype.maxOperationRetryTime = function() {
        return this.maxOperationRetryTime_;
    };
    AuthWrapper.prototype.setMaxOperationRetryTime = function(time) {
        this.maxOperationRetryTime_ = time;
    };
    return AuthWrapper;
}());
export {
    AuthWrapper
};

//# sourceMappingURL=authwrapper.js.map



//////////////////
// WEBPACK FOOTER
// ../storage/dist/esm/src/implementation/authwrapper.js
// module id = null
// module chunks =