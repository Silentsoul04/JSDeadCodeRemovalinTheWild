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
var __extends = (this && this.__extends) || (function() {
    var extendStatics = Object.setPrototypeOf ||
        ({
                __proto__: []
            }
            instanceof Array && function(d, b) {
                d.__proto__ = b;
            }) ||
        function(d, b) {
            for (var p in b)
                if (b.hasOwnProperty(p)) d[p] = b[p];
        };
    return function(d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", {
    value: true
});
var Index_1 = require("./Index");
var Node_1 = require("../Node");
var util_1 = require("../../util/util");
var nodeFromJSON_1 = require("../nodeFromJSON");
/**
 * @constructor
 * @extends {Index}
 * @private
 */
var ValueIndex = /** @class */ (function(_super) {
    __extends(ValueIndex, _super);

    function ValueIndex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValueIndex.prototype.compare = function(a, b) {
        var indexCmp = a.node.compareTo(b.node);
        if (indexCmp === 0) {
            return util_1.nameCompare(a.name, b.name);
        } else {
            return indexCmp;
        }
    };
    /**
     * @inheritDoc
     */
    ValueIndex.prototype.isDefinedOn = function(node) {
        return true;
    };
    /**
     * @inheritDoc
     */
    ValueIndex.prototype.indexedValueChanged = function(oldNode, newNode) {
        return !oldNode.equals(newNode);
    };
    /**
     * @inheritDoc
     */
    ValueIndex.prototype.minPost = function() {
        return Node_1.NamedNode.MIN;
    };
    /**
     * @inheritDoc
     */
    ValueIndex.prototype.maxPost = function() {
        return Node_1.NamedNode.MAX;
    };
    /**
     * @param {*} indexValue
     * @param {string} name
     * @return {!NamedNode}
     */
    ValueIndex.prototype.makePost = function(indexValue, name) {
        var valueNode = nodeFromJSON_1.nodeFromJSON(indexValue);
        return new Node_1.NamedNode(name, valueNode);
    };
    /**
     * @return {!string} String representation for inclusion in a query spec
     */
    ValueIndex.prototype.toString = function() {
        return '.value';
    };
    return ValueIndex;
}(Index_1.Index));
exports.ValueIndex = ValueIndex;
exports.VALUE_INDEX = new ValueIndex();

//# sourceMappingURL=ValueIndex.js.map



//////////////////
// WEBPACK FOOTER
// ../database/dist/cjs/src/core/snap/indexes/ValueIndex.js
// module id = 38
// module chunks = 0