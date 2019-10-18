
        function getDfd() {
            let yFn, nFn;
            const p = new Promise((y, n) => {});
            p.resolve = yFn;
            p.reject = nFn;
            return p;
        }
        window.lazyloader = getDfd();
        window.tracking = getDfd();
        window.impressionTracking = getDfd();
    