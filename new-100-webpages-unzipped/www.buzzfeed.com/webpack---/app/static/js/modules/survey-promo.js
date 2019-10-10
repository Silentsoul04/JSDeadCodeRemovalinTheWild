// OOGROWTH-340
import {
    Application
} from 't3js';
import cookies from '@buzzfeed/buzzblocks/js/services/cookies';
class SurveyPromo {
    constructor(ctx) {
        /** @type HTMLElement */
        this.element = ctx.getElement();
    }
    init() {
        // only show in the US
        // TODO: make country code a param
        this.geoCookie = cookies.get('bf-geo-country');
        if (this.geoCookie && this.geoCookie === 'US') {
            this.element.classList.remove('xs-hide');
        }
    }
}
Application.addModule('survey-promo', ctx => new SurveyPromo(ctx));