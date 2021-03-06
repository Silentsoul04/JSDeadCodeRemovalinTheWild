// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:8125/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}

            window.ux = window.ux || {};
            window.ux.eldorado = window.ux.eldorado || {};
            window.ux.fns = [];
            window.ux.ready = function uxReadyPreScriptsLoaded(fn) {lacuna_lazy_load("lacuna_cache/exported_kucj5i.js[200:255]", functionData => eval(functionData))};
            window.ux.eldorado.readyFns = [];
            window.ux.eldorado.ready = function eldoradoReadyPreScriptsLoaded(fn) {
                window.ux.eldorado.readyFns.push(fn);
            };
            window.ux.eldorado.shopperData = function shopperDataPreQueue(fn) {lacuna_lazy_load("lacuna_cache/exported_kucj5i.js[534:738]", functionData => eval(functionData))};
            window.ux.eldorado._onDelayedJSLoaded = function _onDelayedJSLoaded(err) {
                var fn;
                while (fn = window.ux.eldorado._onDelayedJSLoadedFns.shift()) {
                    try {
                        fn(err);
                    } catch (e) {}
                }
            };
            window.addEventListener('load', function loadDeferredScripts() {
                var el, els = [],
                    numScriptsRequested = 6;

                function createScript(src) {
                    var el = document.createElement('script');
                    el.async = false;
                    el.onload = checkIfLoadComplete;
                    el.onerror = handleLoadError;
                    el.src = src;
                    return el;
                }

                function checkIfLoadComplete() {
                    if (!--numScriptsRequested) {
                        window.ux.eldorado._onDelayedJSLoaded();
                    }
                }

                function handleLoadError() {lacuna_lazy_load("lacuna_cache/exported_kucj5i.js[1796:2579]", functionData => eval(functionData))}
                els.push(createScript('https://img1.wsimg.com/wrhs/f4c78ac3ca214ac5091e1b502d2657ec/tcc.min.js'));
                els.push(createScript('https://img1.wsimg.com/poly/v3/polyfill.min.js?features=Promise,Promise.prototype.finally,fetch,AbortController,Intl.~locale.nl-NL&rum=0&unknown=polyfill&flags=gated'));
                els.push(createScript('https://img1.wsimg.com/wrhs/803b518b9826ab70ff79d79af14faa81/vendor.min.js'));
                els.push(createScript('https://img1.wsimg.com/wrhs/7f7611758b7fd0e660bef1b30a43678d/uxcore2.min.js'));
                els.push(createScript('https://img1.wsimg.com/wrhs/4a3e8d4a329e0cbc5c9e16996cb9b3f7/heartbeat.min.js'));
                els.push(createScript('https://img1.wsimg.com/wrhs/4b3c2a88b62792953d7126f2db930a25/salesheader.min.js'));
                var scriptsParent = document.getElementsByTagName('script')[0].parentNode;
                while (el = els.shift()) scriptsParent.appendChild(el);
            });
        