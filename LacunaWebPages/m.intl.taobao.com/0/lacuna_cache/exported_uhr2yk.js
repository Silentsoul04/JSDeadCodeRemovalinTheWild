
        (function() {
            function Bee() {
                var loadStatusArr = []

                function sendLog() {
                    console.log('-----')
                    if (loadStatusArr.length === 3) {
                        TES && TES.entries && TES.entries()
                    }
                }

                var taobaoTWScript = document.createElement('script');
                taobaoTWScript.src = '//www.taobao.tw/wh/fragment/i/tw/networktest?spm=0.7832054.0.0.5294c309jXJ86L&hybrid=1&wh_showError=true';
                document.body.appendChild(taobaoTWScript);
                taobaoTWScript.addEventListener('load', function() {
                    loadStatusArr.push(true)
                    sendLog()
                })

                var loadStatusArr = []
                var imgOvsDom = new Image();
                imgOvsDom.src = '//img-ovs.alicdn.com/p/f0efe89b89af2381451be6f270c80e8a.jpg';
                imgOvsDom.addEventListener('load', function() {
                    loadStatusArr.push(true)
                    sendLog()
                })


                var loadStatusArr = []
                var gOvsDom = document.createElement('script');
                document.body.appendChild(gOvsDom);
                gOvsDom.src = '//g-ovs.alicdn.com/code/lib/lodash.js/4.17.15/lodash.core.js';
                gOvsDom.addEventListener('load', function() {
                    loadStatusArr.push(true)
                    sendLog()
                })
            }
            window.addEventListener('load', Bee)
        })();
    