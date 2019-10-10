
            var GLOBAL_WXSQ_HEADERCONFIG = {
                "SMARTBOX": "201910101124",
                "SEARCHCSS": "//wq.360buyimg.com/c/=/fd/h5/base/gb/css/gb.min_10a01a62.css,/fd/h5/base/search/css/search.min_a992c9be.css",
                "HUIRATE": "0",
                "UMP": "4",
                "couponstatus": "1",
                "sqHome": "//wq.jd.com/sqportal/index",
                "wxHome": "//wq.jd.com/wxportal/index",
                "rongzai": "00000000000000000000",
                "wqcoss": "1",
                "HUIPIN": "11",
                "SMARTBOXCT": "11249b54",
                "CLOSE_SMARTBOX": false,
                "CLOSE_SMARTBOX_M": false,
                "STATIC_ITEM_LINK": "0",
                "STATIC_ITEM_LINK_M": "0",
                "SMARTBOX_GRAY": "99",
                "SMARTBOX_GRAY_M": "0",
                "SMARTBOX_HISGRAY": "99",
                "SEARCH_WHITE_LIST": "nikiyun|ambbycruel_m|jd_52ace0384e2c8|jd_754cdc9304d40|了辽123|wen9717|Candy75446481|113452574-250558|j7jordan|pumpking911|jabeye003",
                "SMARTBOX_OPATM": false,
                "SMARTBOX_BGIMG": "",
                "SMARTBOX_RGIMG": "",
                "SMARTBOX_LGIMG": "",
                "URLTRANSFORMRULE": [{
                    ruleType: "page",
                    context: "refer",
                    operator: "match",
                    input: "https?:\/\/wqs\.jd\.com\/event\/m\/.*",
                    compareValue: "",
                    expect: "1",
                    regexp: /^https?:\/\/(wq|wqitem)\.jd\.com\/item\/view\?sku=(\d+)/,
                    replacement: "//item.m.jd.com/ware/view.action?wareId=$2",
                    enable: "1"
                }, {
                    ruleType: "page",
                    context: "url",
                    operator: "match",
                    input: "\/\/wq\.jd\.com\/item\/view",
                    compareValue: "",
                    expect: "1",
                    regexp: /\/\/wq\.jd\.com\/item\/view/,
                    replacement: "//wqitem.jd.com/item/view",
                    enable: "1"
                }, {
                    ruleType: "page",
                    context: "userAgent",
                    operator: "match",
                    input: "(\/\/h5\.m\.jd\.com\/active\/)|(\/\/pro\.m\.jd\.com\/mall\/active\/)",
                    compareValue: "",
                    expect: "1",
                    regexp: /(\/\/h5\.m\.jd\.com\/active\/)|(\/\/pro\.m\.jd\.com\/mall\/active\/)/,
                    replacement: "//pro.m.jd.com/wq/active/",
                    enable: "1"
                }, {
                    ruleType: "cgi",
                    context: "url",
                    operator: "match",
                    input: "wq\.jd\.com\/mcoss",
                    compareValue: "",
                    expect: "1",
                    regexp: /wq\.jd\.com\/mcoss/,
                    replacement: "wqcoss.jd.com/mcoss",
                    enable: "1"
                }, {
                    ruleType: "page",
                    context: "url",
                    operator: "match",
                    input: "wqs.jd.com/event",
                    compareValue: "",
                    expect: "1",
                    regexp: /wqs\.jd\.com\/event/,
                    replacement: "wqp.jd.com/wqsproxy/event",
                    enable: "0"
                }, {
                    ruleType: "page",
                    context: "url",
                    operator: "match",
                    input: "\/\/wq(item)?\.jd\.com\/item\/view\?",
                    compareValue: "",
                    expect: "1",
                    regexp: /\/\/wq(item)?\.jd\.com\/item\/view\?/,
                    replacement: "//wqs.jd.com/item/jd.shtml?",
                    enable: "0"
                }]
            };
            GLOBAL_WXSQ_HEADERCONFIG.UMP !== "" && (window.GLOBAL_UMP_PERCENT = GLOBAL_WXSQ_HEADERCONFIG.UMP);
            window.GLOBAL_USEWQCOSS = GLOBAL_WXSQ_HEADERCONFIG.wqcoss;
            window.GLOBAL_RONGZAI_COLLECTION = GLOBAL_WXSQ_HEADERCONFIG.rongzai;
            window.GLOBAL_USECOUPONSTATUS = GLOBAL_WXSQ_HEADERCONFIG.couponstatus;
        