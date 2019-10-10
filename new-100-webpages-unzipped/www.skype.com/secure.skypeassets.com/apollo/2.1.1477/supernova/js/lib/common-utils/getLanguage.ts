import get from 'lodash/get';

const DEFAULT_LANGUAGE = 'en';

const getLanguage = () =>
  get(document, ['documentElement', 'lang'], DEFAULT_LANGUAGE);

export default getLanguage;
