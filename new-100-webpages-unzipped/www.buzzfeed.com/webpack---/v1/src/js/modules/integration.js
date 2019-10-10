import 'isomorphic-fetch';
import cookies from './cookies';

export default (config) => {
    function hasId(id) {
        if (typeof id === 'string') {
            return true;
        }

        if (typeof id === 'object' && typeof id.key === 'string') {
            if (typeof id.id === 'string' || typeof id.id === 'number') {
                return true;
            }
        }
        return false;
    }

    function addSourceToVars(rawIntegrationData) {
        const integrationData = { ...rawIntegrationData
        };
        if (typeof integrationData.source !== 'undefined') {
            integrationData.vars = integrationData.vars || {};
            integrationData.vars.source = integrationData.source;
            delete integrationData.source;
        }

        return integrationData;
    }

    function addOrUpdateData(integrationConfig, method) {
        const integrationData = { ...integrationConfig
        };
        delete integrationData.apiUrl;

        const fetchData = {
            method: method || 'POST',
            credentials: 'same-origin',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-Lib-Version': config.VERSION,
                Authorization: `Bearer ${config.customerId}`,
            },
        };

        if (fetchData.method === 'POST') {
            fetchData.body = JSON.stringify(integrationData);
        }

        return fetch(integrationConfig.apiUrl, fetchData)
            .then(response => response.json()).then((json) => {
                if (json && (json.message || json.error)) {
                    throw json;
                } else if (typeof integrationConfig.onSuccess === 'function') {
                    integrationConfig.onSuccess(json);
                }
            }).catch((response) => {
                if (typeof integrationConfig.onError === 'function') {
                    integrationConfig.onError(response);
                } else if (response && response.message) {
                    console.error(`You have the following error: ${response.error || response.message}`);
                }
            });
    }

    function hasValidIdAndKey(id) {
        return typeof id === 'object' && typeof id.key === 'string' && (typeof id.id === 'string' || typeof id.id === 'number');
    }

    function processId(id) {
        let sailthruHid;
        if (typeof id === 'string') {
            return {
                id,
                key: 'email'
            };
        } else if (typeof id === 'object' && hasValidIdAndKey(id)) {
            return id;
        } else if (sailthruHid = cookies.read('sailthru_hid')) {
            return {
                id: sailthruHid,
                key: 'cookie'
            };
        }
        return {
            id: undefined,
            key: undefined
        };
    }

    return {
        getCurrentUser(integrationOptions) {
            const domainAndPath = `${config.trackDomain}/v1/track/user?`;
            const hid = cookies.read('sailthru_hid');
            if (hid) {
                const params = [];
                params.push('user_id_key=hid');
                if (integrationOptions.hash) {
                    params.push(`hash=${integrationOptions.hash}`);
                }
                params.push(`user_id_value=${hid}`);

                const apiUrl = domainAndPath + params.join('&');
                const integrationData = addSourceToVars({
                    ...integrationOptions,
                    apiUrl,
                });
                return addOrUpdateData(integrationData, 'GET');
            }
            console.error('Please make sure the sailthru_hid cookie is set.');
            return false;
        },

        userSignUp(email, integrationOptions) {
            const apiUrl = `${config.trackDomain}/v1/track/user/signup`;
            const hasEmail = typeof email === 'string';
            const hasListOrVar = (typeof integrationOptions.lists !== 'undefined' && integrationOptions.lists) ||
                (typeof integrationOptions.vars !== 'undefined' && integrationOptions.vars) ||
                (typeof integrationOptions.source !== 'undefined' && integrationOptions.source);

            function onUserSignupSuccess(response) {
                if (response && response.sailthruHid) {
                    cookies.setSailthruHid(response.sailthruHid);
                }
                if (typeof(integrationOptions.onSuccess) === 'function') {
                    return integrationOptions.onSuccess(this, response);
                }
            }
            const integrationData = addSourceToVars({
                ...integrationOptions,
                email,
                apiUrl,
                onSuccess: onUserSignupSuccess,
            });

            if (!cookies.read('sailthru_hid')) {
                integrationData.content = cookies.read('sailthru_content');
            }

            if (hasEmail && hasListOrVar) {
                return addOrUpdateData(integrationData);
            }
            console.error('Please make sure to include an email plus a lists or a vars option.', integrationData);
            return false;
        },

        userSignUpConfirmedOptIn(idAndKey, integrationOptions) {
            const apiUrl = `${config.trackDomain}/v1/track/user/signup`;
            const hasTemplate =
                (typeof integrationOptions !== 'undefined') &&
                (typeof integrationOptions.template !== 'undefined') &&
                (typeof integrationOptions.template.name !== 'undefined');

            if (!hasTemplate || !hasValidIdAndKey(idAndKey)) {
                console.error('Please make sure that the integration options include a template and id/key pair: ', integrationOptions);
                return false;
            }
            const integrationData = addSourceToVars({
                ...integrationOptions,
                id: idAndKey.id,
                key: idAndKey.key || 'email',
                apiUrl,
            });
            if (!cookies.read('sailthru_hid')) {
                integrationData.content = cookies.read('sailthru_content');
            }
            return addOrUpdateData(integrationData);
        },

        addToCart(id, integrationOptions) {
            const apiUrl = `${config.trackDomain}/v1/track/addToCart`;

            const hasSKUOrURL = integrationOptions && integrationOptions.items && integrationOptions.items.filter(item => (
                typeof item.sku !== 'undefined' || typeof item.url !== 'undefined'
            )).length > 0;

            const isEmptyCart = integrationOptions && integrationOptions.items && integrationOptions.items.length === 0;

            // id = processId(id);
            const integrationData = {
                ...processId(id),
                ...integrationOptions,
                apiUrl,
            };

            if (integrationData.id && (hasSKUOrURL || isEmptyCart)) {
                return addOrUpdateData(integrationData);
            }

            console.error('Please make sure to include an id and key plus an items sku or items url option.', integrationData);
            return false;
        },

        purchase(id, integrationOptions) {
            const apiUrl = `${config.trackDomain}/v1/track/purchase`;

            const hasSKUOrURL = integrationOptions && integrationOptions.items && integrationOptions.items.filter(item => (
                typeof item.sku !== 'undefined' || typeof item.url !== 'undefined'
            )).length > 0;

            const isEmptyCart = integrationOptions && integrationOptions.incomplete && integrationOptions.items && integrationOptions.items.length === 0;

            const messageId = cookies.read('sailthru_bid');
            const sailthruPc = cookies.read('sailthru_pc');

            id = processId(id);

            const integrationData = {
                ...id,
                ...integrationOptions,
                apiUrl,
            };

            if (messageId) {
                integrationData.message_id = messageId;
            }

            if (sailthruPc) {
                integrationData.cookies = {
                    sailthru_pc: sailthruPc,
                };
            }

            if (integrationData.id && (hasSKUOrURL || isEmptyCart)) {
                return addOrUpdateData(integrationData);
            }

            console.error('Please make sure to include an id and key plus an items sku or items url option.', integrationData);
            return false;
        },

        customEvent(name, id, integrationOptions) {
            const apiUrl = `${config.trackDomain}/v1/track/event/custom`;
            const hasEvent = typeof name === 'string';

            id = processId(id);

            const integrationData = {
                ...id,
                ...integrationOptions,
                apiUrl,
                event: name || undefined,
                vars: integrationOptions.vars || undefined,
            };

            if (integrationData.id && hasEvent) {
                return addOrUpdateData(integrationData);
            }

            console.error('Please make sure to include a custom event name and id.', integrationData);
            return false;
        },
    };
};



// WEBPACK FOOTER //
// ./v1/src/js/modules/integration.js