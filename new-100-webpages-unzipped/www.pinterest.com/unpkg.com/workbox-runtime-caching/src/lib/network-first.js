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

import {
    CacheableResponsePlugin
} from '../../../workbox-cacheable-response/src/index';
import ErrorFactory from './error-factory';
import Handler from './handler';
import {
    isType,
    isInstance
} from '../../../../lib/assert';

/**
 * An implementation of a [network first](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-falling-back-to-cache)
 * request strategy.
 *
 * By default, `NetworkFirst` will cache responses with a 200 status code as
 * well as [opaque responses](http://stackoverflow.com/q/39109789)
 * (responses from cross-origin servers which don't support
 * [CORS](https://enable-cors.org/)). You can override this default by passing
 * in a `RequestWrapper` that includes an appropriately-configured
 * `CacheableResponsePlugin`.
 *
 * @example
 * // Set up a route to match any requests made for URLs that end in .txt.
 * // The requests are handled with a network-first strategy.
 * const route = new workbox.routing.RegExpRoute({
 *   regExp: /\.txt$/,
 *   handler: new workbox.runtimeCaching.NetworkFirst(),
 * });
 *
 * const router = new workbox.routing.Router();
 * router.registerRoute({route});
 *
 * @memberof module:workbox-runtime-caching
 * @extends module:workbox-runtime-caching.Handler
 */
class NetworkFirst extends Handler {
    /**
     * Constructor for a new NetworkFirst instance.
     *
     * @param {Object} input
     * @param {number} [input.networkTimeoutSeconds] If set, and a valid network
     *        response isn't returned, then the cached response
     *        will be returned instead. If there is no previously cached response,
     *        then an `null` response will be returned. This option is meant to
     *        combat "[lie-fi](https://developers.google.com/web/fundamentals/performance/poor-connectivity/#lie-fi)"
     *        scenarios.
     * @param {RequestWrapper} [input.requestWrapper] An optional `RequestWrapper`
     *        that is used to configure the cache name and request plugins. If
     *        not provided, a new `RequestWrapper` using the
     *        [default cache name](#getDefaultCacheName) will be used.
     */
    constructor(input = {}) {
        super(input);

        this._cacheablePlugin = new CacheableResponsePlugin({
            statuses: [0, 200]
        });

        const {
            networkTimeoutSeconds
        } = input;
        if (networkTimeoutSeconds) {
            isType({
                networkTimeoutSeconds
            }, 'number');
            this.networkTimeoutSeconds = networkTimeoutSeconds;
        }
    }

    /**
     * The handle method will be called by the
     * {@link module:workbox-routing.Route|Route} class when a route matches a
     * request.
     *
     * @param {Object} input
     * @param {FetchEvent} input.event The event that triggered the service
     *        worker's fetch handler.
     * @return {Promise.<Response>} The response from the network, or if that's
     *          not available, a previously cached response.
     */
    async handle({
        event
    } = {}) {
        isInstance({
            event
        }, FetchEvent);

        const promises = [];
        let timeoutId;

        if (this.networkTimeoutSeconds) {
            promises.push(new Promise((resolve) => {
                timeoutId = setTimeout(() => {
                    resolve(this.requestWrapper.match({
                        request: event.request
                    }));
                }, this.networkTimeoutSeconds * 1000);
            }));
        }

        const networkPromise = this.requestWrapper.fetchAndCache({
            request: event.request,
            waitOnCache: this.waitOnCache,
            cacheResponsePlugin: this._cacheablePlugin,
        }).then((response) => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            return response ?
                response :
                Promise.reject(ErrorFactory.createError('no-response-received'));
        }).catch(() => this.requestWrapper.match({
            request: event.request
        }));

        promises.push(networkPromise);

        return Promise.race(promises);
    }
}

export default NetworkFirst;