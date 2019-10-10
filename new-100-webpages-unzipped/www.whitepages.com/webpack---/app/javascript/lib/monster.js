/*\
|*|
|*|  :: cookies.js ::
|*|
|*|  A complete cookies reader/writer framework with full unicode support.
|*|
|*|  Revision #1 - September 4, 2014
|*|
|*|  https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
|*|  https://developer.mozilla.org/User:fusionchess
|*|
|*|  This framework is released under the GNU Public License, version 3 or later.
|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|
|*|  Syntaxes:
|*|
|*|  * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
|*|  * docCookies.getItem(name)
|*|  * docCookies.removeItem(name[, path[, domain]])
|*|  * docCookies.hasItem(name)
|*|  * docCookies.keys()
|*|
\*/

var docCookies = {
    getItem: function(sKey) {
        if (!sKey) {
            return null;
        }
        return (
            decodeURIComponent(
                document.cookie.replace(
                    new RegExp(
                        '(?:(?:^|.*;)\\s*' +
                        encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') +
                        '\\s*\\=\\s*([^;]*).*$)|^.*$'
                    ),
                    '$1'
                )
            ) || null
        );
    },
    setItem: function(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
            return false;
        }
        var sExpires = '';
        if (vEnd) {
            switch (vEnd.constructor) {
                case Number:
                    sExpires =
                        vEnd === Infinity ?
                        '; expires=Fri, 31 Dec 9999 23:59:59 GMT' :
                        '; max-age=' + vEnd;
                    break;
                case String:
                    sExpires = '; expires=' + vEnd;
                    break;
                case Date:
                    sExpires = '; expires=' + vEnd.toUTCString();
                    break;
            }
        }
        document.cookie =
            encodeURIComponent(sKey) +
            '=' +
            encodeURIComponent(sValue) +
            sExpires +
            (sDomain ? '; domain=' + sDomain : '') +
            (sPath ? '; path=' + sPath : '') +
            (bSecure ? '; secure' : '');
        return true;
    },
    removeItem: function(sKey, sPath, sDomain) {
        if (!this.hasItem(sKey)) {
            return false;
        }
        document.cookie =
            encodeURIComponent(sKey) +
            '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' +
            (sDomain ? '; domain=' + sDomain : '') +
            (sPath ? '; path=' + sPath : '');
        return true;
    },
    hasItem: function(sKey) {
        if (!sKey) {
            return false;
        }
        return new RegExp(
            '(?:^|;\\s*)' +
            encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') +
            '\\s*\\='
        ).test(document.cookie);
    },
    keys: function() {
        var aKeys = document.cookie
            .replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '')
            .split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
            aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
        }
        return aKeys;
    }
};

// Stub to continue support for cookie monster
export default {
    set: function(name, value, days, path, domain, escape_val) {
        var value =
            typeof value === 'object' ? JSON.stringify({
                v: value
            }) : value,
            end = days ? days * 24 * 60 * 60 : undefined;
        docCookies.setItem(name, value, end, path, domain);
    },
    get: function(name) {
        var value = docCookies.getItem(name);
        if (value && value.substring(0, 1) === '{') {
            try {
                var parsed = JSON.parse(value);
                if ('v' in parsed) return parsed.v;
            } catch (e) {
                return value;
            }
        }
        return value;
    },
    remove: function(name) {
        docCookies.removeItem(name);
    },
    increment: function(name, days, path) {
        monster.set(name, parseInt(monster.get(name)) + 1, days, path);
    }
};