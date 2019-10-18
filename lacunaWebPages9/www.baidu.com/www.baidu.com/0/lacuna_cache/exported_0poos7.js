
        B.init(function() {
            require.config({
                "paths": {
                    "wiseatom/afterclk/pack": "//m.baidu.com/se/static/wiseatom/afterclk/pack_a711a86",
                    "wiseatom/banner/pack": "//m.baidu.com/se/static/wiseatom/banner/pack_a13a230",
                    "wiseatom/feedback/pack": "//m.baidu.com/se/static/wiseatom/feedback/pack_1018f1d",
                    "wiseatom/headlogo/pack": "//m.baidu.com/se/static/wiseatom/headlogo/pack_4fe95f4",
                    "wiseatom/headsearch/pack": "//m.baidu.com/se/static/wiseatom/headsearch/pack_458ef38",
                    "wiseatom/indentification/pack": "//m.baidu.com/se/static/wiseatom/indentification/pack_1cc30f3",
                    "wiseatom/pagenav/pack": "//m.baidu.com/se/static/wiseatom/pagenav/pack_fa78789",
                    "wiseatom/personalcenter/pack": "//m.baidu.com/se/static/wiseatom/personalcenter/pack_bc18b69",
                    "wiseatom/relative/pack": "//m.baidu.com/se/static/wiseatom/relative/pack_5d54384",
                    "wiseatom/searchbox/pack": "//m.baidu.com/se/static/wiseatom/searchbox/pack_fcf7aa1",
                    "wiseatom/tablink/pack": "//m.baidu.com/se/static/wiseatom/tablink/pack_dc2dcd4",
                    "wiseatom/test/pack": "//m.baidu.com/se/static/wiseatom/test/pack_371d6d1",
                    "wiseatom/toprq/pack": "//m.baidu.com/se/static/wiseatom/toprq/pack_9a29370",
                    "wiseatom/voicetips/pack": "//m.baidu.com/se/static/wiseatom/voicetips/pack_7af3a70"
                },
                "bundles": {
                    "wiseatom/afterclk/pack": ["wiseatom/afterclk/main"],
                    "wiseatom/banner/pack": ["wiseatom/banner/main"],
                    "wiseatom/feedback/pack": ["wiseatom/feedback/main"],
                    "wiseatom/headlogo/pack": ["wiseatom/headlogo/main"],
                    "wiseatom/headsearch/pack": ["wiseatom/headsearch/main"],
                    "wiseatom/indentification/pack": ["wiseatom/indentification/main"],
                    "wiseatom/pagenav/pack": ["wiseatom/pagenav/main"],
                    "wiseatom/personalcenter/pack": ["wiseatom/personalcenter/asidebar-bottom/main", "wiseatom/personalcenter/asidebar/main", "wiseatom/personalcenter/assets/js/wrapperControl", "wiseatom/personalcenter/main"],
                    "wiseatom/relative/pack": ["wiseatom/relative/main", "wiseatom/relative/swipe", "wiseatom/relative/views/carousel/carousel-frame", "wiseatom/relative/views/carousel/indicator"],
                    "wiseatom/searchbox/pack": ["wiseatom/searchbox/assets/js/callapp", "wiseatom/searchbox/assets/js/searchbox", "wiseatom/searchbox/assets/js/sug", "wiseatom/searchbox/assets/js/throttle", "wiseatom/searchbox/main", "wiseatom/searchbox/views/callapp/callapp", "wiseatom/searchbox/views/callapp/downapp", "wiseatom/searchbox/views/callapp/newcallapp", "wiseatom/searchbox/views/camera-icon", "wiseatom/searchbox/views/cross", "wiseatom/searchbox/views/sug/item-icon", "wiseatom/searchbox/views/sug/item-operation", "wiseatom/searchbox/views/sug/sug-item", "wiseatom/searchbox/views/sug/sug-main", "wiseatom/searchbox/views/sug/touch-color"],
                    "wiseatom/tablink/pack": ["wiseatom/tablink/main"],
                    "wiseatom/test/pack": ["wiseatom/test/main"],
                    "wiseatom/toprq/pack": ["wiseatom/toprq/main"],
                    "wiseatom/voicetips/pack": ["wiseatom/voicetips/main"]
                }
            });
            require.config({
                "paths": {
                    "indexatom/recommend-daily/pack": "https://gss0.bdstatic.com/5bd1bjqh_Q23odCf/static/indexatom/recommend-daily/pack_04b810b"
                },
                "bundles": {
                    "indexatom/recommend-daily/pack": ["indexatom/recommend-daily/main", "indexatom/recommend-daily/recommend-arrow/main", "indexatom/recommend-daily/recommend-event/main", "indexatom/recommend-daily/recommend-graphic/main", "indexatom/recommend-daily/recommend-pano/main", "indexatom/recommend-daily/recommend-station/main", "indexatom/recommend-daily/recommend-video/main"]
                }
            });
        });
    