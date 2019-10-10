
        window.netflix = window.netflix || {};
        netflix.notification.specification.uiQOE = {
            "appSession": {
                "send": "both"
            },
            "userSession": {
                "send": "both"
            },
            "uiStartup": {
                "send": "end"
            },
            "uiBrowseStartup": {
                "send": "end"
            },
            "uiModalViewChanged": {
                "eventProperties": {
                    "value": "modalView"
                },
                "send": "start"
            },
            "uiModelessView": {
                "send": "both",
                "overlapping": "true"
            },
            "partnerSession": {
                "send": "both",
                "overlapping": false
            }
        };
    