import amplitude from 'amplitude-js';
import monster from '../lib/monster';
import {
  getReferrer,
  getReferrerHost,
  fetchInitialReferrer,
  fetchInitialReferringDomain,
  getCookieDomain
} from '../lib/analytics/util';

const referrer = getReferrer();
const referrerHost = getReferrerHost();
const initialReferrer = fetchInitialReferrer();
const initialReferringDomain = fetchInitialReferringDomain();
const wpPid = monster.get('wp_pid');
const cookieDomain = getCookieDomain();

amplitude
  .getInstance('premium_api')
  .init(process.env.PREMIUM_AMPLITUDE_KEY, null, {
    includeReferrer: false,
    batchEvents: true,
    eventUploadPeriodMillis: 10
  });

export default {
  setup(path, url, site, refer, pageType, testID, wpUser, userID) {
    const referringSite = site || referrerHost;
    const referringUrl = refer || referrer;

    amplitude.defaultProperties = {
      PathName: path,
      Url: url,
      ReferringSite: referringSite,
      ReferringUrl: referringUrl,
      PageType: pageType,
      TestID: testID,
      WPUser: wpUser,
      UserID: userID
    };
  },

  updateDeviceIDCookie() {
    const d = new Date();
    d.setTime(d.getTime() + 100 * 365 * 24 * 60 * 60 * 1000); // 100 years
    const expires = `expires=${d.toUTCString()}`;
    let deviceId;

    if (document.cookie.indexOf('device_id') >= 0) {
      deviceId = monster.get('device_id');
    } else {
      deviceId = amplitude.getInstance('premium_api').options.deviceId;
    }

    let deviceIdCookie = `device_id=${deviceId};${expires};path=/`;

    if (cookieDomain !== '') deviceIdCookie += `;domain=${cookieDomain}`;

    document.cookie = deviceIdCookie;
  },

  async log(eventType, customProperties = {}) {
    const properties = {
      ...amplitude.defaultProperties,
      ...customProperties
    };

    const instance = amplitude.getInstance('premium_api');
    const identify = new amplitude.Identify();

    identify.set('initial_referrer', initialReferrer);
    identify.set('initial_referring_domain', initialReferringDomain);
    identify.set('referrer', referrer);
    identify.set('referring_domain', referrerHost);
    identify.set('wp_pid', wpPid);

    //This snippet determnes whether a user is using incognito
    //Method currently only works for Chrome browsers
    //For details on the method see:
    //https://mishravikas.com/articles/2019-07/bypassing-anti-incognito-detection-google-chrome.html
    var isPrivate = false;
    if ('storage' in navigator && 'estimate' in navigator.storage) {
      const { usage, quota } = await navigator.storage.estimate();
      if (quota && quota < 120000000) {
        isPrivate = true;
      }
    }
    identify.set('private_browser', isPrivate);

    if (amplitude.defaultProperties.TestID !== undefined) {
      identify.set('UserTestID', amplitude.defaultProperties.TestID);
    }

    if (amplitude.defaultProperties.UserID !== undefined) {
      instance.setUserId(amplitude.defaultProperties.UserID);
    }

    instance.identify(identify);
    instance.logEvent(eventType, properties);
  },

  logSEM(properties) {
    const identify = new amplitude.Identify();

    for (const key in properties) {
      identify.set(key, properties[key]);
    }

    amplitude.getInstance('premium_api').identify(identify);
  }
};
