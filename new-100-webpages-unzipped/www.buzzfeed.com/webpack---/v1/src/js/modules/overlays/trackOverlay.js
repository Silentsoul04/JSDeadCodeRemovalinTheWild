import 'isomorphic-fetch';
import uuidUtil from '../uuidUtil';
import cookies from '../cookies';
import {
    SESSION_OVERLAY_COOKIE
} from '../constants';

let config;

function getEventData(type, overlay) {
    const data = {
        apiUrl: `${config.overlayTrackDomain}/v1/overlay/${type}`,
        overlay_id: overlay.overlay_id,
        target_audience: overlay.target_audience,
        visitor_id: cookies.read('sailthru_visitor'),
        sticky: !!uuidUtil.parseUuidsList(cookies.read(SESSION_OVERLAY_COOKIE))[0],
    };

    if (overlay.target_audience === 'lists') {
        data.lists = overlay.lists;
    }

    if (overlay.experiment_id) {
        data.experiment_id = overlay.experiment_id;
        data.variant_id = overlay.variant_id;
    }

    const horizonId = cookies.read('sailthru_hid');
    if (horizonId !== undefined && horizonId.length > 0) {
        data.user_id_key = 'hid';
        data.user_id_value = horizonId;
    }
    return data;
}

function trackEvent(options) {
    let data = { ...options
    };

    delete data.apiUrl;

    if (data.onSuccess) {
        delete data.onSuccess;
    }

    if (data.onError) {
        delete data.onError;
    }

    data = JSON.stringify(data);

    return fetch(options.apiUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-Lib-Version': config.VERSION,
                Authorization: `Bearer ${config.customerId}`,
            },
            body: data,
        }).then(response => response.json())
        .then((json) => {
            if (json && (json.error || json.message)) {
                throw json;
            }

            if (options.onSuccess) {
                options.onSuccess(json);
            }
        })
        .catch((json) => {
            let responseText;

            if (json && json.responseText) {
                responseText = JSON.parse(json.responseText);
                console.error(`You have the following overlay track error: ${responseText.message}`);
            }

            if (options.onError) {
                options.onError(json);
            }
        });
}

const defaultFn = (options) => {
    config = options;

    return {
        view(overlay) {
            const data = getEventData('view', overlay);
            return trackEvent(data);
        },
        conversion(overlay, email) {
            const data = getEventData('conversion', overlay);
            data.email = email;
            return trackEvent(data);
        },
        click(overlay) {
            const data = getEventData('click', overlay);
            return trackEvent(data);
        },
    };
};

export default defaultFn;



// WEBPACK FOOTER //
// ./v1/src/js/modules/overlays/trackOverlay.js