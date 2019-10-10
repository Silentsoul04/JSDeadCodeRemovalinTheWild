
            /*<![CDATA[*/
            require(["jsll-bootstrap"], function(jsllbt) {
                jsllbt.initialize({
                    "isLoggedIn": "False",
                    "logLevel": "1",
                    "jsError": "false",
                    "env": "prod",
                    "appId": "MSN",
                    "endpoint": "https://web.vortex.data.msn.com/collect/v1"
                });
            });
            require(["track", "track.generic", "c.track.mobi"], function(t, g, o) {
                t.extend({
                    "sitePage": {
                        "department": "",
                        "subDepartment": "",
                        "channel": "homepage",
                        "page_name": "startpage",
                        "page_type": "hp",
                        "page_product": "prime_mobile",
                        "storeocid": "msn",
                        "pageUrl": "https%3A%2F%2Fwww.msn.com%2Fnl-nl%2F",
                        "autoRefresh": "0",
                        "requestId": "41ba22dea370442ca656315ced5bcaab",
                        "serverImpressionGuid": "41ba22dea370442ca656315ced5bcaab",
                        "canvas": "Browser",
                        "vertical": "homepage",
                        "entityId": "",
                        "entityCollectionId": "",
                        "entitySrc": "",
                        "cvAuthor": "",
                        "d_dgk": "tmx.mobile.webkit.android",
                        "d_imd": "1",
                        "cvPartner": "",
                        "cvPublcat": "",
                        "provid": "",
                        "templ": "EAggMo:0;bingclicklda;IP:None;RV:None;infopane:0;cat:0;EP:0;CI:0;mIpH:2;mRvH:2",
                        "pageIndex": "",
                        "pageTotalCount": "",
                        "isStaticPage": "False",
                        "pageVersion": "15",
                        "contentType": "unknown_use_metadata_to_set_the_content_type",
                        "isCorePV": "",
                        "otfURL": "//otf.msn.com/c.gif?",
                        "flightid": "muidflt27cf,muidflt29cf,muidflt298cf,oneboxdhpcf,startedge1cf,startedge2cf,pnehp1cf,pnehp2cf,article2cf,gallery1cf,jslltelemetry",
                        "exa": "muidflt27cf,muidflt29cf,muidflt298cf,oneboxdhpcf,startedge1cf,startedge2cf,pnehp1cf,pnehp2cf,article2cf,gallery1cf,jslltelemetry",
                        "device": "Unknown Unknown",
                        "domainId": "127",
                        "propertyId": "",
                        "propertySpecifier": "",
                        "pageMode": "",
                        "localeCode": "nl-nl"
                    },
                    "userStatic": {
                        "isSignedIn": "False",
                        "beginRequestTicks": "637063018809538158"
                    }
                });
                t.register(new g({
                    "base": "//otf.msn.com/c.gif?",
                    "id": "udc",
                    "disableOnAutoRefresh": "scorecard",
                    "commonMap": {
                        "userDynamic": {
                            'rid': 'requestId',
                            'cts': 'timeStamp',
                            'idx': 'currentEventIndex'
                        },
                        "client": {
                            'clid': 'clientId',
                            'anoncknm': 'getAnonCookieName',
                            'issso': 'getSsoComplete',
                            'aadState': 'getAadAuthentication'
                        },
                        "sitePage": {
                            'di': 'domainId',
                            'mkt': 'localeCode',
                            'su': 'pageUrl',
                            'flightid': 'flightid',
                            'activityId': 'requestId',
                            'cvs': 'canvas',
                            'subcvs': 'vertical',
                            'pg.n': 'page_name',
                            'pg.t': 'page_type',
                            'pg.c': 'page_configuration',
                            'pg.p': 'page_product',
                            'pivot': 'pagePivot',
                            'pageuid': 'pageUserId',
                            'pageutype': 'pageUserType',
                            'afd': 'frontDoor'
                        }
                    },
                    "isGeneratedEarly": 0,
                    "impr": {
                        "param": {
                            'evt': 'impr',
                            'js': '1'
                        },
                        "paramMap": {
                            "userStatic": {
                                'pp': 'isSignedIn'
                            },
                            "userDynamic": {
                                'dv.snlogin': 'settings',
                                'dv.grpfrmod': 'defaultSlotTrees'
                            },
                            "client": {
                                'rf': 'referrer',
                                'cu': 'pageUrl',
                                'scr': 'screenResolution',
                                'bh': 'height',
                                'bw': 'width',
                                'dv.Title1': 'pageTitle',
                                'viewType': 'viewType',
                                'e1': 'OTFTelemetry',
                                'prs': 'personalization',
                                'oscm': 'connectionMode',
                                'osver': 'buildVersion'
                            },
                            "sitePage": {
                                'st.dpt': 'department',
                                'st.sdpt': 'subDepartment',
                                'cv.partner': 'cvPartner',
                                'cv.publcat': 'cvPublcat',
                                'cv.author': 'cvAuthor',
                                'CndEl': 'conditionalItem',
                                'cv.entityId': 'entityId',
                                'cv.entitySrc': 'entitySrc',
                                'cv.parentId': 'entityCollectionId',
                                'provid': 'provid',
                                'ar': 'autoRefresh',
                                'd.dgk': 'd_dgk',
                                'd.imd': 'd_imd',
                                'tmpl': 'templ',
                                'isStaticPage': 'isStaticPage',
                                'pgIdx': 'pageIndex',
                                'pgTot': 'pageTotalCount',
                                'jids': 'joinIds',
                                'fid': 'feedId',
                                'fn': 'feedName',
                                'ft': 'feedType',
                                'ex': 'extflightid',
                                'osgp': 'groupPolicy',
                                'rt': 'referrerType',
                                'ccn': 'cookieConsentNotice'
                            },
                            "custom": {
                                'pb': 'addCustomTags'
                            }
                        }
                    },
                    "click": {
                        "paramMap": {
                            "event": {
                                'evt': 'type'
                            },
                            "userDynamic": {
                                'slidetype': 'slideType'
                            },
                            "client": {
                                'gesture': 'gesture',
                                'viewType': 'viewType'
                            },
                            "sitePage": {
                                'fid': 'feedId',
                                'fn': 'feedName',
                                'ft': 'feedType',
                                'tmpl': 'templ'
                            },
                            "report": {
                                'cm': 'contentModule',
                                'hl': 'headline',
                                'du': 'destinationUrl',
                                'e1': 'module',
                                'l': 'nLineage',
                                'lo': 'oLineage',
                                'TTI': 'timeToInteract',
                                'ca': 'contentAction'
                            },
                            "custom": {
                                'pb': 'addCustomTagsForClickEvent'
                            }
                        }
                    },
                    "page_candidate": {
                        "paramMap": {
                            "event": {
                                'evt': 'type'
                            }
                        }
                    },
                    "unload": {
                        "paramMap": {
                            "event": {
                                'evt': 'type'
                            },
                            "client": {
                                'frd': 'frameData',
                                'wbh': 'wasBrowserHiddenAtLeastOnce',
                                'mfd': 'maxFrameDuration'
                            }
                        }
                    },
                    "app_error": {
                        "paramMap": {
                            "event": {
                                'evt': 'type'
                            },
                            "report": {
                                'errId': 'errId',
                                'errMsg': 'errMsg',
                                'errSource': 'errSource',
                                'ignorePV': 'ignorePV',
                                'reportingType': 'reportingType'
                            }
                        }
                    },
                    "adimpr_update": {
                        "paramMap": {
                            "event": {
                                'evt': 'type'
                            },
                            "report": {
                                'dst': 'dst',
                                'den': 'den',
                                'id': 'id',
                                'pg': 'pg',
                                'w': 'w',
                                'h': 'h',
                                'status': 'status',
                                'anAd': 'anAd',
                                'seqid': 'seqid',
                                'sdk': 'sdk',
                                'fen': 'fen',
                                'oAsid': 'oAsid'
                            }
                        }
                    },
                    "ad_feedback": {
                        "paramMap": {
                            "event": {
                                'evt': 'type'
                            },
                            "report": {
                                'creativeId': 'creativeId',
                                'provId': 'provId',
                                'tag': 'tag',
                                'title': 'title',
                                'l': 'lineage'
                            }
                        }
                    }
                }));
                define("c.trackExtComplete", 1);
                t.trackPage();
            });
            //]]>
        