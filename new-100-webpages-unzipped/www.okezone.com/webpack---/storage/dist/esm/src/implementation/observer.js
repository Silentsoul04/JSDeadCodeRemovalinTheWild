/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as type from './type';
/**
 * @struct
 */
var Observer = /** @class */ (function() {
    function Observer(nextOrObserver, opt_error, opt_complete) {
        var asFunctions = type.isFunction(nextOrObserver) ||
            type.isDef(opt_error) ||
            type.isDef(opt_complete);
        if (asFunctions) {
            this.next = nextOrObserver;
            this.error = opt_error || null;
            this.complete = opt_complete || null;
        } else {
            var observer = nextOrObserver;
            this.next = observer.next || null;
            this.error = observer.error || null;
            this.complete = observer.complete || null;
        }
    }
    return Observer;
}());
export {
    Observer
};

//# sourceMappingURL=observer.js.map



//////////////////
// WEBPACK FOOTER
// ../storage/dist/esm/src/implementation/observer.js
// module id = null
// module chunks =