/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

import RequestWrapper from './request-wrapper';

/**
 * This a base class which each caching strategy extends.
 *
 * @memberof module:workbox-runtime-caching
 */
class Handler {
    /**
     * Constructor for a new Handler instance.
     *
     * @param {Object} input
     * @param {boolean} [input.waitOnCache] For handlers that write to the cache,
     * `true` means the method should wait for the `cache.put()` call to
     * complete before returning. The default value of `false` means
     * return without waiting. It this value is true and the response
     * can't be cached, an error will be thrown.
     * @param {module:workbox-runtime-caching.RequestWrapper}
     * [input.requestWrapper] An optional `RequestWrapper` that is used to
     * configure the cache name and request plugins. If not provided, a
     * new `RequestWrapper` using the [default cache name](#getDefaultCacheName)
     * will be used.
     */
    constructor({
        requestWrapper,
        waitOnCache
    } = {}) {
        if (requestWrapper) {
            this.requestWrapper = requestWrapper;
        } else {
            this.requestWrapper = new RequestWrapper();
        }

        this.waitOnCache = Boolean(waitOnCache);
    }

    /**
     * An abstract method that each subclass must implement.
     *
     * @abstract
     * @param {Object} input
     * @param {FetchEvent} input.event The event that triggered the service
     *        worker's fetch handler.
     * @param {Object} [input.params] Additional parameters that might be passed
     *        in to the method. If used in conjunction with the
     *        {@link module:workbox-routing.Route|Route} class, then the return
     *        value from the `match` function in the Route constructor
     *        will be passed in as the `params` value.
     * @return {Promise.<Response>} A promise resolving with a response.
     */
    handle({
        event,
        params
    } = {}) {
        throw Error('This abstract method must be implemented in a subclass.');
    }
}

export default Handler;