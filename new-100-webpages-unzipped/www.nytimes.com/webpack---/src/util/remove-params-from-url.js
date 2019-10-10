import getQueryString from './get-query-string';
import getCurrentUrl from './get-current-url';
import getHash from './get-hash';

/**
 * Remove parameters from url and modify url using history api.
 *
 * @return {undefined}
 */
const removeParamsFromUrl = paramsToRemove => {
    let i;
    let j;
    let newQueryString = '';
    const url = getCurrentUrl();
    const urlWithoutQuery = url.split('?')[0];
    const queryString = getQueryString(url);
    const params = queryString.replace(/^\?/, '').split('&');
    const paramsToRemoveLen = paramsToRemove.length;

    if (!window.history || !window.history.replaceState) {
        return;
    }

    for (i = 0; i < paramsToRemoveLen; i += 1) {
        for (j = params.length - 1; j >= 0; j -= 1) {
            if (
                params[j].indexOf(`${paramsToRemove[i]}=`) === 0 ||
                params[j] === paramsToRemove[i]
            ) {
                params.splice(j, 1);
                break;
            }
        }
    }

    if (params.length > 0) {
        newQueryString = `?${params.join('&')}`;
    }

    const newUrl = urlWithoutQuery + newQueryString + getHash();
    window.history.replaceState({}, '', newUrl);
};

export default removeParamsFromUrl;



// WEBPACK FOOTER //
// ./src/util/remove-params-from-url.js