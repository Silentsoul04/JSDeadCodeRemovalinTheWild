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
var Node_1 = require("../Node");
var util_1 = require("../../util/util");
/**
 *
 * @constructor
 */
var Index = /** @class */ (function() {
    function Index() {}
    /**
     * @return {function(!NamedNode, !NamedNode):number} A standalone comparison function for
     * this index
     */
    Index.prototype.getCompare = function() {
        return this.compare.bind(this);
    };
    /**
     * Given a before and after value for a node, determine if the indexed value has changed. Even if they are different,
     * it's possible that the changes are isolated to parts of the snapshot that are not indexed.
     *
     * @param {!Node} oldNode
     * @param {!Node} newNode
     * @return {boolean} True if the portion of the snapshot being indexed changed between oldNode and newNode
     */
    Index.prototype.indexedValueChanged = function(oldNode, newNode) {
        var oldWrapped = new Node_1.NamedNode(util_1.MIN_NAME, oldNode);
        var newWrapped = new Node_1.NamedNode(util_1.MIN_NAME, newNode);
        return this.compare(oldWrapped, newWrapped) !== 0;
    };
    /**
     * @return {!NamedNode} a node wrapper that will sort equal to or less than
     * any other node wrapper, using this index
     */
    Index.prototype.minPost = function() {
        return Node_1.NamedNode.MIN;
    };
    return Index;
}());
exports.Index = Index;

//# sourceMappingURL=Index.js.map



//////////////////
// WEBPACK FOOTER
// ../database/dist/cjs/src/core/snap/indexes/Index.js
// module id = 14
// module chunks = 0