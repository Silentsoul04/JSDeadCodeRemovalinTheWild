
        var settings = {
            api: {
                "standByFor": "5000",
                "contracts": "https://api.skype.com/wallet/contracts/atu",
                "skypeNumber": "https://api.skype.com/skype-number/users/self/services?statusList=active,reserved&expand=1",
                "skypeNumberByServiceId": "https://api.skype.com/users/self/services/skypein/",
                "callerId": "https://api.skype.com/users/self/services/cli/settings?expand=smsCapable",
                "services": "https://consumer.entitlement.skype.com​​/users/{0}/services?language=en",
                "contentApiUrl": "https://contentapi.skype.com/api/v2-0/regions/",
                "buyCredit": "https://secure.skype.com/{0}/credit?currency={1}",
                "sendCredit": "https://secure.skype.com/send-credit",
                "skypeNumberSettings": "https://secure.skype.com/portal/settings/number?numberId={0}",
                "skypeNumberService": "https://secure.skype.com/my/offers/skype-number?serviceId={0}",
                "getAnotherSkypeNumber": "https://secure.skype.com/my/skype-number",
                "skypeProfileApiUrlBase": "https://edge.skype.com/profile/v1/",
                "helperApiUrlBase": "https://helperapi.skype.com/",
                "sessionApiUrl": "https://api.skype.com/users/self/displayname",
                "webClientEligibilityApiUrl": "https://web.skype.com/v1/api/eligibility-check",
                "exportContacts": "https://contacts.skype.com/export/v2/users/self/contacts",
                "autoRechargeUrl": "https://secure.skype.com/wallet/account/auto-topup",
                "userData": "https://api.skype.com/modules/groups/info",
            },
            commerce: {
                "subscriptionsUpgradeThreshold": "0.99",
            },
            token: {
                "clientId": "815617",
                "redirectUri": "https://www.skype.com/en/apps/tokenhandler?appid=scom",
                "loginUri": "https://a.lw.skype.com/login/silent",
                "cacheLength": "5000",
            },
            user: {
                "msaLoginFromBackend": true,
            },
            message: {
                "genericError": ""
            },
            errorsLogger: {
                "enabled": "true",
                "token": "28b1987bcc8c4e1a8cd8c2874c7dede4-66d03f5b-4777-4915-ba6a-f821e57b2e64-7437"
            },
            swcChat: {
                "sdkUrl": "https://swc.cdn.skype.com/sdk/v1/sdk.min.js",
                "environment": "prod",
                "chat": "true",
                "style": "scom"
            },
            fadeOnScroll: {
                "home": "true",
                "tx": ""
            },
            dropdown: {
                "promoteUrl": "http://go.skype.com/thank.you"
            },
            navigation: {
                "header": {
                    "sticky": false,
                    "showLinks": true,
                    "showButtons": false,
                    "logoutLink": "https://go.skype.com/logout?client_id=815617&redirect_uri=https://www.skype.com&response_type=token&redirect=true"
                }
            }
        };
        skypeArtemis.addSkypeSettings(settings);
    