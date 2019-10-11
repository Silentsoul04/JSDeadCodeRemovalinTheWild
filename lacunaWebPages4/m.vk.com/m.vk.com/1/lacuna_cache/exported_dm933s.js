
        (function() {
            window.isMVK = true;
            window.isNewNavigation = true;
            window.isCustomScroll = false;
            window.isNewMail = true;
            window.isNewLongpoll = true;
            window.audioSubscribe = false;
            window.isArticleWebView = false;
            window.audioAdsConfig = {
                "_": "_"
            };

            var vkElem = document.querySelector('.vk');
            var vkClass = vkElem.getAttribute('class');

            var supports = {
                js: true,
                flex: window.CSS && CSS.supports && (
                    CSS.supports('display', 'flex') ||
                    CSS.supports('display', '-webkit-flex') ||
                    CSS.supports('display', '-ms-flexbox')
                )
            };

            supports.js && (vkClass = vkClass.replace('vk_js_no', 'vk_js_yes'));
            supports.flex && (vkClass = vkClass.replace('vk_flex_no', 'vk_flex_yes'));
            vkElem.setAttribute('class', vkClass);


        })();
    