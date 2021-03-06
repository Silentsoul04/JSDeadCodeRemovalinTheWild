"use strict";
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
Object.defineProperty(exports, "__esModule", {
    value: true
});
var util_1 = require("@firebase/util");
/**
 * An in-memory storage implementation that matches the API of DOMStorageWrapper
 * (TODO: create interface for both to implement).
 *
 * @constructor
 */
var MemoryStorage = /** @class */ (function() {
    function MemoryStorage() {
        this.cache_ = {};
        this.isInMemoryStorage = true;
    }
    MemoryStorage.prototype.set = function(key, value) {
        if (value == null) {
            delete this.cache_[key];
        } else {
            this.cache_[key] = value;
        }
    };
    MemoryStorage.prototype.get = function(key) {
        if (util_1.contains(this.cache_, key)) {
            return this.cache_[key];
        }
        return null;
    };
    MemoryStorage.prototype.remove = function(key) {
        delete this.cache_[key];
    };
    return MemoryStorage;
}());
exports.MemoryStorage = MemoryStorage;

//# sourceMappingURL=MemoryStorage.js.map



//////////////////
// WEBPACK FOOTER
// ../database/dist/cjs/src/core/storage/MemoryStorage.js
// module id = 81
// module chunks = 0