import {
    setCookie,
    getCookieValue
} from '@exp/exp-utils/helper/cookie';
import {
    stringify
} from '@exp/exp-utils/helper/object';
import {
    createGuid
} from '@exp/exp-utils/helper/guid';
import VisitHelper from '@tcc/shared/src/helpers/visitHelper';

class VisitHelperTcc extends VisitHelper {

    getVisitInfo() {
        let visitorGuid = getCookieValue('visitor', 'vid');
        let visitGuid = getCookieValue('fb_sessiontraffic', 'pathway');

        if (!visitGuid) {
            visitGuid = createGuid();

            // Do not set S_TOUCH or V_DATE with client side timestamps
            // Traffic server will populate server-side timestamps if null or
            // empty...pc must be set to '0' or V_DATE does not populate...
            const fbSessionTraffic = {
                S_TOUCH: '',
                pathway: visitGuid,
                V_DATE: '',
                pc: '0'
            };

            const fbSessionCookieVal = stringify(fbSessionTraffic, '&', '=');
            setCookie('pathway', visitGuid, 20, '/');
            setCookie('fb_sessiontraffic', fbSessionCookieVal, 20, '/');
        }
        if (!visitorGuid) {
            visitorGuid = visitGuid;

            const cookieVal = `vid=${visitorGuid}`;
            setCookie('visitor', cookieVal, 525600, '/');
        }
        return {
            visitorGuid,
            visitGuid
        };
    }
}

module.exports = VisitHelperTcc;