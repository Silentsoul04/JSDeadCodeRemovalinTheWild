
        ! function(_window, _document) {
            var OB_ADV_ID = '006eb1f8dded486e0974a6b4a7b9805f5f',
                api, tag, script;
            if (_window.obApi) {
                return;
            }
            api = _window.obApi = function() {
                var a = window.obApi;
                a.dispatch ? a.dispatch.apply(a, arguments) : a.queue.push(arguments);
            };
            api.version = '1.0';
            api.loaded = true;
            api.marketerId = OB_ADV_ID;
            api.queue = [];
            tag = _document.createElement('script');
            tag.async = true;
            tag.src = '//amplify.outbrain.com/cp/obtp.js';
            tag.type = 'text/javascript';
            script = _document.getElementsByTagName('script')[0];
            script.parentNode.insertBefore(tag, script);
        }(window, document);
        obApi('track', 'PAGE_VIEW');
        document.addEventListener('click', function(event) {
            var el = event.target;
            if (el && (el.tagName === 'A' || (el.parentNode && el.parentNode.tagName === 'A'))) {
                obApi('track', 'Exit Link Clicks');
            }
        });
    