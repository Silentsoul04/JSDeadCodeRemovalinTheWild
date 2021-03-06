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
    isInstance
} from '../../../../lib/assert';

/**
 * Helper method to "clean" a redirected response, so that it could be used
 * to fulfill a navigation request.
 * See https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
 *
 * @private
 * @param {Object} input
 * @param {Response} input.response The original response. The body will not
 * be consumed.
 * @return {Promise<Response>} A clone of the response, with `redirected` false.
 */
export default ({
    response
}) => {
    isInstance({
        response
    }, Response);

    const clonedResponse = response.clone();

    // Not all browsers support the Response.body stream, so fall back to reading
    // the entire body into memory as a blob.
    const bodyPromise = 'body' in clonedResponse ?
        Promise.resolve(clonedResponse.body) :
        clonedResponse.blob();

    return bodyPromise.then((body) => {
        // new Response() is happy when passed either a stream or a Blob.
        return new Response(body, {
            headers: clonedResponse.headers,
            status: clonedResponse.status,
            statusText: clonedResponse.statusText,
        });
    });
};