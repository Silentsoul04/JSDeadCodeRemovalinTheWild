export function getValueFromQuery(key) {
    let queryString = window.location.search;
    if (queryString[0] === '?') {
        queryString = queryString.substring(1);
    }
    const query = queryString.split('&');
    let i;
    for (i = 0; i < query.length; i += 1) {
        const keyval = query[i].split('=');
        if (keyval[0] === key) {
            return keyval[1];
        }
    }
    return '';
}

export function getPlidFromQuery() {
    return getValueFromQuery('plid');
}

export function getSubdomain() {
    const {
        hostname
    } = window.location;
    const topHost = getHost();
    return hostname.replace(`.${topHost}`, '');
}

export function getHost() {
    return window.location.hostname.split('.').slice(-2).join('.');
}

export function getPath() {
    return encodeURIComponent(window.location.pathname + window.location.search);
}

export function getPort() {
    return window.location.port;
}

export function buildRedirect() {
    const app = getSubdomain();
    const host = getHost();
    const path = getPath();
    const port = getPort();
    const plid = window.ux.data.privateLabelId;
    let ssoUrl = `https://sso.${host}/logout?realm=idp&app=${app}&path=${path}&to_generic=true`;
    if (port) {
        ssoUrl += `&port=${port}`;
    }
    if (plid !== 1) {
        ssoUrl += `&plid=${plid}`;
    }
    return ssoUrl;
}

export function getCookie(name) {
    const cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        const cookieObj = cookieArray[i].split('=');
        const key = cookieObj[0].trim();
        if (key === name) {
            return decodeURIComponent(cookieObj[1]);
        }
    }
    return '';
}