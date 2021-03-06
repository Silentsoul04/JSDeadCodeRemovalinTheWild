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
var SortedMap_1 = require("../util/SortedMap");
var SortedMap_2 = require("../util/SortedMap");
var LOG_2 = Math.log(2);
/**
 * @constructor
 */
var Base12Num = /** @class */ (function() {
    /**
     * @param {number} length
     */
    function Base12Num(length) {
        var logBase2 = function(num) {
            return parseInt((Math.log(num) / LOG_2), 10);
        };
        var bitMask = function(bits) {
            return parseInt(Array(bits + 1).join('1'), 2);
        };
        this.count = logBase2(length + 1);
        this.current_ = this.count - 1;
        var mask = bitMask(this.count);
        this.bits_ = (length + 1) & mask;
    }
    /**
     * @return {boolean}
     */
    Base12Num.prototype.nextBitIsOne = function() {
        //noinspection JSBitwiseOperatorUsage
        var result = !(this.bits_ & (0x1 << this.current_));
        this.current_--;
        return result;
    };
    return Base12Num;
}());
/**
 * Takes a list of child nodes and constructs a SortedSet using the given comparison
 * function
 *
 * Uses the algorithm described in the paper linked here:
 * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.46.1458
 *
 * @template K, V
 * @param {Array.<!NamedNode>} childList Unsorted list of children
 * @param {function(!NamedNode, !NamedNode):number} cmp The comparison method to be used
 * @param {(function(NamedNode):K)=} keyFn An optional function to extract K from a node wrapper, if K's
 *                                                        type is not NamedNode
 * @param {(function(K, K):number)=} mapSortFn An optional override for comparator used by the generated sorted map
 * @return {SortedMap.<K, V>}
 */
exports.buildChildSet = function(childList, cmp, keyFn, mapSortFn) {
    childList.sort(cmp);
    var buildBalancedTree = function(low, high) {
        var length = high - low;
        var namedNode;
        var key;
        if (length == 0) {
            return null;
        } else if (length == 1) {
            namedNode = childList[low];
            key = keyFn ? keyFn(namedNode) : namedNode;
            return new SortedMap_1.LLRBNode(key, namedNode.node, SortedMap_1.LLRBNode.BLACK, null, null);
        } else {
            var middle = parseInt((length / 2), 10) + low;
            var left = buildBalancedTree(low, middle);
            var right = buildBalancedTree(middle + 1, high);
            namedNode = childList[middle];
            key = keyFn ? keyFn(namedNode) : namedNode;
            return new SortedMap_1.LLRBNode(key, namedNode.node, SortedMap_1.LLRBNode.BLACK, left, right);
        }
    };
    var buildFrom12Array = function(base12) {
        var node = null;
        var root = null;
        var index = childList.length;
        var buildPennant = function(chunkSize, color) {
            var low = index - chunkSize;
            var high = index;
            index -= chunkSize;
            var childTree = buildBalancedTree(low + 1, high);
            var namedNode = childList[low];
            var key = keyFn ? keyFn(namedNode) : namedNode;
            attachPennant(new SortedMap_1.LLRBNode(key, namedNode.node, color, null, childTree));
        };
        var attachPennant = function(pennant) {
            if (node) {
                node.left = pennant;
                node = pennant;
            } else {
                root = pennant;
                node = pennant;
            }
        };
        for (var i = 0; i < base12.count; ++i) {
            var isOne = base12.nextBitIsOne();
            // The number of nodes taken in each slice is 2^(arr.length - (i + 1))
            var chunkSize = Math.pow(2, base12.count - (i + 1));
            if (isOne) {
                buildPennant(chunkSize, SortedMap_1.LLRBNode.BLACK);
            } else {
                // current == 2
                buildPennant(chunkSize, SortedMap_1.LLRBNode.BLACK);
                buildPennant(chunkSize, SortedMap_1.LLRBNode.RED);
            }
        }
        return root;
    };
    var base12 = new Base12Num(childList.length);
    var root = buildFrom12Array(base12);
    return new SortedMap_2.SortedMap(mapSortFn || cmp, root);
};

//# sourceMappingURL=childSet.js.map



//////////////////
// WEBPACK FOOTER
// ../database/dist/cjs/src/core/snap/childSet.js
// module id = 40
// module chunks = 0