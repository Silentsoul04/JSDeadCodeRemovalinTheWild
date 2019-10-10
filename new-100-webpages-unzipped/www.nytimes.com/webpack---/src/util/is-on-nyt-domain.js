import inIframe from './in-iframe';
import getReferrer from './get-referrer';
import getParentHostname from './get-parent-hostname';

const isOnNytDomain = () => {
    const referrer = getReferrer();
    let hostname;

    // if in iframe, check referrer
    if (inIframe() && referrer && referrer.indexOf('.nytimes.com') === -1) {
        return false;
    }

    // use hostname lookup
    if (!inIframe()) {
        hostname = getParentHostname();

        if (hostname.indexOf('.nytimes.com') === -1) {
            return false;
        }
    }

    return true;
};

export default isOnNytDomain;



// WEBPACK FOOTER //
// ./src/util/is-on-nyt-domain.js