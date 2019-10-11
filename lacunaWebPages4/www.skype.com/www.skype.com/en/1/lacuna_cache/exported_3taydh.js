
        var SNWS = {};
        var supernovaData = {
            content: []
        };
        SNWS.gAlert = {
            closeBtnAria: "Close Alert",
            closeBtnTracking: {
                name: "close-alert",
            }
        };
        SNWS.usrBdg = {
            type: "UserBadge",
            properties: {
                editProfileUrl: "https://secure.skype.com/portal/profile",
                editProfileText: "Edit profile",
                changePasswordUrl: "https://secure.skype.com/account/personal/change-password",
                changePasswordText: "Change password",
                editProfileTracking: {
                    name: "edit-profile"
                },
                changePasswordTracking: {
                    name: "change-password"
                }
            }
        };
        SNWS.subsBanner = {
            type: 'Row',
            classes: 'supernova-border-radius no-left-top paddingHorizontal4 paddingVertical4 home-subscription-promo',
            content: [{
                type: 'Column',
                classes: 'supernova-vertical-center',
                width: '1/2',
                content: [{
                    type: 'Text',
                    classes: 'fontSizeH2',
                    properties: {
                        size: 'h1',
                    },
                    value: 'Skype to Phone Subscriptions',
                }, {
                    type: 'Text',
                    classes: 'marginBottom1 marginBottom1Desktop',
                    value: 'Call friends, family and colleagues on their phone, anywhere in the word at Skype&#39;s great rates.',
                }, {
                    type: 'Button',
                    value: 'Search subscriptions',
                    classes: 'marginTop3',
                    properties: {
                        buttonType: 'primary',
                        withLink: true,
                        link: 'https://secure.skype.com/my/rates/international-calls',
                        tracking: {
                            name: 'home-skype-subscriptions-search',
                        },
                    },
                }, ],
            }, {
                type: 'Column',
                classes: 'supernova-vertical-center home-subscription-col-device',
                width: '1/2',
                content: [{
                    type: 'Device',
                    classes: 'home-subscription-device',
                    properties: {
                        maxWidth: 400,
                        deviceType: 'android',
                        imageUrl: 'https://secure.skypeassets.com/content/dam/scom/signedin/skype-subscription.jpg',
                    },
                }, ],
            }, ],
        };
        SNWS.subs = {
            type: 'Subscriptions',
            defaultContent: [SNWS.subsBanner],
            properties: {
                title: {
                    classes: 'fontSizeH3',
                    properties: {
                        size: 'h1'
                    },
                    value: 'Skype to Phone subscriptions',
                },
                manage: {
                    value: 'Manage',
                    manageUrl: 'https://secure.skype.com/portal/settings/package?planId={0}',
                    tracking: {
                        name: 'home-skype-subscriptions-manage',
                        area: 'Subscriptions',
                    },
                },
                upgrade: {
                    value: 'Upgrade',
                    upgradeUrl: 'https://secure.skype.com/wallet/services/check?act=upgrade&currency={0}&item={1}',
                    tracking: {
                        name: 'home-skype-subscriptions-upgrade',
                        area: 'Subscriptions',
                    },
                },
                more: {
                    valueMore: 'Show more',
                    valueLess: 'Show less',
                    tracking: {
                        name: 'skype-subscriptions-show-more',
                    },
                },
                discover: {
                    value: 'Discover more subscriptions',
                    discoverUrl: 'https://secure.skype.com/{0}/calling-rates',
                    tracking: {
                        name: 'home-skype-subscriptions-discover',
                    },
                },
                expiresText: 'Expires on {DATE}',
                minsLeftTexts: '{MINUTES} min left',
                unlimitedText: 'Unlimited',
            },
        };
        SNWS.credit = {
            type: 'SkypeCredits',
            properties: {
                autoRechargeButtonTracking: {
                    name: 'home-skype-credit-auto-recharge',
                },
                autoRechargeText: {
                    enabled: 'Auto-recharge disabled. Enable Auto-recharge and never worry about your credit balance.',
                    disabled: 'Auto-recharge enabled. Disable auto-recharge on Skype Settings.',
                },
                buttonBuyCreditText: 'Add Skype Credit',
                buttonBuyCreditTracking: {
                    name: 'home-skype-credit-buy',
                },
                balanceTracking: {
                    name: 'home-skype-credit-balance',
                },
                buttonSendCreditText: 'Send Skype Credit',
                buttonSendCreditTracking: {
                    name: 'home-skype-credit-send',
                },
                title: 'Skype Credit',
                rechargeText: 'Auto-recharge',
                rechargeTooltip: 'Enable Auto-recharge and never worry about your credit balance.',
                underRechargeText: 'Enable Auto-recharge and never worry about your credit balance.',
            },
            defaultContent: [{
                type: 'PromoBanner',
                properties: {
                    isBackground: false,
                    imageHeight: 220,
                    imageUrl: 'https://secure.skypeassets.com/content/dam/scom/signedin/skype-credit-900x477.jpg',
                },
                content: [{
                    type: 'Text',
                    properties: {
                        size: 'h3',
                    },
                    classes: 'fontSizeH3',
                    value: 'Skype Credit',
                }, {
                    type: 'Text',
                    value: 'Make calls or send SMS messages to friends, family and colleagues directly to their phone, anywhere in the world.',
                }, {
                    type: 'Button',
                    properties: {
                        buttonType: 'primary',
                        size: 'small',
                        withLink: true,
                        link: 'https://secure.skype.com/my/rates/credit',
                        tracking: {
                            name: 'home-skype-credit',
                        },
                    },
                    value: 'Discover Skype Credit',
                }, ],
            }, ],
        };
        SNWS.sn = {
            type: 'SkypeNumber',
            properties: {
                ariaLabelText: 'Manage your Skype Number {0}',
                buttonAnotherNumber: 'Find another number',
                buttonReactivate: 'Reactivate',
                showNumbersText: 'Show more',
                hideNumbersText: 'Show less',
                nextPaymentText: 'Next payment: {DATE}',
                numberReleaseDaysLeftText: 'You have {DAYS} days to reactivate the number',
                expiresOnText: 'Expires on {DATE}',
                expiredOnText: 'Expired on {DATE}',
                title: 'Skype Number subscriptions',
                fundedByManagerText: 'Skype Manager funded',
                buttonAnotherTracking: {
                    name: 'home-skype-number-another',
                    area: 'Skype Number',
                },
                numberTracking: {
                    name: 'home-skype-number-number',
                    area: 'Skype Number',
                },
            },
            defaultContent: [{
                type: 'PromoBanner',
                properties: {
                    isBackground: false,
                    imageHeight: 220,
                    imageUrl: 'https://secure.skypeassets.com/content/dam/scom/signedin/skype-number-900x477.jpg',
                },
                content: [{
                    type: 'Text',
                    properties: {
                        size: 'h3',
                    },
                    classes: 'fontSizeH3',
                    value: 'Skype Number',
                }, {
                    type: 'Text',
                    value: 'Get a local phone number and answer incoming calls from anywhere in the world with your Skype app. Available in 24 countries.',
                }, {
                    type: 'Button',
                    properties: {
                        buttonType: 'primary',
                        size: 'small',
                        withLink: true,
                        link: 'https://go.skype.com/home.skype-number',
                        tracking: {
                            name: 'home-skype-number',
                        },
                    },
                    value: 'Find a local number',
                }, ],
            }, ],
        };
        SNWS.callerId = {
            type: 'CallerId',
            properties: {
                buttonNewNumber: {
                    link: 'https://go.skype.com/home.caller-id-add',
                    value: 'Add a new number',
                    tracking: {
                        name: 'home-caller-id-add',
                    },
                },
                description: 'Display this number when I call or text (SMS) mobile and landlines from Skype.',
                numberLink: {
                    link: 'https://go.skype.com/home.caller-id',
                    tracking: {
                        name: 'home-caller-id-number',
                    },
                    aria: {
                        label: 'Manage your Caller ID {0}',
                    },
                },
                showAllText: 'Show all Skype Numbers',
                title: 'Caller ID',
                types: {
                    mobile: 'Mobile',
                    skypeNumber: 'Skype Number',
                    sms: 'Send &amp; Receive SMS',
                },
            },
            defaultContent: [{
                type: 'PromoBanner',
                properties: {
                    isBackground: false,
                    imageHeight: 220,
                    imageUrl: 'https://secure.skypeassets.com/content/dam/scom/signedin/caller-id-900x477.jpg',
                },
                content: [{
                    type: 'Text',
                    properties: {
                        size: 'h3',
                    },
                    classes: 'fontSizeH3',
                    value: 'Caller ID',
                }, {
                    type: 'Text',
                    value: 'Let friends &amp; family know who is calling and make sure your calls get answered by setting your caller ID.',
                }, {
                    type: 'Button',
                    properties: {
                        buttonType: 'primary',
                        size: 'small',
                        withLink: true,
                        link: 'https://go.skype.com/home.caller-id',
                        tracking: {
                            name: 'home-caller-id',
                        },
                    },
                    value: 'Set up caller ID',
                }, ],
            }, ],
        };
        SNWS.cfrwd = {
            type: 'Wrapper',
            classes: 'supernova-bubble no-min-height',
            content: [{
                type: 'IconContent',
                title: 'Call forward &amp; Voicemail',
                icon: '',
                content: [{
                    type: 'Text',
                    value: 'Forward incoming calls to a phone number, another Skype account or send it to voicemail.',
                }, {
                    type: 'Text',
                    properties: {
                        withLink: true,
                    },
                    value: "<a data-bi-name='home-skype-callfwd-voicemail-more' href='https://go.skype.com/callforwarding.settings'>Learn more</a>",
                }, ],
            }, ],
        };
        SNWS.skypeToGo = {
            type: 'Wrapper',
            classes: 'supernova-bubble no-min-height',
            content: [{
                type: 'IconContent',
                title: 'Skype to Go',
                icon: '',
                content: [{
                    type: 'Text',
                    value: 'Call friends, family and colleagues abroad at great Skype rates from any mobile or landline.',
                }, {
                    type: 'Text',
                    properties: {
                        withLink: true,
                    },
                    value: "<a data-bi-name='home-skype-togo-more' href='https://go.skype.com/togo.setup'>Learn more</a>",
                }, ],
            }, ],
        };
        SNWS.billing = {
            type: 'Wrapper',
            classes: 'supernova-bubble no-min-height',
            content: [{
                type: 'IconContent',
                title: 'Billing &amp; payments',
                icon: '',
                content: [{
                    type: 'Text',
                    properties: {
                        withLink: true,
                    },
                    classes: 'no-margin-bottom',
                    value: "<a data-bi-name='home-skype-billing-pymnts-purchase-history' href='https://secure.skype.com/wallet/account/orders'>Purchase history</a>",
                }, {
                    type: 'Text',
                    properties: {
                        withLink: true,
                    },
                    classes: 'no-margin-bottom',
                    value: "<a data-bi-name='home-skype-billing-pymnts-mthds' href='https://secure.skype.com/wallet/account/instruments'>Payment methods</a>",
                }, {
                    type: 'Text',
                    properties: {
                        withLink: true,
                    },
                    classes: 'no-margin-bottom',
                    value: "<a data-bi-name='home-skype-billing-pymnts-info' href='https://secure.skype.com/wallet/account/address'>Billing information</a>",
                }, {
                    type: 'Text',
                    properties: {
                        withLink: true,
                    },
                    classes: 'no-margin-bottom',
                    value: "<a data-bi-name='home-skype-billing-pymnts-credit-auto-recharge' href='https://secure.skype.com/wallet/account/auto-topup'>Credit Auto-recharge</a>",
                }, {
                    type: 'Text',
                    properties: {
                        withLink: true,
                    },
                    classes: 'no-margin-bottom',
                    value: "<a data-bi-name='home-skype-billing-pymnts-redeem-voucher' href='https://secure.skype.com/wallet/account/voucher'>Redeem voucher</a>",
                }, {
                    type: 'Text',
                    properties: {
                        withLink: true,
                    },
                    classes: 'no-margin-bottom',
                    value: "<a data-bi-name='home-skype-billing-pymnts-chnge-curr' href='https://secure.skype.com/wallet/account/currency'>Change currency</a>",
                }, ],
            }, ],
        };
        SNWS.settings = {
            type: 'Wrapper',
            classes: 'supernova-bubble no-min-height',
            content: [{
                type: 'IconContent',
                title: 'Settings &amp; preferences',
                icon: '',
                content: [{
                    type: 'Text',
                    properties: {
                        withLink: true,
                    },
                    classes: 'no-margin-bottom',
                    value: "<a data-bi-name='home-skype-sttgs-prefrncs-num-addrs' href='https://secure.skype.com/my/skype-number/addresses'>Skype Number addresses</a>",
                }, {
                    type: 'ExportContacts',
                    value: 'Export contacts (.csv)',
                    properties: {
                        msgErrClient: 'Couldn&#39;t download your contacts, try later :(',
                        msgErrServer: 'Oops, we couldn&#39;t find the page you were looking for...',
                        msgErrUnsupported: 'Please use newer browser version, Unsupported Browser',
                        tracking: {
                            name: "home-skype-sttng-prefrncs-export-contacts"
                        }
                    },
                }, {
                    type: 'ManagerSettings',
                    content: [{
                        type: 'Text',
                        properties: {
                            withLink: true,
                        },
                        classes: 'no-margin-bottom',
                        value: "<a data-bi-name='home-skype-sttgs-prefrncs-manager-settings' href='https://secure.skype.com/skypemanager/details'>Skype Manager</a>",
                    }, ],
                }, {
                    type: 'ManagerAdminSettings',
                    content: [{
                        type: 'Text',
                        properties: {
                            withLink: true,
                        },
                        classes: 'no-margin-bottom',
                        value: "<a data-bi-name='home-skype-sttgs-prefrncs-manager-admin-settings' href='https://go.skype.com/bcphome'>Skype Manager Admin</a>",
                    }, ],
                }, ],
            }, ],
        };
        SNWS.green = {
            id: "supernova-dynamic-content",
            type: "Section",
            content: [{
                type: "Row",
                content: [{
                    type: "Column",
                    width: "1/3",
                    order: 1,
                    content: [SNWS.usrBdg]
                }, {
                    type: "Column",
                    width: "2/3",
                    order: 2,
                    content: [SNWS.subs]
                }, {
                    type: "Column",
                    width: "1/3",
                    order: 3,
                    content: [SNWS.credit]
                }, {
                    type: "Column",
                    width: "1/3",
                    order: 4,
                    content: [SNWS.sn]
                }, {
                    type: "Column",
                    width: "1/3",
                    order: 5,
                    content: [SNWS.callerId]
                }]
            }]
        };
        SNWS.others = {
            id: "icon-content",
            type: "Section",
            content: [{
                type: "Row",
                content: [{
                    type: "Column",
                    width: "1/4",
                    content: [SNWS.cfrwd]
                }, {
                    type: "Column",
                    width: "1/4",
                    content: [SNWS.skypeToGo]
                }, {
                    type: "Column",
                    width: "1/4",
                    content: [SNWS.billing]
                }, {
                    type: "Column",
                    width: "1/4",
                    content: [SNWS.settings]
                }]
            }]
        };
        supernovaData = {
            properties: {
                alertComponent: SNWS.gAlert
            },
            page: {
                title: 'green',
                content: [SNWS.green, SNWS.others]
            },
        };
    