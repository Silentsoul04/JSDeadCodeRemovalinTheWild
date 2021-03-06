import * as promiseimpl from './promise_external';
/**
 * A request whose promise always fails.
 * @struct
 * @template T
 */
var FailRequest = /** @class */ (function () {
    function FailRequest(error) {
        this.promise_ = promiseimpl.reject(error);
    }
    /** @inheritDoc */
    FailRequest.prototype.getPromise = function () {
        return this.promise_;
    };
    /** @inheritDoc */
    FailRequest.prototype.cancel = function (appDelete) {
        if (appDelete === void 0) { appDelete = false; }
    };
    return FailRequest;
}());
export { FailRequest };

//# sourceMappingURL=failrequest.js.map



//////////////////
// WEBPACK FOOTER
// ../storage/dist/esm/src/implementation/failrequest.js
// module id = null
// module chunks = 