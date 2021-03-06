/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Implements `Object.values` API.
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values.
 *
 * @param {!Object} target
 * @returns {!Array<*>}
 */
export function values(target) {
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }

    const output = [];
    for (const key in target) {
        if (hasOwnProperty.call(target, key)) {
            output.push(target[key]);
        }
    }
    return output;
}

/**
 * Sets the Object.values polyfill if it does not exist.
 * @param {!Window} win
 */
export function install(win) {
    if (!win.Object.values) {
        win.Object.defineProperty(win.Object, 'values', {
            enumerable: false,
            configurable: true,
            writable: true,
            value: values,
        });
    }
}