
        (function(base, min, max, scaling) {
            var cacheWidth = 0;
            var timer;
            var docEl = document.documentElement;
            var resizeEvt = 'onorientationchange' in window ? 'orientationchange' : 'resize';
            var recalc = function() {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                clientWidth = Math.min(clientWidth, max);
                clientWidth = Math.max(clientWidth, min);
                if (cacheWidth !== clientWidth) {
                    clearInterval(timer);
                    cacheWidth = clientWidth;
                    docEl.style.fontSize = scaling * (clientWidth / base) + 'px';
                }
            }
            if (!document.addEventListener) return;
            window.addEventListener(resizeEvt, function() {
                timer = setInterval(recalc, 10);
            });
            recalc();
        })(375, 300, 768, 100);
    