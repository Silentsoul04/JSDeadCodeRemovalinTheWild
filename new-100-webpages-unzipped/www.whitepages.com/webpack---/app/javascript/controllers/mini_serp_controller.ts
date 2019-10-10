import queryString from 'query-string';
import { snakeObjectFromParameters } from '../src/util';
import ApplicationController from './application_controller';
import { valueOrEmptyString } from './helpers';

const MINI_SERP_PARAMETERS = [
  'firstName',
  'lastName',
  'location',
  'rawName',
  'shortId'
];

export default class extends ApplicationController {
  public connect() {
    this.loadMiniSerp();
  }

  get miniSerpData() {
    return MINI_SERP_PARAMETERS.map(param => this.data.get(param));
  }

  get miniSerpParameters() {
    return snakeObjectFromParameters(MINI_SERP_PARAMETERS, this.miniSerpData);
  }

  private loadMiniSerp() {
    const url = `/name/mini_serp.json?${queryString.stringify(
      this.miniSerpParameters
    )}`;

    this.getJSON(url).then(endemicContent => {
      this.element.innerHTML = valueOrEmptyString(endemicContent.serp);
    });
  }
}
