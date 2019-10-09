import { buildRedirect, getPlidFromQuery, getCookie, getHost } from './tools';

export function handleVatResult(result) {
  if (result.status === 401) {
    const ssoRedirect = buildRedirect();
    window.location.assign(ssoRedirect);
    return result;
  }
  return result;

}

export function checkVat() {
  const loginInfoCookie = getCookie('info_idp');
  if (loginInfoCookie) {
    const loginInfo = JSON.parse(loginInfoCookie);
    const tokenTime = loginInfo.vat;
    const now = Math.floor(Date.now() / 1000);
    const delta = now - tokenTime;
    const fourMinsInSeconds = 60 * 4;

    if (delta >= fourMinsInSeconds) {
      const data = { infotoken: 'true', realm: 'idp' };
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
      const fetchArgs = { method: 'POST', headers: headers, body: JSON.stringify(data), credentials: 'include' };
      const host = getHost();
      return fetch(`https://sso.${host}/v1/api/token/ui_heartbeat`, fetchArgs).then((response) => {handleVatResult(response);});
    }
  }
}

export function main() {
  const loginInfoCookie = getCookie('info_idp');
  if (loginInfoCookie) {
    const loginInfo = JSON.parse(loginInfoCookie);
    const authType = loginInfo.auth;
    if (authType === 'basic') {
      const realm = loginInfo.typ;
      if (realm === 'idp') {
        let heartbeat = true;
        const { plid } = loginInfo;
        const queryPlid = getPlidFromQuery();
        if (queryPlid) {
          if (Number(plid) !== Number(queryPlid)) {
            heartbeat = false;
          }
        }
        if (heartbeat) {
          const oneMin = 60 * 1000;
          setInterval(checkVat, oneMin);
          return checkVat();
        }
      }
    }
  }
}

window.ux = window.ux || {};
/* istanbul ignore next */
if (window.ux.eldorado) {
  if (typeof (window.ux.eldorado.ready) === 'function') {
    window.ux.eldorado.ready(() => {main();});
  } else {
    main();
  }
}
