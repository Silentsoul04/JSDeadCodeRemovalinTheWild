/* ControlTag Loader for Turner International f3b6d00d-676f-48d8-80ef-2b48af61105e */
(function(w, cs) {

    if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
        return;
    }

    var debugging = /kxdebug/.test(w.location);
    var log = function() {

        debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
    };

    var load = function(url, callback) {
        log('Loading script from:', url);
        var node = w.document.createElement('script');
        node.async = true;
        node.src = url;


        node.onload = node.onreadystatechange = function() {
            var state = node.readyState;
            if (!callback.done && (!state || /loaded|complete/.test(state))) {
                log('Script loaded from:', url);
                callback.done = true;
                callback();
            }
        };


        var sibling = w.document.getElementsByTagName('script')[0];
        sibling.parentNode.insertBefore(node, sibling);
    };

    var config = {
        "app": {
            "name": "krux-scala-config-webservice",
            "version": "3.41.5",
            "schema_version": 3
        },
        "confid": "teff18ls8",
        "context_terms": [],
        "publisher": {
            "name": "Turner International",
            "active": true,
            "uuid": "f3b6d00d-676f-48d8-80ef-2b48af61105e",
            "version_bucket": "stable",
            "id": 3613
        },
        "params": {
            "link_header_bidder": false,
            "site_level_supertag_config": "site",
            "recommend": false,
            "control_tag_pixel_throttle": 100,
            "fingerprint": false,
            "optout_button_optout_text": "Browser Opt Out",
            "user_data_timing": "load",
            "consent_active": true,
            "use_central_usermatch": true,
            "store_realtime_segments": false,
            "tag_source": false,
            "link_hb_start_event": "ready",
            "optout_button_optin_text": "Browser Opt In",
            "first_party_uid": true,
            "link_hb_timeout": 2000,
            "link_hb_adserver_subordinate": true,
            "optimize_realtime_segments": false,
            "link_hb_adserver": "dfp",
            "target_fingerprint": false,
            "context_terms": false,
            "optout_button_id": "kx-optout-button",
            "dfp_premium": true
        },
        "prioritized_segments": [],
        "realtime_segments": [],
        "services": {
            "userdata": "//cdn.krxd.net/userdata/get",
            "contentConnector": "https://connector.krxd.net/content_connector",
            "stats": "//apiservices.krxd.net/stats",
            "optout": "//cdn.krxd.net/userdata/optout/status",
            "event": "//beacon.krxd.net/event.gif",
            "set_optout": "https://consumer.krxd.net/consumer/optout",
            "data": "//beacon.krxd.net/data.gif",
            "link_hb_stats": "//beacon.krxd.net/link_bidder_stats.gif",
            "userData": "//cdn.krxd.net/userdata/get",
            "link_hb_mas": "https://link.krxd.net/hb",
            "config": "//cdn.krxd.net/controltag/{{ confid }}.js",
            "social": "//beacon.krxd.net/social.gif",
            "addSegment": "//cdn.krxd.net/userdata/add",
            "pixel": "//beacon.krxd.net/pixel.gif",
            "um": "https://usermatch.krxd.net/um/v2",
            "controltag": "//cdn.krxd.net/ctjs/controltag.js.{hash}",
            "loopback": "https://consumer.krxd.net/consumer/tmp_cookie",
            "remove": "https://consumer.krxd.net/consumer/remove/f3b6d00d-676f-48d8-80ef-2b48af61105e",
            "click": "https://apiservices.krxd.net/click_tracker/track",
            "stats_export": "//beacon.krxd.net/controltag_stats.gif",
            "userdataApi": "//cdn.krxd.net/userdata/v1/segments/get",
            "cookie": "//beacon.krxd.net/cookie2json",
            "proxy": "//cdn.krxd.net/partnerjs/xdi",
            "consent_get": "https://consumer.krxd.net/consent/get/f3b6d00d-676f-48d8-80ef-2b48af61105e",
            "consent_set": "https://consumer.krxd.net/consent/set/f3b6d00d-676f-48d8-80ef-2b48af61105e",
            "is_optout": "https://beacon.krxd.net/optout_check",
            "impression": "//beacon.krxd.net/ad_impression.gif",
            "transaction": "//beacon.krxd.net/transaction.gif",
            "log": "//jslog.krxd.net/jslog.gif",
            "portability": "https://consumer.krxd.net/consumer/portability/f3b6d00d-676f-48d8-80ef-2b48af61105e",
            "set_optin": "https://consumer.krxd.net/consumer/optin",
            "usermatch": "//beacon.krxd.net/usermatch.gif"
        },
        "experiments": [],
        "site": {
            "name": "CNN International Edition",
            "cap": 255,
            "id": 1667726,
            "organization_id": 3613,
            "uid": "teff18ls8"
        },
        "tags": [{
            "id": 37159,
            "name": "Standard DTC",
            "content": "<script>\n(function(){\n\tKrux('scrape',{'page_attr_url_path_1':{'url_path':'1'}});\n\tKrux('scrape',{'page_attr_url_path_2':{'url_path':'2'}});\n\tKrux('scrape',{'page_attr_url_path_3':{'url_path':'3'}});\n\tKrux('scrape',{'page_attr_meta_keywords':{meta_name:'keywords'}});\n\n\tKrux('scrape',{'page_attr_domain':{url_domain: '2'}});\n\n})();\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onready",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 40069,
            "name": "Consent Tag - SET",
            "content": "<script>\n// BEGIN Salesforce DMP JavaScript Consent Tag for \"Turner International\"\nKrux( 'consent:set', {\n\n  dc: true,\n  al: true,\n  tg: true,\n  cd: true,\n  sh: true,\n  re: true\n\n}, function(errors, body) {\n\n   if (errors) {\n    console.error(errors);\n  } else {\n    console.log('Successfully set consent flags.');\n  }\n\n});\n// END Salesforce DMP JavaScript Consent Tag\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onready",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": false,
            "criteria": [],
            "collects_data": false
        }, {
            "id": 37163,
            "name": "UTM DTC",
            "content": "<script>\n(function(){\n\n\tvar params = Krux('require:util').urlParams();\n\t\n\tKrux ('set', { \n\t'page_attr_utm_source': params.utm_source,\n\t'page_attr_utm_medium': params.utm_medium,\n\t'page_attr_utm_campaign': params.utm_campaign,\n\t'page_attr_utm_content': params.utm_content,\n\t'page_attr_utm_term': params.utm_term \n\t});\n\t\n})();\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 38056,
            "name": "DataLayer DTC (Whitelist)",
            "content": "<script>\n(function() {\n    /* Selective Attribute DataLayer Library Tag */\n    var _, allAttr, allowedList, attr, attributes, dataLayerIngester, dataObj,\n        isAllowed, keepCase, libUtil, omitKeys, pageAttr, prefix, toSet, trim,\n        userAttr, util, value,\n        hasProp = {}.hasOwnProperty;\n    _ = Krux('require:underscore');\n    util = Krux('require:util');\n    libUtil = Krux('require:util.library-tag');\n    dataLayerIngester = Krux('require:scrape').ingestDataLayer;\n\n    /* Safe copy of dataLayer object */\n    dataObj = Krux('scrape.javascript', 'navigator');\n\n    /* String trimming helper function */\n    trim = function(attr) {\n        return (\"\" + attr).replace(/^\\s+|\\s+$/g, '');\n    };\n\n    /* Attribute configs */\n    pageAttr = _.map('cnn_international_site,cnn_international_rollup,cnn_international_section,cnn_international_subsection,cnn_international_spec,cap_topics,cookie_last5stocks,on_site_searcher,cnn_international_bizunit,cnn_international_brand,cnn_international_lob,cnn_international_sitename,cnn_international_sitesectionlevel1,cnn_international_sitesectionlevel2,on_site_searcher,cnn_arabic_site,cnn_arabic_rollup,cnn_arabic_section,cnn_arabic_bizunit,cnn_arabic_brand,cnn_arabic_lob,cnn_arabic_sitename,cnn_arabic_sitesectionlevel1,cnn_arabic_sitesectionlevel2,espanol_site,espanol_rollup,espanol_section,espanol_bizunit,espanol_brand,espanol_lob,espanol_sitename,espanol_sitesectionlevel1,espanol_sitesectionlevel2,cnn_site,cnn_rollup,cnn_section,cnn_subsection,cnn_adunit5,cnn_spec,cnn_bizunit,cnn_brand,cnn_lob,cnn_sitename,cnn_sitesectionlevel1,cnn_sitesectionlevel2,cnn_money_site,cnn_money_rollup,cnn_money_section,cnn_money_subsection,cnn_money_adunit5,cnn_money_spec,cnnbusinessedition_lob,cnnbusinessedition_brand,cnnbusinessedition_bizunit,cnnbusinessedition_sitename,cnnbusinessedition_sitesectionlevel1,cnnbusinessedition_sitesectionlevel2,cnn_money_site,cnn_money_rollup,cnn_money_section,cnn_money_subsection,cnn_money_adunit5,cnn_money_spec,cnnbusiness_lob,cnnbusiness_brand,cnnbusiness_bizunit,cnnbusiness_sitename,cnnbusiness_sitesectionlevel1,cnnbusiness_sitesectionlevel2,br_site,br_rollup,br_section,br_subsection,bleacherreport_keywords,drupalLanguage,drupalCountry,siteName,entityCreated,entityLangcode,entityStatus,entityUid,entityUuid,entityVid,entityName,entityType,entityBundle,entityId,entityTitle,userUid'.split(','), trim);\n    userAttr = _.map('userAgent,turner_guid,userUid'.split(','), trim);\n\n    /* Create a array of attributes striping any empty strings */\n    allAttr = _.without(pageAttr.concat(userAttr), '');\n\n    /* Configuration settings */\n    keepCase = 'undefined' === 'true';\n    omitKeys = 'false'.split(',');\n\n    /* Resolve Prefix */\n    prefix = libUtil.resolvePrefix('undefined', 'undefined',\n        'undefined');\n\n    /* Function to varify if attribute should be used */\n    isAllowed = function(value, whitelist) {\n        var i, len, str, x;\n        str = \"\" + value;\n        if (!((value != null) && str.length > 0)) {\n            return false;\n        }\n        for (i = 0, len = whitelist.length; i < len; i++) {\n            x = whitelist[i];\n            if (value.match(x) != null) {\n                return true;\n            }\n        }\n        return false;\n    };\n\n    /* Get a full list of attributes usting the dataLayer tool */\n    attributes = dataLayerIngester(dataObj, {\n        omitKeys: libUtil.removeFalsyStrings(omitKeys.concat(libUtil.EXCLUDE_KEYS_CONFIG)),\n        omitValues: libUtil.EXCLUDE_VALUES_CONFIG,\n        caseSensitive: keepCase,\n        useFullPath: 'true' === 'true',\n        useLastValue: 'false' === 'true',\n        customDelimited: [/./],\n        altDelimiter: ',',\n        userKeys: _.map(userAttr, function(exp) {\n            return new RegExp(\"(^|\\\\.)\" + exp + \"$\");\n        }),\n        optimizeNames: true\n    });\n\n    /* Only set Attributes in the allowed list */\n    allowedList = _.map(allAttr, function(name) {\n        return new RegExp(\"(_attr_|_attr_\" + prefix + \"|\\\\.)\" + (keepCase ?\n            name : libUtil.normalizeAttrName(name, {\n                removeDot: false\n            })) + \"$\");\n    });\n    toSet = {};\n    for (attr in attributes) {\n        if (!hasProp.call(attributes, attr)) continue;\n        value = attributes[attr];\n        if (isAllowed(attr, allowedList)) {\n            toSet[attr] = value;\n        }\n    }\n    toSet = Krux('prefix:attr', toSet, prefix);\n    Krux('set', toSet);\n}).call();\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 38449,
            "name": "CNN DTC",
            "content": "<script>\n    var slot;\n    (function() {\n        if (window.googletag && googletag.pubads() && googletag.pubads().getSlots()) {\n            var c1 = {};\n            var arr = googletag.pubads().getSlots();\n            var site = [\"cnn\", \"cnn_arabic\", \"cnn_international\", \"cnn_money\", \"espanol\"];\n\n            if (arr) {\n                for (var i = 0, l = arr.length; i < l; i++) {\n                    c1[arr[i].getAdUnitPath()] = (c1[arr[i].getAdUnitPath()] || 0) + 1;\n                }\n                slot = Object.keys(c1)[0] || null;\n                for (k in c1) slot = (c1[k] > c1[slot]) ? k : slot;\n            }\n\n            if (window.slot) { // Set string lowercase and split slot into an array \n                slot = slot.toLowerCase();\n                slot = slot.split('/');\n\n                // Changes slot from \"as\" to \"toonswim\"\n                slot[2] = slot[2] == 'as' ? 'toonswim' : slot[2];\n                // Changes slot from \"arabic\" to \"cnn_arabic\"\n                slot[2] = slot[2] == 'arabic' ? 'cnn_arabic' : slot[2];\n                // Changes slot from \"cnni\" to \"cnn_internation\"\n                slot[2] = slot[2] == 'cnni' ? 'cnn_international' : slot[2];\n                // Changes slot from \"cnnmoney\" to \"cnn_money\"\n                slot[2] = slot[2] == 'cnnmoney' ? 'cnn_money' : slot[2];\n                \n                // \"teamcoco\"\n                if(slot[2] === \"tbs\" && slot[4] === \"conan\"){\n                    slot = slot.splice(2)\n                };\n\n                for (var i = 0; i < site.length; i++) {\n\n                    if (slot[2] == site[i]) {\n                        // Using domain to dynamically scrape page attribute site \n                        Krux('set', 'page_attr_' + slot[2] + '_site', slot[2]);\n                        // Using domain to dynamically scrape page attribute rollup\n                        Krux('set', 'page_attr_' + slot[2] + '_rollup', slot[3]);\n                        // Using domain to dynamically scrape page attribute section \n                        Krux('set', 'page_attr_' + slot[2] + '_section', slot[4]);\n                        // Using domain to dynamically scrape page attribute subsection\n                        Krux('set', 'page_attr_' + slot[2] + '_subsection', slot[5]);\n                        // Using domain to dynamically scrape page attribute AdUnit 5 \n                        Krux('set', 'page_attr_' + slot[2] + '_adunit5', slot[6]);\n                        \n    \n                    };\n                };\n            };\n        };\n        \n        if(window.CNNMONEY && window.CNNMONEY.adTargets) spec = CNNMONEY.adTargets.spec;\n        if(window.CNN && window.CNN.adTargets) spec = CNN.adTargets.spec;\n        if(window.CNNI && window.CNNI.adTargets) spec = CNNI.adTargets.spec;\n                        \n        if (window.spec && slot && slot.length >= 3) {\n           Krux('set', 'page_attr_' + slot[2] + '_spec', spec);\n        };\n        \n    \n        \n        \n        if (window.queryString) {\n            Krux('set', 'page_attr_on_site_searcher', true)\n        };\n\n\n        if (window.CNN && window.CNN.contentModel && window.CNN.contentModel.analytics) {\n            var ct = CNN.contentModel.analytics.cap_topics;\n            if (ct) {\n                ct = ct.replace(/ /g, '');\n                Krux('set', 'page_attr_cap_topics', ct);\n            };\n        };\n\n    })();\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 38581,
            "name": "Omniture DTC (CNN.com)",
            "content": "<script>\n(function() {\n    Krux('scrape', { \"page_attr_cookie_last5stocks\": {cookie: \"last5stocks\"}});\n\n    if(window.slot) {\n\n        // get namespace;\n        var ns = (function() {\n                        var exceptions, jsmdmap, key1, key2, val1, val2, _ref;\n                        if (window._jsmd_default) {\n                            jsmdmap = _jsmd_default.map;\n                            for (key1 in jsmdmap) {\n                                val1 = jsmdmap[key1];\n                                for (key2 in val1) {\n                                    val2 = val1[key2];\n                                    if (ns = val2 != null ? (_ref = val2.settings) != null ? _ref.visitorNamespace : void 0 : void 0) {\n                                        return ns;\n                                    }\n                                }\n                            }\n                        }\n                        return exceptions[Krux('get', 'site')];\n                })();\n\n        if(!ns) return;\n        //get site\n        var site = slot[2];\n        // get pixel\n        var pixel = window[\"s_i_\" + ns] || window[\"s_i_1_\" + ns] || window[\"s_i_0_\" + ns];\n        // regex for pixel source\n        var lookFor = \"&h1=(.*?)&\";\n        // check if pixel source matches the regex\n        var match =  (pixel && pixel.src) ? pixel.src.match(lookFor) : null;\n\n        if (match) {\n            var parts = decodeURIComponent(match[1]).split('|');\n            var keys = ['lob', 'brand', 'bizunit', 'sitename', 'sitesectionlevel1', 'sitesectionlevel2'];\n            for (var i = 0, l = keys.length;i < l; i++) {\n                var key = keys[i];\n                if(parts[i]) Krux('set', \"page_attr_\" + site + \"_\" + key, parts[i]);\n            }\n        }\n    }\n\n})();\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 41813,
            "name": "Freewheel User Match - International Sites",
            "content": "<script>\n\n(function()\n{\n\tvar protocol = window.location.protocol == 'https:' ? 'https:' : 'http:';\n\tvar protocol1 = window.location.protocol == 'https:' ? 'https%3A' : 'http%3A';\n\n    new Image().src =protocol+\"//bea4.cnn.com/ad/u?mode=echo&cr=https%3A%2F%2Fbeacon.krxd.net%2Fusermatch.gif%3Fpartner%3Dfreewheel%26partner_uid%3D%23%7Buser.id%7D\";\n})();\n\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": null,
            "template_replacement": true,
            "internal": false,
            "criteria": ["and", ["and", ["and", ["<=", "$frequency", 3]]]],
            "collects_data": true
        }],
        "usermatch_tags": [{
            "id": 6,
            "name": "Google User Match",
            "content": "<script>\n(function() {\n  if (Krux('get', 'user') != null) {\n      new Image().src = 'https://usermatch.krxd.net/um/v2?partner=google';\n  }\n})();\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 1,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 21,
            "name": "Acxiom",
            "content": "<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\n      var i = new Image();\n      i.src = liveramp_url;      \n  }\n})();\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 1,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 23,
            "name": "BlueKai S2S",
            "content": "<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var bk_prefix = location.protocol == 'https:' ? \"stags\" : \"tags\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&partner=bluekai&bk_uuid=$_BK_UUID\");\r\n            var kurl = prefix + \"//beacon.krxd.net/usermatch.gif?\" + kurl_params;\r\n            var bk_params = 'id=' + kuid;\r\n            var bk_url = '//' + bk_prefix + '.bluekai.com/site/26357?' + bk_params + '&redir=' + kurl;\r\n            var i = new Image();\r\n            i.src = bk_url;\r\n        }\r\n    })();\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 1,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 43,
            "name": "SpotXchange user match",
            "content": "<script>\n(function(){\n\n   var kuid = Krux('get', 'user');\n   if (kuid) {\n      var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n      var kurl = prefix + encodeURIComponent('//beacon.krxd.net/usermatch.gif?partner=spotxchange&partner_uid=<spotx_audience_id>');\n      var spotxchange_url = prefix + '//sync.search.spotxchange.com/audience_sync/9?redir=' + kurl;\n      new Image().src = spotxchange_url;\n   }\n\n})();\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 1,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 49,
            "name": "FreeWheel User Match",
            "content": "<script>\r\n\r\n(function()\r\n{\r\n\tvar protocol = window.location.protocol == 'https:' ? 'https:' : 'http:';\r\n\tvar protocol1 = window.location.protocol == 'https:' ? 'https%3A' : 'http%3A';\r\n\r\n    new Image().src =protocol+\"//bea4.v.fwmrm.net/ad/u?mode=echo&cr=\"+protocol1+\"%2F%2Fbeacon.krxd.net%2Fusermatch.gif%3Fpartner%3Dfreewheel%26partner_uid%3D%23%7Buser.id%7D\";\r\n})();\r\n\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 1,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 51,
            "name": "Eyeota User Match",
            "content": "<script>\r\n(function(){\r\n        var kuid = Krux('get', 'user');\r\n        var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\r\n\r\n        if (kuid) {\r\n           var url = prefix + '//ps.eyeota.net/match?bid=i0r4o4v&uid=' + kuid;\r\n           (new Image()).src = url;\r\n        }\r\n})();\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 1,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 71,
            "name": "AppNexus Connect",
            "content": "<script>\r\n(function(){\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl = prefix + '//beacon.krxd.net/usermatch.gif?adnxs_uid=$UID';\r\n            var appnexus_url = '//ib.adnxs.com/getuid?' + kurl\r\n            var i = new Image();\r\n            i.src = appnexus_url;\r\n        }\r\n})();\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 1,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 76,
            "name": "LiveRamp User Matching",
            "content": "<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\r\n      var i = new Image();\r\n      i.src = liveramp_url;     \r\n  }\r\n})();\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 1,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 10,
            "name": "Rubicon User Match",
            "content": "<script>\r\n(function(){\r\n  if (window.Krux) {\r\n    var kuid = window.Krux('get', 'user');\r\n    if (kuid && typeof kuid != 'undefined') {\r\n       var rubicon_url = 'https://token.rubiconproject.com/token?pid=27384&puid=' + kuid;\r\n       var i = new Image();\r\n       i.src = rubicon_url;\r\n    }\r\n  }\r\n})();\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 2,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 26,
            "name": "Navegg",
            "content": "<script>\r\n(function(){\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n           var url = \"//sync.navdmp.com/sync?prtid=16&kruxid=\";\r\n           var i = new Image();\r\n           i.src = url + kuid;\r\n        }\r\n})();\r\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 3,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 72,
            "name": "AppNexus Extension User Match",
            "content": "<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  var cbust = Math.round(new Date().getTime() / 1000);\n  if (kuid) {\n    Krux('require:http').pixel({\n      url: \"//ib.adnxs.com/pxj\",\n      data: {\n          bidder: '140',\n          seg: '381342',\n          action: \"setuid('\" + kuid + \"')\",\n          bust: cbust\n      }});\n  }\n  })();\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 3,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 81,
            "name": "Bombora",
            "content": "<script>\n\n(function () {\n_ml = window._ml || {};\n_ml.pub = '748';\n_ml.redirect = '//beacon.krxd.net/usermatch.gif?partner=madisonlogic&partner_uid=[PersonID]';\nvar s = document.getElementsByTagName('script')[0], cd = new Date(), mltag = document.createElement('script');\nmltag.type = 'text/javascript'; mltag.async = true;\nmltag.src = '//ml314.com/tag.aspx?' + cd.getDate() + cd.getMonth() + cd.getFullYear();\ns.parentNode.insertBefore(mltag, s);\n})();\n\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 3,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }, {
            "id": 85,
            "name": "IXI Digital Open Market",
            "content": "<script>\n(function(){\n    var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n    new Image().src = prefix + '//kr.ixiaa.com/C726AB29-0470-440B-B8D2-D552CED3A3DC/a.gif';\n})();\n</script>",
            "target": null,
            "target_action": "append",
            "timing": "onload",
            "method": "document",
            "priority": 3,
            "template_replacement": false,
            "internal": true,
            "criteria": [],
            "collects_data": true
        }],
        "link": {
            "adslots": {},
            "bidders": {}
        }
    };

    for (var i = 0, tags = config.tags, len = tags.length, tag;
        (tag = tags[i]); ++i) {
        if (String(tag.id) in cs) {
            tag.content = cs[tag.id];
        }
    }


    var esiGeo = String(function() {
        /*
           <esi:include src="/geoip_esi"/>
          */
    }).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

    if (esiGeo) {
        log('Got a request for:', esiGeo, 'adding geo to config.');
        try {
            config.geo = w.JSON.parse(esiGeo);
        } catch (__) {

            log('Unable to parse geo from:', config.geo);
            config.geo = {};
        }
    }



    var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

    if (!proxy || true) {


        load('//cdn.krxd.net/ctjs/controltag.js.05f9d0dad02f8a1b0b028b868bc3a3e2', function() {
            log('Loaded stable controltag resource');
            Krux('config', config);
        });

    }

})(window, (function() {
    var obj = {};

    return obj;
})());