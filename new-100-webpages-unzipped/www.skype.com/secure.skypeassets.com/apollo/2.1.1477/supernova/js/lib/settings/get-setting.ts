import get from 'lodash/get';

const SETTINGS_KEY = 'SKYPE_SETTINGS';

export default function(paths: string[]) {
  return get(window, [SETTINGS_KEY, ...paths]);
}
