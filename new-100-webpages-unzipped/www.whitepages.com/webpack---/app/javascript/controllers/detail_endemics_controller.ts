import queryString from 'query-string';
import * as R from 'ramda';
import { snakeObjectFromParameters } from '../src/util';
import ApplicationController from './application_controller';
import { valueOrEmptyString } from './helpers';

const TARGET_ATTRIBUTE_MAP = {
  address: 'tla',
  background: 'pbg',
  backgroundList: 'pbgl',
  contact: 'pcn',
  relatives: 'tlr',
  contactList: 'pcnl',
  leftCta: 'lta',
  leftToast: 'lt',
  phone: 'tlp',
  phoneObfuscated: 'tlpo',
  premiumPhoneAd: 'premium_background_ad',
  monitoringSwitch: 'ms',
  signUpNoPwdModal: 'sunpm',
  signInModal: 'sim',
  stopMonitoringModal: 'smm'
};

const TARGET_ATTRIBUTE_LOOKUP = R.invertObj(TARGET_ATTRIBUTE_MAP);

const ENDEMIC_PARAMETERS = [
  'address',
  'city',
  'deviceId',
  'firstName',
  'fullLocation',
  'hasPhone',
  'lastName',
  'stateCode',
  'middleName',
  'mobile',
  'name',
  'pageSource', // phone endemics
  'personLocation', // phone endemics
  'phoneNumber', // phhone endemics
  'relativesTest',
  'recordId',
  'term', // phone endemics
  'wpsid',
  'testId',
  'subscribed'
];
export default class extends ApplicationController {
  public static targets = Object.keys(TARGET_ATTRIBUTE_MAP).concat(['url']);

  public connect() {
    this.loadEndemics();
  }

  get endemicData() {
    return ENDEMIC_PARAMETERS.map(param => this.data.get(param));
  }

  get endemicParameters() {
    return snakeObjectFromParameters(ENDEMIC_PARAMETERS, this.endemicData);
  }

  private replaceWithEndemicContent(endemicContent) {
    Object.entries<string>(endemicContent).forEach(([key, content]) => {
      this.targets
        .findAll(TARGET_ATTRIBUTE_LOOKUP[key])
        .forEach(element => (element.innerHTML = valueOrEmptyString(content)));
    });
  }

  private loadEndemics() {
    const url = `${this.data.get('url')}?${queryString.stringify(
      this.endemicParameters
    )}`;

    this.getJSON(url).then(endemicContent =>
      this.replaceWithEndemicContent(endemicContent)
    );
  }
}
