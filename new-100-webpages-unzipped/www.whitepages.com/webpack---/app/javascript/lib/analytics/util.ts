import memoize from 'fast-memoize';
import monster from '../monster';

// memoize the defaultValue in a cookie if shouldPersistValue is true,
// otherwise memoize a blank
function memoizedFetch(
  cookieName: string,
  defaultValue: string,
  shouldPersistValue: boolean
): string {
  const cookieValue = monster.get(cookieName);

  if (cookieValue) {
    return cookieValue;
  }

  const persistedCookieValue = shouldPersistValue ? defaultValue : '';
  monster.set(cookieName, persistedCookieValue, undefined, '/');

  return persistedCookieValue;
}

const getReferrerImpl = () => {
  let { referrer } = document;

  try {
    if (typeof sessionStorage !== 'undefined') {
      const distilReferrer = sessionStorage.getItem('distil_referrer');

      if (distilReferrer) {
        referrer = distilReferrer;
      }

      sessionStorage.removeItem('distil_referrer');
    }
  } catch (e) {
    // something bad happened, so we just return referrer
  }

  return referrer;
};

const getReferrer = memoize(getReferrerImpl);
export { getReferrer };

export function fetchInitialReferrer() {
  const referrer = getReferrer();
  const shouldPersistValue = referrer.indexOf(window.location.hostname) < 0;

  return memoizedFetch('initial_referrer', referrer, shouldPersistValue);
}

export function getReferrerHost(): string {
  let referrerHost: string;
  const referrer = getReferrer();

  if (referrer) {
    const a = document.createElement('a');
    a.href = referrer;
    referrerHost = a.hostname;
  } else {
    referrerHost = '';
  }

  return referrerHost;
}

export function fetchInitialReferringDomain() {
  const referrerHost = getReferrerHost();
  const shouldPersistValue = referrerHost.indexOf(window.location.hostname) < 0;

  return memoizedFetch(
    'initial_referring_domain',
    referrerHost,
    shouldPersistValue
  );
}

export function getCookieDomain() {
  if (
    process.env.ENABLE_411 !== 'true' &&
    (process.env.RAILS_ENV === 'production' ||
      process.env.RAILS_ENV === 'staging')
  ) {
    return 'whitepages.com';
  }

  return '';
}
