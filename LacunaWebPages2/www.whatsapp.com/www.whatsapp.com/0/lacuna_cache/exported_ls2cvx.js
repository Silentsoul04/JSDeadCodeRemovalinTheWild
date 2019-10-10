
        require("TimeSliceImpl").guard(function() {
            require("ServerJSDefine").handleDefines([]);
            require("InitialJSLoader").handleServerJS({
                "require": [
                    ["UniversalMicroSiteTrackingController", "init", ["ImmutableServerCallableWrapper"],
                        [false, "NL", {
                            "__imm": {
                                "module": {
                                    "__m": "ImmutableServerCallableWrapper"
                                },
                                "method": "Map",
                                "value": []
                            }
                        }, "0eXdl3dsUTa5D8r5k", null, "https:\/\/www.whatsapp.com\/", null, null, "emea", null, "1fsbRAL8k5Pv9DQ1D", "whatsapp_www", {
                            "__imm": {
                                "module": {
                                    "__m": "ImmutableServerCallableWrapper"
                                },
                                "method": "Map",
                                "value": [
                                    ["whatsapp_unique_id", "2193dd8d-0b46-4e43-bf8b-26663b1c9631"],
                                    ["device_type", "mobile"]
                                ]
                            }
                        }]
                    ],
                    ["ScriptPath", "set", [],
                        ["WAXWhatsAppRootController", "a1f3c513", {
                            "imp_id": "0eXdl3dsUTa5D8r5k",
                            "ef_page": null,
                            "uri": "https:\/\/www.whatsapp.com\/"
                        }]
                    ],
                    ["WhatsAppWebPage", "makeFixedHeaderTransluscent", [],
                        ["_2zpg", "_2zpm", false]
                    ],
                    ["WhatsAppWebPage", "initLanguagePicker", [],
                        []
                    ],
                    ["WhatsAppWebPage", "initMobileMenu", [],
                        []
                    ],
                    ["TimeSliceImpl"],
                    ["ServerJSDefine"],
                    ["InitialJSLoader"]
                ]
            });
        }, "ServerJS define", {
            "root": true
        })();
    