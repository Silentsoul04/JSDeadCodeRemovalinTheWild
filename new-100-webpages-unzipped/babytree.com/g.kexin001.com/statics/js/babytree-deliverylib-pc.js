/**
 * 广告投放js库
 * @author Wayne
 * 2017-08-04
 */
(function(_win, _doc) {
    var CNT_PREFIX = "BBTAD-";
    var MASK_POSTFIX = "-MASK";
    var showAdTag = true;
    var deviceInfo = '';
    var callBackFuncs = []; //广告数据为空的时候回调函数
    var adPositions = [];
    var randomRegionId = ''; // 随机出广告 指定广告id
    var assignAdId = 'assignAdId'; // url参数，指定刷的广告id参数，值为 [1,2,3]   例如  assignAdId=[2051,2642]
    var BBT_AD_SRC = {
        BBAD: {
            url: "//g.kexin001.com/qa.do",
            callback: "window.__BBT_adr",
            callback_random: "window.__BBT_adr_rd"
        }
    };

    function QueryBabyTreeAds() {}

    QueryBabyTreeAds.prototype = {
        constructor: QueryBabyTreeAds,
        queryMultiAds: function(ads) {
            for (var i = 0; i < ads.length; i++) {
                query(ads[i], false);
            }
        },
        querySingleAd: function(ad) {
            query(ad, false);
        },
        queryRandomAd: function(ad) {
            adPositions.push({
                adId: ad.rgid
            });
            query(ad, true);
        },
    };

    function buildContent(data, cu, cntId) {
        // var cc = eval("(" + data.templateContent + ")");
        var cc = JSON.parse(data.templateContent);
        var content = cc.content;
        var adId = "ADID" + data.adId;
        var materials = data.materials;
        var tagLeft = 8;
        for (var i = 0; i < materials.length; i++) {
            var ma = materials[i];
            if (ma.materialType == "URL" && content.indexOf("_bbtngo_") > 0) {
                if (ma.materialExt) {
                    content = content.replace("{" + i + "}", "'', '" + ma.material + "','" + adId + "','" + ma.materialExt + "'");
                } else {
                    content = content.replace("{" + i + "}", "'','" + ma.material + "','" + adId + "'");
                }
            } else {
                content = content.replace("{" + i + "}", ma.material);
            }
        }
        if (showAdTag) {
            var tagHtml = '<span style="position: absolute;z-index: 998;left: ' + tagLeft + 'px;border-radius: 5px;padding: 0 3px;' +
                'bottom: 6px;color:#ffffff; font-size: 6px;background-color: rgba(0,0,0,0.2);">广告</span>';
            if ($(cntId)) {
                $(cntId).style.position = 'relative';
            }
            content = content + tagHtml;
        }
        _win.BBTAD_CLICKTRACK_URL = {};
        _win.BBTAD_CLICKTRACK_URL[adId] = [data.babytreeClickUrls, data.clickUrl3rd];
        return content;
    }

    function createScriptTag(_src) {
        var r = _doc.createElement("script"),
            q = _doc.getElementsByTagName("script")[0];
        r.charset = "utf-8";
        r.type = "text/javascript";
        r.async = true;
        r.src = _src;
        q.parentNode.insertBefore(r, q);
    }

    function query(param, random) {
        try {
            var url = _win.location.href;
            var regex = new RegExp(assignAdId + "=([^&]*)", "i");
            if (url.match(regex)) {
                var ids = JSON.parse(url.match(regex)[1] || '[]');
                if (ids.length > 0) {
                    if (ids.indexOf(param.rgid) < 0) {
                        return;
                    }
                }
            }

            var ts = new Date();
            ts = parseInt(ts.getTime() / 3600 * 1000);
            var srvConf = BBT_AD_SRC[param.srv];
            var AppABVersion = (param.AppABVersion || '') ? ",'AppABVersion':'" + param.AppABVersion + "'" : '';
            var district = (param.district || '') ? ",'district':'" + param.district + "'" : '';
            if (param.noDataCallBackFunc) {
                callBackFuncs.push({
                    rgid: param.rgid,
                    callFunc: param.noDataCallBackFunc
                });
            }
            // var extQueryData = buildExtQueryData();
            var jsonpUrl = encodeURI(srvConf.url + "?regionId=" + param.rgid + "&data=" + buildExtQueryData(AppABVersion, district) + "&st=" + param.srv + "&callback=" + (random ? srvConf.callback_random : srvConf.callback) + "&ts=" + ts);
            createScriptTag(jsonpUrl);
        } catch (e) {}
    }

    function buildExtQueryData(AppABVersion, district) {
        var eId = 0,
            bbd = '',
            content_id = '',
            appName = '',
            appVersion = '',
            token = (_win.$$DEVICE_UNIQUE_ID || '').length > 64 ? '' : (_win.$$DEVICE_UNIQUE_ID || ''),
            //新增 参数 2018-7-6
            latitude = '',
            longitude = '',
            deviceLbs = '',
            os = '',
            imei = '',
            idfa = '',
            androidId = '',
            userId = '';
        try {
            var params = _win.location.search;
            if (params && params.length > 1) {
                var paramArray = params.substring(1, params.length).split("&");
                for (var i = 0; i < paramArray.length; i++) {
                    if (parseParam(paramArray[i], "random-regionId")) {
                        randomRegionId = parseParam(paramArray[i], "random-regionId");
                        continue;
                    }
                    if (parseParam(paramArray[i], "client-baby-status")) {
                        eId = parseParam(paramArray[i], "client-baby-status");
                        continue;
                    }
                    if (parseParam(paramArray[i], "bpreg-brithday")) {
                        bbd = parseParam(paramArray[i], "bpreg-brithday");
                        continue;
                    }
                    if (parseParam(paramArray[i], "content_id")) {
                        content_id = parseParam(paramArray[i], "content_id");
                        continue;
                    }
                    if (parseParam(paramArray[i], "babytree-app-id")) {
                        appName = parseParam(paramArray[i], "babytree-app-id");
                        continue;
                    }
                    if (parseParam(paramArray[i], "babytree-app-version")) {
                        appVersion = parseParam(paramArray[i], "babytree-app-version");
                        continue;
                    }
                    //新增 参数 2018-7-6
                    if (parseParam(paramArray[i], "babytree-app-latitude")) {
                        latitude = parseParam(paramArray[i], "babytree-app-latitude");
                        continue;
                    }
                    if (parseParam(paramArray[i], "babytree-app-longitude")) {
                        longitude = parseParam(paramArray[i], "babytree-app-longitude");
                        continue;
                    }
                    if (parseParam(paramArray[i], "babytree-client-type")) {
                        os = parseParam(paramArray[i], "babytree-client-type") === 'android' ? "1" : "2";
                        continue;
                    }
                    if (parseParam(paramArray[i], "babytree-app-imei")) {
                        imei = parseParam(paramArray[i], "babytree-app-imei");
                        continue;
                    }
                    if (parseParam(paramArray[i], "idfa")) {
                        idfa = parseParam(paramArray[i], "idfa");
                        continue;
                    }
                    if (parseParam(paramArray[i], "android-id")) {
                        androidId = parseParam(paramArray[i], "android-id");
                        continue;
                    }
                    if (parseParam(paramArray[i], "enc-user-id")) {
                        userId = parseParam(paramArray[i], "enc-user-id");
                        continue;
                    }

                }
            }
        } catch (e) {}
        if (latitude && longitude) {
            deviceLbs = latitude + 'x' + longitude;
        }
        deviceInfo = '&os=' + os + '&imei=' + imei + '&idfa=' + idfa;
        return "{'exactId':'" + eId + "', 'babyBirthday':'" + bbd + "', 'appName':'" +
            appName + "', 'appVersion':'" + appVersion + "', 'deviceLbs':'" +
            deviceLbs + "', 'os':'" + os + "', 'imei':'" + imei + "', 'idfa':'" +
            idfa + "', 'androidId':'" + androidId + "', 'userId':'" + userId + "' " + district + "}&ext_params={'content_id':'" +
            content_id + "', 'token':'" + token + "' " + AppABVersion + "}";
    }

    function parseParam(v, paramName) {
        if (v.indexOf(paramName + "=") > -1) {
            return v.substring(paramName.length + 1, v.length);
        }
        return false;
    }

    function doPvTrack(data, ecu) {
        var stu = data.impressionUrl || '';
        var real = data.viewUrl || '';
        var curTs = (new Date()).getTime();
        if (stu) {
            stu += "&adEvent=1&localTs=" + curTs + "&r=" + ecu + deviceInfo;
            createScriptTag(stu);
        }
        if (real) {
            real += "&adEvent=3&localTs=" + curTs + "&r=" + ecu + deviceInfo;
            createScriptTag(real);
        }
        do3rdPv(data.impressionUrl3rd);
        do3rdPv(data.viewUrl3rd);
    }

    function do3rdPv(t3rdUrls) {
        try {
            if (t3rdUrls) {
                for (var i = 0; i < t3rdUrls.length; i++) {
                    if (t3rdUrls[i].length > 0) {
                        createScriptTag(t3rdUrls[i]);
                    }
                }
            }
        } catch (e) {}
    }

    function ngo(t, url, adId, urlExt) {
        if (urlExt) {
            urlExt = urlExt + deviceInfo;
            createScriptTag(urlExt);
        } else {
            url = url + deviceInfo;
        }
        //发送点击监测和第三方点击监测
        try {
            if (adId && _win.BBTAD_CLICKTRACK_URL && _win.BBTAD_CLICKTRACK_URL[adId]) {
                if (_win.BBTAD_CLICKTRACK_URL[adId][0]) {
                    save2Local(_win.BBTAD_CLICKTRACK_URL[adId][0]);
                    //do3rdPv(_win.BBTAD_CLICKTRACK_URL[adId][0]);
                }
                if (_win.BBTAD_CLICKTRACK_URL[adId][1]) {
                    save2Local(_win.BBTAD_CLICKTRACK_URL[adId][1]);
                    //do3rdPv(_win.BBTAD_CLICKTRACK_URL[adId][1]);
                }
            }
        } catch (e) {}
        if (_win.adAction) {
            _win.adAction(t, url);
        } else {
            _win.location.href = url;
        }
    }

    function save2Local(urls) {
        //if not support localStorage send urls async as workaround
        if (_win.localStorage) {
            var store = _win.localStorage;
            if (urls) {
                var urlsStr = "";
                for (var i = 0; i < urls.length && urls[i].length > 0; i++) {
                    urlsStr = urlsStr + "||" + urls[i];
                }
                var oldUrls = store.getItem("BBTAD_CLICKTRACK_URLS");
                if (oldUrls) {
                    urlsStr = oldUrls + "||" + urlsStr;
                }
                store.setItem("BBTAD_CLICKTRACK_URLS", urlsStr);
            }
        } else {
            do3rdPv(urls);
        }
    }

    function asyncSendClkTrack() {
        if (_win.localStorage) {
            var store = _win.localStorage;
            var urlstr = store.getItem("BBTAD_CLICKTRACK_URLS");
            store.removeItem("BBTAD_CLICKTRACK_URLS");
            if (urlstr) {
                var urls = urlstr.split("||");
                do3rdPv(urls);
            }
        }
    }

    function getCntUrl() {
        var url = "";
        try {
            url = _win.ifReferer || _win._doc.location.href;
        } catch (e) {}
        return url;
    }

    function $(i) {
        return _doc.getElementById(i);
    }

    // 回调函数 返回指定广告位
    function __BBT_adr(d) {
        if (d && d.status && d.status == 200 && d.data && d.data.length && d.data.length > 0) {
            var data = d.data[0];
            showAdTag = (data.isCommercial || 0) === 1;
            //get the frame url which the ad in
            var cu = encodeURIComponent(getCntUrl());
            var cntId = CNT_PREFIX + "BBAD-" + data.groupId;
            var adContent = buildContent(data, cu, cntId);
            if (adContent && adContent.length > 1 && $(cntId)) {
                $(cntId).innerHTML = adContent;
                doPvTrack(data, cu);
            }
        } else {
            try {
                var regionId = parseInt(d.message);
                if (regionId > 0) {
                    for (var i = 0; i < callBackFuncs.length; i++) {
                        if (callBackFuncs[i].rgid == regionId && callBackFuncs[i].callFunc) {
                            callBackFuncs[i].callFunc(regionId);
                            break;
                        }
                    }
                }
            } catch (e) {}
        }
    }

    //回调函数 随机返回一个广告位
    function __BBT_adr_rd(d) {
        if (d && d.status && d.status == 200 && d.data && d.data.length && d.data.length > 0) {
            var min = 0,
                max = d.data.length - 1;
            //当前返回的广告id集合
            var trgids = d.data.map(function(item) {
                return item.groupId;
            });
            var idStr = '';
            //找到都包含 返回广告id 的广告 拼接id
            for (var i = 0; i < adPositions.length; i++) {
                var tids = adPositions[i].adId || [];
                var match = trgids.every(function(item) {
                    return tids.indexOf(item) >= 0;
                });
                if (match) {
                    idStr = tids.join('-');
                    break;
                }
            }
            var data, rd = Math.floor(Math.random() * (max - min + 1) + min); //随机数
            // 是否有指定的广告位Id
            if (randomRegionId) {
                data = d.data.find(function(item) {
                    return item.groupId == randomRegionId;
                });
            }
            if (!data) {
                data = d.data[rd];
            }
            showAdTag = (data.isCommercial || 0) === 1;
            var cu = encodeURIComponent(getCntUrl());
            var cntId = CNT_PREFIX + "BBAD-" + idStr;
            var adContent = buildContent(data, cu, cntId);
            if (adContent && adContent.length > 1 && $(cntId)) {
                $(cntId).innerHTML = adContent;
                doPvTrack(data, cu);
            }
        }
    }

    _win._bbtngo_ = ngo;
    _win.__BBT_adr = __BBT_adr;
    _win.__BBT_adr_rd = __BBT_adr_rd;
    _win.QueryBabyTreeAds = QueryBabyTreeAds;


})(window, document);