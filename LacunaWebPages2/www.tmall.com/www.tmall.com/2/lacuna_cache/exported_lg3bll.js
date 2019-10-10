
        (function(pageCode) {
            var script = document.createElement('script');
            script.src = "//g.alicdn.com/mtb/lib-smartbanner-plus-loader/smartbanner-loader.js?t=" + parseInt((+new Date() / 300000), 10);
            script.onload = function() {
                var sbLoader = window['@ali/lib-smartbanner-plus-loader'];
                sbLoader.init({
                    bizKey: 'taobao',
                    pageCode: pageCode
                });
                sbLoader.ready(function(smartbanner) {
                    var bizText = smartbanner.getBizText(pageCode);
                    smartbanner.sbLogic(bizText);
                });
            };
            document.body.appendChild(script);
        })('mallIndex');
    