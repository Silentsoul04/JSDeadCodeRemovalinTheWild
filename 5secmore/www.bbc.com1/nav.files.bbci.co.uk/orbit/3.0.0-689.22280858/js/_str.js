/** @lint */

define('orb/lib/_str', function(undefined) {
    'use strict';

    /**
     * @module orb/lib/_str.js
     */
    var exports = {
        /**
            Make the given string HTML safe.
            @param {subjecting} subject - String with characters like & and <.
         */
        htmlEntities: function(subject) {
            return subject.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        },

        /**
            Trim a string to the given length, counting embedded HTML tags as zero-width
            characters and HTML entities as single-width characters.
            @param {subjecting} subject - String, possibly with HTML tags and entities embedded.
            @param {number} limit - Trimming any characters after this length.
         */
        trimHtml: function(subject, limit) {
            var trimmed = '',
                length = 0;

            subject.replace(/(<.+?>|&.+?;|[^<&]+)/g, function(chunk) {
                switch (chunk.charAt(0)) {
                    case '<':
                        chunk = (length >= limit && /\/>/.test(chunk)) ? '' : chunk;
                        length += 0;
                        break;
                    case '&':
                        chunk = (length >= limit) ? '' : chunk;
                        length += 1;
                        break;
                    default:
                        chunk = chunk.substr(0, limit - length);
                        length += chunk.length;
                        break;
                }

                trimmed += chunk;
            });

            // clean-up: remove empty tag pairs and trailing whitespace
            trimmed = trimmed
                .replace(/\s+(<[^>]+>)$/, '$1')
                .replace(/<(\w+)><\/\1>/g, '')
                .replace(/\s+$/, '');

            // add ellipsis to indicate some characters have been trimmed
            trimmed += (subject !== trimmed) ? '&hellip;' : '';

            return trimmed;
        }
    };

    return exports;
});