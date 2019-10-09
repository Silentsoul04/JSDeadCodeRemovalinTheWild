// TODO Unify consts?
const WINDOWS = 'windows';
const WINDOWS_AU_UNDETECTED = 'windows_au_undetected';
const WINDOWS_AU_NONE = 'windows_au_none';
const WINDOWS_SP3 = 'windows_au';
const WINDOWS_XP = 'windows_xp';
const WINDOWS_VISTA = 'windows_vista';
const WINDOWS_7 = 'windows_7';
const WINDOWS_8 = 'windows_8';

const MAC = 'mac';
const MAC_OS_X_10_9_LOWER = 'mac_os_x_10_9_lower';
const MAC_OS_X_10_10_HIGHER = 'mac_os_x_10_10_higher';

const LINUX = 'linux';
const LINUX_DEBIAN = 'linux_debian';
const LINUX_RPM = 'linux_rpm';

const ANDROID = 'android';

const IOS = 'ios';

const BLACKBERRY = 'blackberry';

const MOBILE = 'mobile';
const DESKTOP = 'desktop';
const IPHONE = 'iphone';
const IPAD = 'ipad';
const IPOD = 'ipod';

const CHROME = 'chrome';
const SAFARI = 'safari';

function specifyMacOSVersion(agent: string): DetectableOSVersion | undefined {
  if (agent.match(/(Mac OS X 10[_|\.][0-9]([_|\.]|\D))/)) {
    return MAC_OS_X_10_9_LOWER;
  }

  if (agent.match(/(Mac OS X 10[_|\.]10)/)) {
    return MAC_OS_X_10_10_HIGHER;
  }
}

function specifyLinux(agent: string): DetectableOSVersion {
  if (agent.indexOf('Debian') !== -1 || agent.indexOf('Ubuntu') !== -1) {
    return LINUX_DEBIAN;
  } else {
    return LINUX_RPM;
  }
}

function getServicePackVersion(
  agent: string,
  browser: string
): DetectableOSVersion {
  if (browser === CHROME) {
    // Chrome detection
    const context: any = document.createElement('canvas').getContext('2d');
    context.font = '64px Segoe UI Emoji';
    const redstone1Width = context.measureText('\uD83D\uDC31\u200D\uD83D\uDC64')
      .width;
    const redstone2Width = context.measureText('\ud83d\udc68\u200d\u2695')
      .width;

    const redstone3Width = context.measureText('\uD83E\uDDDB\uD83C\uDFFB')
      .width;
    if (agent.indexOf('Windows NT') === -1) {
      return WINDOWS_AU_UNDETECTED;
    } else {
      if (redstone3Width <= 90) {
        return WINDOWS_SP3;
      } else if (redstone2Width <= 90) {
        return WINDOWS_AU_NONE;
      } else if (redstone1Width <= 90) {
        return WINDOWS_AU_NONE;
      }

      return WINDOWS_AU_NONE;
    }
  } else if (browser === 'Edge') {
    // Edge detection
    const edgeVersionRegex = new RegExp('edge/([0-9]+)', 'gi');
    const edgeVersionDetectionResult = edgeVersionRegex.exec(agent);
    let edgeVersion = 0;

    if (
      edgeVersionDetectionResult === null ||
      edgeVersionDetectionResult.length !== 2
    ) {
      return WINDOWS_AU_UNDETECTED;
    } else {
      edgeVersion = parseInt(edgeVersionDetectionResult[1], 10);

      if (edgeVersion >= 17.17) {
        return WINDOWS_SP3;
      }
      if (edgeVersion >= 15.15) {
        return WINDOWS_AU_NONE;
      } else if (edgeVersion > 13) {
        return WINDOWS_AU_NONE;
      } else {
        return WINDOWS_AU_NONE;
      }
    }
  } else {
    return WINDOWS_AU_UNDETECTED;
  }
}

function detectDevice(): DetectableDeviceType {
  const os = detectOS().os;
  if (os === WINDOWS || os === MAC || os === LINUX) {
    return DESKTOP;
  } else {
    return MOBILE;
  }
}

function detectIosType(agent: string) {
  let iosType: DetectableOSVersion = '';
  if (agent.match(/iphone/i)) {
    iosType = IPHONE;
  } else if (agent.match(/ipad/i)) {
    iosType = IPAD;
  } else if (agent.match(/ipod/i)) {
    iosType = IPOD;
  }
  return iosType;
}

function detectOS(): { os: DetectableOS; osVersion?: DetectableOSVersion } {
  const agent = navigator.userAgent;

  let os: DetectableOS = '';
  let osVersion: DetectableOSVersion | undefined = '';

  if (agent.indexOf('Android') !== -1) {
    os = ANDROID;
  } else if (agent.match(/blackberry/i)) {
    os = BLACKBERRY;
  } else if (
    agent.indexOf('iPad') !== -1 ||
    agent.indexOf('iPhone') !== -1 ||
    agent.indexOf('iPod') !== -1
  ) {
    os = IOS;
    osVersion = detectIosType(agent);
  } else if (agent.indexOf('Windows Phone') !== -1) {
    os = WINDOWS;
    osVersion = 'Windows Phone';
  } else if (agent.indexOf('Linux') !== -1 || agent.indexOf('X11') !== -1) {
    os = LINUX;
    osVersion = specifyLinux(agent);
  } else if (
    agent.indexOf('Mac OS') !== -1 ||
    agent.indexOf('Macintosh') !== -1
  ) {
    os = MAC;
    osVersion = specifyMacOSVersion(agent);
  } else if (
    agent.indexOf('Windows NT 5.0') !== -1 ||
    agent.indexOf('Windows 2000') !== -1
  ) {
    os = WINDOWS;
    osVersion = 'Windows 2000';
  } else if (
    agent.indexOf('Windows NT 4.0') !== -1 ||
    agent.indexOf('WinNT4.0') !== -1 ||
    agent.indexOf('WinNT') !== -1
  ) {
    os = WINDOWS;
    osVersion = 'Windows NT 4.0';
  } else if (
    agent.indexOf('Windows NT 5.1') !== -1 ||
    agent.indexOf('Windows XP') !== -1
  ) {
    os = WINDOWS;
    osVersion = WINDOWS_XP;
  } else if (agent.indexOf('Windows ME') !== -1) {
    os = WINDOWS;
    osVersion = 'Windows ME';
  } else if (agent.indexOf('Windows NT 5.2') !== -1) {
    os = WINDOWS;
    osVersion = 'Windows Server 2003';
  } else if (agent.indexOf('Windows NT 6.0') !== -1) {
    os = WINDOWS;
    osVersion = WINDOWS_VISTA;
  } else if (agent.indexOf('Windows NT 6.1') !== -1) {
    os = WINDOWS;
    osVersion = WINDOWS_7;
  } else if (
    agent.indexOf('Windows NT 6.2') !== -1 ||
    agent.indexOf('WOW64') !== -1
  ) {
    os = WINDOWS;
    osVersion = WINDOWS_8;
  } else if (
    agent.indexOf('Windows 10.0') !== -1 ||
    agent.indexOf('Windows NT 10.0') !== -1
  ) {
    os = WINDOWS;
    const browser = detectBrowser();
    osVersion = getServicePackVersion(agent, browser);
  } else if (
    agent.indexOf('Googlebot') !== -1 ||
    agent.indexOf('MSNBot') !== -1
  ) {
    os = 'Search bot';
  }
  return {
    os,
    osVersion,
  };
}

function detectBrowser(): DetectableBrowser {
  const agent = navigator.userAgent;
  let browser: DetectableBrowser = '';

  if (
    agent.indexOf('Chrome') !== -1 &&
    agent.indexOf('Edge') === -1 &&
    agent.indexOf('OPR') === -1 &&
    agent.indexOf('Opera') === -1
  ) {
    browser = CHROME;
  } else if (agent.indexOf('Firefox') !== -1) {
    browser = 'Firefox';
  } else if (agent.indexOf('Safari') !== -1 && agent.indexOf('Chrome') === -1) {
    browser = SAFARI;
  } else if (agent.indexOf('OPR') !== -1 || agent.indexOf('Opera') !== -1) {
    browser = 'Opera';
  } else if (agent.indexOf('Edge') !== -1) {
    browser = 'Edge';
  } else if (document.DOCUMENT_NODE || agent.indexOf('MSIE') !== -1) {
    browser = 'IE';
  }

  return browser;
}

export default {
  browser: detectBrowser(),
  device: detectDevice(),
  os: detectOS(),
};

export type DetectableBrowser =
  | 'chrome' // ??
  | 'Firefox'
  | 'safari' // ??
  | 'Opera'
  | 'Edge'
  | 'IE'
  // TODO Remove
  | '';

export type DetectableOS =
  | 'android'
  | 'windows'
  | 'blackberry'
  | 'ios'
  | 'linux'
  | 'mac'
  | 'Search bot' // ??
  // TODO Remove
  | '';

export type DetectableOSVersion =
  | 'Windows Phone'
  | 'Windows 2000'
  | 'Windows NT 4.0'
  | 'windows_xp' // ??
  | 'Windows ME'
  | 'Windows Server 2003'
  | 'windows_vista'
  | 'windows_7'
  | 'windows_8'
  | 'iphone'
  | 'ipad'
  | 'ipod'
  | 'linux_debian'
  | 'linux_rpm'
  | 'mac_os_x_10_9_lower'
  | 'mac_os_x_10_10_higher'
  | 'windows_au_undetected'
  | 'windows_au'
  | 'windows_au_none'
  // TODO Remove
  | '';

export type DetectableDeviceType = 'desktop' | 'mobile';

export type Visibility =
  | DetectableOS
  | DetectableOSVersion
  | DetectableBrowser
  | DetectableDeviceType
  | 'all';
