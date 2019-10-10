import {
    Controller
} from 'stimulus';

export default class extends Controller {
    connect() {
        grecaptcha.render(document.getElementById('log-in-and-monitor-captcha'), {
            sitekey: process.env.RECAPTCHA_SITE_KEY
        });
    }
}