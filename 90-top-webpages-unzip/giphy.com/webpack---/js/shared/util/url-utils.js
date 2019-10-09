import { isArray as _isArray, intersection as _intersection, last as _last } from 'lodash'
import url from 'url'

const mimeTypeExtensions = {
    'image/*': ['.gif', '.jpeg', '.jpg', '.png'],
    'image/gif': ['.gif'],
    'image/jpeg': ['.jpeg', '.jpg'],
    'image/png': ['.png'],
    'video/*': ['.mpeg', '.mp4', '.mov'],
    'video/mpg': ['.mpeg'],
    'video/mpeg': ['.mpeg'],
    'video/mp4': ['.mp4'],
    'video/mov': ['.mov'],
    'video/quicktime': ['.mov'],
}

const urlRE = RegExp(
    //
    // Regular Expression for URL validation
    //
    // Author: Diego Perini
    // Updated: 2010/12/05
    // License: MIT
    //
    // Copyright (c) 2010-2013 Diego Perini (http://www.iport.it)
    //
    // Permission is hereby granted, free of charge, to any person
    // obtaining a copy of this software and associated documentation
    // files (the "Software"), to deal in the Software without
    // restriction, including without limitation the rights to use,
    // copy, modify, merge, publish, distribute, sublicense, and/or sell
    // copies of the Software, and to permit persons to whom the
    // Software is furnished to do so, subject to the following
    // conditions:
    //
    // The above copyright notice and this permission notice shall be
    // included in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    // EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    // OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    // NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    // HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    // WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    // FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    // OTHER DEALINGS IN THE SOFTWARE.
    //
    '^' +
        '(' +
        // protocol identifier
        '(?:(?:https?:)?//)?' +
        // user:pass authentication
        '(?:\\S+(?::\\S*)?@)?' +
        '(?:' +
        // IP address exclusion
        // private & local networks
        '(?!(?:10|127)(?:\\.\\d{1,3}){3})' +
        '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})' +
        '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})' +
        // IP address dotted notation octets
        // excludes loopback network 0.0.0.0
        // excludes reserved space >= 224.0.0.0
        // excludes network & broacast addresses
        // (first & last IP address of each class)
        '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' +
        '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' +
        '(?:\\.(?:1\\d\\d|2[0-4]\\d|25[0-4]|[1-9]\\d?))' +
        '|' +
        // host name
        '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)' +
        // domain name
        '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*' +
        // TLD identifier
        '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
        // TLD may end with dot
        '\\.?' +
        ')' +
        // port number
        '(?::\\d{2,5})?' +
        // resource path
        '(?:[/?#][^\\s\\?#]*)?' +
        ')' +
        '(?:\\?{0,1})' +
        '(?:\\S*)?' +
        '$',
    'i',
)

export const removeAllQueryParams = link => {
    const parsed = url.parse(link)
    delete parsed.search
    return url.format(parsed)
}

export const removeQueryParam = (link, param) => {
    const parsed = url.parse(link, true)
    delete parsed.query[param]
    delete parsed.search
    return url.format(parsed)
}

export default {
    removeAllQueryParams,
    removeQueryParam,
    /**
     * Verfies whether or not a string is a valid url.
     *
     * @param {String} url Url to validate.
     * @return {Object} Parsed url info.
     * Returns null if url is not valid.
     */
    validate: function(url) {
        return urlRE.exec(url)
    },

    /**
     * Verifies that a url string ends with a list of provided extensions.
     *
     * @param {String} url Url string to validate.
     * @param {Array} extensions List of extensions to check against.
     * @return {Boolean} Whether or not the url ends with the extensions.
     */
    endsWith: function(url, extensions) {
        if (!url || !extensions) return false

        let isValid = false

        url = this.validate(url)
        extensions = _isArray(extensions) ? extensions : [extensions]

        if (url && url.length > 1) {
            let extension = '.' + _last(url[1].split('.'))

            for (let i = 0; i < extensions.length; i++) {
                if (extensions[i] === extension) {
                    isValid = true
                }
            }
        }

        return isValid
    },

    /**
     * Returns what media type a url is. If no media format
     * is found, this function will return 'url'.
     *
     * @param {String} url Url to check.
     * @return {String} Url type. (image, video, url)
     */
    mediaType: function(url) {
        let imageExtensions = mimeTypeExtensions['image/*']
        let videoExtensions = mimeTypeExtensions['video/*']

        if (this.endsWith(url, imageExtensions)) {
            return 'image'
        } else if (this.endsWith(url, videoExtensions)) {
            return 'video'
        } else {
            return 'url'
        }
    },

    /**
     * Checks if a specific mime type matches an extension string.
     *
     * @param {String} mimeType Mime type string.
     * @param {String} extension File extension string.
     * @example
     *     let tuce = validateExtensionByMimeType('image/gif', '.gif') // returns true
     *     let ter = validateExtensionByMimeType('image/gif', '.mov') // returns false
     */
    validateExtensionByMimeType: function(mimeType, extension) {
        if (!mimeType || !extension) return false

        let mimeExtensions = mimeTypeExtensions[mimeType]

        extension = _isArray(extension) ? extension : [extension]

        return !!(mimeExtensions && _intersection(mimeExtensions, extension).length)
    },
}
