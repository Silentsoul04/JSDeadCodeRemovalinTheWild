import { Controller } from 'stimulus';
import AgeSlider from '../lib/person_railcar/age_slider';

export default class extends Controller {
  public static targets = ['submit', 'ageRangeSlider', 'minAge', 'maxAge'];

  public submitTarget: HTMLAnchorElement;
  public ageRangeSliderTarget: Element;
  public minAgeTarget: Element;
  public maxAgeTarget: Element;

  public connect() {
    this.startAgeRangeSlider();
  }

  public startAgeRangeSlider() {
    const slider = new AgeSlider(
      $(`#${this.ageRangeSliderTarget.id}`),
      20,
      60,
      10
    );
    slider.setValues(this.minAge, this.maxAge);
    slider.onChange((min, max) => {
      this.minAgeTarget.innerHTML = min === 20 ? '18' : min.toString();
      this.maxAgeTarget.innerHTML = max.toString() + (max === 60 ? '+' : '');
      this.submitTarget.classList.remove('hide');
    });
  }

  public submit() {
    const currentLinkHref = window.location.href;
    const paramsStartPosition = currentLinkHref.indexOf('?');
    const paramsObject: { [key: string]: any } = {};
    let baseURL;

    if (paramsStartPosition === -1) {
      baseURL = currentLinkHref;
    } else {
      const splitUrl = currentLinkHref.split('?', 2);

      baseURL = splitUrl[0];
      const urlParams = splitUrl[1];

      const paramsArray = urlParams.split('&');

      paramsArray.forEach(param => {
        const [key, val] = param.split('=', 2);
        paramsObject[key] = val;
      });
    }

    const ageRange = $(`#${this.ageRangeSliderTarget.id}`)
      .data('wpslider')
      .getValues();

    let minAge = ageRange[0];
    const maxAge = ageRange[1];

    if (minAge === 20) {
      minAge = 18;
    }

    if (minAge >= 18) {
      paramsObject.min_age = minAge;
    }

    if (maxAge <= 60) {
      paramsObject.max_age = maxAge;
    }

    const facetList: string[] = [];

    Object.entries(paramsObject).forEach(([param, value]) => {
      facetList.push(`${param}=${value}`);
    });

    let newURL;
    if (facetList.length > 0) {
      const facetPath = `?${facetList.join('&')}`;
      newURL = baseURL + facetPath;
    } else {
      newURL = baseURL;
    }

    this.submitTarget.href = newURL;
  }

  get maxAge() {
    return parseInt(this.data.get('maxAge') || '18', 10);
  }

  get minAge() {
    return parseInt(this.data.get('minAge') || '60', 10);
  }
}
