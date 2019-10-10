Bootstrapper.bindImmediate(function() {
    var Bootstrapper = window["Bootstrapper"];
    var ensightenOptions = Bootstrapper.ensightenOptions;
    (function(window) {
        var CONFIG = {
            SEARCH_ENGINES: {
                GOOGLE: {
                    NAME: "Google",
                    QP: "q",
                    HOST: "google"
                },
                YAHOO: {
                    NAME: "Yahoo",
                    QP: "p",
                    HOST: "yahoo"
                },
                BING: {
                    NAME: "Bing",
                    QP: "q",
                    HOST: "bing"
                },
                ASK: {
                    NAME: "Ask",
                    QP: "q",
                    HOST: "ask"
                }
            }
        };
        var _result;

        function trackRequest(referrerURL, currentURL, cmpId, additionalParams) {
            _result = checkReferrer(referrerURL, currentURL, cmpId);
            if (_result.modeOfAccess != "DIRECT" &&
                additionalParams != null) {
                var referrerURLParams = parseUri(referrerURL);
                var referrerHost = referrerURLParams.host;
                _result = checkCustomAccessModes(referrerHost, additionalParams, _result)
            }
            _result.randomId = Math.floor(Math.random() * 100001);
            _result.timestamp = (new Date).getTime();
            _result.Utils = Utils;
            return _result
        }

        function checkCustomAccessModes(referrerHost, additionalParams, result) {
            result = checkCustomModeByRefferer(referrerHost, additionalParams, result);
            result = checkCustomModeByCurrentPageParams(referrerHost, additionalParams,
                result);
            return result
        }

        function checkCustomModeByCurrentPageParams(referrerHost, additionalParams, result) {
            var custommodes = additionalParams["CUSTOM_ACCESS_MODES_BY_CURRENT_PAGE_PARAMS"];
            var found = false;
            var cHost;
            for (var mode in custommodes) {
                var custommode = custommodes[mode];
                for (i = 0; i < custommode.length; i++)
                    if (result.current_page_params.queryKey.hasOwnProperty(custommode[i])) {
                        result.source = referrerHost;
                        result.modeOfAccess = mode;
                        found = true;
                        break
                    }
                if (found) break
            }
            return result
        }

        function checkCustomModeByRefferer(referrerHost,
            additionalParams, result) {
            var custommodes = additionalParams["CUSTOM_ACCESS_MODES_BY_REFERRER"];
            var found = false;
            var cHost;
            for (var mode in custommodes) {
                var custommode = custommodes[mode];
                for (i = 0; i < custommode.length; i++) {
                    cHost = custommode[i];
                    if (referrerHost.indexOf(cHost.toLowerCase()) != -1) {
                        result.source = cHost;
                        result.modeOfAccess = mode;
                        found = true;
                        break
                    }
                }
                if (found) break
            }
            return result
        }

        function checkReferrer(referrerURL, currentURL, cmpId) {
            var result = new Object;
            var currentURLParams = parseUri(currentURL);
            result.current_page_params =
                currentURLParams;
            result.modeOfAccess = "UNKNOWN";
            result.source = "NONE";
            result.isSearchEngine = false;
            if (!referrerURL || referrerURL == null || referrerURL == "") {
                result.isRequestTracked = false;
                result.isSearchEngine = false;
                result.modeOfAccess = "DIRECT"
            } else {
                var searchEngines = CONFIG.SEARCH_ENGINES;
                var referrerURLParams = parseUri(referrerURL);
                result.referrer_page_params = referrerURLParams;
                var referrerHost = referrerURLParams.host;
                for (var i in searchEngines) {
                    var searchEngine = searchEngines[i];
                    if (referrerHost.indexOf(searchEngine.HOST) !=
                        -1) {
                        result.source = searchEngine.NAME;
                        result.isSearchEngine = true;
                        result.modeOfAccess = "ORGANIC";
                        result.query = referrerURLParams["queryKey"][searchEngine.QP];
                        result.isRequestTracked = validateCampaignIds(currentURLParams.queryKey, cmpId, referrerHost);
                        if (result.isRequestTracked) result.modeOfAccess = "PAID";
                        break
                    }
                }
                if (!result.isSearchEngine) {
                    result.source = encodeURI(referrerURL);
                    result.isSearchEngine = false;
                    result.isRequestTracked = validateCampaignIds(currentURLParams.queryKey, cmpId, referrerHost);
                    if (result.isRequestTracked) result.modeOfAccess =
                        "DISPLAY";
                    else result.modeOfAccess = "UNKNOWN"
                }
            }
            return result
        }

        function validateCampaignIds(targetObject, domainIds, referrerHost) {
            var campainIdExistance = false;
            for (var domainval in domainIds) {
                var cmpIds = domainIds[domainval];
                for (var cmpId in cmpIds)
                    if (hasCampaignID(targetObject, cmpIds[cmpId]) && (domainval == "*" || referrerHost.indexOf(domainval.toLowerCase()) != -1)) return true
            }
            return campainIdExistance
        }

        function hasCampaignID(targetObject, cmpId) {
            if (cmpId.indexOf("*") != -1) return hasWildCardMatch(targetObject,
                cmpId);
            return cmpId != null && targetObject.hasOwnProperty(cmpId)
        }

        function hasWildCardMatch(targetObject, cmpId) {
            var matches = false;
            cmpId = cmpId.replace(/\*/g, "");
            var patternstr = "^" + cmpId;
            var pattern = new RegExp(patternstr, "g");
            for (var key in targetObject)
                if (pattern.test(key)) {
                    matches = true;
                    break
                }
            return matches
        }

        function parseUri(str) {
            var o = parseUri.options,
                m = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
                uri = {},
                i = 14;
            while (i--) uri[o.key[i]] = m[i] || "";
            uri[o.q.name] = {};
            uri[o.key[12]].replace(o.q.parser, function($0,
                $1, $2) {
                if ($1) uri[o.q.name][$1] = $2
            });
            return uri
        }
        parseUri.options = {
            strictMode: true,
            key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
            q: {
                name: "queryKey",
                parser: /(?:^|&)([^&=]*)=?([^&]*)/g
            },
            parser: {
                strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@?]*)(?::([^:@?]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@?]*)(?::([^:@?]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
            }
        };

        function IQSeoTag(referrerURL, currentURL, cmpId, additionalParams) {
            return trackRequest(referrerURL, currentURL, cmpId, additionalParams)
        }

        function valueMatches(list, val) {
            for (var li = 0, listlen = list.length; li < listlen; li++)
                if (list[li].substring)
                    if (list[li].toLowerCase() == val) return true;
            return false
        }
        var Utils = {
            valueMatches: valueMatches,
            getCurrentPageParamsKey: function(queryKeyName) {
                queryKeyName = queryKeyName.toLowerCase();
                if (_result.current_page_params.queryKey[queryKeyName]) return _result.current_page_params.queryKey[queryKeyName];
                else if (_result.current_page_params.source.toLowerCase().indexOf(queryKeyName + "\x3d") > -1) {
                    var queryKeyValue = _result.current_page_params.source.toLowerCase().split(queryKeyName + "\x3d");
                    queryKeyValue = queryKeyValue[1].split("\x26");
                    _result.current_page_params.queryKey[queryKeyName] = queryKeyValue[0];
                    return _result.current_page_params.queryKey[queryKeyName]
                } else return
            },
            getReferrerPageParamsKey: function(queryKeyName) {
                queryKeyName = queryKeyName.toLowerCase();
                if (_result.referrer_page_params.queryKey[queryKeyName]) return _result.referrer_page_params.queryKey[queryKeyName];
                else if (_result.referrer_page_params.source.toLowerCase().indexOf(queryKeyName + "\x3d") > -1) {
                    var queryKeyValue = _result.referrer_page_params.source.toLowerCase().split(queryKeyName + "\x3d");
                    queryKeyValue = queryKeyValue[1].split("\x26");
                    _result.referrer_page_params.queryKey[queryKeyName] = queryKeyValue[0];
                    return _result.referrer_page_params.queryKey[queryKeyName]
                } else return
            },
            getReferrerPageParams: function() {
                if (!_result.referrer_page_params.query == "") return _result.referrer_page_params.query;
                else if (_result.referrer_page_params.path.indexOf("\x26") >
                    -1 || _result.referrer_page_params.path.indexOf("\x3d") > -1) {
                    var dir_temp = _result.referrer_page_params.path.split("/");
                    _result.referrer_page_params.query = "";
                    var slash_temp = "";
                    for (var il = 0; il < dir_temp.length; il++)
                        if (dir_temp[il].indexOf("\x3d") > -1 || slash_temp == "/") {
                            _result.referrer_page_params.query = _result.referrer_page_params.query + slash_temp + dir_temp[il];
                            slash_temp = "/"
                        }
                    return _result.referrer_page_params.query
                }
            },
            getCurrentPageParams: function() {
                if (!_result.current_page_params.query == "") return _result.current_page_params.query;
                else if (_result.current_page_params.path.indexOf("\x26") > -1 || _result.current_page_params.path.indexOf("\x3d") > -1) {
                    var dir_temp = _result.current_page_params.path.split("/");
                    _result.current_page_params.query = "";
                    var slash_temp = "";
                    for (var il = 0; il < dir_temp.length; il++)
                        if (dir_temp[il].indexOf("\x3d") > -1 || slash_temp == "/") {
                            _result.current_page_params.query = _result.current_page_params.query + slash_temp + dir_temp[il];
                            slash_temp = "/"
                        }
                    return _result.current_page_params.query
                }
            },
            tolowercaseCurrentPageParamsKeys: function() {
                if (_result.current_page_params &&
                    _result.current_page_params.queryKey)
                    for (key in _result.current_page_params.queryKey)
                        if (key.toLowerCase() != key) {
                            _result.current_page_params.queryKey[key.toLowerCase()] = _result.current_page_params.queryKey[key];
                            delete _result.current_page_params.queryKey[key]
                        }
            },
            getCookieVIQ: function(c_name) {
                var c_value = document.cookie;
                var c_start = c_value.indexOf(c_name + "\x3d");
                if (c_start == -1) c_start = c_value.indexOf(c_name + "\x3d");
                if (c_start == -1) c_value = null;
                else {
                    c_start = c_value.indexOf("\x3d", c_start) + 1;
                    var c_end =
                        c_value.indexOf(";", c_start);
                    if (c_end == -1) c_end = c_value.length;
                    c_value = decodeURIComponent(c_value.substring(c_start, c_end))
                }
                return c_value
            },
            setCookieVIQ: function(c_name, value) {
                var exdate = new Date;
                var c_value = encodeURIComponent(value);
                document.cookie = c_name + "\x3d" + c_value;
                return
            },
            checkCookieVIQ: function(c_name) {
                var domainname = _result.Utils.getCookieVIQ(c_name);
                if (domainname != null && domainname != "") return domainname;
                else return "false"
            }
        };
        window.IQSeoTag = IQSeoTag
    })(window);
    (function() {
        var CURRENT_URL = decodeURIComponent(document.URL);
        var REFERRER_URL = document.referrer;
        var additionalParameters = {
            CUSTOM_ACCESS_MODES_BY_REFERRER: {
                SOCIAL_ORGANIC: ["facebook", "plus.google.com", "plus.url.google.com", "weebly", "reddit", "blogger", "twitter", "t.co", "answers.yahoo", ".youtube", "wordpress", "meetup", "ravelry", "askville", "linkedin", "deviantart", "quora", ".imvu.", "pocket", "stackexchange", "netvibes", ".ning.", "tagged", "wikihow", "pinterest", "disqus", "typepad", "tinyurl", "vkontakte", "stumbleupon", "androidcentral", "livejournal", "snapchat", "instagram",
                    "youtube", "instagram", "twitter", "blogger", "line", "instagramstories", "ravelry", "quora", "scribd", "weebly", "reddit", "pixiv", "fc2", "linkedin", "mobage", "deviantart", "vimeo", "wechat", "stackoverflow", "tripadvisor", "crunchyroll", "vkontakte", "tumblr", "imvu", "meetup", "italki", "tagged", "secondlife", "ameba", "myheritage", "hi5", "wikihow", "hootsuite", "douban", "sinaweibo", "stackexchange", "habbo", "reverbnation", "badoo", "hatenadiary", "oshiete!goo", "dailymotion", "photobucket", "pinterest", "mubi", "stardoll", "mocospace",
                    "addthis", "tencent", "flickr", "ning", "last.fm", "pocket", "pinboard", "plurk", "wikia", "typepad", "hatenabookmark", "movabletype", "googlegroups", "gooblog", "buzzfeed", "diigo", "fubar", "glassdoor", "internations", "gutefrage.net", "bebo", "gaiaonline", "jigsaw", "livejournal", "slideshare", "xing", "hackernews", "kakao", "bloggang", "yahoo!answers", "mixi", "wattpad", "tinyurl", "digg", "cellufun", "hubpages", "fotki", "classmates", "cocolog", "academia", "dzone", "paper.li", "spruz", "yelp", "crackberryforums", "webshots", "foursquare",
                    "myanimelist", "netvibes", "researchgate", "xanga", "yammer", "bitly", "insanejournal", "mymodernmet", "opendiary", "skyrock", "stumbleupon", "vampirefreaks.com", "epicurious", "nk.pl", "zalo", "alumniclass", "americantowns", "goodreads", "instapaper", "listography", "mylife", "niconicodouga", "scoop.it", "vampirerave.com", "youku", "youpet", "godtube", "imoreforums", "interpals", "yaplog", "activeworlds", "allrecipes", "beforeit'snews", "caringbridge", "disqus", "draugiem.lv", "edublogs", "intherooms", "listal", "meneame", "okwave", "ow.ly",
                    "renren", "smallworlds", "spoke", "trombi.com", "unblog", "virb", "wayn"
                ],
                ADDITIONAL_ORGANIC: [".aol.", ".auone.", ".avg.", ".eniro.", ".msn.", ".onet.", ".so.com", "babylon", "baidu", "biglobe", "centrum.cz", "comcast", "daum", "globo", "go.mail.ru", "goo.ne", "haosou", "images.google", "incredimail", "kvasir", "lycos", "naver", "rakuten", "rambler", "search.smt.docomo", "search-results", "seznam", "sogou", "startsiden", "virgilio", "yandex", "zapmeta.com.ar", "360.cn", "argentino.com.ar", "baidu", "daum", "duckduckgo.com", "goo", "haosou.com",
                    "lycos", "m.sogou.com", "naver", "rambler", "search.smt.docomo", "shenma", "so.com", "sogou", "yandex"
                ]
            }
        };
        var result = new IQSeoTag(REFERRER_URL, CURRENT_URL, null, additionalParameters);
        result.Utils.tolowercaseCurrentPageParamsKeys();
        var referrerDomain = REFERRER_URL.split("?")[0];
        var currentDomain = CURRENT_URL.split("?")[0];
        var imageURL;
        var Tapadsyncpixel;
        var domainVal = "";
        var refURL;
        var refdomain;
        if (REFERRER_URL.length > 0) {
            refURL = REFERRER_URL.split("//");
            domainVal = refURL[1].split("/");
            refdomain = domainVal[0];
            if (domainVal[0] ===
                "www.t.co" || domainVal[0] === "t.co") result.modeOfAccess = "SOCIAL_ORGANIC"
        }
        Tapadsyncpixel = "https://tapestry.tapad.com/tapestry/1?ta_partner_id\x3d950\x26ta_redirect\x3dhttps%3A%2F%2Ft.myvisualiq.net%2Fsync%3Fprid%3D1001%26ao%3D0%26pruuid%3DTAPAD_%24%7BIDS%3Akey%7D";
        if (REFERRER_URL.toLowerCase().indexOf(".paypal.") > -1);
        else if (CURRENT_URL.toLowerCase().indexOf("utm_campaign\x3dyoutube") > -1) imageURL = "https://t.myvisualiq.net/impression_pixel?r\x3d" + result.timestamp + "\x26et\x3di\x26ago\x3d212\x26ao\x3d875\x26aca\x3d-36\x26si\x3d-36\x26ci\x3d-36\x26pi\x3d-36\x26ad\x3d-36\x26advt\x3d-36\x26chnl\x3d-36\x26vndr\x3d1182\x26sz\x3d9417\x26u\x3d" +
            encodeURIComponent(result.Utils.getCurrentPageParams() + "|" + referrerDomain + "|" + CURRENT_URL) + "\x26pt\x3di";
        else if (result.modeOfAccess == "SOCIAL_ORGANIC" && CURRENT_URL.toLowerCase().indexOf("utm") > -1);
        else if (result.modeOfAccess == "SOCIAL_ORGANIC" && CURRENT_URL.toLowerCase().indexOf("utm") < 0) imageURL = "https://t.myvisualiq.net/impression_pixel?r\x3d" + result.timestamp + "\x26et\x3di\x26ago\x3d212\x26ao\x3d875\x26aca\x3d-12\x26si\x3d-12\x26ci\x3d-12\x26pi\x3d-12\x26ad\x3d-12\x26advt\x3d-12\x26chnl\x3d-12\x26vndr\x3d101\x26sz\x3d9261\x26u\x3d" +
            encodeURIComponent(result.Utils.getCurrentPageParams() + "|" + referrerDomain + "|" + CURRENT_URL) + "\x26pt\x3di";
        else if (result.modeOfAccess == "ORGANIC" && CURRENT_URL.toLowerCase().indexOf("utm") > -1);
        else if (result.modeOfAccess == "ORGANIC" && CURRENT_URL.toLowerCase().indexOf("utm") < 0) imageURL = "https://t.myvisualiq.net/impression_pixel?r\x3d" + result.timestamp + "\x26et\x3di\x26ago\x3d212\x26ao\x3d875\x26aca\x3d-13\x26si\x3d-13\x26ci\x3d-13\x26pi\x3d-13\x26ad\x3d-13\x26advt\x3d-13\x26chnl\x3d-13\x26vndr\x3d101\x26sz\x3d9264\x26u\x3d" +
            encodeURIComponent(result.Utils.getCurrentPageParams() + "|" + referrerDomain + "|" + CURRENT_URL) + "\x26pt\x3di";
        else if (result.modeOfAccess == "ADDITIONAL_ORGANIC" && CURRENT_URL.toLowerCase().indexOf("utm") > -1);
        else if (result.modeOfAccess == "ADDITIONAL_ORGANIC" && CURRENT_URL.toLowerCase().indexOf("utm") < 0) imageURL = "https://t.myvisualiq.net/impression_pixel?r\x3d" + result.timestamp + "\x26et\x3di\x26ago\x3d212\x26ao\x3d875\x26aca\x3d-13\x26si\x3d-13\x26ci\x3d-13\x26pi\x3d-13\x26ad\x3d-13\x26advt\x3d-13\x26chnl\x3d-13\x26vndr\x3d101\x26sz\x3d9264\x26u\x3d" +
            encodeURIComponent(result.Utils.getCurrentPageParams() + "|" + referrerDomain + "|" + CURRENT_URL) + "\x26pt\x3di";
        else if (result.modeOfAccess == "DIRECT" && CURRENT_URL.toLowerCase().indexOf("utm") > -1);
        else if (result.modeOfAccess == "DIRECT" && CURRENT_URL.toLowerCase().indexOf("utm") < 0) imageURL = "https://t.myvisualiq.net/impression_pixel?r\x3d" + result.timestamp + "\x26et\x3di\x26ago\x3d212\x26ao\x3d875\x26aca\x3d-10\x26si\x3d-10\x26ci\x3d-10\x26pi\x3d-10\x26ad\x3d-10\x26advt\x3d-10\x26chnl\x3d-10\x26vndr\x3d101\x26sz\x3d9262\x26u\x3d" +
            encodeURIComponent(result.Utils.getCurrentPageParams() + "|" + referrerDomain + "|" + CURRENT_URL) + "\x26pt\x3di";
        else if (CURRENT_URL.toLowerCase().indexOf("utm") > -1);
        else imageURL = "https://t.myvisualiq.net/impression_pixel?r\x3d" + result.timestamp + "\x26et\x3di\x26ago\x3d212\x26ao\x3d875\x26aca\x3d-15\x26si\x3d-15\x26ci\x3d-15\x26pi\x3d-15\x26ad\x3d-15\x26advt\x3d-15\x26chnl\x3d-15\x26vndr\x3d101\x26sz\x3d9263\x26u\x3d" + encodeURIComponent(result.Utils.getCurrentPageParams() + "|" + referrerDomain + "|" + CURRENT_URL) +
            "\x26pt\x3di";
        var image2 = new Image;
        image2.src = Tapadsyncpixel;
        if (imageURL) {
            var image = new Image;
            image.src = imageURL
        }
    })()
}, 2829466, 581996);