import queryString from 'query-string';
import { snakeObjectFromParameters } from '../src/util';
import ApplicationController from './application_controller';
import { valueOrEmptyString } from './helpers';

const ENDEMIC_PARAMETERS = [
  'url',
  'city',
  'firstName',
  'middleName',
  'lastName',
  'locSearch',
  'nameSearch',
  'referredBg',
  'searchBot',
  'stateCode',
  'mobileSpeedbumps',
  'testId'
];

export default class extends ApplicationController {
  public static targets = [
    'panels',
    'premiumResults',
    'skeletons',
    'marketingAd',
    'endemicResults',
    'testimonial'
  ];

  public panelsTarget: Element;
  public hasPanelsTarget: boolean;
  public premiumResultsTarget: Element;
  public hasPremiumResultsTarget: boolean;
  public endemicResultsTarget: HTMLElement;

  public skeletonsTarget: Element;
  public marketingAdTarget: Element;
  public testimonialTarget: HTMLElement;
  public hasMarketingAdTarget: boolean;
  public hasSkeletonsTarget: boolean;
  public hasEndemicResultsTarget: boolean;

  public connect() {
    if (this.hasPanelsTarget || this.hasPremiumResultsTarget) {
      this.loadEndemics();
    }
  }

  get endemicData() {
    return ENDEMIC_PARAMETERS.map(param => this.data.get(param));
  }

  get endemicParameters() {
    return snakeObjectFromParameters(ENDEMIC_PARAMETERS, this.endemicData);
  }

  private loadEndemics() {
    const url = `${this.data.get('url')}?${queryString.stringify(
      this.endemicParameters
    )}`;

    this.getJSON(url).then(endemicContent => {
      if (this.hasPanelsTarget) {
        this.panelsTarget.innerHTML = [
          valueOrEmptyString(endemicContent.ep1),
          valueOrEmptyString(endemicContent.ep2),
          valueOrEmptyString(endemicContent.ep3)
        ].join(' ');
      }

      if (this.hasPremiumResultsTarget) {
        this.premiumResultsTarget.innerHTML = valueOrEmptyString(
          endemicContent.sb
        );
      }

      if (this.hasSkeletonsTarget) this.replaceSkeletons();
    });
  }

  private replaceSkeletons() {
    if (
      !this.hasEndemicResultsTarget ||
      this.endemicResultsTarget.childElementCount == 0
    ) {
      if (this.hasMarketingAdTarget)
        this.marketingAdTarget.classList.remove('hide');
      this.testimonialTarget.classList.remove('hide');
    } else if (
      this.endemicResultsTarget.childElementCount == 1 &&
      this.hasMarketingAdTarget
    ) {
      this.marketingAdTarget.classList.remove('hide');
    }

    this.skeletonsTarget.classList.add('hide');
  }
}
